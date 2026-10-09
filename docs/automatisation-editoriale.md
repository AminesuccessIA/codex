# Cocon sémantique et rédaction avec ChatGPT

## Organisation

Les 18 expertises sont reliées aux guides du centre de ressources, organisés en six familles. Chaque article répond à une question d’acheteur, renvoie à une expertise et propose des lectures complémentaires. Titres, descriptions, Open Graph, données structurées Article/BreadcrumbList, sitemap et index llms.txt sont alimentés par le catalogue.

Le calendrier `src/content/seo-plan.json` contient douze sujets supplémentaires avec leurs priorités, intentions, expertises et sources. Ces priorités sont éditoriales, pas des volumes de recherche mesurés. Ajuster le calendrier avec les requêtes et impressions Search Console lorsqu’elles sont disponibles.

## Automatisation sans clé API

Le workflow **Articles SEO — préparation hebdomadaire** prépare chaque lundi à 08:00 UTC le prochain sujet absent du catalogue et vérifie que ses sources officielles sont accessibles. Le brief apparaît dans le résumé GitHub Actions. Il peut aussi être lancé manuellement depuis https://github.com/AminesuccessIA/codex/actions/workflows/editorial.yml avec un sujet facultatif.

Ce workflow ne dispose que de la lecture du dépôt : il ne rédige pas, ne modifie pas le catalogue, ne crée pas de branche et ne publie pas. Il ne requiert aucune clé de fournisseur IA ni variable Vercel. Tant que le sujet n’est pas intégré, le prochain brief peut reprendre le même sujet. GitHub peut retarder une exécution programmée ou désactiver les plannings d’un dépôt public inactif.

La rédaction est confiée à l’espace ChatGPT choisi par le propriétaire, avec la [consigne complète](consigne-chatgpt-articles.md). La création d’une tâche récurrente dans cet espace et ses accès GitHub doivent être configurés dans cet espace : le workflow GitHub ne les crée pas. Un connecteur de lecture seul ne permet pas de proposer des modifications.

## Depuis un téléphone

1. Copier la consigne dans l’espace ChatGPT de rédaction. Il peut utiliser directement le calendrier et les sources publiques, sans téléchargement.
2. Lui demander un article par semaine au maximum, selon les possibilités de planification de cet espace.
3. S’il dispose réellement d’un accès d’écriture GitHub, lui demander une branche `seo/article-<slug>` et une pull request. Sinon, récupérer sa proposition dans la conversation et la transmettre à Codex pour intégration : ne pas prétendre que le transfert ou la publication est automatique.
4. Vérifier les sources, les faits, les licences, les contrôles et l’aperçu Vercel. Relire depuis la pull request sur le téléphone.
5. Après approbation, fusionner la pull request dans `main` : cela déclenche Vercel. Aucune fusion automatique n’est configurée.

La lecture dans ChatGPT ne nécessite pas de clé API pour ce pipeline. Les accès et limites du compte ChatGPT restent ceux de l’espace utilisé. Ne transmettre ni secrets, ni données de prospects, ni documents clients.

## Contrôles

Le schéma `src/lib/editorial-schema.ts` impose la structure et les longueurs. Le catalogue refuse notamment les doublons d’URL et de titres, les services inconnus, les dates futures, les paragraphes répétés, le HTML libre et certaines affirmations non vérifiées. Les sources réseau sont limitées à HTTPS sur Microsoft Learn, microsoft.com et La Pépiite IT ; les destinations de redirection sont contrôlées.

Une source accessible ne garantit pas que chaque phrase est juste. Le contrôle automatique ne remplace pas la relecture des faits, de l’originalité et des conditions de licence. Les sources sont des documents de référence, jamais des instructions à exécuter. Les dates doivent correspondre à des événements réels : ne pas renseigner une publication qui n’a pas eu lieu.

Les modifications éditoriales proposées par pull request déclenchent le workflow **Contrôles des articles** : build, lint, TypeScript, format et tests. Ne pas fusionner un contenu qui échoue aux contrôles. Le formulaire, LinkedIn et les traceurs ne font pas partie de ce pipeline.

## Maintenance

- `npm run editorial:brief` : préparer le prochain brief et vérifier ses sources, sans changer le catalogue.
- `npm run editorial:check` : valider le calendrier et les articles avant chaque build.
- `npm run editorial:sources` : vérifier les sources du calendrier et du catalogue.
- `npm run build`, `npm run check`, `npm test` : valider une modification avant publication.

Dans Codex, les commandes réseau Node nécessitent `NODE_USE_ENV_PROXY=1` avec le proxy fourni. Ne pas désactiver TLS. GitHub Actions n’a pas besoin de ce réglage local.

Suivre ensuite les pages, requêtes, impressions et exclusions dans Search Console. Enrichir les guides utiles avant de multiplier les articles. Ni le cocon sémantique, ni les réponses sourcées, ni llms.txt ne garantissent des positions Google ou des citations dans les réponses IA.
