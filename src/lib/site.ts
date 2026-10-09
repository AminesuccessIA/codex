import type { Metadata } from 'next';
export const site = {
  name: 'La Pépiite IT',
  description:
    'ESN et intégrateur Microsoft : conseil, Microsoft 365, Azure, licences, Copilot, Power Platform, cybersécurité et services managés.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://lapepiite.com',
};
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      type: 'website',
      locale: 'fr_FR',
    },
  };
}
