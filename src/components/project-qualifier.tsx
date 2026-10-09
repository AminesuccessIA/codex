'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { services } from '@/lib/services';
import { Arrow } from './button';

export function ProjectQualifier({
  enabled,
  initialService = '',
  source = '/diagnostic',
}: {
  enabled: boolean;
  initialService?: string;
  source?: string;
}) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(initialService);
  const [mode, setMode] = useState('À définir ensemble');
  const [timing, setTiming] = useState('À préciser');
  const [context, setContext] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [prepared, setPrepared] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const website = useRef<HTMLInputElement>(null);
  function changeStep(next: number) {
    setStep(next);
    setStatus('');
    setPrepared(false);
    requestAnimationFrame(() => heading.current?.focus());
  }
  const subject = `Projet ${services.find((s) => s.slug === service)?.name || 'Microsoft'} — La Pépiite IT`;
  const message = `Sujet : ${services.find((s) => s.slug === service)?.name || 'À définir ensemble'}\nMode d’intervention : ${mode}\nÉchéance : ${timing}\nPage d’origine : ${source}\n\nContexte :\n${context || 'À préciser lors du premier échange.'}`;
  const fullMessage = `Nom : ${name}\nEntreprise : ${company}\nE-mail : ${email}\n\n${message}`;
  const mailto = `mailto:contact@lapepiite.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullMessage)}`;
  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || sent || website.current?.value) return;
    if (step < 3) {
      changeStep(step + 1);
      return;
    }
    if (!enabled) {
      setPrepared(true);
      setStatus(
        'Votre e-mail est prêt. Ouvrez votre messagerie, vérifiez le texte puis envoyez-le.',
      );
      return;
    }
    setBusy(true);
    setStatus('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          service,
          message,
          website: '',
        }),
      });
      const result = await response.json();
      if (response.ok && result.ok === true) {
        setSent(true);
        setStatus('Votre demande a bien été transmise à notre équipe.');
      } else {
        setPrepared(true);
        setStatus(
          'L’envoi automatique n’a pas abouti. Vous pouvez envoyer la demande préparée par e-mail ou copier son contenu.',
        );
      }
    } catch {
      setPrepared(true);
      setStatus(
        'La connexion a été interrompue. Vous pouvez envoyer votre demande par e-mail ou copier son contenu.',
      );
    } finally {
      setBusy(false);
    }
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(fullMessage);
      setStatus(
        'Le contenu est copié. Collez-le dans un e-mail à contact@lapepiite.com.',
      );
    } catch {
      setStatus(
        'La copie automatique est indisponible. Sélectionnez le texte ci-dessous pour le copier.',
      );
    }
  }
  return (
    <form
      className="project-qualifier"
      aria-label="Qualification de votre projet"
      onSubmit={submit}
      aria-busy={busy}
    >
      <ol className="qualifier-progress" aria-label="Étapes de qualification">
        {['Votre besoin', 'La mission', 'Vos coordonnées'].map((label, i) => (
          <li key={label} aria-current={step === i + 1 ? 'step' : undefined}>
            <span>{i + 1}</span>
            {label}
          </li>
        ))}
      </ol>
      <h2 tabIndex={-1} ref={heading}>
        {step === 1
          ? 'Quel sujet souhaitez-vous faire avancer ?'
          : step === 2
            ? 'Comment préparer l’intervention ?'
            : 'À qui adresser la suite ?'}
      </h2>
      <p className="qualifier-note">
        {step === 3
          ? enabled
            ? 'Votre demande sera adressée à notre équipe.'
            : 'Nous préparons un e-mail que vous pourrez vérifier et envoyer depuis votre messagerie.'
          : 'Le cadrage nous aide à orienter le premier échange.'}
      </p>
      <fieldset disabled={busy || sent}>
        <legend className="sr-only">
          {step === 1
            ? 'Votre besoin'
            : step === 2
              ? 'La mission'
              : 'Vos coordonnées'}
        </legend>
        {step === 1 && (
          <>
            <label htmlFor="project-service">Sujet principal *</label>
            <select
              id="project-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Choisir un sujet</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
              <option value="audit-microsoft">Diagnostic Microsoft</option>
            </select>
            <label htmlFor="project-context">
              Votre contexte et le résultat attendu
            </label>
            <textarea
              id="project-context"
              rows={4}
              maxLength={1500}
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Votre outil actuel, la difficulté rencontrée, ce qui doit évoluer…"
            />
          </>
        )}
        {step === 2 && (
          <>
            <label htmlFor="project-mode">Accompagnement envisagé</label>
            <select
              id="project-mode"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              {[
                'À définir ensemble',
                'Conseil & intégration',
                'Consultant en assistance technique au TJM',
                'Équipe projet au forfait',
                'Support & services managés',
              ].map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
            <label htmlFor="project-timing">Votre calendrier</label>
            <select
              id="project-timing"
              value={timing}
              onChange={(e) => setTiming(e.target.value)}
            >
              {[
                'À préciser',
                'Besoin à traiter prochainement',
                'Projet dans les trois prochains mois',
                'Projet à préparer à plus long terme',
              ].map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
            <p className="qualifier-note">
              La disponibilité, le périmètre et les engagements sont précisés
              avant proposition.
            </p>
          </>
        )}
        {step === 3 && (
          <>
            <label htmlFor="project-name">Votre nom *</label>
            <input
              id="project-name"
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="project-company">Votre organisation *</label>
            <input
              id="project-company"
              autoComplete="organization"
              required
              maxLength={150}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <label htmlFor="project-email">E-mail professionnel *</label>
            <input
              id="project-email"
              autoComplete="email"
              type="email"
              required
              maxLength={254}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="qualifier-privacy">
              Ces informations servent à traiter votre demande professionnelle.{' '}
              <Link href="/politique-de-confidentialite">
                Politique de confidentialité
              </Link>
              .
            </p>
          </>
        )}
        <div hidden aria-hidden="true">
          <label htmlFor="project-website">Website</label>
          <input
            id="project-website"
            ref={website}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className="qualifier-actions">
          {step > 1 && (
            <button
              className="qualifier-back"
              type="button"
              onClick={() => changeStep(step - 1)}
            >
              Retour
            </button>
          )}
          <button type="submit" className="button button-primary">
            {busy
              ? 'Envoi…'
              : step < 3
                ? 'Continuer'
                : enabled
                  ? 'Envoyer ma demande'
                  : 'Préparer mon e-mail'}
            <Arrow diagonal />
          </button>
        </div>
      </fieldset>
      <p role="status" className="qualifier-status">
        {status}
      </p>
      {prepared && !sent && (
        <div className="prepared-request">
          <a className="button button-primary" href={mailto}>
            Ouvrir l’e-mail prêt à envoyer <Arrow diagonal />
          </a>
          <button className="text-link" type="button" onClick={copy}>
            Copier la demande
          </button>
          <details>
            <summary>Relire la demande</summary>
            <pre>{fullMessage}</pre>
          </details>
          <p>
            Adresse de réception :{' '}
            <a href="mailto:contact@lapepiite.com">contact@lapepiite.com</a>.
            L’ouverture de la messagerie ou la copie du texte ne confirme pas un
            envoi.
          </p>
        </div>
      )}
    </form>
  );
}
