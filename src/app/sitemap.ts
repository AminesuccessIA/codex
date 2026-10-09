import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { services } from '@/lib/services';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    ...services.map((s) => s.slug),
    'realisations',
    'a-propos',
    'contact',
  ].map((slug) => ({
    url: `${site.url}/${slug}`,
    changeFrequency: 'monthly',
    priority: slug === '' ? 1 : 0.7,
  }));
}
