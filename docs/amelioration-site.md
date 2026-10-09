# Enrichissement du site La Pépiite IT — 9 octobre 2026

## État de la livraison

Base synchronisée avec le commit public `453b897` (la ligne ajoutée au README est conservée). Améliorations préparées et testées localement. Aucun push ni déploiement effectué pendant cette passe. La publication doit faire l’objet d’un résumé des changements avant toute mise en production.

**Le formulaire reste hors périmètre** : aucun changement aux fichiers Contact, formulaire, API, schéma, transport Gmail, conformité, variables ou secrets. Aucun nouveau mode d’envoi et aucun test e-mail réel.

## Analyse de la base

La direction artistique est cohérente : palette minérale, sections sombres, accent citron, DM Sans et Space Grotesk, grilles éditoriales et navigation complète. Elle est conservée. Les pages expertise présentaient déjà le problème, le périmètre et les livrables ; la méthode, les critères d’évaluation et la prochaine étape étaient peu développés. Les modes commerciaux étaient surtout exposés dans À propos. Cas d’usage comportait trois exemples sans détail de livrables ni de recette. Aucun JSON-LD ne figurait dans les pages publiques observées.

La référence `audit-microsoft.html` est utilisée comme source éditoriale et visuelle, pas comme instruction d’exploitation. Ses indications Framer, sa démonstration de formulaire, le statut Partner, la gratuité et les 30 minutes ne sont pas transférés. Les services ajoutés à la présentation existaient déjà dans le site : conseil/intégration, assistance technique et mise à disposition de consultants au TJM, équipe projet au forfait, support et services managés.

## Audit des pages et changements

| Page                         | État initial / point à renforcer                                 | Enrichissement retenu                                                                                                                      |
| ---------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Accueil                      | Positionnement ESN clair, modes d’intervention peu visibles      | Accroche précisée et présentation synthétique des quatre modes ; audit toujours secondaire                                                 |
| Microsoft 365                | Gouvernance, migration et adoption déjà présentes                | Méthode liée aux usages, pilote, transmission et suivi d’adoption ; FAQ sur les parcours métiers                                           |
| Licences                     | Inventaire et scénarios existants                                | Méthode dépenses/affectations/usages/échéances, arbitrages budgétaires et FAQ sans changement imposé de fournisseur                        |
| Azure & Cloud                | Socle, migration et FinOps existants                             | Séquence dépendances/socle/pilote/exploitation, lecture des coûts et livrables de reprise                                                  |
| Copilot & IA                 | Cadrage et prérequis existants                                   | Critères qualité/confidentialité, contrôle humain, décision d’étendre ou d’arrêter ; FAQ avant et après déploiement                        |
| Power Platform               | Processus, flux et recette existants                             | Analyse des exceptions, pilote limité, maintenance et FAQ sur le choix d’un premier processus                                              |
| Cybersécurité                | Périmètre de protections déjà défini                             | Priorisation, remédiations validées et suivi ; distinction du diagnostic et d’un test d’intrusion                                          |
| Conseil & Intégration        | Audit et modes évoqués, méthode générale                         | Quatre étapes issues du HTML, accès au moindre privilège, arbitrages et feuille de route ; diagnostic toujours facultatif                  |
| Support & services managés   | Conditions contractuelles explicites                             | Reprise, organisation, vérification et revue du service ; aucune couverture ou délai inventé                                               |
| Cas d’usage                  | Trois exemples de projets                                        | Six scénarios avec contexte, démarche, livrables, critères de validation et mode à cadrer ; aucune référence réelle ni résultat revendiqué |
| À propos                     | Modes et qualification dispersés dans plusieurs paragraphes      | Présentation complète et centralisée des modes ; compétences confirmées conservées sans CV, disponibilité ni certification inventés        |
| Contact                      | Formulaire fermé et contact direct disponibles                   | Audité en lecture et vérifié par la suite existante ; code et fonctionnement inchangés                                                     |
| Mentions légales             | Données vérifiées et champs contractuels explicitement manquants | Aucun changement ; brouillon noindex conservé                                                                                              |
| Politique de confidentialité | Informations connues et éléments à compléter visibles            | Aucun changement ; brouillon noindex conservé                                                                                              |

## Répartition de la référence HTML

| Contenu de référence          | Destination                           | Adaptation                                                                                                           |
| ----------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Licences et coûts             | Licences, scénario renouvellement     | Affectations, usages, contraintes contractuelles et hypothèses de coûts ; pas d’économie garantie                    |
| Adoption Microsoft 365        | Microsoft 365, scénario collaboration | Groupes pilotes, pratiques réelles, supports par métier et indicateurs à convenir                                    |
| Copilot et IA                 | Copilot & IA, scénario pilote         | Données, permissions, critères de qualité et décision après observations                                             |
| Automatisation                | Power Platform, scénario validation   | Processus, exceptions, connecteurs, recette et maintenance                                                           |
| Gouvernance et cybersécurité  | Microsoft 365 et Cybersécurité        | Gouvernance des espaces d’une part, revue ciblée des protections d’autre part                                        |
| Méthode                       | Les huit expertises                   | Structure commune en quatre étapes avec contenus propres à chaque domaine                                            |
| Livrables et feuille de route | Les huit expertises et Cas d’usage    | Livrables existants conservés ; séquences indicatives et critères de validation, sans résultats clients              |
| FAQ                           | Expertises pertinentes                | Fournisseur → Licences ; prérequis Copilot → IA ; accès/calendrier → Conseil ; limites du diagnostic → Cybersécurité |

Les paragraphes génériques de périmètre sont remplacés par des introductions spécifiques. La méthode, les livrables et les bénéfices ont des fonctions différentes : actions réalisées, éléments remis et objectifs à évaluer. Les résumés d’accueil renvoient aux modalités détaillées sans reproduire leur intégralité.

## Cohérence visuelle et navigation

Ajouts sous forme de listes, étapes et colonnes ; aucun dégradé ou visuel de stock ajouté. Sommaire sur chaque expertise, ancres placées sous le header, styles spécifiques et adaptation en une colonne sur mobile. Les préférences de réduction des animations restent respectées. Correction clavier : Échap ne déplace plus le focus quand les menus sont fermés ; fermeture d’un menu ouvert et retour à son bouton conservés.

## SEO et anciennes URL

Audit HTTP des **14 pages publiques** : réponse 200, titres uniques, canoniques alignées sur `https://www.lapepiite.com`. Les redirections du domaine nu vers www et de `/realisations` vers `/cas-d-usage` répondent en 308. Sitemap : 12 pages commerciales, aucun ancien chemin `/realisations`. Robots : exploration autorisée sauf API, sitemap déclaré ; previews Vercel exclues par la configuration existante. Open Graph et image de partage locale conservés et vérifiés.

Ajout JSON-LD Organization et WebSite dans le layout, Service et BreadcrumbList sur les huit expertises. Identifiants et URL cohérents avec les canoniques ; aucune note, avis, tarif, certification ou partenariat inventé. Les scénarios ne sont pas balisés comme des missions réalisées. La sérialisation échappe `<`. Les tests vérifient la lecture des graphes et leurs liens ; aucun résultat enrichi Google n’est garanti et la validation externe Google/Schema.org n’est pas revendiquée.

Les routes, sitemap, robots et redirections existants satisfaisant les contrôles n’ont pas été réécrits. `/wp-sitemap.xml` et `/sitemap_index.xml` répondent 404 sur le site public. `/audit-microsoft.html` répond aussi 404 : le fichier transmis n’établit pas qu’une page publique existait à cette adresse. L’API WordPress n’a pas fourni d’inventaire exploitable (403), et la consultation des archives a expiré. Aucune liste d’anciennes URL n’est connue du responsable. Par conséquent, **l’absence complète d’anciennes pages dans l’index Google ne peut pas être certifiée**.

Il n’y a pas de redirection générale des URL inconnues vers l’accueil : les vraies 404 sont conservées. À la prochaine vérification Search Console, contrôler l’indexation, l’ancien sitemap, les URL exclues et leurs liens ; établir une redirection spécifique seulement lorsqu’une ancienne page et son équivalent sont identifiés. L’alias Vercel public déclare la même canonique www ; le compte Search Console et les réglages privés Vercel n’ont pas été modifiés.

## Recette

- Build Next.js, TypeScript, ESLint sans avertissement et vérification Prettier.
- 13 tests Playwright : 14 pages à **360, 390, 768, 1024 et 1440 px**, absence de débordement horizontal, une seule H1, métadonnées, console et erreurs JavaScript, navigation mobile, liens internes, ancres, FAQ clavier, redirections, image de partage et JSON-LD.
- 11 tests unitaires existants conservés, sans envoi réel.
- 42 captures Chromium : 14 pages à 390, 768 et 1440 px ; revue visuelle de l’accueil, des expertises et Cas d’usage. Contrôle axe WCAG A/AA des 14 pages à 390 et 1440 px : aucune violation automatique détectée. Ce contrôle ne vaut pas certification d’accessibilité.
- Comparaison Git : les fichiers du formulaire et de son fonctionnement sont inchangés.

Les observations sur le site public portent sur la version publiée avant cette passe ; le contrôle visuel des améliorations porte sur le build local. Les preuves sont conservées dans `/workspace/editorial-review` (captures, `results.json`, `public-before.json`), hors dépôt.
