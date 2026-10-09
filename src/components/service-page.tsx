import Link from 'next/link';
import { Button, Label, Arrow } from './button';
import { ContactBanner } from './site-footer';
import { findService, type Service } from '@/lib/services';
export function ServicePage({ service: s }: { service: Service }) {
  return (
    <main id="contenu">
      <section className="shell inner-hero">
        <div className="breadcrumb">
          <Link href="/">Accueil</Link>
          <span>/</span>
          <span>{s.name}</span>
        </div>
        <div className="inner-hero-grid">
          <div>
            <Label>{s.eyebrow}</Label>
            <h1>{s.title}</h1>
            <p className="hero-description">{s.description}</p>
            <Button href={'/contact?service=' + s.slug}>
              Parlons de{' '}
              {s.name === 'Licences' ? 'vos licences' : 'votre projet'}
            </Button>
          </div>
          <aside className="service-brief">
            <div className="brief-heading">
              <span className="mono">PÉRIMÈTRE / {s.name.toUpperCase()}</span>
              <Arrow diagonal />
            </div>
            <p className="brief-title">{s.short}</p>
            <div className="brief-technologies">
              {s.tech.map((t, i) => (
                <div key={t}>
                  <span className="mono">0{i + 1}</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <span className="brief-bottom">
              CONSEIL → INTÉGRATION → EXPLOITATION
            </span>
          </aside>
        </div>
      </section>
      <section className="shell section context-section">
        <Label>VOTRE ENJEU</Label>
        <div className="section-heading">
          <h2>{s.problem}</h2>
          <p>{s.context}</p>
        </div>
      </section>
      <section className="service-scope">
        <div className="shell section">
          <div className="section-heading">
            <div>
              <Label>NOTRE INTERVENTION</Label>
              <h2>
                Un périmètre précis.
                <br />
                <span>Une trajectoire partagée.</span>
              </h2>
            </div>
            <p>
              Les axes d’intervention sont définis au cadrage, selon votre
              existant, vos ressources et vos priorités.
            </p>
          </div>
          <div className="scope-list">
            {s.scope.map(([title, description], i) => (
              <article key={title}>
                <span className="mono">0{i + 1} /</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="shell section deliverables-section">
        <div>
          <Label>CE QUI RESTE ENTRE VOS MAINS</Label>
          <h2>
            Un projet livré.
            <br />
            <span>Et documenté.</span>
          </h2>
          <p>
            Les livrables et leurs critères de validation sont convenus au
            démarrage de la mission.
          </p>
        </div>
        <ul>
          {s.deliverables.map((d, i) => (
            <li key={d}>
              <span className="mono">0{i + 1}</span>
              {d}
              <Arrow />
            </li>
          ))}
        </ul>
      </section>
      {s.slug === 'conseil-integration' && (
        <section id="audit-microsoft" className="audit-offer">
          <div className="shell section section-heading">
            <div>
              <Label>OFFRE DE DIAGNOSTIC</Label>
              <h2>
                L’audit Microsoft.
                <br />
                <span>Pour décider de la suite.</span>
              </h2>
            </div>
            <div>
              <p>
                Licences, usages Microsoft 365, sécurité, préparation à Copilot
                et opportunités d’automatisation : le diagnostic relie votre
                existant à vos objectifs. Son périmètre est défini avec vous.
              </p>
              <p>
                À l’issue de l’analyse : une synthèse, des points d’attention et
                une feuille de route priorisée. Le diagnostic n’implique ni
                économies garanties ni déploiement obligatoire.
              </p>
              <Button href="/contact?service=audit-microsoft">
                Échanger sur un diagnostic
              </Button>
            </div>
          </div>
        </section>
      )}
      <section className="shell section faq-section">
        <div>
          <Label>QUESTION DE CADRAGE</Label>
          <h2>Avant de commencer.</h2>
        </div>
        <details>
          <summary>
            {s.question}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{s.answer}</p>
        </details>
      </section>
      <section className="shell related-section">
        <p className="eyebrow">LES SUJETS SE CONNECTENT</p>
        <div>
          {s.related.map((slug) => {
            const related = findService(slug)!;
            return (
              <Link key={slug} href={'/' + slug}>
                {related.name}
                <Arrow diagonal />
              </Link>
            );
          })}
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
