import Link from 'next/link';
import { LegalPage, LegalValue } from '@/components/legal-page';
import { pageMetadata } from '@/lib/site';
import { privacyIsApproved } from '@/lib/compliance';
export const dynamic = 'force-dynamic';
export function generateMetadata() {
  return {
    ...pageMetadata(
      'Mentions légales',
      'Éditeur, directeur de publication, hébergement et informations légales du site La Pépiite IT.',
      '/mentions-legales',
    ),
    robots: { index: privacyIsApproved(), follow: true },
  };
}
export default function Legal() {
  return (
    <LegalPage title="Mentions légales" approved={privacyIsApproved()}>
      <section>
        <h2>Éditeur du site</h2>
        <p>
          La Pépiite IT est le nom commercial présenté sur ce site. Les données
          d’immatriculation ci-dessous ont été vérifiées le 9 octobre 2026
          auprès de Pappers et de l’Annuaire des entreprises.
        </p>
        <dl>
          {[
            ['Raison sociale', 'LEGAL_COMPANY_NAME'],
            ['Forme juridique', 'LEGAL_COMPANY_FORM'],
            ['SIREN / SIRET', 'LEGAL_REGISTRATION_NUMBER'],
            ['Immatriculation', 'LEGAL_REGISTER'],
            ['Capital social', 'LEGAL_CAPITAL'],
            ['TVA intracommunautaire', 'LEGAL_VAT'],
            ['Adresse du siège', 'LEGAL_ADDRESS'],
            ['Directeur de publication', 'LEGAL_PUBLICATION_DIRECTOR'],
          ].map(([label, name]) => (
            <div key={name}>
              <dt>{label}</dt>
              <dd>
                <LegalValue name={name} />
              </dd>
            </div>
          ))}
          <div>
            <dt>Contact</dt>
            <dd>
              <a href="mailto:contact@lapepiite.com">contact@lapepiite.com</a>
            </dd>
          </div>
        </dl>
        <p>
          <a href="https://annuaire-entreprises.data.gouv.fr/entreprise/la-pepiite-888294733">
            Consulter l’Annuaire des entreprises
          </a>{' '}
          ·{' '}
          <a href="https://www.pappers.fr/entreprise/la-pepiite-888294733">
            Consulter Pappers
          </a>
        </p>
      </section>
      <section>
        <h2>Hébergement du site</h2>
        <p>
          Le domaine et le contrat d’hébergement sont distincts. Les réponses
          HTTP observées proviennent de Vercel ; l’identité et les coordonnées
          exactes du cocontractant doivent être vérifiées dans le contrat
          d’hébergement.
        </p>
        <dl>
          {[
            ['Hébergeur', 'LEGAL_HOST_NAME'],
            ['Adresse', 'LEGAL_HOST_ADDRESS'],
            ['Contact de l’hébergeur', 'LEGAL_HOST_CONTACT'],
          ].map(([label, name]) => (
            <div key={name}>
              <dt>{label}</dt>
              <dd>
                <LegalValue name={name} />
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section>
        <h2>Contenus et marques</h2>
        <p>
          Microsoft et les noms de ses produits sont des marques de Microsoft
          Corporation. Leur mention décrit les domaines techniques présentés ;
          elle ne constitue pas une revendication de certification ou de
          partenariat.
        </p>
        <p>
          Les <Link href="/cas-d-usage">cas d’usage</Link> sont des exemples de
          cadrage, sans référence client ni résultat de mission revendiqué.
        </p>
      </section>
      <section>
        <h2>Données personnelles</h2>
        <p>
          Les modalités de traitement des demandes sont détaillées dans la{' '}
          <Link href="/politique-de-confidentialite">
            politique de confidentialité
          </Link>
          .
        </p>
      </section>
    </LegalPage>
  );
}
