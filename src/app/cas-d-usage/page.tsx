import { ExpertiseVisual } from '@/components/expertise-visual';
import { Label, Button, Arrow } from '@/components/button';
import { ContactBanner } from '@/components/site-footer';
import { pageMetadata } from '@/lib/site';
import Link from 'next/link';
import { useCases } from '@/lib/use-cases';
export const metadata = pageMetadata(
  'Cas d’usage',
  'Scénarios d’intervention Microsoft 365, licences, Azure, Copilot, automatisation et cybersécurité : démarche, livrables et critères de validation.',
  '/cas-d-usage',
);
export default function Projects() {
  return (
    <main id="contenu">
      <section className="shell editorial-hero">
        <Label>CAS D’USAGE</Label>
        <h1>
          Des contextes différents.
          <br />
          <span>
            La même exigence
            <br />
            de mise en œuvre.
          </span>
        </h1>
        <p className="hero-description">
          Découvrez des scénarios d’intervention autour de l’écosystème
          Microsoft : besoins métiers, démarche, livrables et critères de
          validation. Chaque scénario vous aide à préciser le périmètre d’un
          projet avec nos équipes.
        </p>
      </section>
      <ExpertiseVisual kind="accompagnement" fullWidth />
      <section className="shell project-list">
        {useCases.map((p, index) => (
          <article className="project-row" key={p.slug}>
            <div className="project-number">
              <span className="mono">0{index + 1} /</span>
              <span className="eyebrow">EXEMPLE D’INTERVENTION</span>
            </div>
            <div>
              <p className="eyebrow">{p.category}</p>
              <h2>{p.title}</h2>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <Link href={'/' + p.slug} className="text-link">
                Voir l’expertise associée <Arrow diagonal />
              </Link>
            </div>
            <div className="project-context">
              <h3>Le contexte</h3>
              <p>{p.context}</p>
              <h3>La démarche envisagée</h3>
              <p>{p.approach}</p>
              <h3>Les livrables envisagés</h3>
              <p>{p.deliverables}</p>
              <h3>Les critères de validation</h3>
              <p>{p.validation}</p>
              <p className="case-mode">
                <strong>Mode à cadrer</strong> — {p.mode}
              </p>
            </div>
          </article>
        ))}
      </section>
      <section className="shell section engagement-section">
        <div>
          <Label>UN PROJET SIMILAIRE ?</Label>
          <h2>
            Partons de votre cas.
            <br />
            <span>Construisons votre trajectoire.</span>
          </h2>
        </div>
        <div>
          <p className="large-copy">
            Le périmètre, les livrables et les critères de réussite doivent être
            définis pour votre environnement.
          </p>
          <Button href="/contact">Présenter votre besoin</Button>
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
