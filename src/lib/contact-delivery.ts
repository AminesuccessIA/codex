export type Contact = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};
export type DeliveryConfig = {
  webhook?: string;
  webhookToken?: string;
  googleClientId?: string;
  googleClientSecret?: string;
  googleRefreshToken?: string;
  from?: string;
  to?: string;
};
const recipient = 'contact@lapepiite.com';
function safeAddress(value: string) {
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value);
}
function messageText(contact: Contact) {
  return `Nom : ${contact.name}\nEntreprise : ${contact.company || 'Non précisée'}\nE-mail : ${contact.email}\nSujet : ${contact.service || 'À définir ensemble'}\n\n${contact.message}`;
}
export async function deliverContact(
  contact: Contact,
  config: DeliveryConfig,
): Promise<200 | 502 | 503> {
  try {
    if (config.webhook) {
      let endpoint: URL;
      try {
        endpoint = new URL(config.webhook);
      } catch {
        return 503;
      }
      if (
        endpoint.protocol !== 'https:' ||
        endpoint.username ||
        endpoint.password
      )
        return 503;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(config.webhookToken
            ? { Authorization: `Bearer ${config.webhookToken}` }
            : {}),
        },
        body: JSON.stringify({
          ...contact,
          source: 'website',
          submittedAt: new Date().toISOString(),
        }),
        signal: AbortSignal.timeout(10000),
        redirect: 'error',
      });
      return response.ok ? 200 : 502;
    }
    if (
      !config.googleClientId ||
      !config.googleClientSecret ||
      !config.googleRefreshToken
    )
      return 503;
    const from = config.from || recipient;
    const to = config.to || recipient;
    if (!safeAddress(from) || !safeAddress(to)) return 503;
    if (!safeAddress(contact.email)) return 502;
    // Server-only OAuth credentials: no browser exposure and no credential logging.
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: config.googleClientId,
        client_secret: config.googleClientSecret,
        refresh_token: config.googleRefreshToken,
        grant_type: 'refresh_token',
      }),
      signal: AbortSignal.timeout(10000),
      redirect: 'error',
      cache: 'no-store',
    });
    if (!tokenResponse.ok) return 502;
    const token = await tokenResponse.json();
    if (
      typeof token.access_token !== 'string' ||
      !token.access_token ||
      /[\r\n]/.test(token.access_token)
    )
      return 502;
    const subject = Buffer.from(
      'Nouvelle demande — La Pépiite IT',
      'utf8',
    ).toString('base64');
    const mime = [
      `From: =?UTF-8?B?${Buffer.from('La Pépiite IT', 'utf8').toString('base64')}?= <${from}>`,
      `To: ${to}`,
      `Reply-To: ${contact.email}`,
      `Subject: =?UTF-8?B?${subject}?=`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8',
      'Content-Transfer-Encoding: base64',
      '',
      Buffer.from(messageText(contact), 'utf8')
        .toString('base64')
        .match(/.{1,76}/g)
        ?.join('\r\n') || '',
    ].join('\r\n');
    const response = await fetch(
      'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.access_token}`,
        },
        body: JSON.stringify({ raw: Buffer.from(mime).toString('base64url') }),
        signal: AbortSignal.timeout(10000),
        redirect: 'error',
        cache: 'no-store',
      },
    );
    if (!response.ok) return 502;
    const result = await response.json();
    return typeof result.id === 'string' && result.id ? 200 : 502;
  } catch {
    return 502;
  }
}
