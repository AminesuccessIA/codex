import { site } from './site';
import type { Service } from './services';
export const organizationId = `${site.url}/#organization`;
export function websiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: site.name,
        legalName: 'LA PEPIITE',
        url: site.url,
        description: site.description,
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        name: site.name,
        url: site.url,
        inLanguage: 'fr-FR',
        publisher: { '@id': organizationId },
      },
    ],
  };
}
export function serviceStructuredData(service: Service) {
  const url = `${site.url}/${service.slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.name,
        serviceType: service.name,
        description: service.description,
        url,
        provider: { '@id': organizationId },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: site.url },
          { '@type': 'ListItem', position: 2, name: service.name, item: url },
        ],
      },
    ],
  };
}

export function contentPageStructuredData(name: string, path: string) {
  const url = `${site.url}${path}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#page`,
        name,
        url,
        inLanguage: 'fr-FR',
        about: { '@id': organizationId },
        isPartOf: { '@id': `${site.url}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: site.url },
          { '@type': 'ListItem', position: 2, name, item: url },
        ],
      },
    ],
  };
}

export function collectionStructuredData(
  name: string,
  path: string,
  items: Service[],
) {
  const data = contentPageStructuredData(name, path);
  return {
    ...data,
    '@graph': [
      ...data['@graph'],
      {
        '@type': 'ItemList',
        itemListElement: items.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: service.name,
          url: `${site.url}/${service.slug}`,
        })),
      },
    ],
  };
}
