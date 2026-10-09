# Google Workspace, Codex et hébergement WordPress

Marque : **La Pépiite IT**. Domaine web : `lapepiite.com`. Destinataire exact : **contact@lapepiite.com** (la dernière correction de l’utilisateur remplace l’adresse précédente).

## Méthode retenue

API Gmail via OAuth 2.0 avec le scope unique `https://www.googleapis.com/auth/gmail.send`. Ce droit permet l’envoi ; le code n’utilise ni lecture de la boîte ni délégation à l’échelle du domaine. Les appels HTTPS se limitent à `oauth2.googleapis.com` (renouvellement du jeton) et `gmail.googleapis.com` (envoi). Le formulaire ne peut pas envoyer avec la seule adresse du destinataire.

## Dans Google Workspace / Google Cloud

1. Vérifier que `contact@lapepiite.com` est une boîte Gmail Workspace active. Si c’est un groupe ou un alias, autoriser une boîte utilisateur expéditrice réelle et définir `CONTACT_FROM_EMAIL` sur cette boîte ou un alias d’envoi autorisé. Le destinataire reste inchangé.
2. Créer ou utiliser un projet Google Cloud de votre organisation et activer **Gmail API**.
3. Configurer **Google Auth Platform / écran de consentement OAuth** avec une audience **interne** à votre organisation Workspace lorsque cette option est disponible. Ajouter uniquement le scope `https://www.googleapis.com/auth/gmail.send`. Une application externe nécessite le processus de publication/validation correspondant ; en mode externe « test », les refresh tokens pour ces droits peuvent expirer après sept jours.
4. Créer un client OAuth de type **application Web**. Pour obtenir le premier refresh token manuellement avec vos propres identifiants, ajouter `https://developers.google.com/oauthplayground` comme URI de redirection autorisée.
5. Dans [OAuth 2.0 Playground](https://developers.google.com/oauthplayground), ouvrir la roue des réglages, activer **Use your own OAuth credentials**, renseigner votre client ID et client secret dans cet outil Google, choisir l’accès offline et le scope exact `https://www.googleapis.com/auth/gmail.send`. Autoriser avec le compte expéditeur Workspace, puis échanger le code contre les jetons. Enregistrer uniquement le refresh token dans le stockage sécurisé de l’environnement. Ne rien coller dans le chat ni commiter dans Git. Si aucun refresh token n’apparaît, renouveler le consentement avec accès offline.
6. Si la politique Workspace bloque l’autorisation, l’administrateur doit autoriser cette application OAuth et ce droit d’envoi dans **Sécurité → Contrôle des accès et des données → Contrôles des API → Contrôle de l’accès des applications**. Les intitulés peuvent varier selon l’interface et les permissions administrateur.

Utiliser vos propres identifiants dans le Playground est essentiel : ne pas utiliser les identifiants de démonstration du Playground pour une intégration durable. Le refresh token est lié au compte autorisé et au client OAuth. Sa révocation ou une politique d’administration peuvent nécessiter une nouvelle autorisation.

## Dans l’environnement Codex

| Nom exact                    | Type                         | Valeur ou action                                                                 |
| ---------------------------- | ---------------------------- | -------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`       | Variable non secrète         | `https://lapepiite.com`                                                          |
| `CONTACT_TO_EMAIL`           | Variable non secrète         | `contact@lapepiite.com`                                                          |
| `CONTACT_FROM_EMAIL`         | Variable non secrète         | `contact@lapepiite.com` si cette boîte est autorisée ; sinon expéditeur autorisé |
| `GOOGLE_OAUTH_CLIENT_ID`     | Variable non secrète serveur | Identifiant du client OAuth Web Google                                           |
| `GOOGLE_OAUTH_CLIENT_SECRET` | Secret serveur               | Secret de ce même client OAuth                                                   |
| `GOOGLE_OAUTH_REFRESH_TOKEN` | Secret serveur               | Refresh token obtenu avec le compte expéditeur et le scope gmail.send            |

Les deux secrets ont comme destination HTTPS autorisée `oauth2.googleapis.com`. Autoriser également `gmail.googleapis.com` dans la politique réseau pour l’envoi avec le jeton d’accès obtenu. Ne pas utiliser de préfixe `NEXT_PUBLIC_` pour les identifiants OAuth. Aucune variable `GOOGLE_OAUTH_ACCESS_TOKEN` n’est à renseigner : elle est renouvelée automatiquement en mémoire.

Les exigences Google et les domaines sont enregistrés dans le brouillon cloud. Compléter les valeurs, supprimer l’ancienne exigence Resend `EMAIL_PROVIDER_KEY` dans l’interface (l’outil d’enregistrement ne sait qu’ajouter des exigences), puis sauvegarder/appliquer les paramètres et redémarrer le serveur. La configuration d’un brouillon ne vaut ni injection actuelle des secrets ni publication. Les mêmes variables doivent être ajoutées au futur hébergeur du serveur Next.js ; les secrets Codex ne s’y transfèrent pas automatiquement.

Ne pas renseigner `CONTACT_WEBHOOK_URL` : aucun CRM n’est requis. Si cette variable existait, la laisser vide pour utiliser Gmail.

## Chez WordPress

Aucun plugin e-mail WordPress ni changement MX n’est nécessaire pour cette méthode si la messagerie Google Workspace fonctionne déjà. Conserver les enregistrements MX et les paramètres d’authentification e-mail existants (SPF, DKIM, DMARC). L’envoi est assuré par Google, pas par le serveur WordPress.

La route `/api/contact` nécessite un runtime serveur Next.js/Node.js. Un hébergement WordPress classique, conçu pour PHP, ne l’exécute pas simplement en important le site. Le forfait et les capacités de votre hébergement ne sont pas connus : vérifier explicitement auprès de WordPress la possibilité d’héberger un serveur Next.js ou un backend Node.js permanent.

Si le forfait n’offre pas ce runtime, déployer le projet Next.js sur un hébergeur compatible (par exemple Vercel ou un serveur Node.js) et conserver le domaine chez WordPress. Reporter uniquement les enregistrements web A/CNAME demandés par cet hébergeur, sans toucher aux MX Google. Ne pas modifier le DNS avant que le nouveau déploiement soit prêt. Une autre solution consiste à reconstruire le site dans WordPress avec son propre backend de formulaire ; ce serait une adaptation distincte du projet actuel.

## Proxy HTTPS de l’environnement Codex

Définir `NODE_USE_ENV_PROXY=1` **avant le démarrage du processus Node.js**. Cette option fait utiliser à Node.js 24 le proxy HTTPS fourni par la plateforme et respecte les certificats configurés. Ne pas désactiver la vérification TLS. Les tests navigateur démarrent leur serveur avec les paramètres OAuth et CRM vides afin de ne jamais envoyer d’e-mails réels lorsqu’un environnement est configuré.

## Vérification avant ouverture

Le code et les tests simulés peuvent être validés sans compte Google. Une réception réelle ne peut être confirmée sans les identifiants OAuth, le scope autorisé et le compte expéditeur. Après configuration, effectuer un envoi contrôlé depuis le formulaire et vérifier la réception dans `contact@lapepiite.com`, ainsi que le Reply-To. Aucune demande de test n’est envoyée automatiquement par les suites.

Une acceptation Gmail n’est pas une garantie de classement en boîte principale : vérifier aussi spam et politiques de groupe. Ajouter la limitation de débit et compléter les informations légales avant mise en ligne. Aucun secret ou corps de message Google ne doit être imprimé dans les journaux lors du diagnostic.

## Documentation officielle

- [Envoi avec Gmail API](https://developers.google.com/workspace/gmail/api/guides/sending)
- [OAuth 2.0 pour application serveur](https://developers.google.com/identity/protocols/oauth2/web-server)
- [Scopes Gmail](https://developers.google.com/workspace/gmail/api/auth/scopes)

L’accès aux pages de documentation externes était bloqué par la politique réseau pendant cette intervention ; les capacités exactes du compte Google et du forfait WordPress n’ont donc pas été vérifiées dans leurs consoles.
