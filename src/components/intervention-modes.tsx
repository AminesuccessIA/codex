import Link from 'next/link';
import { Arrow, Label } from './button';
import { interventionModes } from '@/lib/intervention-modes';
export function InterventionModes({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id="interventions"
      className={`shell section intervention-modes ${compact ? 'is-compact' : ''}`}
      aria-labelledby="interventions-title"
    >
      <div className="section-heading">
        <div>
          <Label>VOTRE MODE D’ACCOMPAGNEMENT</Label>
          <h2 id="interventions-title">
            Un projet à livrer.
            <br />
            <span>Une équipe à renforcer.</span>
          </h2>
        </div>
        <p>
          {compact
            ? 'Conseil, consultants, projet au forfait ou exploitation : le mode d’intervention se choisit à partir de votre besoin et des responsabilités à prendre en charge.'
            : 'Pour les entreprises en Europe et en Afrique. Le contexte technique, les livrables, la disponibilité et les conditions d’intervention sont qualifiés avant proposition.'}
        </p>
      </div>
      <div className="intervention-list">
        {interventionModes.map((mode, index) => (
          <article key={mode.name}>
            <span className="mono">0{index + 1} /</span>
            <h3>
              <Link href={mode.href}>
                {mode.name}
                <Arrow diagonal />
              </Link>
            </h3>
            <div>
              <p>{compact ? mode.summary : mode.detail}</p>
              {!compact && (
                <p className="intervention-agreement">{mode.agreement}</p>
              )}
            </div>
          </article>
        ))}
      </div>
      {compact && (
        <Link
          href="/a-propos#interventions"
          className="text-link intervention-more"
        >
          Comprendre les modalités d’intervention
          <Arrow />
        </Link>
      )}
    </section>
  );
}
