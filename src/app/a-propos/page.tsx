import { Label, Button } from '@/components/button';
import { ContactBanner } from '@/components/site-footer';
import { pageMetadata } from '@/lib/site';
import { InterventionModes } from '@/components/intervention-modes';
import Link from 'next/link';
import { Arrow } from '@/components/button';
import { ExpertiseVisual } from '@/components/expertise-visual';
export const metadata = pageMetadata(
  'À propos',
  'La Pépiite IT, ESN et intégrateur Microsoft : conseil, consultants au TJM, équipes projet au forfait et services managés pour les entreprises en Europe et Afrique.',
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
          La Pépiite IT est une ESN, un intégrateur et un partenaire Microsoft.
          Notre rôle : relier les besoins de votre organisation aux choix
          techniques, puis à leur mise en œuvre.
        </p>
        <Link
          href="/partenaire-microsoft"
          className="text-link about-partner-link"
        >
          Notre accompagnement Microsoft <Arrow diagonal />
        </Link>
      </section>
      <ExpertiseVisual page="a-propos" fullWidth />
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
              'Définir les objectifs et les conditions de réussite.',
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
            : les technologies se choisissent à partir du besoin. Nous les
            relions à vos usages et à vos priorités.
          </p>
          <Button href="/#expertises">Explorer nos expertises</Button>
          <ExpertiseVisual page="a-propos-transmission" inline />
        </div>
      </section>
      <section className="shell section engagement-section">
        <div>
          <Label>QUALIFIER AVANT DE S’ENGAGER</Label>
          <h2>
            Un besoin d’entreprise.
            <br />
            <span>Une prochaine étape précise.</span>
          </h2>
        </div>
        <div>
          <p>
            DSI, responsables informatiques et interlocuteurs métiers peuvent
            présenter leur besoin, le périmètre technique et les contraintes du
            projet. Le premier échange permet de vérifier l’adéquation de
            l’expertise et de définir le livrable attendu.
          </p>
          <p>
            Votre organisation, vos accès et vos échéances permettent de
            préciser les responsabilités. L’intervention sur site et les
            disponibilités sont confirmées avant engagement.
          </p>
          <Button href="/contact">Qualifier votre besoin</Button>
        </div>
      </section>
      <InterventionModes illustrated visualPage="a-propos-expertises" />
      <section
        id="expertise-technique"
        className="shell section engagement-section"
      >
        <div>
          <Label>EXPERTISE TECHNIQUE</Label>
          <h2>
            Un besoin ciblé.
            <br />
            <span>Les compétences adaptées.</span>
          </h2>
        </div>
        <div>
          <p>
            Les domaines de profils techniques mobilisables couvrent l’IA, la
            cybersécurité, le cloud, les datacenters et les réseaux. Présentez
            la technologie, le niveau d’expertise recherché et les contraintes
            de votre environnement pour qualifier votre besoin de renfort ou de
            mise à disposition de consultants.
          </p>
          <p>
            Les compétences et les conditions d’accès sont examinées avant la
            mission. Nous précisons le rôle du consultant et les livrables
            attendus pour votre équipe.
          </p>
          <Button href="/contact">Échanger sur un besoin d’expertise</Button>
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
