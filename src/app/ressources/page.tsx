import Link from 'next/link';
import { Label, Arrow } from '@/components/button';
import { guides } from '@/lib/guides';
import { pageMetadata } from '@/lib/site';
import { ContactBanner } from '@/components/site-footer';
export const metadata = pageMetadata(
  'Guides Microsoft pour préparer vos projets',
  'Guides pratiques Power BI, Copilot, ERP/CRM et migration Azure : questions, checklist et sources Microsoft pour cadrer votre prochain projet.',
  '/ressources',
);
export default function Resources() {
  return (
    <main id="contenu">
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
      <div className="shell guide-list">
        {guides.map((guide) => (
          <article key={guide.slug}>
            <p className="eyebrow">
              {guide.category} · {guide.readingTime}
            </p>
            <h2>
              <Link href={'/ressources/' + guide.slug}>
                {guide.title}
                <Arrow diagonal />
              </Link>
            </h2>
            <p>{guide.description}</p>
            <Link className="text-link" href={'/ressources/' + guide.slug}>
              Lire le guide <Arrow />
            </Link>
          </article>
        ))}
      </div>
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
