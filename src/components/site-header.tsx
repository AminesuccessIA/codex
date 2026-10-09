'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { services } from '@/lib/services';
import { Arrow } from './button';
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="La Pépiite IT — Accueil">
      <span className="brand-symbol" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>
        La Pépiite<span className="brand-it"> IT</span>
      </span>
    </Link>
  );
}
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expertise, setExpertise] = useState(false);
  const root = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const expertToggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) {
        setOpen(false);
        setExpertise(false);
      }
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && (open || expertise)) {
        setOpen(false);
        setExpertise(false);
        (open ? toggle : expertToggle).current?.focus();
      }
    };
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', close);
      document.removeEventListener('keydown', escape);
    };
  }, [open, expertise]);
  function close() {
    setOpen(false);
    setExpertise(false);
  }
  return (
    <header className="site-header" ref={root}>
      <div className="shell nav-shell">
        <Brand />
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Fermer' : 'Menu'}
          <span aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Navigation principale"
          className={`main-nav ${open ? 'is-open' : ''}`}
        >
          <div className="expertise-nav">
            <button
              ref={expertToggle}
              className={`nav-link ${services.some((s) => pathname === '/' + s.slug) ? 'is-active' : ''}`}
              aria-expanded={expertise}
              aria-controls="expertise-menu"
              onClick={() => setExpertise(!expertise)}
            >
              Nos expertises
              <span
                className={`chevron ${expertise ? 'rotated' : ''}`}
                aria-hidden="true"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path
                    d="m4 6 4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </svg>
              </span>
            </button>
            <div id="expertise-menu" className="mega-menu" hidden={!expertise}>
              <div className="mega-intro">
                <span className="eyebrow">L’ÉCOSYSTÈME MICROSOFT</span>
                <p>Du conseil à l’exploitation.</p>
                <Link href="/#expertises" onClick={close}>
                  Toutes nos expertises <Arrow />
                </Link>
              </div>
              <div className="mega-links">
                {services.map((s) => (
                  <Link
                    href={'/' + s.slug}
                    key={s.slug}
                    onClick={close}
                    aria-current={
                      pathname === '/' + s.slug ? 'page' : undefined
                    }
                  >
                    <span>{s.name}</span>
                    <small>{s.short}</small>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            className="nav-link"
            href="/cas-d-usage"
            onClick={close}
            aria-current={pathname === '/cas-d-usage' ? 'page' : undefined}
          >
            Cas d’usage
          </Link>
          <Link
            className="nav-link"
            href="/a-propos"
            onClick={close}
            aria-current={pathname === '/a-propos' ? 'page' : undefined}
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className="button button-primary nav-contact"
            onClick={close}
            aria-current={pathname === '/contact' ? 'page' : undefined}
          >
            Parlons de votre projet <Arrow diagonal />
          </Link>
        </nav>
      </div>
    </header>
  );
}
