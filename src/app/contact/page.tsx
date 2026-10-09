import { ExpertiseVisual } from '@/components/expertise-visual';
import { Label } from '@/components/button';
import { ContactForm } from '@/components/contact-form';
import { pageMetadata } from '@/lib/site';
import Link from 'next/link';
import { formIsEnabled } from '@/lib/compliance';
import { services } from '@/lib/services';
export const metadata = pageMetadata(
  'Contact',
  'Présentez votre projet Microsoft à La Pépiite IT : Microsoft 365, Azure, IA, licences, cybersécurité ou services managés.',
  '/contact',
);
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const selected =
    services.some((s) => s.slug === service) || service === 'audit-microsoft'
      ? service
      : '';
  return (
    <main id="contenu">
      <section className="shell contact-page">
        <div className="contact-copy">
          <Label>PARLONS DE VOTRE PROJET</Label>
          <h1>
            Votre contexte.
            <br />
            Vos priorités.
            <br />
            <span>La suite, ensemble.</span>
          </h1>
          <p className="hero-description">
            Un projet défini ou une question technique : décrivez ce qui doit
            évoluer et les contraintes à prendre en compte.
          </p>
          <a href="mailto:contact@lapepiite.com" className="contact-email">
            contact@lapepiite.com
          </a>
          <div className="contact-process">
            <p className="eyebrow">POUR PRÉPARER L’ÉCHANGE</p>
            <ol>
              <li>
                <span>01</span>Votre environnement actuel
              </li>
              <li>
                <span>02</span>Le besoin ou la difficulté rencontrée
              </li>
              <li>
                <span>03</span>Vos échéances et vos contraintes
              </li>
            </ol>
          </div>
          <p className="contact-security">
            Présentez votre besoin et vos échéances. Les documents techniques
            utiles seront échangés dans le cadre de la mission.
          </p>
        </div>
        <ContactForm initialService={selected} enabled={formIsEnabled()} />
      </section>
      <section
        id="donnees"
        className="shell data-notice data-notice-illustrated"
      >
        <div>
          <h2>Une demande professionnelle, un périmètre à définir.</h2>
          <p>
            Précisez votre organisation, le contexte technique, le livrable
            attendu et vos contraintes de calendrier. Le premier échange sert à
            qualifier le besoin et les conditions d’une éventuelle intervention,
            avec un périmètre et des responsabilités définis.
          </p>
          <p>
            Les informations sur vos données sont regroupées dans la{' '}
            <Link href="/politique-de-confidentialite">
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
        <ExpertiseVisual kind="accompagnement" inline />
      </section>
    </main>
  );
}
