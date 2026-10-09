import type { Metadata } from 'next';
const canonical = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lapepiite.com',
);
if (['lapepiite.com', 'www.lapepiite.com'].includes(canonical.hostname)) {
  canonical.hostname = 'www.lapepiite.com';
  canonical.protocol = 'https:';
}
export const site = {
  name: 'La Pépiite IT',
  description:
    'ESN partenaire Microsoft : conseil, Microsoft 365, Azure, Power BI, Dynamics 365, IA et cybersécurité. Intégration, consultants et services managés.',
  url: canonical.origin,
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
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/social-card.png'],
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      type: 'website',
      locale: 'fr_FR',
      images: [
        {
          url: '/social-card.png',
          width: 1200,
          height: 630,
          alt: 'La Pépiite IT — Conseil, intégration et expertise Microsoft',
        },
      ],
    },
  };
}
