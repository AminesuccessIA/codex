# Méthode de composition

## Brief minimal

- Visiteur : rôle et contexte concret.
- Intention : ce qu’il doit comprendre ou décider.
- Promesse : accompagnement effectivement proposé, sans résultat garanti.
- Action : prochaine étape et destination réelle.
- Preuve : fait confirmé ou démonstration utile ; à défaut, contenu explicatif.

## Une séquence éditoriale, pas une pile de blocs

| Zone            | Fonction                                   | À retirer si redondant                 |
| --------------- | ------------------------------------------ | -------------------------------------- |
| Ouverture       | Situer l’entreprise, le besoin et l’action | Slogans, labels et badges répétés      |
| Visuel          | Donner une présence ou expliquer une idée  | Cadre, ombre, légende sans information |
| Preuves         | Réduire une incertitude                    | Logos non confirmés, chiffres inventés |
| Offre           | Décrire le périmètre et les livrables      | Multiplication de cartes identiques    |
| Méthode         | Expliquer le déroulement                   | Étapes interchangeables entre offres   |
| Questions       | Lever une objection spécifique             | Questions génériques déjà traitées     |
| Prochaine étape | Faciliter un contact adapté                | CTA concurrents de même poids          |

Cette séquence est un point de départ à adapter, pas une obligation d’ajouter sept sections.

## Repères proposés pour ce projet

Les valeurs suivantes sont des repères de composition, pas des prescriptions issues des dépôts ni des garanties de conversion : privilégier des paragraphes de 45 à 75 caractères par ligne lorsque possible, un texte courant autour de 16 px sur mobile et une interligne confortable. Préserver la lisibilité avant de faire tenir une ligne.

Adopter des espacements cohérents entre éléments proches, groupes et sections. Les espacements nommés de Fluent et les helpers responsive de GOV.UK illustrent cette organisation ; ils ne fixent pas une échelle universelle pour notre site.

La carte est justifiée si elle matérialise un objet distinct : offre sélectionnable, ressource ou fiche de périmètre. Une section entière peut être structurée par un titre, une grille et du blanc sans carte.

## Contrôle visuel

1. Masquer mentalement le texte secondaire : la hiérarchie reste-t-elle compréhensible ?
2. Vérifier les débuts et fins d’alignement, pas uniquement l’égalité des marges.
3. Vérifier qu’aucun élément graphique ne fait concurrence au bouton principal.
4. Examiner chaque image dans son cadrage réel et avec son chargement terminé.
5. Vérifier le mobile sans hover, avec texte agrandi et navigation ouverte.
6. Comparer avant/après sur le même viewport ; décrire les différences observées.

Les règles de la WCAG et la recette navigateur figurent dans le skill pepiite-ux-release. Un screenshot desktop seul ne termine pas une revue responsive.

## Sources

Voir la [revue des commits étudiés](../../../../docs/design/repository-review.md), notamment shadcn button/field/typography, Fluent spacings/useButtonStyles et GOV.UK spacing. Les recommandations de composition ci-dessus sont une synthèse adaptée à La Pépiite IT, pas des résultats d’expérience utilisateur mesurés.
