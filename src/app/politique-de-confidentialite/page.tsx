import Link from 'next/link';
import { LegalPage } from '@/components/legal-page';
import { pageMetadata } from '@/lib/site';
export const metadata = pageMetadata(
  'Politique de confidentialité',
  'Comment La Pépiite IT traite les demandes professionnelles : données, finalités, prestataires, conservation et exercice de vos droits.',
  '/politique-de-confidentialite',
);
export default function Privacy() {
  return (
    <LegalPage title="Politique de confidentialité">
      <section>
        <h2>Responsable du traitement</h2>
        <p>
          LA PEPIITE, exerçant sous le nom commercial La Pépiite IT, 32
          boulevard du Port, 95000 Cergy, France, est responsable du traitement
          des demandes adressées à son équipe.
        </p>
        <p>
          Contact :{' '}
          <a href="mailto:contact@lapepiite.com">contact@lapepiite.com</a>. Les
          coordonnées de l’éditeur figurent dans les{' '}
          <Link href="/mentions-legales">mentions légales</Link>.
        </p>
      </section>
      <section>
        <h2>Données traitées</h2>
        <p>
          Pour répondre à votre demande, nous traitons les informations que vous
          communiquez : nom, adresse e-mail, entreprise, sujet et contenu du
          message. Le nom, l’e-mail et le message permettent de comprendre votre
          besoin et de vous répondre ; l’entreprise et le sujet sont
          facultatifs.
        </p>
        <p>
          L’hébergeur traite les données techniques nécessaires au
          fonctionnement et à la sécurité du site, notamment l’adresse IP, la
          date des requêtes et les journaux d’exploitation.
        </p>
      </section>
      <section>
        <h2>Finalités et base juridique</h2>
        <p>
          Les données servent à qualifier votre besoin professionnel, préparer
          une réponse et organiser les échanges associés. Ce traitement repose
          sur notre intérêt légitime à répondre aux sollicitations B2B et à
          gérer la relation avec les interlocuteurs professionnels (article 6,
          paragraphe 1, point f du RGPD).
        </p>
        <p>
          Lorsqu’une personne sollicite des mesures précontractuelles pour un
          contrat auquel elle sera elle-même partie, leur traitement repose sur
          l’article 6, paragraphe 1, point b du RGPD. Une éventuelle
          communication commerciale distincte fait l’objet d’un traitement et
          d’une information adaptés à sa finalité.
        </p>
      </section>
      <section>
        <h2>Destinataires et prestataires</h2>
        <p>
          Les demandes sont accessibles aux personnes habilitées de La Pépiite
          IT et adressées à{' '}
          <a href="mailto:contact@lapepiite.com">contact@lapepiite.com</a>. Nous
          utilisons Google Workspace pour la messagerie et Vercel Inc. pour
          l’hébergement du site. Ces prestataires traitent les données
          nécessaires à leurs services selon les conditions contractuelles
          applicables.
        </p>
        <p>
          Pour leurs opérations internationales, les prestataires peuvent
          traiter des données en dehors de l’Espace économique européen. Les
          garanties contractuelles prévues pour ces traitements, notamment les
          clauses contractuelles types lorsqu’elles s’appliquent, sont décrites
          dans les{' '}
          <a href="https://workspace.google.com/terms/dpa_terms.html">
            conditions de traitement des données Google Workspace
          </a>{' '}
          et l’
          <a href="https://vercel.com/legal/dpa">
            accord de traitement des données Vercel
          </a>
          . Vous pouvez nous contacter pour obtenir des informations
          complémentaires sur les garanties applicables à votre demande.
        </p>
      </section>
      <section>
        <h2>Durée de conservation</h2>
        <p>
          Les demandes qui ne donnent pas lieu à un contrat sont conservées
          pendant 12 mois à compter du dernier échange, puis les messages et
          pièces associés sont supprimés. Lorsqu’un contrat est conclu, les
          données nécessaires à son exécution et aux obligations légales
          relèvent de durées distinctes, précisées dans la documentation
          contractuelle.
        </p>
      </section>
      <section>
        <h2>Vos droits</h2>
        <p>
          Dans les conditions prévues par le RGPD, vous pouvez demander l’accès,
          la rectification, l’effacement ou la limitation du traitement de vos
          données. Vous disposez également d’un droit d’opposition lorsque le
          traitement repose sur l’intérêt légitime. La portabilité s’applique
          lorsque ses conditions légales sont réunies.
        </p>
        <p>
          Adressez votre demande à{' '}
          <a href="mailto:contact@lapepiite.com">contact@lapepiite.com</a>. Une
          vérification proportionnée de votre identité peut être nécessaire.
          Vous pouvez aussi déposer une réclamation auprès de la{' '}
          <a href="https://www.cnil.fr/fr/plaintes">CNIL</a>.
        </p>
      </section>
      <section>
        <h2>Fonctionnement et sécurité</h2>
        <p>
          Le site utilise HTTPS. Les polices sont servies localement. La
          validation des demandes et les identifiants du service d’envoi sont
          gérés côté serveur. Les données techniques de fonctionnement
          permettent à l’hébergeur d’assurer la disponibilité et la sécurité du
          service.
        </p>
        <p>
          Les éventuels services de mesure ou de publicité nécessitant votre
          consentement font l’objet d’une information et d’un choix préalables à
          leur activation.
        </p>
      </section>
    </LegalPage>
  );
}
