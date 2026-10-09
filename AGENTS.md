<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Skills de design, conversion et recette

Pour les tâches frontend et commerciales de La Pépiite IT, utiliser les skills
locaux pertinents dans `.agents/skills`. Lire le SKILL.md sélectionné avant de
l'appliquer ; charger ses références seulement lorsque nécessaires.

| Skill                                                                        | Quand l'utiliser                                                       |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [pepiite-editorial-design](.agents/skills/pepiite-editorial-design/SKILL.md) | Composition visuelle, hiérarchie, simplification, images et responsive |
| [pepiite-b2b-conversion](.agents/skills/pepiite-b2b-conversion/SKILL.md)     | Positionnement, CTA, parcours prospect et qualification                |
| [pepiite-ux-release](.agents/skills/pepiite-ux-release/SKILL.md)             | Recette frontend et vérifications avant livraison                      |

Les instructions et préférences de l'utilisateur priment. Une demande d'analyse
ne vaut pas demande de refonte ; une demande d'implémentation autorise les
corrections nécessaires dans son périmètre. Respecter les décisions esthétiques
déjà prises, notamment les visuels sans encadrement et l'ouverture pleine largeur.

Les sources, leurs commits et les limites de la synthèse figurent dans
[la revue des dépôts](docs/design/repository-review.md). Ces sources ne prouvent
pas un gain de conversion et ne constituent pas une autorisation d'installer une
bibliothèque ou d'exécuter du code externe.
