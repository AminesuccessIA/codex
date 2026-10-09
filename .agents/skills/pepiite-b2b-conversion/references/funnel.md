# Grille de parcours prospect

## Examiner chaque entrée

| Entrée                | Question du visiteur                        | Prochaine étape adaptée                                          |
| --------------------- | ------------------------------------------- | ---------------------------------------------------------------- |
| Accueil               | Cette entreprise traite-t-elle mon besoin ? | Expertise ou qualification du projet                             |
| Expertise             | Que pouvez-vous mettre en œuvre et livrer ? | Échange contextualisé sur ce périmètre                           |
| Article               | Comment décider ou préparer mon projet ?    | Guide complémentaire, expertise puis qualification               |
| Cas d’usage           | Comment traiter une situation comparable ?  | Intervention correspondante ; pas une preuve de mission inventée |
| Contact ou diagnostic | Comment vous transmettre mon besoin ?       | Canal réellement disponible et état final honnête                |

## Backlog à remplir

| Page / étape                 | Fait observé              | Hypothèse                 | Priorité                           | Correction      | Vérification               |
| ---------------------------- | ------------------------- | ------------------------- | ---------------------------------- | --------------- | -------------------------- |
| À renseigner pendant l’audit | Observation reproductible | Effet attendu, non mesuré | Blocage / important / amélioration | Action concrète | Test et donnée nécessaires |

Ne pas transformer ce tableau interne en contenu public ni remplir les observations avec des défauts supposés.

## États minimaux

- Repos : action et destination identifiables.
- Focus : navigation clavier visible.
- Saisie : consignes et champs associés à leurs libellés.
- Attente : action réellement en cours, doublons évités, état annoncé.
- Erreur : problème spécifique, valeurs conservées, récupération possible.
- Confirmation : ce qui a effectivement eu lieu et prochaine étape confirmée.

GOV.UK montre une navigation d’erreur qui conserve le contexte du libellé. React Aria montre un état pending qui préserve le focus. Cal.diy distingue sélection, validation et créneau indisponible. Le traitement concret doit rester compatible avec notre projet et le périmètre autorisé.

## Mesure sans invention

L’objectif peut être le nombre de demandes reçues ou de prospects qualifiés. Si un taux est calculé, préciser le numérateur, le dénominateur, la période, le canal et les exclusions. Un clic mailto ne doit pas être compté comme une demande reçue.

Sans données suffisantes, faire une comparaison qualitative et une recette des parcours. Ne pas annoncer de significativité statistique ou de résultat d’A/B test sans protocole, observations et échantillon adaptés.

Une réservation n’est envisageable qu’avec un calendrier et des disponibilités réels. Une promesse de réponse nécessite une organisation confirmée. Un système de consentement dépend des traitements réellement mis en place, pas du fait qu’un exemple de composant contient une case.

## Sources

Voir [les fichiers étudiés](../../../../docs/design/repository-review.md), particulièrement GOV.UK error-summary/button, React Aria Button et Cal.diy Booker/useBookingForm/store. Les choix commerciaux et la priorisation constituent une synthèse de conception, pas une preuve de hausse de conversion issue de ces dépôts.
