import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Label, Button, Arrow } from '@/components/button';
import { StructuredData } from '@/components/structured-data';
import { findGuide, guides, guidePublicationDate } from '@/lib/guides';
import { pageMetadata, site } from '@/lib/site';
import { organizationId } from '@/lib/structured-data';
export const dynamicParams = false;
export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const guide = findGuide((await params).slug);
  if (!guide) notFound();
  const metadata = pageMetadata(
    guide.title,
    guide.description,
    '/ressources/' + guide.slug,
  );
  return {
    ...metadata,
    authors: [{ name: site.name, url: site.url + '/a-propos' }],
    publisher: site.name,
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: guidePublicationDate,
      modifiedTime: guidePublicationDate,
      authors: [site.url + '/a-propos'],
      section: guide.category,
    },
  };
}
export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const guide = findGuide((await params).slug);
  if (!guide) notFound();
  const path = '/ressources/' + guide.slug;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': site.url + path + '#article',
        headline: guide.title,
        description: guide.description,
        datePublished: guidePublicationDate,
        dateModified: guidePublicationDate,
        author: { '@id': organizationId },
        publisher: { '@id': organizationId },
        mainEntityOfPage: site.url + path,
        inLanguage: 'fr-FR',
        image: site.url + '/social-card.png',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: site.url },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Ressources',
            item: site.url + '/ressources',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: site.url + path,
          },
        ],
      },
    ],
  };
  return (
    <main id="contenu">
      <StructuredData data={data} />
      <article className="shell guide-article">
        <header>
          <div className="breadcrumb">
            <Link href="/ressources">Ressources</Link>
            <span>/</span>
            <span>{guide.category}</span>
          </div>
          <Label>{guide.category}</Label>
          <h1>{guide.title}</h1>
          <p className="guide-byline">
            La Pépiite IT · Publié le{' '}
            <time dateTime={guidePublicationDate}>9 octobre 2026</time> ·{' '}
            {guide.readingTime}
          </p>
          <p className="guide-answer">{guide.answer}</p>
        </header>
        <nav className="guide-toc" aria-label="Sommaire du guide">
          {guide.sections.map((section, i) => (
            <a href={`#section-${i + 1}`} key={section.title}>
              {section.title}
            </a>
          ))}
        </nav>
        {guide.comparison && (
          <div
            className="guide-table"
            tabIndex={0}
            role="region"
            aria-label="Comparaison ERP et CRM"
          >
            <table>
              <caption>ERP et CRM : des périmètres complémentaires</caption>
              <thead>
                <tr>
                  {guide.comparison.headers.map((header) => (
                    <th key={header} scope="col">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {guide.comparison.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((value, index) =>
                      index === 0 ? (
                        <th key={value} scope="row">
                          {value}
                        </th>
                      ) : (
                        <td key={value}>{value}</td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {guide.sections.map((section, i) => (
          <section id={`section-${i + 1}`} key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            {section.checklist && (
              <ul>
                {section.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <section className="guide-questions">
          <h2>Questions de cadrage</h2>
          {guide.questions.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </section>
        <section className="guide-sources">
          <h2>Sources et documentation Microsoft</h2>
          <ul>
            {guide.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url}>
                  {source.label} <Arrow diagonal />
                </a>
              </li>
            ))}
          </ul>
          <p>
            Ces repères aident au cadrage. Les fonctionnalités, licences et
            conditions applicables sont vérifiées pour votre périmètre avant la
            proposition.
          </p>
        </section>
        <aside className="guide-conversion">
          <Label>PASSER AU PROJET</Label>
          <h2>
            Appliquons ces questions
            <br />
            <span>à votre environnement.</span>
          </h2>
          <Button
            href={`/diagnostic?service=${guide.service}&source=${encodeURIComponent(path)}`}
          >
            Cadrer mon projet
          </Button>
          <Link className="text-link" href={'/' + guide.service}>
            Voir l’accompagnement associé <Arrow />
          </Link>
        </aside>
      </article>
    </main>
  );
}
