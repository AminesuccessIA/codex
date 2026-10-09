# Corrections de publication — 9 octobre 2026

Cette passe applique les textes demandés par le responsable de La Pépiite IT et reprend les enrichissements éditoriaux préparés précédemment.

## Contenu public

- Mentions légales : texte de l’éditeur demandé, adresse de Vercel, propriété intellectuelle, partenariat Microsoft et lien vers la confidentialité. Suppression des champs de travail, du bandeau, des sources Pappers/Annuaire et des constats techniques.
- Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Adresse vérifiée dans la [politique officielle Vercel](https://vercel.com/legal/privacy-policy) et son [accord de traitement](https://vercel.com/legal/dpa).
- Accueil et pied de page : mention « Partenaire Microsoft », confirmée par le responsable. Aucun badge officiel n’a été joint à cette demande ; aucun badge, niveau de partenariat ou certification n’est fabriqué.
- À propos, Cas d’usage et expertises : suppression des disclaimers éditoriaux et des notes de démonstration. Les cas d’usage restent présentés comme des scénarios d’intervention, avec contexte, démarche, livrables et critères ; ils ne sont pas transformés en témoignages ou résultats clients.
- Politique de confidentialité : texte public sur les finalités, les données, la base juridique B2B, Google Workspace/Vercel, les transferts éventuels, la conservation et les droits. Les textes de diagnostic et champs de configuration sont retirés de l’interface. Aucun lieu exclusif de traitement ni entité contractuelle Google spécifique n’est inventé.
- SEO : pages légales intégrées au sitemap (14 pages) ; leurs métadonnées héritent du noindex des previews Vercel, comme les autres pages.

## Contact et blocage externe

Le nouvel essai de renouvellement Gmail renvoie **HTTP 400 `invalid_grant`**. Le jeton actuel n’est pas utilisable. Les secrets existent dans Codex ; aucune valeur n’est imprimée ou copiée dans Git. Aucun e-mail réel n’a été envoyé.

Le parcours du formulaire activé est testé dans un second serveur local avec configuration de test et identifiants OAuth vides : les erreurs conservent la saisie ; seule une réponse réussie confirme l’envoi et réinitialise les champs. Ces tests ne prouvent pas une réception dans la boîte cible.

Tant que la réception réelle n’est pas validée, le site présente un contact direct par e-mail, avec un bouton `mailto:contact@lapepiite.com`, à la place d’un formulaire désactivé. La route d’envoi garde son verrouillage. Aucune fausse confirmation ou collecte sans destination disponible n’est publiée.

Pour rétablir l’envoi automatique :

1. Régénérer le refresh token dans OAuth Playground avec **Use your own OAuth credentials**, le même client OAuth et `https://www.googleapis.com/auth/gmail.send`.
2. Remplacer `GOOGLE_OAUTH_REFRESH_TOKEN` dans les secrets Codex et dans **Vercel Production**, avec le client ID et le client secret correspondants. Aucune valeur à transmettre dans le chat.
3. Vérifier la configuration privée des prestataires (`PRIVACY_EMAIL_PROCESSOR`, `PRIVACY_HOST_PROCESSOR`, `PRIVACY_TRANSFER_DETAILS`) et la protection anti-abus. Les coordonnées Vercel ont désormais des valeurs vérifiées par défaut.
4. Effectuer un envoi contrôlé et confirmer la réception ainsi que le Reply-To dans `contact@lapepiite.com`. La seule acceptation Gmail ne prouve pas la réception en boîte principale.
5. Activer les indicateurs de préparation documentés dans `.env.example`, puis redéployer. Les secrets Codex ne sont pas transférés automatiquement sur Vercel.

L’accès privé au compte Vercel n’est pas disponible dans cet environnement. La publication du code passe par le dépôt GitHub relié à Vercel ; aucune variable de production n’est déclarée vérifiée sans accès effectif.

## Vérifications

Build, TypeScript, ESLint et formatage. 11 tests unitaires et 15 tests navigateur, incluant 14 pages aux largeurs 360, 390, 768, 1024 et 1440 px, absence de débordement et d’erreurs console, liens, métadonnées, sitemap, redirections, clavier et les deux parcours de contact. Contrôle visuel Chromium et axe sur les pages avant publication. Aucun test automatique n’envoie un e-mail réel.

Les premières notes d’audit dans `docs/amelioration-site.md` décrivent la passe antérieure. Le présent document décrit la livraison finale de nettoyage et le blocage Gmail encore à lever.
