# Visuels éditoriaux

Les trois illustrations techniques ont été générées pour La Pépiite IT le 9 octobre 2026. Elles représentent des concepts d’architecture cloud, de circulation des données et de contrôle des accès. Elles ne représentent pas les installations, les équipes ou les réalisations d’un client, et ne constituent pas des visuels officiels Microsoft.

Les fichiers de production sont locaux dans `public/images` :

- `architecture-cloud.webp` : accueil, accompagnement et infrastructure.
- `data-automatisation.webp` : données, IA et applications métier.
- `identites-securite.webp` : cybersécurité et gestion des terminaux.

Chaque fichier mesure 1 440 × 960 pixels et pèse moins de 85 Ko. `ExpertiseVisual` utilise `next/image` pour les formats et tailles responsive. Les dimensions sont réservées pour éviter les décalages au chargement. L’image principale de l’accueil est préchargée ; les autres suivent le chargement différé par défaut. Les alternatives textuelles décrivent des illustrations, sans inventer de situation réelle.

La sélection par expertise est centralisée dans `serviceVisualKind`. Le schéma existant de l’écosystème Microsoft est conservé sur les autres pages qui l’utilisent. Aucun domaine d’images externe, traceur ou bibliothèque d’animation n’a été ajouté.
