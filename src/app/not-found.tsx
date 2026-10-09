import { Button, Label } from '@/components/button';
export default function NotFound() {
  return (
    <main id="contenu" className="shell editorial-hero">
      <Label>404 / PAGE INTROUVABLE</Label>
      <h1>
        Reprenons
        <br />
        <span>le bon chemin.</span>
      </h1>
      <p className="hero-description">
        Cette adresse ne correspond à aucune page du site.
      </p>
      <Button href="/">Retour à l’accueil</Button>
    </main>
  );
}
