import Link from 'next/link';
import { legalValue } from '@/lib/compliance';
import { Label } from './button';
export function LegalPage({
  title,
  approved,
  children,
}: {
  title: string;
  approved: boolean;
  children: React.ReactNode;
}) {
  return (
    <main id="contenu" className="shell legal-page">
      <div className="breadcrumb">
        <Link href="/">Accueil</Link>
        <span>/</span>
        <span>{title}</span>
      </div>
      <Label>INFORMATIONS & TRANSPARENCE</Label>
      <h1>{title}</h1>
      {!approved && (
        <div className="legal-warning" role="note">
          <strong>Document à compléter avant publication.</strong>
          <p>
            Les champs marqués « À compléter » ne constituent pas des
            informations vérifiées. Le formulaire automatique reste fermé tant
            que les informations et son fonctionnement ne sont pas validés.
          </p>
        </div>
      )}
      <div className="legal-content">{children}</div>
    </main>
  );
}
export function LegalValue({ name }: { name: string }) {
  const value = legalValue(name);
  return value ? (
    <>{value}</>
  ) : (
    <span className="legal-placeholder">À compléter — {name}</span>
  );
}
