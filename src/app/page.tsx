import Link from 'next/link';
import { Button, Arrow, Label } from '@/components/button';
import { Ecosystem } from '@/components/ecosystem';
import { ContactBanner } from '@/components/site-footer';
import { services } from '@/lib/services';
import { InterventionModes } from '@/components/intervention-modes';
import { ClientReferences } from '@/components/client-references';
export default function Home() {
  return (
    <main id="contenu">
      <section className="home-hero shell">
        <div className="hero-copy">
          <Label>ESN & INTÉGRATEUR MICROSOFT</Label>
          <p className="partner-mention">Partenaire Microsoft</p>
          <h1>
            Conseil.
            <br />
            Intégration.
            <br />
            <span>Expertise Microsoft.</span>
          </h1>
          <p className="hero-description">
            La Pépiite IT, ESN et intégrateur Microsoft, accompagne vos projets
            et renforce vos équipes : conseil, intégration, consultants et
            services managés, du cadrage à l’exploitation.
          </p>
          <div className="hero-actions">
            <Button href="/contact">Parler de votre projet</Button>
            <Link className="text-link" href="#expertises">
              Explorer nos expertises <Arrow />
            </Link>
          </div>
          <div className="hero-note">
            <span className="short-rule" /> Conseil · Intégration · Cloud · IA ·
            Services managés
          </div>
        </div>
        <Ecosystem />
      </section>
      <div className="shell">
        <div className="technology-strip">
          <span>
            UN ÉCOSYSTÈME.
            <br />
            PLUSIEURS LEVIERS.
          </span>
          <p>Microsoft 365</p>
          <p>Azure</p>
          <p>Copilot</p>
          <p>Power Platform</p>
          <p>Entra ID</p>
        </div>
      </div>
      <ClientReferences compact />
      <section id="expertises" className="section shell">
        <div className="section-heading">
          <div>
            <Label>NOS EXPERTISES</Label>
            <h2>
              Des outils aux usages.
              <br />
              <span>Du projet au service.</span>
            </h2>
          </div>
          <p>
            Une approche d’ensemble pour votre système d’information. Un point
            d’entrée adapté à votre besoin, sans perdre de vue le reste de votre
            environnement.
          </p>
        </div>
        <div className="service-directory">
          {[
            {
              id: '01',
              name: 'Environnement de travail',
              text: 'Collaborer, équiper et sécuriser vos équipes.',
              slugs: ['microsoft-365', 'licences', 'cybersecurite'],
            },
            {
              id: '02',
              name: 'Cloud & innovation',
              text: 'Construire le socle. Faire évoluer les usages.',
              slugs: ['azure-cloud', 'copilot-ia', 'power-platform'],
            },
            {
              id: '03',
              name: 'Conseil & continuité',
              text: 'Décider, intégrer et préparer l’exploitation.',
              slugs: ['conseil-integration', 'support-services-manages'],
            },
          ].map((group) => (
            <div className="directory-row" key={group.id}>
              <div className="directory-group">
                <span className="mono">{group.id} /</span>
                <h3>{group.name}</h3>
                <p>{group.text}</p>
              </div>
              <div className="directory-links">
                {group.slugs.map((slug) => {
                  const s = services.find((s) => s.slug === slug)!;
                  return (
                    <Link href={'/' + s.slug} key={slug}>
                      <span>
                        <strong>{s.name}</strong>
                        <small>{s.short}</small>
                      </span>
                      <Arrow diagonal />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      <InterventionModes compact />
      <section className="approach-section">
        <div className="shell approach-grid">
          <div>
            <Label>NOTRE APPROCHE</Label>
            <h2>
              Le bon choix technique
              <br />
              commence par
              <br />
              <span>la bonne question.</span>
            </h2>
            <p>
              Nous partons de votre organisation, de vos usages et de vos
              contraintes pour construire une trajectoire qui tient dans la
              durée.
            </p>
            <Button href="/conseil-integration" variant="lime">
              Découvrir notre accompagnement
            </Button>
          </div>
          <div className="approach-steps">
            {[
              [
                '01',
                'Comprendre avant de proposer',
                'Besoins métiers, environnement existant, dépendances : poser le périmètre et les critères de réussite.',
              ],
              [
                '02',
                'Concevoir pour intégrer',
                'Relier les choix techniques à vos identités, vos données, vos applications et vos exigences de sécurité.',
              ],
              [
                '03',
                'Livrer pour être exploité',
                'Prévoir la recette, la documentation, l’adoption et le transfert aux équipes qui feront vivre le service.',
              ],
            ].map(([n, t, d]) => (
              <article key={n}>
                <span className="mono">{n}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section shell focus-section">
        <div className="focus-copy">
          <Label>UN POINT D’ENTRÉE PARMI NOS OFFRES</Label>
          <h2>
            Faire le point sur
            <br />
            votre environnement
            <br />
            <span>Microsoft.</span>
          </h2>
          <p>
            Licences, collaboration, sécurité, préparation à Copilot : l’audit
            Microsoft met vos usages et vos priorités en perspective. Il
            débouche sur une feuille de route argumentée, avec priorités,
            prérequis et actions à engager.
          </p>
          <Link
            href="/conseil-integration#audit-microsoft"
            className="text-link"
          >
            Découvrir l’audit Microsoft <Arrow diagonal />
          </Link>
        </div>
        <div className="audit-sheet">
          <div className="sheet-top">
            <span>LA PÉPIITE IT / CONSEIL</span>
            <span>DIAGNOSTIC</span>
          </div>
          <h3>
            Une vision claire.
            <br />
            Des décisions documentées.
          </h3>
          <div className="sheet-row">
            <span>01</span>
            <strong>Votre environnement</strong>
            <small>Inventaire & usages</small>
          </div>
          <div className="sheet-row">
            <span>02</span>
            <strong>Vos priorités</strong>
            <small>Risques & opportunités</small>
          </div>
          <div className="sheet-row">
            <span>03</span>
            <strong>Votre trajectoire</strong>
            <small>Actions & dépendances</small>
          </div>
        </div>
      </section>
      <section className="section shell engagement-section">
        <div>
          <Label>LA PÉPIITE IT</Label>
          <h2>
            Une relation technique.
            <br />
            <span>Un langage clair.</span>
          </h2>
        </div>
        <div>
          <p className="large-copy">
            Vous devez pouvoir comprendre les choix, les limites et les
            prochaines étapes de votre projet. C’est aussi cela, l’expertise.
          </p>
          <Link href="/a-propos" className="text-link">
            Notre façon de travailler <Arrow diagonal />
          </Link>
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
