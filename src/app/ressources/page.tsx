import Link from 'next/link';
import { Label, Arrow } from '@/components/button';
import { guides } from '@/lib/guides';
import { editorialClusters, findEditorialCluster } from '@/lib/editorial-plan';
import { pageMetadata, site } from '@/lib/site';
import { StructuredData } from '@/components/structured-data';
import { organizationId } from '@/lib/structured-data';
import { ContactBanner } from '@/components/site-footer';
export const metadata = pageMetadata(
  'Guides Microsoft pour préparer vos projets',
  'Guides Microsoft : Power BI, Copilot, Azure, automatisation, cybersécurité et modes d’intervention. Questions, méthodes et sources pour cadrer vos projets.',
  '/ressources',
);
export default function Resources() {
  const populatedClusters = editorialClusters.filter((cluster) =>
    guides.some(
      (guide) => findEditorialCluster(guide.service)?.id === cluster.id,
    ),
  );
  return (
    <main id="contenu">
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': site.url + '/ressources',
          name: 'Guides Microsoft pour préparer vos projets',
          url: site.url + '/ressources',
          inLanguage: 'fr-FR',
          publisher: { '@id': organizationId },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: guides.map((guide, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: guide.title,
              url: site.url + '/ressources/' + guide.slug,
            })),
          },
        }}
      />
      <section className="shell editorial-hero">
        <Label>RESSOURCES & GUIDES</Label>
        <h1>
          Comprendre le sujet.
          <br />
          <span>Préparer les bonnes questions.</span>
        </h1>
        <p className="hero-description">
          Des repères concrets pour qualifier vos projets Microsoft. Chaque
          guide relie les décisions à prendre, les informations à réunir et les
          sources officielles utiles.
        </p>
      </section>
      <nav
        className="shell resource-topics"
        aria-label="Explorer les guides par sujet"
      >
        {populatedClusters.map((cluster) => (
          <a key={cluster.id} href={'#' + cluster.id}>
            {cluster.title}
          </a>
        ))}
      </nav>
      {populatedClusters.map((cluster) => (
        <section
          key={cluster.id}
          id={cluster.id}
          className="shell resource-cluster"
        >
          <div className="resource-cluster-heading">
            <h2>{cluster.title}</h2>
            <p>{cluster.description}</p>
          </div>
          <div className="guide-list">
            {guides
              .filter(
                (guide) =>
                  findEditorialCluster(guide.service)?.id === cluster.id,
              )
              .map((guide) => (
                <article key={guide.slug}>
                  <p className="eyebrow">
                    {guide.category} · {guide.readingTime}
                  </p>
                  <h3>
                    <Link href={'/ressources/' + guide.slug}>
                      {guide.title}
                      <Arrow diagonal />
                    </Link>
                  </h3>
                  <p>{guide.description}</p>
                  <Link
                    className="text-link"
                    href={'/ressources/' + guide.slug}
                  >
                    Lire le guide <Arrow />
                  </Link>
                </article>
              ))}
          </div>
        </section>
      ))}
      <section className="shell section engagement-section">
        <div>
          <Label>À UTILISER AVEC VOS ÉQUIPES</Label>
          <h2>
            La checklist
            <br />
            <span>de préparation du projet.</span>
          </h2>
        </div>
        <div>
          <p className="large-copy">
            Besoin, données, accès, interfaces, licences et critères de recette
            : les points à réunir avant le premier échange.
          </p>
          <a
            className="button button-primary"
            href="/downloads/checklist-projet-microsoft.pdf"
            download
          >
            Télécharger la checklist PDF <Arrow diagonal />
          </a>
          <p className="download-note">
            Accès libre · Aucune adresse e-mail demandée.
          </p>
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
