# Skills de design et de conversion

Trois skills locaux transforment l'étude de six dépôts en méthodes réutilisables
pour La Pépiite IT. Ils ne modifient ni le site public ni le formulaire à leur
installation, et n'ajoutent aucune dépendance UI ou service de mesure.

| Skill                                                                              | Résultat attendu                                                          |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [pepiite-editorial-design](../../.agents/skills/pepiite-editorial-design/SKILL.md) | Composition épurée, hiérarchie lisible et images adaptées au responsive   |
| [pepiite-b2b-conversion](../../.agents/skills/pepiite-b2b-conversion/SKILL.md)     | Offres compréhensibles, CTA adaptés et parcours de qualification fiables  |
| [pepiite-ux-release](../../.agents/skills/pepiite-ux-release/SKILL.md)             | Recette visuelle et technique avant livraison, avec résultats vérifiables |

## Utilisation

Depuis une session Codex disposant du dépôt, les skills sont stockés dans
`.agents/skills`, emplacement prévu par la documentation officielle. La sélection
peut se faire selon la tâche ou par invocation explicite :

- `$pepiite-editorial-design` pour une composition ou une simplification visuelle.
- `$pepiite-b2b-conversion` pour un audit ou une amélioration des parcours prospects.
- `$pepiite-ux-release` pour contrôler une modification avant livraison.

AGENTS.md fournit aussi les chemins pour permettre leur lecture directe. Si une
session ne les voit pas dans son catalogue, relancer la session ou lire les
SKILL.md depuis le dépôt ; ne pas annoncer un chargement qui n'a pas eu lieu.

Dans un autre espace ChatGPT, fournir les liens des skills et de la revue. La
capacité à lire le dépôt, exécuter les contrôles ou proposer une modification doit
être disponible dans cet espace ; la présence de ces fichiers ne la crée pas.

## Sources et maintenance

La [revue des dépôts](repository-review.md) distingue observations de code,
applications proposées et limites. Le [manifeste](repository-sources.json)
référence les vingt fichiers examinés avec leurs commits et empreintes.

Actualiser les références lorsque les outils, les contraintes du site ou les
comportements étudiés changent. Comparer le code avant de modifier un principe,
et conserver les décisions de marque validées par l'utilisateur. Le terme
« meilleur » n'est pas traité comme un classement par étoiles GitHub ni comme
une preuve de conversion.
