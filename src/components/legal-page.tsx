import Link from 'next/link';
import { Label } from './button';
export function LegalPage({
  title,
  children,
}: {
  title: string;
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
      <div className="legal-content">{children}</div>
    </main>
  );
}
