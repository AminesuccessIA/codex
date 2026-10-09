import Link from 'next/link';
import { Brand } from './site-header';
import { services } from '@/lib/services';
import { Button } from './button';
export function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="shell contact-banner-inner">
        <div>
          <p className="eyebrow">LA PROCHAINE ÉTAPE</p>
          <h2>
            Un besoin précis ?<br />
            Un projet à clarifier ?
          </h2>
        </div>
        <div>
          <p>
            Partons de votre environnement, de vos contraintes et de ce que vous
            souhaitez faire évoluer.
          </p>
          <Button href="/contact" variant="lime">
            Échanger sur votre projet
          </Button>
        </div>
      </div>
    </section>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>
              Conseil, intégration et expertise.
              <br />
              Votre environnement Microsoft,
              <br />
              mieux exploité.
            </p>
            <span className="footer-position">ESN & INTÉGRATEUR MICROSOFT</span>
          </div>
          <div className="footer-services">
            <p className="eyebrow">EXPERTISES</p>
            <div>
              {services.map((s) => (
                <Link key={s.slug} href={'/' + s.slug}>
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-company">
            <p className="eyebrow">LA PÉPIITE IT</p>
            <Link href="/a-propos">À propos</Link>
            <Link href="/cas-d-usage">Cas d’usage</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} La Pépiite IT</span>
          <span>
            Microsoft et ses produits sont des marques de Microsoft Corporation.
          </span>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-de-confidentialite">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
