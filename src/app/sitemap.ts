import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { services } from '@/lib/services';
import { guides } from '@/lib/guides';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    ...services.map((s) => s.slug),
    'cas-d-usage',
    'references',
    'solutions-microsoft',
    'partenaire-microsoft',
    'diagnostic',
    'ressources',
    ...guides.map((guide) => 'ressources/' + guide.slug),
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
