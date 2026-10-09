# Catalogue Microsoft et positionnement partenaire

## Analyse

Analyse de la page https://arpeje.fr/distributeur-solutions-microsoft/ et de 22 pages liées : catalogue, Microsoft 365, Copilot, Azure, Power BI, Power Apps, Power Automate, ERP, CRM, téléphonie, services, accompagnement, références, contact et ressources. Le bénéfice retenu est une lecture par produit et par besoin, avec des parcours vers les services. Les textes, offres, témoignages, statistiques et certifications du concurrent ne sont pas repris.

La Pépiite IT a confirmé mettre en œuvre les solutions Microsoft. Son statut de partenaire Microsoft avait déjà été confirmé. La direction artistique, les références clients et le fonctionnement de contact sont conservés.

## Nouvelles URL

| Page                                 | URL                     |
| ------------------------------------ | ----------------------- |
| Solutions Microsoft                  | `/solutions-microsoft`  |
| Partenaire Microsoft                 | `/partenaire-microsoft` |
| Power BI                             | `/power-bi`             |
| Microsoft Fabric                     | `/microsoft-fabric`     |
| Power Apps                           | `/power-apps`           |
| Power Automate                       | `/power-automate`       |
| Dynamics 365 CRM                     | `/dynamics-365`         |
| Business Central                     | `/business-central`     |
| Téléphonie Teams                     | `/teams-telephonie`     |
| Microsoft Intune                     | `/intune`               |
| Windows 365 et Azure Virtual Desktop | `/windows-365`          |
| Azure DevOps                         | `/azure-devops`         |

Les dix pages produit reprennent le cadre visuel des expertises existantes, avec contenu propre : enjeu, accompagnement, livrables, quatre étapes de méthode, bénéfices, feuille de route, trois questions et liens connexes. Les descriptions précisent les contraintes propres à chaque solution (licences et diffusion Power BI, capacité Fabric, migration ERP, raccordement opérateur, protection des appareils, etc.).

## Cohérence du site

- Catalogue regroupé en cinq familles ; navigation par besoin et accès à chaque offre.
- Menu d’expertises regroupé par famille et défilable sur les petits écrans.
- Mention partenaire de l’accueil reliée à la page dédiée.
- Data et gestion d’entreprise ajoutées au répertoire d’expertises de l’accueil.
- Liens catalogue et partenaire dans le pied de page et À propos.
- Pages Microsoft 365, Azure, IA, cybersécurité et Power Platform complétées avec les produits et usages associés.
- Power Platform oriente vers les pages Power Apps, Power Automate et Power BI.
- Schémas Service et Breadcrumb pour chaque expertise ; WebPage et ItemList pour les nouvelles pages de présentation.
- Sitemap : 27 pages, avec canoniques, titres, descriptions et Open Graph.
- Pas de modification de l’envoi e-mail, de ses validations ou de ses secrets. La sélection des expertises suit automatiquement le catalogue existant.

## Sources Microsoft

Les liens de documentation de chaque nouvelle offre sont conservés dans `src/lib/microsoft-offers.ts`. Les dix sources Microsoft Learn ou Azure ont répondu HTTP 200 lors de la vérification. Les pages décrivent les produits sans annoncer de disponibilité universelle par pays, de droits de licence implicites, de financement de formation ou de résultats chiffrés.

La page partenaire renvoie vers la documentation officielle du programme : https://learn.microsoft.com/fr-fr/partner-center/membership/mpn-overview. Le badge officiel et le lien de la fiche publique de La Pépiite IT restent à fournir. Aucun badge, niveau de certification ou profil d’annuaire n’est fabriqué.

Une fois le lien fourni et vérifié, `NEXT_PUBLIC_MICROSOFT_PARTNER_PROFILE_URL` peut être renseigné dans Vercel, puis le projet reconstruit. Il s’agit d’une URL publique, pas d’un secret. Les hôtes autorisés sont partner.microsoft.com, appsource.microsoft.com et marketplace.microsoft.com. En l’absence de ce lien, seuls les liens officiels généraux apparaissent ; il n’y a aucun champ à compléter affiché aux visiteurs.

## Validation

- Build de production réussi : les 12 nouvelles pages sont générées statiquement.
- TypeScript, ESLint et Prettier réussis.
- 18 tests Playwright réussis ; 27 pages contrôlées à 360, 390, 768, 1024 et 1440 px.
- Liens internes, canoniques, descriptions, Open Graph, JSON-LD, sitemap, redirections et vraies 404 contrôlés.
- Menu élargi testé sur mobile et desktop, au clic et au clavier ; fermeture et navigation vers les premiers et derniers groupes vérifiées.
- 36 captures des nouvelles pages à 390, 768 et 1440 px, complétées par des vues détaillées des en-têtes, du catalogue data et du menu. Relecture visuelle des vues clés effectuée.
- Contrôle axe WCAG A/AA sur les 12 nouvelles pages à 390 et 1440 px : aucune violation remontée.
- Les 11 tests unitaires existants du contact continuent de passer ; aucune modification des mécanismes d’envoi.
