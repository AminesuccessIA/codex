import { ExpertiseVisual } from '@/components/expertise-visual';
import { Label } from '@/components/button';
import { ClientReferences } from '@/components/client-references';
import { ContactBanner } from '@/components/site-footer';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata(
  'Références clients',
  'Les clients de La Pépiite IT : retail, sport, restauration, ressources humaines, formation et entrepreneuriat. Une ESN et un intégrateur Microsoft à vos côtés.',
  '/references',
);

export default function References() {
  return (
    <main id="contenu">
      <section className="shell editorial-hero references-hero">
        <Label>RÉFÉRENCES CLIENTS</Label>
        <h1>
          Nos clients.
          <br />
          <span>
            Leurs secteurs.
            <br />
            Notre engagement.
          </span>
        </h1>
        <p className="hero-description">
          Entreprises, écoles et organismes de formation : découvrez les
          organisations qui font confiance à La Pépiite IT, regroupées par
          secteur d’activité.
        </p>
      </section>
      <ClientReferences />
      <section className="shell section">
        <ExpertiseVisual
          kind="collaboration"
          inline
          sizes="(max-width: 1300px) 90vw, 1224px"
        />
      </section>
      <ContactBanner />
    </main>
  );
}
