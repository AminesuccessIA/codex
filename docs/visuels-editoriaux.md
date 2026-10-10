# Visuels éditoriaux

Les trois illustrations techniques ont été générées pour La Pépiite IT le 9 octobre 2026. Elles représentent des concepts d’architecture cloud, de circulation des données et de contrôle des accès. Elles ne représentent pas les installations, les équipes ou les réalisations d’un client, et ne constituent pas des visuels officiels Microsoft.

Les fichiers de production sont locaux dans `public/images` :

- `architecture-cloud.webp` : accueil, accompagnement et infrastructure.
- `data-automatisation.webp` : données, IA et applications métier.
- `identites-securite.webp` : cybersécurité et gestion des terminaux.

Chaque fichier mesure 1 440 × 960 pixels et pèse moins de 85 Ko. `ExpertiseVisual` utilise `next/image` pour les formats et tailles responsive. Les dimensions sont réservées pour éviter les décalages au chargement. L’image principale de l’accueil est préchargée ; les autres suivent le chargement différé par défaut. Les alternatives textuelles décrivent des illustrations, sans inventer de situation réelle.

Dans cette première version, la sélection par expertise était centralisée dans `serviceVisualKind`. Le schéma existant de l’écosystème Microsoft est conservé sur les autres pages qui l’utilisent. Aucun domaine d’images externe, traceur ou bibliothèque d’animation n’a été ajouté.

## Révision de la composition

À la suite de la relecture mobile, les cadres, les ombres et les légendes décoratives ont été retirés. L’accueil sépare le message commercial de l’image pleine largeur. La ligne répétant les services et le bandeau technologique redondant ont été supprimés. Sur les expertises, l’illustration est indépendante de la fiche de périmètre.

La méthode de contrôle repose sur la hiérarchie (une proposition et un CTA principal), la suppression des répétitions, une grille stable, le cadrage sans perte de contenu essentiel et la vérification dans un navigateur à 360, 390, 768, 1024 et 1440 pixels. Les règles du composant Image de la documentation Next.js installée ont été consultées. Le dépôt public Microsoft Fluent UI a été consulté comme référence de système de composants ; aucune bibliothèque ni mise en page n’en a été copiée.

## Première direction humaine validée (9 octobre 2026)

L’équipe a validé l’accueil présenté dans `/downloads/apercu-accueil.html`, puis autorisé sa publication et sa déclinaison sur les pages internes. Les trois nouveaux visuels sont des illustrations originales générées, montrant des professionnels fictifs ; ils ne doivent jamais être présentés comme des portraits de salariés, de clients ou de consultants identifiés.

- `collaboration-projet.webp` : collaboration et cadrage des projets Microsoft.
- `expertise-infrastructure.webp` : expertise technique, infrastructure et renfort des équipes.
- `accompagnement-microsoft.webp` : mise en œuvre, adoption et transmission aux équipes.

Les trois fichiers locaux mesurent 1 440 × 960 pixels, entre 95 et 125 Ko. Ils remplacent les illustrations techniques dans les pages commerciales. L’accueil utilise trois images distinctes ; les expertises associent une ouverture adaptée à leur sujet à une seconde illustration de méthode. Les pages institutionnelles, le catalogue, les scénarios et les ressources reprennent la même direction, avec une composition adaptée au rôle de chaque page. Les pages légales conservent leur format documentaire.

Le composant utilise `next/image`, des dimensions réservées, des tailles responsive correspondant aux colonnes et une priorité limitée au visuel principal de l’accueil. Aucun chargement externe d’images, traceur ou dépendance supplémentaire n’est ajouté. Le formulaire et son traitement demeurent hors périmètre ; les visuels de Contact et Diagnostic sont placés après le parcours principal.

La maquette autonome reste accessible à son adresse de revue, exclue de l’indexation. Elle représente la proposition validée et ne remplace pas les composants Next.js de production.

### Recette de la déclinaison

Build et TypeScript validés, lint sans avertissement et format vérifié. Les 21 tests navigateur existants passent : 37 pages aux largeurs 360, 390, 768, 1 024 et 1 440 px, menus, FAQ, liens internes, canoniques et données structurées. Une seconde passe charge et décode les images des 37 pages à 390 et 1 440 px ; 32 contrôles axe sur 16 pages représentatives ne signalent aucune violation des règles WCAG A/AA examinées. Ces contrôles ne constituent pas une certification de conformité complète. Les captures des ouvertures et de la méthode ont été relues dans Chromium.

Le diff confirme l’absence de modification des composants de formulaire, de qualification, de l’API de contact et des paramètres de conformité. Les scénarios de test ne démontrent pas une réception réelle d’e-mail.

## Visuels dédiés à chaque page (10 octobre 2026)

La relecture a demandé de supprimer toute réutilisation d’un même visuel entre les pages. Les trois scènes originales de l’accueil sont désormais réservées à l’accueil. Les 29 nouvelles illustrations photographiques ont chacune une affectation unique, détaillée dans `docs/design/visual-jobs.json` et le catalogue `editorialVisuals`. Chaque scène est créée pour son sujet : collaboration, revue des licences, datacenter, IA, analyse des données, processus métier, sécurité, gestion des terminaux ou relation professionnelle.

Les méthodes des 18 expertises et les 8 guides disposent de schémas propres à leur contenu, dessinés dans le composant `TopicDiagram`. Les représentations illustrent des concepts et des points de cadrage ; elles ne sont pas des captures d’interfaces Microsoft ou des résultats clients. Les futurs guides disposent d’un schéma fondé sur leurs propres sections, sans reprendre une photo générique.

Les 32 photos du site, comprenant les 3 photos de l’accueil, ne sont pas réutilisées sur une autre page. Les 26 schémas ont également un contenu distinct. Le test navigateur vérifie leurs affectations, l’absence de contenu d’image identique et la disponibilité des fichiers. Les marques, les logos clients confirmés et les éléments de navigation partagés restent des éléments d’identité communs.

L’ancienne adresse de maquette `/downloads/apercu-accueil.html` redirige vers l’accueil désormais publié : le lien partagé avec l’équipe demeure utile et n’expose plus une copie des visuels. Le formulaire, ses paramètres et ses destinataires sont conservés.
