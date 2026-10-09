'use client';
import { useState } from 'react';
import Link from 'next/link';
import { services } from '@/lib/services';
import { Arrow } from './button';
export function ContactForm({
  initialService = '',
  enabled = false,
}: {
  initialService?: string;
  enabled?: boolean;
}) {
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!enabled || busy) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setBusy(true);
    setStatus('');
    setSuccess(false);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          company: data.get('company'),
          service: data.get('service'),
          message: data.get('message'),
          website: data.get('website'),
        }),
      });
      const result = await response.json();
      if (response.ok && result.ok === true) {
        setSuccess(true);
        setStatus(
          'Votre demande a bien été transmise. Merci pour ces précisions.',
        );
        form.reset();
      } else {
        setStatus(
          response.status === 503
            ? 'L’envoi automatique est momentanément indisponible. Écrivez-nous à contact@lapepiite.com ; les informations saisies sont conservées dans le formulaire.'
            : response.status === 429
              ? 'Trop de tentatives rapprochées. Veuillez patienter avant de réessayer.'
              : 'La demande n’a pas été envoyée. Vérifiez les champs ou réessayez dans quelques instants.',
        );
      }
    } catch {
      setStatus(
        'La connexion a été interrompue. Votre demande n’a pas été confirmée ; vous pouvez réessayer.',
      );
    } finally {
      setBusy(false);
    }
  }
  if (!enabled) {
    return (
      <section
        className="contact-direct-panel"
        aria-labelledby="direct-contact-title"
      >
        <span className="eyebrow">PREMIER ÉCHANGE</span>
        <h2 id="direct-contact-title">Échangeons sur votre projet.</h2>
        <p>
          Présentez votre environnement, vos priorités et vos échéances. Notre
          équipe vous accompagne pour définir la prochaine étape.
        </p>
        <a
          className="button button-primary"
          href="mailto:contact@lapepiite.com?subject=Projet%20La%20P%C3%A9piite%20IT"
        >
          Écrire à notre équipe
          <Arrow diagonal />
        </a>
        <p>
          <a href="mailto:contact@lapepiite.com" className="text-link">
            contact@lapepiite.com
          </a>
        </p>
      </section>
    );
  }
  return (
    <form
      onSubmit={submit}
      className="contact-form"
      aria-label="Demande de contact"
      aria-busy={busy}
    >
      <div className="form-heading">
        <span className="eyebrow">PREMIER ÉCHANGE</span>
        <h2>Présentez-nous votre besoin.</h2>
        <p>Les champs marqués d’un * sont obligatoires.</p>
      </div>
      <fieldset disabled={!enabled || busy} className="contact-fields">
        <legend className="sr-only">Votre demande professionnelle</legend>
        <div className="form-grid">
          <label>
            Votre nom *
            <input
              name="name"
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
              placeholder="Prénom et nom"
            />
          </label>
          <label>
            Entreprise
            <input
              name="company"
              autoComplete="organization"
              maxLength={150}
              placeholder="Votre organisation"
            />
          </label>
          <label className="full-field">
            E-mail professionnel *
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="vous@entreprise.fr"
            />
          </label>
          <label className="full-field">
            Le sujet de votre demande
            <select name="service" defaultValue={initialService}>
              <option value="">À définir ensemble</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
              <option value="audit-microsoft">Audit Microsoft</option>
            </select>
          </label>
          <label className="full-field">
            Votre contexte et votre besoin *
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={5000}
              rows={5}
              placeholder="Votre environnement actuel, ce que vous souhaitez faire évoluer, vos échéances…"
            />
          </label>
        </div>
      </fieldset>
      <div hidden>
        <label>
          Site web
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>
      <p className="privacy-notice">
        Les informations saisies servent à traiter votre demande
        professionnelle. Consultez notre{' '}
        <Link href="/politique-de-confidentialite">
          politique de confidentialité
        </Link>
        .
      </p>
      <button
        disabled={!enabled || busy}
        className="button button-primary submit-button"
      >
        {busy ? 'Transmission en cours…' : 'Envoyer ma demande'}
        <Arrow diagonal />
      </button>
      {status && (
        <p
          className={`form-status ${success ? 'success' : 'error'}`}
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      )}
      <p className="form-note">
        Vos informations sont utilisées pour cette prise de contact.
      </p>
    </form>
  );
}
