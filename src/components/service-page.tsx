import { StructuredData } from './structured-data';
import { guides } from '@/lib/guides';
import { serviceStructuredData } from '@/lib/structured-data';
import { serviceDetails } from '@/lib/service-details';
import Link from 'next/link';
import { Button, Label, Arrow } from './button';
import { ContactBanner } from './site-footer';
import { findService, type Service } from '@/lib/services';
import { solutionCoverage } from '@/lib/solution-catalog';
import { microsoftProductSources } from '@/lib/microsoft-offers';
export function ServicePage({ service: s }: { service: Service }) {
  const detail = serviceDetails[s.slug];
  const relatedGuides = guides.filter(
    (guide) =>
      guide.service === s.slug ||
      (guide.service === 'business-central' && s.slug === 'dynamics-365'),
  );
  return (
    <main id="contenu">
      <StructuredData data={serviceStructuredData(s)} />
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
            <Button href={`/diagnostic?service=${s.slug}&source=/${s.slug}`}>
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
      <nav className="shell service-toc" aria-label="Sommaire de l’expertise">
        <a href="#enjeu">Votre enjeu</a>
        <a href="#intervention">Accompagnement</a>
        <a href="#livrables">Livrables</a>
        <a href="#methode">Méthode</a>
        <a href="#trajectoire">Bénéfices & suite</a>
        <a href="#questions">Questions</a>
      </nav>
      <section id="enjeu" className="shell section context-section">
        <Label>VOTRE ENJEU</Label>
        <div className="section-heading">
          <h2>{s.problem}</h2>
          <p>{s.context}</p>
        </div>
      </section>
      <section id="intervention" className="service-scope">
        <div className="shell section">
          <div className="section-heading">
            <div>
              <Label>NOTRE INTERVENTION</Label>
              <h2>{detail.scopeTitle}</h2>
            </div>
            <p>{detail.scopeIntro}</p>
          </div>
          <p className="service-example">{detail.example}</p>
          <div className="scope-list">
            {s.scope.map(([title, description], i) => (
              <article key={title}>
                <span className="mono">0{i + 1} /</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          {solutionCoverage[s.slug] && (
            <div className="solution-coverage">
              <p className="eyebrow">LES PRODUITS ET USAGES ASSOCIÉS</p>
              <div>
                {solutionCoverage[s.slug].map(([name, description]) => (
                  <article key={name}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <section id="livrables" className="shell section deliverables-section">
        <div>
          <Label>CE QUI RESTE ENTRE VOS MAINS</Label>
          <h2>{detail.deliverablesTitle}</h2>
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
      <section id="methode" className="shell section service-method">
        <div className="service-method-heading">
          <Label>COMMENT SE DÉROULE L’INTERVENTION</Label>
          <h2>{detail.methodTitle}</h2>
          <p>
            Le calendrier et les accès sont convenus au cadrage. Chaque étape
            prévoit une validation avec vos interlocuteurs.
          </p>
        </div>
        <ol className="method-list">
          {detail.method.map(([title, description], index) => (
            <li key={title}>
              <span className="mono">0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section id="trajectoire" className="service-outcomes">
        <div className="shell section service-outcomes-grid">
          <div>
            <Label>VOTRE VALEUR MÉTIER</Label>
            <h2>{detail.benefitsTitle}</h2>
            <ul className="benefit-list">
              {detail.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <p className="outcomes-note">
              Les objectifs et les critères d’évaluation sont définis avec vos
              équipes au cadrage.
            </p>
          </div>
          <div className="roadmap-outline">
            <p className="eyebrow">VOTRE FEUILLE DE ROUTE</p>
            <p className="roadmap-caption">
              Des actions priorisées avec vos équipes.
            </p>
            <ol>
              {detail.roadmap.map(([phase, action]) => (
                <li key={phase}>
                  <span>{phase}</span>
                  <p>{action}</p>
                </li>
              ))}
            </ol>
            <Link
              href={`/diagnostic?service=${s.slug}&source=/${s.slug}`}
              className="text-link"
            >
              Cadrer votre prochaine étape
              <Arrow diagonal />
            </Link>
          </div>
        </div>
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
                une feuille de route priorisée. La restitution vous permet de
                choisir les actions à déployer et leur mode d’accompagnement.
              </p>
              <Button href="/contact?service=audit-microsoft">
                Échanger sur un diagnostic
              </Button>
            </div>
          </div>
        </section>
      )}
      <section id="questions" className="shell section faq-section">
        <div>
          <Label>QUESTION DE CADRAGE</Label>
          <h2>Avant de commencer.</h2>
        </div>
        <div className="faq-items">
          <details>
            <summary>
              {s.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{s.answer}</p>
          </details>
          <details>
            <summary>
              {detail.secondQuestion}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{detail.secondAnswer}</p>
          </details>
          <details>
            <summary>
              {detail.additionalQuestion}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{detail.additionalAnswer}</p>
          </details>
        </div>
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
        {relatedGuides.length > 0 && (
          <div className="solution-resource-line">
            {relatedGuides.map((guide) => (
              <Link key={guide.slug} href={'/ressources/' + guide.slug}>
                Guide pratique : {guide.title} <Arrow />
              </Link>
            ))}
          </div>
        )}
        <div className="solution-resource-line">
          <Link href="/solutions-microsoft">
            Toutes les solutions Microsoft <Arrow />
          </Link>
          {microsoftProductSources[s.slug] && (
            <a href={microsoftProductSources[s.slug]}>
              Documentation officielle Microsoft <Arrow diagonal />
            </a>
          )}
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
