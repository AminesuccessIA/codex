import { ExpertiseVisual } from '@/components/expertise-visual';
import { Label } from '@/components/button';
import { ProjectQualifier } from '@/components/project-qualifier';
import { pageMetadata } from '@/lib/site';
import { formIsEnabled } from '@/lib/compliance';
import { services } from '@/lib/services';
import { guides } from '@/lib/guides';
import Link from 'next/link';
export const metadata = pageMetadata(
  'Cadrer votre projet Microsoft',
  'Préparez un échange avec La Pépiite IT : besoin Microsoft, mode d’intervention et calendrier pour un projet, un consultant ou des services managés.',
  '/diagnostic',
);
export default async function Diagnostic({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; source?: string }>;
}) {
  const params = await searchParams;
  const service =
    services.some((s) => s.slug === params.service) ||
    params.service === 'audit-microsoft'
      ? params.service
      : '';
  const knownSources = [
    '/',
    '/diagnostic',
    '/solutions-microsoft',
    ...services.map((s) => '/' + s.slug),
    ...guides.map((g) => '/ressources/' + g.slug),
  ];
  const source = knownSources.includes(params.source || '')
    ? params.source!
    : '/diagnostic';
  return (
    <main id="contenu">
      <section className="shell lead-page">
        <div>
          <Label>LE PREMIER ÉCHANGE</Label>
          <h1>
            Un besoin à préciser.
            <br />
            <span>Une mission à construire.</span>
          </h1>
          <p className="hero-description">
            Décrivez le sujet, le mode d’accompagnement et vos échéances. Votre
            demande nous aide à préparer un échange adapté à votre organisation.
          </p>
          <ul className="lead-outcomes">
            <li>Un sujet et des priorités identifiés.</li>
            <li>Un mode d’intervention à qualifier.</li>
            <li>La prochaine étape définie avec vos interlocuteurs.</li>
          </ul>
          <p className="lead-secondary">
            Vous préférez écrire directement ?{' '}
            <a href="mailto:contact@lapepiite.com">contact@lapepiite.com</a>
          </p>
          <Link className="text-link" href="/ressources">
            Consulter les guides de préparation
          </Link>
        </div>
        <ProjectQualifier
          enabled={formIsEnabled()}
          initialService={service}
          source={source}
        />
      </section>
      <section
        className="shell qualification-visual"
        aria-label="Accompagnement de votre projet"
      >
        <ExpertiseVisual kind="collaboration" inline />
      </section>
    </main>
  );
}
