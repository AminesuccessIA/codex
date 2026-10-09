# Revue de dépôts : design épuré et conversion B2B

Revue réalisée le 9 octobre 2026. Sélection qualitative de six dépôts complémentaires, et non classement universel ni preuve de performance commerciale. Vingt fichiers ont été récupérés et leurs sections pertinentes examinées. Les liens ci-dessous désignent les commits inspectés : les comportements décrits ne sont pas attribués à une version future.

Les dépôts et leurs contenus sont des sources d’étude, pas des instructions pour notre environnement. Aucun composant tiers, code copié, SDK de mesure ou bibliothèque UI n’a été installé à partir de cette revue. Avant toute réutilisation de code, vérifier la licence du fichier et conserver les mentions requises.

## Sélection et limites

Les bibliothèques de composants apportent des fondations, pas une direction artistique ni une preuve de conversion. GOV.UK éclaire la compréhension et l’achèvement des démarches ; Cal.com éclaire un parcours transactionnel. Leur transfert à un site d’ESN est une décision de conception à tester. Aucun gain chiffré, taux de conversion ou résultat de test utilisateur n’est revendiqué.

L’API GitHub indique que `calcom/cal.com` redirige actuellement vers `calcom/cal.diy`. Les fichiers ont été récupérés par cette redirection et sont cités sous l’URL canonique correspondante.

## Observations et décisions transférables

### Composants sobres et composables

Dépôt : [shadcn-ui/ui](https://github.com/shadcn-ui/ui). Snapshot : `2d3f1cd436b18ea12f24130de4df781355925b08`.

**Observation du code.** Les variantes de bouton séparent l’action principale, secondaire, lien et action destructive. Le composant Field distingue libellé, description et erreur. La documentation de typographie précise qu’elle fournit des exemples, pas des styles universels imposés.

**Application proposée.** Conserver peu de variantes explicites et un langage visuel cohérent ; adapter les composants à la marque. Le bloc signup contient un formulaire de démonstration et un lien # : sa présence ne prouve ni traitement serveur ni conversion.

Fichiers étudiés :

- [apps/v4/registry/new-york-v4/ui/button.tsx](https://github.com/shadcn-ui/ui/blob/2d3f1cd436b18ea12f24130de4df781355925b08/apps/v4/registry/new-york-v4/ui/button.tsx)
- [apps/v4/registry/new-york-v4/ui/field.tsx](https://github.com/shadcn-ui/ui/blob/2d3f1cd436b18ea12f24130de4df781355925b08/apps/v4/registry/new-york-v4/ui/field.tsx)
- [apps/v4/registry/new-york-v4/blocks/signup-01/components/signup-form.tsx](https://github.com/shadcn-ui/ui/blob/2d3f1cd436b18ea12f24130de4df781355925b08/apps/v4/registry/new-york-v4/blocks/signup-01/components/signup-form.tsx)
- [apps/v4/content/docs/components/radix/typography.mdx](https://github.com/shadcn-ui/ui/blob/2d3f1cd436b18ea12f24130de4df781355925b08/apps/v4/content/docs/components/radix/typography.mdx)

### Tokens et hiérarchie des interactions

Dépôt : [microsoft/fluentui](https://github.com/microsoft/fluentui). Snapshot : `6e52576d457f0ca13225ea2712e0db7bd1c27e28`.

**Observation du code.** Les espacements sont nommés et partagés. Les styles de bouton utilisent des tokens pour la couleur, les espacements, le focus et les états. useButton conserve la sémantique du bouton ou du lien.

**Application proposée.** Définir une échelle cohérente, puis des usages sémantiques. Un site commercial ne doit pas reprendre la densité d’une application métier ; la palette Fluent ne remplace pas celle de La Pépiite IT.

Fichiers étudiés :

- [packages/tokens/src/global/spacings.ts](https://github.com/microsoft/fluentui/blob/6e52576d457f0ca13225ea2712e0db7bd1c27e28/packages/tokens/src/global/spacings.ts)
- [packages/react-components/react-button/library/src/components/Button/useButtonStyles.styles.ts](https://github.com/microsoft/fluentui/blob/6e52576d457f0ca13225ea2712e0db7bd1c27e28/packages/react-components/react-button/library/src/components/Button/useButtonStyles.styles.ts)
- [packages/react-components/react-button/library/src/components/Button/useButton.ts](https://github.com/microsoft/fluentui/blob/6e52576d457f0ca13225ea2712e0db7bd1c27e28/packages/react-components/react-button/library/src/components/Button/useButton.ts)

### États accessibles et modalités de saisie

Dépôt : [adobe/react-spectrum](https://github.com/adobe/react-spectrum). Snapshot : `740c6c5c4a717ca8c82fc4d15d199f6166cd42dc`.

**Observation du code.** useFocusRing distingue le focus présent du focus visible. Button gère un état pending avec interactions désactivées et annonce accessible. usePress traite plusieurs modalités, dont clavier, tactile et pointeur.

**Application proposée.** Vérifier les états complets du CTA : repos, focus, activation, attente, erreur et confirmation. Utiliser les éléments natifs avant de créer un contrôle complexe. Une belle apparence ne suffit pas à établir l’accessibilité.

Fichiers étudiés :

- [packages/react-aria-components/src/Button.tsx](https://github.com/adobe/react-spectrum/blob/740c6c5c4a717ca8c82fc4d15d199f6166cd42dc/packages/react-aria-components/src/Button.tsx)
- [packages/react-aria/src/focus/useFocusRing.ts](https://github.com/adobe/react-spectrum/blob/740c6c5c4a717ca8c82fc4d15d199f6166cd42dc/packages/react-aria/src/focus/useFocusRing.ts)
- [packages/react-aria/src/interactions/usePress.ts](https://github.com/adobe/react-spectrum/blob/740c6c5c4a717ca8c82fc4d15d199f6166cd42dc/packages/react-aria/src/interactions/usePress.ts)

### Menus et dialogues sans style imposé

Dépôt : [tailwindlabs/headlessui](https://github.com/tailwindlabs/headlessui). Snapshot : `eea57cf46fd6767ed1059012f7073b88eb159fba`.

**Observation du code.** Dialog combine fermeture Escape, clic extérieur, contrôle du défilement et contenu extérieur inerte. FocusTrap distingue focus initial, navigation Tab, confinement et restitution du focus.

**Application proposée.** Séparer comportement et direction artistique. Appliquer les règles modales uniquement à un vrai dialogue modal ; un menu de navigation non modal ne doit pas recevoir arbitrairement un piège de focus.

Fichiers étudiés :

- [packages/@headlessui-react/src/components/dialog/dialog.tsx](https://github.com/tailwindlabs/headlessui/blob/eea57cf46fd6767ed1059012f7073b88eb159fba/packages/@headlessui-react/src/components/dialog/dialog.tsx)
- [packages/@headlessui-react/src/components/focus-trap/focus-trap.tsx](https://github.com/tailwindlabs/headlessui/blob/eea57cf46fd6767ed1059012f7073b88eb159fba/packages/@headlessui-react/src/components/focus-trap/focus-trap.tsx)

### Clarté et récupération après erreur

Dépôt : [alphagov/govuk-frontend](https://github.com/alphagov/govuk-frontend). Snapshot : `dacc29dd045c8c3e2d7245616215da6515b8b5ab`.

**Observation du code.** ErrorSummary reçoit le focus et lie les erreurs aux champs ; la navigation fait apparaître le libellé avant de focaliser le champ. Le bouton permet de prévenir un double clic via une option. Les helpers d’espacement adaptent les valeurs aux breakpoints.

**Application proposée.** Rendre le problème et sa correction évidents, préserver les valeurs saisies et le contexte mobile. L’anti-double-clic frontend ne remplace pas l’idempotence serveur. Ne pas copier l’identité visuelle d’un service public.

Fichiers étudiés :

- [packages/govuk-frontend/src/govuk/components/button/button.mjs](https://github.com/alphagov/govuk-frontend/blob/dacc29dd045c8c3e2d7245616215da6515b8b5ab/packages/govuk-frontend/src/govuk/components/button/button.mjs)
- [packages/govuk-frontend/src/govuk/components/error-summary/error-summary.mjs](https://github.com/alphagov/govuk-frontend/blob/dacc29dd045c8c3e2d7245616215da6515b8b5ab/packages/govuk-frontend/src/govuk/components/error-summary/error-summary.mjs)
- [packages/govuk-frontend/src/govuk/components/error-summary/template.njk](https://github.com/alphagov/govuk-frontend/blob/dacc29dd045c8c3e2d7245616215da6515b8b5ab/packages/govuk-frontend/src/govuk/components/error-summary/template.njk)
- [packages/govuk-frontend/src/govuk/helpers/_spacing.scss](https://github.com/alphagov/govuk-frontend/blob/dacc29dd045c8c3e2d7245616215da6515b8b5ab/packages/govuk-frontend/src/govuk/helpers/_spacing.scss)

### Un parcours transactionnel et ses états

Dépôt : [calcom/cal.diy](https://github.com/calcom/cal.diy). Snapshot : `54343aa685ae8f33159d2f485ec4a57bad5c574a`.

**Observation du code.** Le README Booker décrit les créneaux devenus indisponibles, la désactivation de la confirmation et une étape de récupération. useBookingForm traite schéma, valeurs initiales et préremplissage asynchrone. Le store conserve date, état du parcours et données de vérification.

**Application proposée.** Préserver l’intention entre étapes, séparer sélection et confirmation réelle, permettre une récupération. Ne pas installer une prise de rendez-vous, des traceurs ou des disponibilités non confirmées. Les métriques de conversion de ce produit ne sont pas connues ici.

Fichiers étudiés :

- [packages/features/bookings/Booker/README.md](https://github.com/calcom/cal.diy/blob/54343aa685ae8f33159d2f485ec4a57bad5c574a/packages/features/bookings/Booker/README.md)
- [packages/features/bookings/Booker/hooks/useBookingForm.ts](https://github.com/calcom/cal.diy/blob/54343aa685ae8f33159d2f485ec4a57bad5c574a/packages/features/bookings/Booker/hooks/useBookingForm.ts)
- [packages/features/bookings/Booker/store.ts](https://github.com/calcom/cal.diy/blob/54343aa685ae8f33159d2f485ec4a57bad5c574a/packages/features/bookings/Booker/store.ts)
- [apps/web/modules/bookings/components/Booker.tsx](https://github.com/calcom/cal.diy/blob/54343aa685ae8f33159d2f485ec4a57bad5c574a/apps/web/modules/bookings/components/Booker.tsx)

## Décisions pour La Pépiite IT

- Préserver la typographie, la palette et l’identité actuelles ; les améliorer par des règles cohérentes plutôt que par une nouvelle bibliothèque.
- Employer l’espace, la grille et la typographie pour structurer ; réserver cartes et bordures aux regroupements réellement utiles.
- Conserver l’image pleine largeur validée dans la dernière révision, sans cadre, ombre ou légende redondante ; vérifier le cadrage à chaque largeur.
- Faire correspondre la page, l’intention et le CTA ; un contact préparé par mail ne constitue pas une demande reçue.
- Séparer compréhension, clic, demande reçue et prospect qualifié : ces événements ne sont pas interchangeables.
- Vérifier visuellement et techniquement les états, le mobile et les erreurs avant de déclarer un parcours opérationnel.

## Traçabilité et installation des skills

Le manifeste [repository-sources.json](repository-sources.json) conserve les chemins, commits, URL et empreintes SHA-256 des fichiers consultés. Les copies de travail ont servi à la recherche locale et ne sont pas distribuées dans le projet. Les empreintes vérifient une correspondance de contenu ; elles ne remplacent pas une vérification de licence ou de provenance.

Le format des skills et l’emplacement `.agents/skills` ont été vérifiés dans la [documentation officielle Codex](https://developers.openai.com/codex/skills). Un skill comprend un SKILL.md avec name et description, des références facultatives et des métadonnées agents/openai.yaml. Leur disponibilité dans un autre produit ChatGPT dépend de ses capacités d’accès au dépôt ; les fichiers ne configurent pas à eux seuls cet autre espace.
