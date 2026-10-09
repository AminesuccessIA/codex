import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { services } from '@/lib/services';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    ...services.map((s) => s.slug),
    'cas-d-usage',
    'references',
    'solutions-microsoft',
    'partenaire-microsoft',
    'a-propos',
    'contact',
    'mentions-legales',
    'politique-de-confidentialite',
  ].map((slug) => ({
    url: `${site.url}/${slug}`,
    changeFrequency: 'monthly',
    priority: slug === '' ? 1 : 0.7,
  }));
}
