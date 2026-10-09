# Audit de finalisation — 9 octobre 2026

## Périmètre et état

Dépôt AminesuccessIA/codex, version locale corrigée ; sites publics observés : https://www.lapepiite.com et https://codex-ten-ochre.vercel.app. Aucun push ni déploiement effectué pendant cet audit. La version publique ne bénéficie donc pas encore des corrections locales.

Le domaine nu redirige actuellement vers www. Canonique retenu : **https://www.lapepiite.com**. Alignement des canonicals, Open Graph, Twitter, sitemap, redirection du domaine nu et liens internes. `/realisations` redirige en 308 vers `/cas-d-usage`. Les déploiements preview Vercel sont exclus de l’indexation par robots ; les documents légaux incomplets sont noindex et exclus du sitemap. L’image de partage est locale : `/social-card.png`.

## Informations vérifiées

Sources : [Pappers](https://www.pappers.fr/entreprise/la-pepiite-888294733) et [Annuaire des entreprises](https://annuaire-entreprises.data.gouv.fr/entreprise/la-pepiite-888294733), consultés le 9 octobre 2026. LA PEPIITE, SAS, SIREN 888294733, siège SIRET 88829473300025, 32 boulevard du Port 95000 Cergy, RCS Pontoise, capital 2 000 €, TVA FR10888294733. Le directeur de publication, Julien Ezonga, a été confirmé directement par le responsable. La conservation des demandes sans contrat est fixée à 12 mois après le dernier échange ; la suppression doit être appliquée dans Google Workspace, elle n’est pas automatisée par le site.

Le responsable confirme les clients en Europe et Afrique et les domaines de profils IA, cybersécurité, cloud, datacenter et réseau. La page À propos les présente avec qualification préalable. Aucun CV, certification, disponibilité, référence client ou résultat n’est inventé. Le responsable confirme l’assistance technique, l’équipe projet/forfait et les services managés ; la présentation distingue le consultant au TJM du projet à périmètre forfaitaire. Les cas d’usage restent des exemples.

## Formulaire et confidentialité

Suppression de la case obligatoire présentée comme un consentement. Notice dédiée, lien proche du formulaire, intérêt légitime proposé pour les demandes professionnelles, à valider par le responsable avec examen de nécessité et mise en balance. Pas d’inscription automatique à une newsletter.

Google Workspace/Gmail OAuth uniquement, aucun Resend. Destination conservée : **contact@lapepiite.com**. Le renouvellement OAuth réel échoue encore avec HTTP 401 `unauthorized_client`. Aucun message réel n’a été envoyé. Réautoriser le même client OAuth avec accès offline et `gmail.send`, vérifier les restrictions administrateur et enregistrer le refresh token dans les secrets sécurisés. Voir [les instructions Google](google-workspace.md). Ne pas partager de secret dans le chat.

Le formulaire et l’API sont fermés par défaut. Il faut compléter et vérifier :

- `LEGAL_HOST_NAME`, `LEGAL_HOST_ADDRESS`, `LEGAL_HOST_CONTACT` : coordonnées de l’hébergeur effectif selon contrat, distinct du registrar WordPress.
- `PRIVACY_EMAIL_PROCESSOR`, `PRIVACY_HOST_PROCESSOR`, `PRIVACY_TRANSFER_DETAILS` : entités contractuelles, localisation et garanties de transfert vérifiées dans les contrats Google Workspace et Vercel.

Les champs légaux d’immatriculation sont préremplis avec les sources publiques vérifiées et peuvent être remplacés par les variables `LEGAL_*` documentées dans `.env.example`.

Après validation uniquement : `CONTACT_PRIVACY_APPROVED=true`, `CONTACT_EMAIL_VERIFIED=true` (réception contrôlée dans la boîte cible), `CONTACT_ABUSE_PROTECTION_VERIFIED=true` (protection de production contrôlée), puis `CONTACT_FORM_ENABLED=true`. Les indicateurs constituent des attestations administratives, pas des tests automatiques. Un échec d’envoi reste un échec dans l’interface. Ajouter les variables et secrets côté **Vercel Production** ; ceux de Codex ne s’y transfèrent pas.

## Production Vercel : limites de vérification

CLI présente mais non authentifiée, absence de token et de liaison locale au projet. Les secrets, firewall, limitation de débit, options Analytics/Speed Insights, région d’exécution, journaux, conservation et configuration des domaines dans le compte n’ont pas pu être inspectés. Aucun réglage de compte n’a été modifié.

Aucun outil publicitaire ou de mesure n’apparaît dans le code applicatif audité. Cette observation ne valide pas toutes les options de la plateforme. Pas de bandeau cookies ajouté. Vérifier scripts, cookies et services activés au compte avant publication ; réévaluer le consentement si un traceur non essentiel est ajouté.

## Recette

Build Next.js, ESLint sans avertissement, types et formatage contrôlés. Tests unitaires : transport Gmail simulé, non-confirmation des erreurs et verrouillage de conformité. Tests Chromium : 14 pages à 360, 390, 768, 1024 et 1440 px, absence de débordement horizontal et d’erreurs JavaScript, canonicals/descriptions, liens internes, menu mobile et Escape/focus, formulaire fermé, redirections et brouillons légaux explicites. Contrôle axe WCAG A/AA sur les 14 pages à 390 et 1440 px : aucune violation automatique détectée ; cela ne constitue pas une certification d’accessibilité. Captures et examen visuel de l’accueil desktop/mobile, contact mobile et pages légales.

L’ouverture du formulaire reste bloquée par les éléments ci-dessus. Après cet audit, le responsable a demandé la publication de la version avec formulaire fermé, contact direct par e-mail et champs légaux manquants explicitement signalés. Aucun forfait d’hébergement WordPress ou réglage DNS/MX n’a été modifié.

Le contrôle navigateur des URL publiques est limité par le certificat du proxy de cet environnement (`ERR_CERT_AUTHORITY_INVALID`). Aucune vérification TLS n’a été désactivée. Les vérifications visuelles et axe portent sur le build local, les observations publiques sur les réponses HTTP disponibles.
