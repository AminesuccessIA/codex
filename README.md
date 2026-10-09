# La Pépiite IT — site vitrine

Site français de La Pépiite IT, ESN et intégrateur Microsoft. Direction artistique issue de la référence `audit-microsoft.html` : fond minéral, encre sombre, accent citron, DM Sans et Space Grotesk hébergées localement. L’audit Microsoft reste une offre du conseil ; l’accueil couvre tout l’écosystème.

## Développement

Node.js 24.19.0 (`.nvmrc`), npm et `package-lock.json`.

```sh
npm ci
npm run dev
```

Dans l’environnement cloud, utiliser `npm --cache /workspace/.npm-cache ci` si le cache utilisateur est inaccessible. Copier `.env.example` vers `.env.local` pour configurer les services. Ne jamais exposer une clé avec le préfixe `NEXT_PUBLIC_`.

```sh
npm run check
npm test
npm run build
npm start
```

`check` lance ESLint, TypeScript et Prettier. `npm run format` reformate le projet. ESLint 9 est conservé pour les dépendances des plugins Next/React ; npm signale sa fin de support, prévoir sa mise à jour lorsque ces plugins prennent en charge ESLint 10.

## Pages

| Page                        | Adresse                     |
| --------------------------- | --------------------------- |
| Accueil                     | `/`                         |
| Microsoft 365               | `/microsoft-365`            |
| Licences                    | `/licences`                 |
| Azure & Cloud               | `/azure-cloud`              |
| Copilot & IA                | `/copilot-ia`               |
| Power Platform              | `/power-platform`           |
| Cybersécurité               | `/cybersecurite`            |
| Conseil & Intégration       | `/conseil-integration`      |
| Support et services managés | `/support-services-manages` |
| Réalisations                | `/realisations`             |
| À propos                    | `/a-propos`                 |
| Contact                     | `/contact`                  |

Les huit pages de services sont pré-générées avec `src/app/[service]/page.tsx`. Le contenu métier est dans `src/lib/services.ts`. Les pages institutionnelles disposent de compositions distinctes. Les liens de prise de contact pré-sélectionnent le service.

Chaque page possède un titre, une description et une URL canonique. Sitemap des douze pages, robots, favicon SVG. Le domaine de référence est `https://lapepiite.com` ; `NEXT_PUBLIC_SITE_URL` permet de le remplacer. Les références clients, certifications, résultats et engagements de disponibilité ne sont pas inventés. Les scénarios de la page Réalisations sont explicitement présentés comme des projets possibles, pas comme des missions réalisées.

## Réception des contacts sans CRM

Destination : `contact@lapepiite.com`. Un lien `mailto:` reste disponible sur la page Contact.

L’API `/api/contact` valide les champs, le sujet, l’accord et le champ piège côté serveur, contrôle l’origine et limite le corps de requête à 20 Ko. Elle ne journalise pas les données ni les secrets. Le destinataire n’est jamais choisi par le navigateur. La réponse de succès est envoyée uniquement après acceptation par le service d’envoi ; elle ne garantit pas la livraison finale dans la boîte de réception.

Le transport prévu est l’API Gmail de Google Workspace via OAuth 2.0 (HTTPS). Aucun mot de passe principal, mot de passe d’application, SMTP ni service Resend n’est utilisé. Le jeton d’accès court est obtenu côté serveur à partir d’un refresh token ; il n’est ni exposé au navigateur ni journalisé. Le message MIME contient un destinataire serveur, un nom d’expéditeur UTF-8 et le Reply-To du visiteur. Un succès correspond à l’acceptation par Gmail, pas à une preuve de livraison finale.

Voir [Configuration Google Workspace et WordPress](docs/google-workspace.md) pour les étapes précises.

Variables publiques/non secrètes : `GOOGLE_OAUTH_CLIENT_ID`, `CONTACT_FROM_EMAIL=contact@lapepiite.com`, `CONTACT_TO_EMAIL=contact@lapepiite.com`, `NEXT_PUBLIC_SITE_URL=https://lapepiite.com`. Le client ID reste côté serveur malgré son caractère non secret.

Secrets serveur : `GOOGLE_OAUTH_CLIENT_SECRET` et `GOOGLE_OAUTH_REFRESH_TOKEN`, à renseigner uniquement dans les paramètres sécurisés. Autoriser `oauth2.googleapis.com` et `gmail.googleapis.com`. Supprimer l’ancienne exigence `EMAIL_PROVIDER_KEY` dans les paramètres ; elle n’est plus lue. La liste réseau personnalisée n’a plus besoin de `api.resend.com`.

Sans configuration OAuth complète, réponse 503 et conservation des champs avec l’adresse e-mail de repli. Les tests Google utilisent des réponses simulées, sans envoi réel. Un futur CRM reste possible via `CONTACT_WEBHOOK_URL` HTTPS et `CONTACT_WEBHOOK_TOKEN` ; ce transport prend priorité sur Gmail.

## Tests dans le navigateur

```sh
npx playwright install chromium
npm run build
npm run test:e2e
```

Dans cet environnement, Chromium est déjà installé :

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm run test:e2e
```

Les tests démarrent leur propre serveur de production sur le port 3100 et l’arrêtent ensuite. Ils vérifient les douze pages à 360, 390, 768, 1024 et 1440 px, l’absence de débordement horizontal, les métadonnées, la navigation mobile, les liens internes, la sélection du service, les erreurs réelles de formulaire et une confirmation simulée. Les captures sont écrites dans `test-results/`, ignoré par Git.

## Avant mise en production

Activer et vérifier la réception e-mail, fournir les mentions légales et la politique de confidentialité (identité légale, responsable de traitement, finalités, base légale, destinataires, conservation et exercice des droits). Le texte d’information actuel annonce les éléments encore manquants. Ajouter une limitation de débit durable et adaptée à l’hébergeur : le champ piège et le contrôle d’origine ne suffisent pas contre le spam automatisé. Aucune référence client ni badge de partenariat ne doit être publié sans preuve et autorisation. Ne pas considérer cette préparation comme un déploiement sur le domaine.
