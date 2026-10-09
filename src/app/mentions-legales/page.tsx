import Link from 'next/link';
import { LegalPage } from '@/components/legal-page';
import { pageMetadata } from '@/lib/site';
export const metadata = pageMetadata(
  'Mentions légales',
  'Informations légales de LA PEPIITE, nom commercial La Pépiite IT, partenaire Microsoft : éditeur, hébergement et données personnelles.',
  '/mentions-legales',
);
export default function Legal() {
  return (
    <LegalPage title="Mentions légales">
      <section>
        <h2>Éditeur du site</h2>
        <p>
          LA PEPIITE, SAS au capital de 2 000 €, exerçant sous le nom commercial
          La Pépiite IT.
        </p>
        <dl>
          <div>
            <dt>Siège</dt>
            <dd>32 boulevard du Port, 95000 Cergy, France</dd>
          </div>
          <div>
            <dt>Immatriculation</dt>
            <dd>RCS Pontoise 888 294 733 — SIRET 888 294 733 00025</dd>
          </div>
          <div>
            <dt>TVA intracommunautaire</dt>
            <dd>FR10888294733</dd>
          </div>
          <div>
            <dt>Directeur de la publication</dt>
            <dd>Julien Ezonga</dd>
          </div>
          <div>
            <dt>Contact</dt>
            <dd>
              <a href="mailto:contact@lapepiite.com">contact@lapepiite.com</a>
            </dd>
          </div>
        </dl>
      </section>
      <section>
        <h2>Hébergement</h2>
        <p>
          Vercel Inc.
          <br />
          440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
        </p>
        <p>
          <a href="https://vercel.com">vercel.com</a>
        </p>
      </section>
      <section>
        <h2>Propriété intellectuelle et marques</h2>
        <p>
          L’ensemble des contenus de ce site est la propriété de La Pépiite IT.
          Microsoft, Microsoft 365, Azure, Copilot, Power Platform, Entra ID et
          Defender sont des marques de Microsoft Corporation. La Pépiite IT est
          partenaire Microsoft.
        </p>
      </section>
      <section>
        <h2>Données personnelles</h2>
        <p>
          Les modalités de traitement des données sont détaillées dans notre{' '}
          <Link href="/politique-de-confidentialite">
            politique de confidentialité
          </Link>
          .
        </p>
      </section>
    </LegalPage>
  );
}
