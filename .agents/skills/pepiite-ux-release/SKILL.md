---
name: pepiite-ux-release
description: 'Vérifier une modification frontend de La Pépiite IT avant livraison : responsive, navigation clavier, états des interactions, images, liens et référencement technique. Utiliser pour une recette, un contrôle visuel ou avant publication après un changement UX ; ne pas confondre build réussi, test simulé et comportement de production vérifié.'
---

# Recette UX et livraison

Vérifier la version réellement livrée, avec une profondeur proportionnée au changement. Utiliser les outils disponibles et annoncer toute vérification indisponible.

## Préparer

1. Lire AGENTS.md, les scripts package.json, la configuration Playwright et les changements actuels. Préserver les modifications présentes et inspecter les éventuelles mises à jour GitHub avant de pousser.
2. Définir les routes touchées et les composants partagés. Un changement du header, d’un modèle d’expertise ou d’un style global peut concerner toutes les pages.
3. Lire [la checklist](references/release-checklist.md). Consulter les références Headless UI et React Aria de [la revue](../../../docs/design/repository-review.md) pour les états complexes.
4. Terminer le build avant d’inspecter un serveur qui utilise sa sortie. Une reconstruction pendant la recette peut invalider le serveur et produire de faux défauts. Démarrer un serveur frais après une nouvelle compilation.

## Vérifier les états et l’accès

- Tester les liens et boutons avec leur bonne sémantique : lien pour naviguer, bouton pour une action. Ne pas employer un div cliquable sans justification et comportement complet.
- Tester Tab, Shift+Tab, Enter, Space lorsqu’applicable et Escape. Vérifier ordre logique, focus visible et restitution du focus à la fermeture d’un vrai dialogue.
- Pour un dialogue modal, vérifier focus initial, confinement, fermeture, arrière-plan inerte et défilement. Pour un menu non modal, ne pas imposer ces règles arbitrairement. Escape ne doit pas voler le focus lorsque rien n’est ouvert.
- Vérifier les états hover, focus, pressed, disabled, pending, erreur et confirmation. Ne pas déduire le fonctionnement tactile d’un hover desktop.
- Vérifier champs, label/legend, descriptions et erreurs associées. Annoncer les changements utiles sans multiplier les alertes. Préserver la saisie après une erreur.

## Contrôler le rendu

- Ouvrir les routes touchées à 360, 390, 768, 1024 et 1440 px. Examiner le premier écran et les zones longues : menus, listes, images, FAQ, CTA et pied de page.
- Attendre les polices et le décodage des images avant les captures. Vérifier également qu’aucun décalage important n’apparaît au chargement.
- Mesurer le débordement horizontal et la géométrie des images pleine largeur. Un aspect-ratio cohérent n’est pas une preuve d’un cadrage réussi : inspecter le sujet visuellement.
- Tester le zoom et l’agrandissement du texte ; éviter une navigation ou une action cachée par un header fixe, une modale ou le clavier virtuel.
- Vérifier les contrastes : WCAG AA demande notamment 4,5:1 pour le texte normal et 3:1 pour le grand texte selon sa définition. Les contrôles et indicateurs visuels concernés ont leurs exigences propres.
- Viser des cibles tactiles confortables, environ 44 px lorsque possible. Ce repère de projet ne doit pas être présenté comme le minimum universel WCAG 2.2 AA, dont le critère 2.5.8 prévoit 24 px et des exceptions.
- Respecter prefers-reduced-motion. Ne pas rendre une action essentielle dépendante d’une animation.
- Un outil axe peut détecter certaines violations ; son absence de signal ne prouve pas une conformité complète. Le tester seulement s’il est réellement disponible.

## Vérifier la fiabilité et le SEO

- Contrôler erreurs console, pageerror, HTTP, assets manquants et liens internes. Conserver les vraies 404 pour les routes sans équivalent confirmé.
- Vérifier titre, description, un h1 pertinent et une canonique cohérente. Le domaine actuel est https://www.lapepiite.com ; vérifier les redirections sans changer ce choix silencieusement.
- Pour un ajout éditorial, vérifier découverte via liens internes, sitemap, métadonnées Article et données structurées pertinentes. Ne pas ajouter de balisage de témoignage, note ou certification non justifié.
- Vérifier les images : poids, tailles téléchargées, dimensions réservées, alternatives et priorité de chargement. Un score Lighthouse local ne remplace pas les Core Web Vitals de terrain.
- Respecter l’exclusion d’indexation des aperçus existante. Ne pas ajouter un noindex à la production pour corriger un aperçu.

## Exécuter et livrer

Utiliser les scripts existants : build, lint/TypeScript/format, tests unitaires ou navigateur nécessaires. Ne pas créer de tests qui recopient l’implémentation pour une correction cosmétique réversible. Après succès, ne répéter ou élargir que si une modification, une erreur ou une incertitude le justifie.

Pour une modification importante, présenter le résumé avant publication. Respecter l’autorisation de l’utilisateur déjà donnée ; ne pas déployer ni annoncer une publication si une autorisation nécessaire manque. Si GitHub a avancé, inspecter et intégrer les changements ; ne jamais forcer le push pour contourner ce cas.

Après une publication autorisée, vérifier le statut du bon commit et le comportement public pertinent. Un push GitHub seul ne prouve pas un déploiement Vercel réussi. Ne pas annoncer une réception email, une indexation Google ou une hausse des prospects sur la base d’un test simulé.

Livrer un bilan séparant corrigé, testé, publié et bloqué ; nommer précisément les contrôles non exécutés. Arrêter seulement les serveurs démarrés pour cette recette, pas ceux d’une autre session.
