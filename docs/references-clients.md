# Références clients de La Pépiite IT

Relations clients et affichage des noms confirmés par le propriétaire à partir de la liste transmise par Julien. Les références restent indépendantes des scénarios de la page Cas d’usage : aucune mission, résultat ou citation client n’a été attribué.

## Publication

- Nouvelle page `/references` : 18 clients, répartis en six secteurs selon la liste fournie.
- Accueil : aperçu de six références avec lien vers la liste complète.
- Navigation, pied de page et sitemap mis à jour.
- Exclusions conservées : Monabanq, CD95 et les quatre collèges du Val-d’Oise.
- Formulaire de contact et configuration Gmail inchangés.

## Provenance des logos

Les fichiers sont hébergés localement. Les SVG externes ont été contrôlés (absence de scripts, gestionnaires d’événements et références externes). Les images matricielles ont été converties en WebP sans redessiner la marque. Certains logos vectoriels sont extraits du balisage officiel de navigation ; le logo Live for Good est le symbole officiel présent dans son en-tête. Les variantes claires de PPA et Talis sont présentées sur fond sombre.

| Client / fichier   | Asset local                     | Source                                                                                                                            |
| ------------------ | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| akor-alternance    | /clients/akor-alternance.webp   | https://alumni.akor-alternance.com/medias/image/6425729155d31e004e118a.jpg                                                        |
| cercle-des-langues | /clients/cercle-des-langues.svg | https://cdn.prod.website-files.com/6201071da514c306b2b68100/674d882cb4242c4bf8c65849_Logo_cercle_des_langues.svg                  |
| esct               | /clients/esct.webp              | https://esct.fr/wp-content/uploads/2023/01/Logo-2-480x227.png                                                                     |
| euridis            | /clients/euridis.webp           | https://www.euridis-ecole.com/wp-content/themes/euridis-theme/dist/images/logo-couleur-new.png                                    |
| imcp               | /clients/imcp.webp              | https://b1817678.assetcdn.net/2.0/1817678/wp-content/uploads/2020/03/logo-BLEU-FOND-TRANSPARENT-scaled.png?lossy=2&strip=1&webp=1 |
| le-coq-sportif     | /clients/le-coq-sportif.svg     | https://www.lecoqsportif.com/cdn/shop/files/LOGO_LCS_WORDING.svg?v=1771412910                                                     |
| live-for-good      | /clients/live-for-good.svg      | https://www.live-for-good.org                                                                                                     |
| michalak           | /clients/michalak.svg           | https://www.christophemichalak.com/themes/michalak-v2/img/logo-michalak-new-brand-black.svg                                       |
| monoprix           | /clients/monoprix.svg           | https://entreprise.monoprix.fr                                                                                                    |
| now-jobs           | /clients/now-jobs.webp          | https://www.nowjobs.be/themes/custom/nowjobs/images/logos/nowjobs.png                                                             |
| ppa                | /clients/ppa.svg                | https://ppa.fr                                                                                                                    |
| rocket-school      | /clients/rocket-school.svg      | https://rocket-school.com                                                                                                         |
| schola-nova        | /clients/schola-nova.webp       | https://scholanova-group.org/wp-content/uploads/2022/04/doc-logo-200x63.png                                                       |
| talis              | /clients/talis.svg              | https://www.talis.community/wp-content/themes/adaka-theme/dist/images/logo-talis.svg                                              |

## Précision Luxury of Retail

Le propriétaire a confirmé le rattachement à L’Oréal. La référence porte la mention « Luxury of Retail — groupe L’Oréal » et utilise le logo officiel L’Oréal Groupe extrait de son en-tête : https://www.loreal.com/en/france/pages/group/luxury-of-retail/. Fichier local : `/clients/loreal.svg`. Aucun contenu de mission ou résultat n’a été ajouté.

## Noms affichés sans logo

- CFA Codis : le domaine officiel redirige désormais vers IGENSIA Alternance ; le logo historique de CFA Codis n’a pas pu être récupéré et validé. Le logo IGENSIA n’est pas substitué arbitrairement.
- Majobi : orthographe « Majoby » également présente dans la capture ; correspondance avec majoby.fr à confirmer.
- LSL Learning : aucun site ou fichier de logo vérifié.

Les noms restent visibles avec la typographie du site. Aucun logo factice ni badge de certification n’est généré. Les marques restent la propriété de leurs titulaires.

## Recette

- `npm run build` : réussi, nouvelle page statique `/references`.
- `npm run check` : ESLint, TypeScript et Prettier réussis.
- `npm run test:e2e` : 16 tests réussis, 15 pages aux largeurs 360, 390, 768, 1024 et 1440 px ; navigation, SEO, liens et chargement des logos contrôlés.
- Contrôle visuel Chromium : accueil et références à 390, 768 et 1440 px ; captures détaillées des logos et du secteur formation relues.
- axe WCAG A/AA : aucune violation remontée sur l’accueil et les références aux trois largeurs.
- Sitemap : 15 URL canoniques, dont `/references`.
