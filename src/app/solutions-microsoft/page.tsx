import { ExpertiseVisual } from '@/components/expertise-visual';
import Link from 'next/link';
import { Label, Button, Arrow } from '@/components/button';
import { SolutionDirectory } from '@/components/solution-directory';
import { ContactBanner } from '@/components/site-footer';
import { StructuredData } from '@/components/structured-data';
import { collectionStructuredData } from '@/lib/structured-data';
import { services } from '@/lib/services';
import { solutionGroups } from '@/lib/solution-catalog';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata(
  'Solutions Microsoft',
  'Microsoft 365, Azure, Power BI, Fabric, Dynamics 365, Business Central, Power Apps, automatisation et sécurité : découvrez les solutions intégrées par La Pépiite IT.',
  '/solutions-microsoft',
);

export default function MicrosoftSolutions() {
  return (
    <main id="contenu">
      <StructuredData
        data={collectionStructuredData(
          'Solutions Microsoft',
          '/solutions-microsoft',
          services,
        )}
      />
      <section className="shell editorial-hero solutions-hero">
        <Label>LES SOLUTIONS MICROSOFT</Label>
        <h1>
          Partir de vos besoins.
          <br />
          <span>Relier les bonnes solutions.</span>
        </h1>
        <div className="solutions-hero-bottom">
          <p className="hero-description">
            Collaborer, piloter l’activité, automatiser un processus ou
            moderniser l’infrastructure. La Pépiite IT, ESN et partenaire
            Microsoft, relie vos usages aux produits, puis à leur intégration
            dans votre système d’information.
          </p>
          <Button href="/contact">Définir votre périmètre</Button>
        </div>
      </section>
      <ExpertiseVisual page="solutions-microsoft" fullWidth />
      <nav
        className="shell solution-jump-links"
        aria-label="Familles de solutions Microsoft"
      >
        {solutionGroups.map((group) => (
          <a href={`#${group.id}`} key={group.id}>
            {group.name}
            <Arrow />
          </a>
        ))}
      </nav>
      <section
        className="shell solution-decision"
        aria-labelledby="solution-decision-title"
      >
        <p className="eyebrow">TROUVER LE BON POINT D’ENTRÉE</p>
        <h2 id="solution-decision-title">
          Quel sujet souhaitez-vous faire avancer ?
        </h2>
        <div className="solution-decision-links">
          <Link href="/power-bi">
            Fiabiliser mes tableaux de bord
            <Arrow diagonal />
          </Link>
          <Link href="/power-automate">
            Automatiser un processus
            <Arrow diagonal />
          </Link>
          <Link href="/dynamics-365">
            Structurer mon suivi commercial
            <Arrow diagonal />
          </Link>
          <Link href="/business-central">
            Faire évoluer mon ERP
            <Arrow diagonal />
          </Link>
        </div>
      </section>
      <div className="shell">
        <SolutionDirectory />
      </div>
      <section className="shell section engagement-section">
        <div>
          <Label>UN ENVIRONNEMENT. PLUSIEURS DÉPENDANCES.</Label>
          <h2>
            Les produits se connectent.
            <br />
            <span>Le projet aussi.</span>
          </h2>
        </div>
        <div>
          <p className="large-copy">
            Licences, identités, données, interfaces et exploitation se cadrent
            ensemble. Nous définissons les responsabilités et les livrables
            avant de retenir un mode d’intervention : conseil, intégration,
            consultants au TJM, projet au forfait ou services managés.
          </p>
          <Link href="/partenaire-microsoft" className="text-link">
            Notre accompagnement Microsoft
            <Arrow diagonal />
          </Link>
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
