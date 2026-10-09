import { Label, Button, Arrow } from '@/components/button';
import { ContactBanner } from '@/components/site-footer';
import { pageMetadata } from '@/lib/site';
import Link from 'next/link';
export const metadata = pageMetadata(
  'Réalisations & projets',
  'Découvrez les types de projets Microsoft que vous pouvez cadrer avec La Pépiite IT : collaboration, cloud, automatisation et sécurité.',
  '/realisations',
);
export default function Projects() {
  return (
    <main id="contenu">
      <section className="shell editorial-hero">
        <Label>RÉALISATIONS & PROJETS</Label>
        <h1>
          Des contextes différents.
          <br />
          <span>
            La même exigence
            <br />
            de mise en œuvre.
          </span>
        </h1>
        <p className="hero-description">
          Voici les types de projets que nous pouvons cadrer ensemble. Les
          références clients seront publiées avec leur accord ; les scénarios
          ci-dessous ne sont pas des missions réalisées.
        </p>
      </section>
      <section className="shell project-list">
        {[
          {
            n: '01',
            category: 'MODERN WORK',
            title: 'Structurer la collaboration dans Microsoft 365',
            context:
              'Des espaces et des documents dispersés, des droits à clarifier et des pratiques de partage à harmoniser.',
            approach:
              'Cartographier les usages, définir la gouvernance Teams et SharePoint, organiser les migrations et accompagner la prise en main.',
            slug: 'microsoft-365',
            tags: ['Teams', 'SharePoint', 'Gouvernance'],
          },
          {
            n: '02',
            category: 'CLOUD & INFRASTRUCTURE',
            title: 'Préparer une trajectoire vers Azure',
            context:
              'Des applications existantes, des dépendances à identifier et une exploitation à organiser avant la migration.',
            approach:
              'Évaluer les charges, construire le socle réseau et identités, définir les vagues de migration et les procédures de retour arrière.',
            slug: 'azure-cloud',
            tags: ['Azure', 'Architecture', 'Migration'],
          },
          {
            n: '03',
            category: 'APPLICATIONS MÉTIERS',
            title: 'Remplacer la ressaisie par un circuit de validation',
            context:
              'Un processus métier réparti entre fichiers, e-mails et validations manuelles, avec peu de visibilité sur son état.',
            approach:
              'Décrire le processus et ses exceptions, créer l’application Power Apps et les flux, définir les rôles et les critères de recette.',
            slug: 'power-platform',
            tags: ['Power Apps', 'Power Automate', 'Dataverse'],
          },
        ].map((p) => (
          <article className="project-row" key={p.n}>
            <div className="project-number">
              <span className="mono">{p.n} /</span>
              <span className="eyebrow">SCÉNARIO DE PROJET</span>
            </div>
            <div>
              <p className="eyebrow">{p.category}</p>
              <h2>{p.title}</h2>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <Link href={'/' + p.slug} className="text-link">
                Voir l’expertise associée <Arrow diagonal />
              </Link>
            </div>
            <div className="project-context">
              <h3>Le contexte</h3>
              <p>{p.context}</p>
              <h3>La démarche envisagée</h3>
              <p>{p.approach}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="shell section engagement-section">
        <div>
          <Label>UN PROJET SIMILAIRE ?</Label>
          <h2>
            Partons de votre cas.
            <br />
            <span>Pas d’une solution type.</span>
          </h2>
        </div>
        <div>
          <p className="large-copy">
            Le périmètre, les livrables et les critères de réussite doivent être
            définis pour votre environnement.
          </p>
          <Button href="/contact">Présenter votre besoin</Button>
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
