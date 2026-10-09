// A public listing can be added once supplied and verified by the company.
const configuredProfile = process.env.NEXT_PUBLIC_MICROSOFT_PARTNER_PROFILE_URL;
function verifiedMicrosoftHost(value?: string) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    const hosts = [
      'partner.microsoft.com',
      'appsource.microsoft.com',
      'marketplace.microsoft.com',
    ];
    return url.protocol === 'https:' &&
      hosts.includes(url.hostname) &&
      !url.username &&
      !url.password
      ? url.href
      : undefined;
  } catch {
    return undefined;
  }
}
export const microsoftPartner = {
  profileUrl: verifiedMicrosoftHost(configuredProfile),
  programUrl:
    'https://learn.microsoft.com/fr-fr/partner-center/membership/mpn-overview',
};
