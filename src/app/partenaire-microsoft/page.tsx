import Link from 'next/link';
import { Label, Button, Arrow } from '@/components/button';
import { Ecosystem } from '@/components/ecosystem';
import { ContactBanner } from '@/components/site-footer';
import { InterventionModes } from '@/components/intervention-modes';
import { StructuredData } from '@/components/structured-data';
import { contentPageStructuredData } from '@/lib/structured-data';
import { microsoftPartner } from '@/lib/microsoft-partner';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata(
  'Partenaire Microsoft',
  'La Pépiite IT, ESN et partenaire Microsoft : conseil, intégration, consultants, projets au forfait et services managés pour Microsoft 365, Azure, data, CRM et IA.',
  '/partenaire-microsoft',
);

export default function MicrosoftPartner() {
  return (
    <main id="contenu">
      <StructuredData
        data={contentPageStructuredData(
          'Partenaire Microsoft',
          '/partenaire-microsoft',
        )}
      />
      <section className="shell inner-hero partner-hero">
        <div className="breadcrumb">
          <Link href="/">Accueil</Link>
          <span>/</span>
          <span>Partenaire Microsoft</span>
        </div>
        <div className="inner-hero-grid">
          <div>
            <Label>LA PÉPIITE IT · PARTENAIRE MICROSOFT</Label>
            <h1>
              Les solutions Microsoft.
              <br />
              <span>L’expertise pour les intégrer.</span>
            </h1>
            <p className="hero-description">
              De la collaboration à la donnée, du CRM au cloud : nous vous
              accompagnons dans les choix, la réalisation et l’exploitation. Un
              projet se construit autour de vos usages, de vos équipes et de
              votre environnement existant.
            </p>
            <div className="hero-actions">
              <Button href="/contact">Échanger sur votre projet</Button>
              <Link href="/solutions-microsoft" className="text-link">
                Explorer les solutions
                <Arrow />
              </Link>
            </div>
          </div>
          <Ecosystem compact />
        </div>
      </section>
      <section className="partner-position">
        <div className="shell">
          <p className="eyebrow">ESN. INTÉGRATEUR. PARTENAIRE MICROSOFT.</p>
          <h2>
            Un interlocuteur pour relier
            <br />
            <span>les choix et la mise en œuvre.</span>
          </h2>
          <p>
            Vous gardez une lecture claire du périmètre, des dépendances et des
            décisions. Nos interventions s’adressent aux entreprises et
            organisations en Europe et en Afrique, avec une organisation adaptée
            aux équipes et aux pays concernés.
          </p>
        </div>
      </section>
      <section className="shell section partner-commitments">
        <div className="section-heading">
          <div>
            <Label>CE QUE NOUS METTONS EN PLACE</Label>
            <h2>
              Des choix explicites.
              <br />
              <span>Une intégration suivie.</span>
            </h2>
          </div>
          <p>
            Le partenariat Microsoft s’inscrit dans notre métier d’ESN et
            d’intégrateur. La valeur du projet repose sur l’adéquation des
            solutions, la qualité de réalisation et la transmission aux équipes.
          </p>
        </div>
        <div className="principle-list">
          {[
            [
              'Choisir avec vos métiers',
              'Préciser le problème, les usages, les interfaces et les critères de réussite avant de retenir les produits.',
            ],
            [
              'Intégrer avec votre SI',
              'Relier Microsoft 365, Azure, Power Platform et Dynamics 365 aux identités, aux données et aux applications à conserver.',
            ],
            [
              'Livrer et transmettre',
              'Préparer la recette, les procédures, la prise en main et le passage en exploitation avec vos responsables.',
            ],
          ].map(([title, text], index) => (
            <article key={title}>
              <span className="mono">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <InterventionModes />
      <section className="shell section partner-resources">
        <div>
          <Label>MICROSOFT · LIENS OFFICIELS</Label>
          <h2>
            Le partenariat.
            <br />
            <span>Les ressources Microsoft.</span>
          </h2>
          <p>
            Consultez les informations officielles sur le programme partenaires
            et les documentations des solutions. Notre équipe vous aide à les
            mettre en perspective avec votre projet.
          </p>
        </div>
        <div className="partner-resource-links">
          {microsoftPartner.profileUrl && (
            <a href={microsoftPartner.profileUrl}>
              La Pépiite IT dans l’annuaire Microsoft
              <Arrow diagonal />
            </a>
          )}
          <a href={microsoftPartner.programUrl}>
            Le programme partenaires Microsoft
            <Arrow diagonal />
          </a>
          <a href="https://learn.microsoft.com/fr-fr/">
            Microsoft Learn : documentations des solutions
            <Arrow diagonal />
          </a>
          <a href="https://azure.microsoft.com/fr-fr/">
            Microsoft Azure : services et ressources
            <Arrow diagonal />
          </a>
        </div>
      </section>
      <section className="shell section faq-section">
        <div>
          <Label>AVANT DE COMMENCER</Label>
          <h2>
            Votre projet.
            <br />
            <span>Votre mode d’intervention.</span>
          </h2>
        </div>
        <div className="faq-items">
          <details>
            <summary>
              Peut-on vous confier une partie du projet ?
              <span aria-hidden="true">+</span>
            </summary>
            <p>
              Oui. Une mission peut porter sur un cadrage, une expertise, une
              intégration ou une reprise d’exploitation. Le périmètre, les
              interfaces avec vos équipes et les livrables sont définis avant
              intervention.
            </p>
          </details>
          <details>
            <summary>
              Comment mobiliser un consultant Microsoft ?
              <span aria-hidden="true">+</span>
            </summary>
            <p>
              Nous qualifions les compétences nécessaires, l’environnement, la
              durée et l’organisation de la mission. Le profil et sa
              disponibilité sont vérifiés avant proposition, avec un TJM et des
              responsabilités convenus.
            </p>
          </details>
          <details>
            <summary>
              Quelle est la première étape ?<span aria-hidden="true">+</span>
            </summary>
            <p>
              Un échange sur votre besoin, vos outils et vos contraintes. Nous
              identifions les informations à réunir, les interlocuteurs et le
              mode de cadrage adapté avant de proposer une intervention.
            </p>
          </details>
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
