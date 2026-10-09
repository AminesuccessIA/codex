import { test, afterEach, mock } from 'node:test';
import assert from 'node:assert/strict';
import { deliverContact } from '../src/lib/contact-delivery.ts';
const contact = {
  name: 'Utilisateur test',
  email: 'test@example.com',
  company: 'Test',
  service: 'azure-cloud',
  message: 'Demande avec accents : intégration.\nBcc: attacker@example.com',
  consent: true,
};
const config = {
  googleClientId: 'test-client',
  googleClientSecret: 'test-secret',
  googleRefreshToken: 'test-refresh',
};
afterEach(() => mock.restoreAll());
test('missing or incomplete OAuth config never sends or confirms delivery', async () => {
  const fetch = mock.method(globalThis, 'fetch', () => {
    throw new Error('Unexpected network');
  });
  assert.equal(await deliverContact(contact, {}), 503);
  assert.equal(await deliverContact(contact, { googleClientId: 'test' }), 503);
  assert.equal(fetch.mock.callCount(), 0);
});
test('Gmail OAuth flow preserves recipient, reply-to, UTF-8 and body/header separation', async () => {
  const fetch = mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(options.redirect, 'error');
    assert.equal(options.cache, 'no-store');
    if (url === 'https://oauth2.googleapis.com/token') {
      const body = JSON.parse(options.body);
      assert.equal(body.grant_type, 'refresh_token');
      assert.equal(body.refresh_token, config.googleRefreshToken);
      return Response.json({ access_token: 'test-access' });
    }
    assert.equal(
      url,
      'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
    );
    assert.equal(options.headers.Authorization, 'Bearer test-access');
    const mime = Buffer.from(
      JSON.parse(options.body).raw,
      'base64url',
    ).toString('utf8');
    const [headers, body] = mime.split('\r\n\r\n');
    assert.match(headers, /To: contact@lapepiite.com\r\n/);
    assert.match(headers, /From: =\?UTF-8\?B\?.+\?= <contact@lapepiite.com>/);
    assert.equal(
      Buffer.from(
        headers.match(/From: =\?UTF-8\?B\?(.+)\?=/)[1],
        'base64',
      ).toString('utf8'),
      'La Pépiite IT',
    );
    assert.match(headers, /Reply-To: test@example.com/);
    assert.doesNotMatch(headers, /Bcc:/);
    assert.match(
      Buffer.from(body.replaceAll('\r\n', ''), 'base64').toString('utf8'),
      /intégration/,
    );
    return Response.json({ id: 'test-message' });
  });
  assert.equal(await deliverContact(contact, config), 200);
  assert.equal(fetch.mock.callCount(), 2);
});
test('failed token refresh never calls Gmail send', async () => {
  const fetch = mock.method(
    globalThis,
    'fetch',
    async () => new Response('', { status: 400 }),
  );
  assert.equal(await deliverContact(contact, config), 502);
  assert.equal(fetch.mock.callCount(), 1);
});
test('invalid token response never calls Gmail send', async () => {
  const fetch = mock.method(globalThis, 'fetch', async () => Response.json({}));
  assert.equal(await deliverContact(contact, config), 502);
  assert.equal(fetch.mock.callCount(), 1);
});
test('Gmail permission error or missing receipt is never reported as success', async () => {
  mock.method(globalThis, 'fetch', async (url) =>
    url.includes('/token')
      ? Response.json({ access_token: 'test' })
      : new Response('', { status: 403 }),
  );
  assert.equal(await deliverContact(contact, config), 502);
  mock.restoreAll();
  mock.method(globalThis, 'fetch', async (url) =>
    url.includes('/token')
      ? Response.json({ access_token: 'test' })
      : Response.json({}),
  );
  assert.equal(await deliverContact(contact, config), 502);
});
test('network failure preserves failure status', async () => {
  mock.method(globalThis, 'fetch', async () => {
    throw new Error('Network failure');
  });
  assert.equal(await deliverContact(contact, config), 502);
});
test('header injection is rejected before any request', async () => {
  const fetch = mock.method(globalThis, 'fetch', () => {
    throw new Error('Unexpected network');
  });
  assert.equal(
    await deliverContact(contact, {
      ...config,
      from: 'contact@lapepiite.com\r\nBcc: x@example.com',
    }),
    503,
  );
  assert.equal(
    await deliverContact(
      { ...contact, email: 'test@example.com\r\nBcc: x@example.com' },
      config,
    ),
    502,
  );
  assert.equal(fetch.mock.callCount(), 0);
});
test('optional CRM transport still refuses insecure endpoints', async () => {
  const fetch = mock.method(globalThis, 'fetch', () => {
    throw new Error('Unexpected network');
  });
  assert.equal(
    await deliverContact(contact, { webhook: 'http://example.com' }),
    503,
  );
  assert.equal(fetch.mock.callCount(), 0);
});
test('optional HTTPS CRM transport is independent of OAuth', async () => {
  mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url.hostname, 'example.com');
    assert.equal(JSON.parse(options.body).email, contact.email);
    return new Response(null, { status: 204 });
  });
  assert.equal(
    await deliverContact(contact, { webhook: 'https://example.com/contact' }),
    200,
  );
});
