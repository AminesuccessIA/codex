import Link from 'next/link';
import { LegalPage, LegalValue } from '@/components/legal-page';
import { pageMetadata } from '@/lib/site';
import { privacyIsApproved } from '@/lib/compliance';
export const dynamic = 'force-dynamic';
export function generateMetadata() {
  return {
    ...pageMetadata(
      'Politique de confidentialité',
      'Données de contact, finalités, base de traitement, destinataires, conservation et droits sur le site La Pépiite IT.',
      '/politique-de-confidentialite',
    ),
    robots: { index: privacyIsApproved(), follow: true },
  };
}
export default function Privacy() {
  const approved = privacyIsApproved();
  return (
    <LegalPage title="Politique de confidentialité" approved={approved}>
      <section>
        <h2>Responsable du traitement</h2>
        <p>
          <LegalValue name="LEGAL_COMPANY_NAME" /> —{' '}
          <LegalValue name="LEGAL_ADDRESS" />. Les informations sur l’éditeur
          figurent dans les{' '}
          <Link href="/mentions-legales">mentions légales</Link>.
        </p>
        <p>
          Contact pour vos questions et l’exercice de vos droits :{' '}
          <a href="mailto:contact@lapepiite.com">contact@lapepiite.com</a>.
        </p>
      </section>
      <section>
        <h2>Informations concernées</h2>
        <p>
          Lorsque le formulaire est activé, les informations transmises sont
          votre nom, votre adresse e-mail, votre entreprise si vous la
          renseignez, le sujet sélectionné et le contenu de votre message. Le
          nom, l’e-mail et le message sont nécessaires pour comprendre la
          demande et y répondre ; l’entreprise et le sujet sont facultatifs.
        </p>
        <p>
          Le site ne vous demande aucun CV, mot de passe, certification ou
          document confidentiel. N’incluez pas de données sensibles dans votre
          message. Le champ technique de détection de soumissions automatisées
          n’est pas transmis dans l’e-mail.
        </p>
        <p>
          Le serveur d’hébergement traite aussi les informations techniques
          nécessaires à la connexion, telles que l’adresse IP, la date de
          requête et les journaux d’exploitation. Leur conservation et leur
          localisation doivent être confirmées dans la configuration du
          prestataire.
        </p>
      </section>
      <section>
        <h2>Finalités et base de traitement</h2>
        <p>
          Les informations servent à qualifier une demande professionnelle,
          préparer une réponse et organiser les échanges associés. Elles ne
          servent pas à inscrire automatiquement le demandeur à une newsletter
          ou à une prospection distincte.
        </p>
        <p>
          {approved
            ? 'Base retenue pour les demandes B2B :'
            : 'Base proposée pour les demandes B2B, à valider par le responsable avant activation :'}{' '}
          l’intérêt légitime à répondre aux sollicitations professionnelles et à
          organiser ces échanges (article 6, paragraphe 1, point f du RGPD),
          après vérification de la nécessité et de l’équilibre avec les droits
          des personnes.
        </p>
        <p>
          Le formulaire n’impose pas de case de consentement pour cette
          finalité. Si une demande émane d’une personne contractant elle-même,
          la base des mesures précontractuelles à sa demande peut être
          pertinente ; ce cas et les éventuels traitements supplémentaires
          doivent être qualifiés avant de modifier la notice.
        </p>
      </section>
      <section>
        <h2>Destinataires et prestataires</h2>
        <p>
          Les destinataires internes sont les personnes habilitées à traiter la
          demande chez l’éditeur. La réception est prévue à
          contact@lapepiite.com, via Google Workspace et l’API Gmail. Aucun CRM
          n’est configuré dans la version auditée.
        </p>
        <dl>
          <div>
            <dt>Prestataire e-mail — entité contractuelle</dt>
            <dd>
              <LegalValue name="PRIVACY_EMAIL_PROCESSOR" />
            </dd>
          </div>
          <div>
            <dt>Prestataire d’hébergement — entité contractuelle</dt>
            <dd>
              <LegalValue name="PRIVACY_HOST_PROCESSOR" />
            </dd>
          </div>
          <div>
            <dt>Localisation et transferts éventuels</dt>
            <dd>
              <LegalValue name="PRIVACY_TRANSFER_DETAILS" />
            </dd>
          </div>
        </dl>
        <p>
          L’activation d’un CRM, d’un autre transport e-mail ou d’un outil de
          mesure nécessite une nouvelle vérification de cette notice.
        </p>
      </section>
      <section>
        <h2>Durée de conservation</h2>
        <p>
          <LegalValue name="PRIVACY_RETENTION" />.
        </p>
        <p>
          La durée doit correspondre à la gestion réelle des demandes, inclure
          les critères de clôture et prévoir la suppression dans la messagerie
          et les systèmes concernés. Le code ne met pas en place une purge
          automatique de la boîte Google Workspace.
        </p>
      </section>
      <section>
        <h2>Vos droits</h2>
        <p>
          Selon les conditions prévues par le RGPD, vous pouvez demander
          l’accès, la rectification, l’effacement ou la limitation du
          traitement. Lorsque le traitement repose sur l’intérêt légitime, vous
          disposez d’un droit d’opposition lié à votre situation. La portabilité
          s’applique uniquement lorsque ses conditions légales sont réunies.
        </p>
        <p>
          Adressez votre demande à{' '}
          <a href="mailto:contact@lapepiite.com">contact@lapepiite.com</a>. Une
          vérification proportionnée de l’identité peut être nécessaire. Vous
          pouvez aussi adresser une réclamation à la{' '}
          <a href="https://www.cnil.fr/fr/plaintes">CNIL</a>.
        </p>
      </section>
      <section>
        <h2>Cookies et outils de mesure</h2>
        <p>
          Aucun outil de publicité ou d’audience n’est intégré dans le code
          applicatif audité. Les polices sont servies localement. Cette
          observation ne vaut pas validation de toutes les options du compte
          d’hébergement ni d’un éventuel service ajouté au domaine.
        </p>
        <p>
          Les réglages Vercel, les requêtes et les cookies du déploiement
          doivent être contrôlés avant publication. Tant qu’aucun traceur non
          essentiel n’est activé, aucun bandeau de consentement aux cookies
          n’est ajouté. Tout ajout d’analytics, de publicité ou de scripts tiers
          impose une réévaluation préalable.
        </p>
      </section>
      <section>
        <h2>Sécurité et fonctionnement du formulaire</h2>
        <p>
          Le formulaire utilise HTTPS sur le site public, une validation serveur
          et des identifiants OAuth côté serveur. Les secrets et le contenu des
          messages ne sont pas journalisés par son code. Le serveur
          d’hébergement peut conserver des journaux techniques distincts.
        </p>
        <p>
          La confirmation indique l’acceptation de la demande par le service
          d’envoi, sans garantir le classement final dans la boîte de réception.
          Le formulaire reste désactivé tant que sa réception réelle, les
          informations ci-dessus et la protection contre les abus ne sont pas
          validées.
        </p>
      </section>
    </LegalPage>
  );
}
