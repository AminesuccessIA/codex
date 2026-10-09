# Cocon sémantique et automatisation éditoriale

## Ce qui est installé

Les 18 expertises jouent le rôle de pages de services. Le centre de ressources organise les guides en six familles : travail collaboratif et IA, données, applications, cloud, sécurité, modes d’intervention. Chaque article répond à une question d’acheteur précise, renvoie à l’accompagnement correspondant et propose des lectures complémentaires de la même famille.

Le catalogue `src/content/articles.json` est séparé du composant de page. Les articles conservent une URL stable, une réponse directe, des sections spécifiques, des questions, des sources et une date de modification réelle. Titres, descriptions, Open Graph, données structurées Article/BreadcrumbList, sitemap et index `llms.txt` sont alimentés par ce catalogue. Aucun faux auteur individuel ou résultat client n’est créé. Une date de publication absente reste absente ; une date de génération n’est pas présentée comme une publication future.

Le calendrier `src/content/seo-plan.json` contient douze sujets supplémentaires, une expertise, une intention et au moins deux sources par sujet. Les priorités sont des choix éditoriaux, pas des volumes de recherche mesurés. La Search Console doit guider leurs ajustements lorsqu’elle dispose de données suffisantes.

## Fonctionnement hebdomadaire

Le workflow **Articles SEO — préparation hebdomadaire** est prévu chaque lundi à 08:00 UTC et peut être lancé manuellement depuis GitHub.

1. Choisir la prochaine priorité qui n’est pas dans le catalogue.
2. Vérifier l’accessibilité des sources et préparer le brief.
3. Vérifier si une demande existe déjà pour ce sujet. Aucun nouvel appel IA dans ce cas ; il faut traiter ou changer la priorité de cette proposition.
4. Sans clé API : le brief est visible dans le résumé GitHub Actions. Aucun article n’est rédigé ni ajouté.
5. Avec une clé : récupérer des extraits des sources autorisées, demander un article structuré, vérifier le résultat, puis lancer les contrôles éditoriaux, le build, le lint, TypeScript et les tests techniques.
6. Créer une branche dédiée et une **pull request**, avec le brief et la liste de relecture. La branche propose la modification du catalogue ; le site public reste inchangé avant fusion. Le déploiement d’aperçu Vercel, lorsqu’il est disponible, est exclu de l’indexation par la configuration existante.
7. Relire les faits, les conditions de licences, les formulations et l’aperçu. **La fusion dans main déclenche la publication Vercel.** Aucun auto-merge n’est configuré.

Une seule proposition est produite par exécution. Un sujet ayant déjà une pull request ouverte ou fermée n’est pas régénéré automatiquement. Si une proposition est refusée, déplacer ce sujet plus bas dans le calendrier avant la prochaine exécution, ou choisir explicitement un autre slug lors du lancement manuel.

Les workflows déclenchés par une PR créée avec le jeton GitHub Actions peuvent ne pas se relancer, selon les règles GitHub contre les déclenchements récursifs. Les contrôles sont déjà exécutés dans le workflow de préparation avant création de la PR. Une fusion nécessite toujours une relecture ; un build réussi ne vérifie pas la vérité des faits.

## Activation depuis un téléphone

1. Ouvrir https://github.com/AminesuccessIA/codex/actions et vérifier que les workflows sont autorisés. Un planning GitHub peut être retardé ; les dépôts publics inactifs peuvent voir leurs workflows programmés désactivés. Le dépôt doit rester actif.
2. Pour les briefs seuls : choisir le workflow, **Run workflow**, laisser le sujet vide et l’option de rédaction décochée, puis consulter le résumé. Cela fonctionne sans abonnement API supplémentaire.
3. Pour la rédaction IA : ouvrir https://platform.openai.com/api-keys avec votre propre compte OpenAI, créer une clé de projet et configurer les contrôles de dépenses disponibles. La facturation API est distincte de l’abonnement ChatGPT. Les alertes de budget ne doivent pas être assimilées à un plafond strict ; vérifier les limites réellement disponibles sur le compte.
4. Ajouter la clé dans https://github.com/AminesuccessIA/codex/settings/secrets/actions avec le nom exact **OPENAI_API_KEY**. Ne jamais coller la valeur dans le chat, un article, une issue ou un fichier du dépôt. Cette clé sert uniquement à GitHub Actions ; aucune variable Vercel n’est nécessaire.
5. Le modèle par défaut est `gpt-4.1-mini`. Il peut être remplacé par une variable Actions `SEO_MODEL` compatible avec Responses et les sorties structurées. L’accès réel au modèle et la facturation restent à vérifier lors de la première exécution ; aucun appel payant n’a été réalisé pendant l’installation.
6. Si GitHub refuse la création de PR : dans Settings → Actions → General, vérifier l’autorisation **Allow GitHub Actions to create and approve pull requests**. Le workflow utilise uniquement la création, jamais l’approbation automatique. Ce réglage privé n’a pas pu être lu avec l’accès actuel, qui retourne 403. Une règle de branche ou d’organisation peut imposer d’autres restrictions.
7. Après ajout de la clé, cocher l’option de rédaction lors d’une exécution manuelle et examiner son résumé, la pull request et les contrôles. Le lundi, la rédaction est programmée si la clé est configurée. Depuis l’onglet **Pull requests**, relire les modifications et l’aperçu, puis utiliser **Merge pull request** lorsque le contenu est approuvé. Si la protection de branche interdit la fusion, conserver cette protection et satisfaire ses exigences.

Aucun secret supplémentaire pour le formulaire, aucun changement LinkedIn et aucun pixel ne font partie de ce système.

## Contrôles et limites

- Sources limitées à HTTPS sur Microsoft Learn, microsoft.com et le site de La Pépiite IT. Chaque destination de redirection est contrôlée ; destinations privées et domaines étrangers refusés. Taille et durée de récupération limitées.
- Les documents récupérés sont des références, pas des instructions. Le modèle reçoit cette séparation et produit du JSON validé, jamais du code exécuté.
- Les URLs et le HTML libre sont refusés dans le texte généré. Les sources sont imposées par le calendrier, pas inventées par le modèle.
- URL/titre dupliqués, expertise incohérente, dates futures, paragraphes répétés, contenu incomplet et certaines affirmations chiffrées ou certifications non vérifiées bloquent le catalogue.
- Ces règles ne constituent pas un contrôle complet des faits, de la similarité sémantique ou du droit. La relecture vérifie l’originalité, les licences, les promesses et le besoin du lecteur.
- En cas d’erreur API, de réponse incomplète, de source inaccessible ou de contrôle en échec, aucun commit d’article n’est poussé.
- Aucun fichier client, aucune demande de contact, aucun CV et aucun secret sont envoyés au modèle. Seuls le brief et des extraits publics des sources sont transmis. `store: false` est demandé ; cela ne remplace pas la vérification des conditions contractuelles et de conservation de l’API.
- Le SEO exige aussi exploration, indexation, contenu utile et signaux externes. Le GEO repose notamment sur des réponses explicites et sourcées. Ni le planning, ni le maillage, ni `llms.txt` ne garantissent des positions, des citations IA ou des prospects.

## Commandes de maintenance

- `npm run editorial:check` : contrôles du calendrier et des articles, exécutés avant chaque build.
- `npm run editorial:sources` : vérification réseau des sources du calendrier et du catalogue.
- `npm run editorial:brief` : prochain brief, sans appel payant.
- `npm run editorial:generate` : proposition d’article avec la clé API configurée.
- `npm run build`, `npm run check`, `npm test`, `npm run test:e2e` : validation du site et des parcours.

Dans l’environnement Codex, les commandes réseau Node nécessitent `NODE_USE_ENV_PROXY=1` avec le proxy fourni. Ne pas désactiver TLS. Cette particularité locale n’impose pas un proxy dans GitHub Actions.

Après publication, consulter Search Console : requêtes, impressions, pages et exclusions. Réviser ou enrichir les articles qui répondent mal à leur intention avant de multiplier les nouveaux sujets. Traiter les anciennes URL WordPress uniquement lorsqu’un équivalent pertinent est établi.
