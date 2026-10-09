import { Label, Button } from '@/components/button';
import { ContactBanner } from '@/components/site-footer';
import { pageMetadata } from '@/lib/site';
export const metadata = pageMetadata(
  'À propos',
  'La Pépiite IT, ESN et intégrateur Microsoft. Découvrez notre approche du conseil, de l’intégration et de la transmission technique.',
  '/a-propos',
);
export default function About() {
  return (
    <main id="contenu">
      <section className="shell editorial-hero">
        <Label>À PROPOS DE LA PÉPIITE IT</Label>
        <h1>
          L’expertise n’a de valeur
          <br />
          que lorsqu’elle
          <br />
          <span>fait avancer votre projet.</span>
        </h1>
        <p className="hero-description">
          La Pépiite IT est une ESN et un intégrateur Microsoft. Notre rôle :
          relier les besoins de votre organisation aux choix techniques, puis à
          leur mise en œuvre.
        </p>
      </section>
      <section className="about-manifesto">
        <div className="shell section">
          <span className="mono">NOTRE POSITIONNEMENT /</span>
          <p>
            Le conseil pour décider.
            <br />
            L’intégration pour concrétiser.
            <br />
            <span>L’expertise pour transmettre.</span>
          </p>
        </div>
      </section>
      <section className="shell section">
        <div className="section-heading">
          <div>
            <Label>UNE FAÇON DE TRAVAILLER</Label>
            <h2>
              La précision technique.
              <br />
              <span>La clarté dans la relation.</span>
            </h2>
          </div>
          <p>
            Vos équipes doivent pouvoir reprendre les décisions, comprendre les
            configurations et faire vivre les solutions. La documentation et la
            transmission font partie du projet.
          </p>
        </div>
        <div className="principle-list">
          {[
            [
              'Dire ce qui est possible. Et ce qui ne l’est pas.',
              'Les contraintes, les dépendances et les limites sont posées avant de définir la solution.',
            ],
            [
              'Intégrer plutôt qu’empiler.',
              'Votre tenant, vos identités, vos données et vos processus forment un ensemble. Chaque nouveau composant doit y trouver sa place.',
            ],
            [
              'Préparer la suite dès le départ.',
              'Recette, adoption, exploitation et transfert de compétences sont prévus dans le périmètre de la mission.',
            ],
          ].map(([t, d], i) => (
            <article key={t}>
              <span className="mono">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="shell section engagement-section">
        <div>
          <Label>NOTRE TERRAIN TECHNIQUE</Label>
          <h2>
            L’écosystème Microsoft.
            <br />
            <span>Votre contexte en premier.</span>
          </h2>
        </div>
        <div>
          <p className="large-copy">
            Microsoft 365, Azure, Copilot, Power Platform, identités et sécurité
            : les technologies se choisissent à partir du besoin. Elles ne le
            définissent pas.
          </p>
          <Button href="/#expertises">Explorer nos expertises</Button>
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
