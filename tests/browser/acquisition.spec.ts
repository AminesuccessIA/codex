import { test, expect, type Page } from '@playwright/test';
import { guides } from '../../src/lib/guides';
async function qualify(page: Page) {
  await page
    .locator('#project-context')
    .fill('Relier notre ERP aux indicateurs de pilotage.');
  await page.getByRole('button', { name: 'Continuer' }).click();
  await page.locator('#project-mode').selectOption('Équipe projet au forfait');
  await page.getByRole('button', { name: 'Continuer' }).click();
  await page.locator('#project-name').fill('Test Qualification');
  await page.locator('#project-company').fill('Organisation test');
  await page.locator('#project-email').fill('test@example.com');
}
test('qualification preserves context and prepares a real email without claiming delivery', async ({
  page,
}) => {
  let calls = 0;
  page.on('request', (r) => {
    if (r.url().includes('/api/contact')) calls++;
  });
  await page.goto('/diagnostic?service=power-bi&source=/power-bi');
  await expect(page.locator('#project-website')).not.toBeVisible();
  await qualify(page);
  await page.getByRole('button', { name: 'Retour', exact: true }).click();
  await expect(page.locator('#project-mode')).toHaveValue(
    'Équipe projet au forfait',
  );
  await page.getByRole('button', { name: 'Continuer' }).click();
  await expect(page.locator('#project-email')).toHaveValue('test@example.com');
  await page.getByRole('button', { name: 'Préparer mon e-mail' }).click();
  await expect(page.getByRole('status')).toContainText('Votre e-mail est prêt');
  const href = await page
    .getByRole('link', { name: 'Ouvrir l’e-mail prêt à envoyer' })
    .getAttribute('href');
  expect(href).toMatch(/^mailto:contact@lapepiite.com/);
  const body = new URL(href!).searchParams.get('body');
  expect(body).toContain('Équipe projet au forfait');
  expect(body).toContain('Page d’origine : /power-bi');
  expect(body).toContain('test@example.com');
  expect(calls).toBe(0);
  await expect(page.getByRole('status')).not.toContainText('transmise');
});
test('enabled delivery handles failures honestly and confirms only a successful API response', async ({
  page,
}) => {
  await page.goto('http://127.0.0.1:3101/diagnostic?service=power-bi');
  await qualify(page);
  await page.route('**/api/contact', (route) =>
    route.fulfill({
      status: 503,
      contentType: 'application/json',
      body: JSON.stringify({ ok: false }),
    }),
  );
  await page.getByRole('button', { name: 'Envoyer ma demande' }).click();
  await expect(page.getByRole('status')).toContainText('n’a pas abouti');
  await expect(page.locator('#project-email')).toHaveValue('test@example.com');
  await page.unroute('**/api/contact');
  await page.route('**/api/contact', async (route) => {
    expect(route.request().postDataJSON().message).toContain(
      'Équipe projet au forfait',
    );
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true }),
    });
  });
  await page.getByRole('button', { name: 'Envoyer ma demande' }).click();
  await expect(page.getByRole('status')).toContainText('bien été transmise');
  await expect(
    page.getByRole('button', { name: 'Envoyer ma demande' }),
  ).toBeDisabled();
});
test('guides have article metadata, sources and qualified conversion links; discovery and PDF resolve', async ({
  page,
  request,
}) => {
  for (const guide of guides) {
    await page.goto('/ressources/' + guide.slug);
    const graphs = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((els) =>
        els.flatMap((e) => JSON.parse(e.textContent!)['@graph'] || []),
      );
    expect(
      graphs.some(
        (g) => g['@type'] === 'Article' && g.headline === guide.title,
      ),
    ).toBe(true);
    await expect(
      page.locator(`a[href^="/diagnostic?service=${guide.service}"]`),
    ).toHaveCount(1);
    for (const source of guide.sources)
      await expect(page.locator(`a[href="${source.url}"]`)).toHaveCount(1);
  }
  const file = await request.get('/downloads/checklist-projet-microsoft.pdf');
  expect(file.status()).toBe(200);
  expect(file.headers()['x-robots-tag']).toBe('noindex');
  expect((await file.body()).subarray(0, 5).toString()).toBe('%PDF-');
  const discovery = await request.get('/llms.txt');
  expect(discovery.headers()['content-type']).toContain('text/plain');
  const discoveryText = await discovery.text();
  expect(discoveryText).toContain('/ressources/preparer-projet-power-bi');
  expect(discoveryText.split('\n').length).toBeGreaterThan(20);
});
