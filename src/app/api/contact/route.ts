import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/contact';
import { deliverContact } from '@/lib/contact-delivery';
import { site } from '@/lib/site';
export const runtime = 'nodejs';
export async function POST(request: Request) {
  if (!request.headers.get('content-type')?.includes('application/json'))
    return NextResponse.json(
      { error: 'Unsupported content type' },
      { status: 415 },
    );
  const origin = request.headers.get('origin');
  const requestOrigin = new URL(request.url);
  requestOrigin.host = request.headers.get('host') || requestOrigin.host;
  if (origin && origin !== requestOrigin.origin && origin !== site.url)
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  let payload: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader)
      return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
    const chunks: Uint8Array[] = [];
    let length = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > 20000) {
        await reader.cancel();
        return NextResponse.json(
          { error: 'Payload too large' },
          { status: 413 },
        );
      }
      chunks.push(value);
    }
    payload = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success)
    return NextResponse.json(
      { error: 'Invalid contact fields' },
      { status: 400 },
    );
  const { website, ...contact } = parsed.data;
  void website;
  const status = await deliverContact(contact, {
    webhook: process.env.CONTACT_WEBHOOK_URL,
    webhookToken: process.env.CONTACT_WEBHOOK_TOKEN,
    googleClientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    googleRefreshToken: process.env.GOOGLE_OAUTH_REFRESH_TOKEN,
    from: process.env.CONTACT_FROM_EMAIL,
    to: process.env.CONTACT_TO_EMAIL,
  });
  return NextResponse.json(
    status === 200
      ? { ok: true }
      : {
          error:
            status === 503
              ? 'Contact service unavailable'
              : 'Contact delivery failed',
        },
    { status, headers: { 'Cache-Control': 'no-store' } },
  );
}
