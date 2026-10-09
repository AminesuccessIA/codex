import { Label } from '@/components/button';
import { ContactForm } from '@/components/contact-form';
import { pageMetadata } from '@/lib/site';
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
            Ne transmettez aucun mot de passe, secret technique ou document
            confidentiel dans ce formulaire.
          </p>
        </div>
        <ContactForm initialService={selected} />
      </section>
      <section id="donnees" className="shell data-notice">
        <h2>À propos de vos données</h2>
        <p>
          Les champs demandés servent à qualifier votre demande et à préparer
          une réponse. Aucun outil publicitaire ni traceur d’audience n’est
          installé sur ce site.
        </p>
        <p>
          Le service de réception doit être activé avant l’ouverture commerciale
          du formulaire. Les informations légales du responsable de traitement,
          les destinataires, la durée de conservation et le contact pour exercer
          vos droits restent à compléter avant mise en production.
        </p>
      </section>
    </main>
  );
}
