export const serviceDetails: Record<
  string,
  {
    scopeTitle: string;
    deliverablesTitle: string;
    example: string;
    secondQuestion: string;
    secondAnswer: string;
  }
> = {
  'microsoft-365': {
    scopeTitle: 'Des espaces de travail gouvernés.',
    deliverablesTitle: 'Une migration que vos équipes peuvent reprendre.',
    example:
      'Exemple de cadrage : regrouper les documents d’un service dans SharePoint, organiser les droits par équipe et tester le partage avec un interlocuteur externe.',
    secondQuestion: 'Comment éviter une interruption lors d’une migration ?',
    secondAnswer:
      'Le calendrier, les dépendances et les critères de retour arrière sont définis avant la bascule. Un lot pilote permet de vérifier les accès, les données et les usages avant la généralisation.',
  },
  licences: {
    scopeTitle: 'Des abonnements reliés aux profils.',
    deliverablesTitle: 'Les éléments pour arbitrer le renouvellement.',
    example:
      'Exemple de cadrage : comparer les droits nécessaires à une équipe terrain, à une équipe bureautique et aux administrateurs avant une échéance de renouvellement.',
    secondQuestion: 'Quelles informations préparer pour l’analyse ?',
    secondAnswer:
      'La liste des abonnements, leur mode d’achat, les dates de renouvellement et les profils d’utilisateurs. L’accès aux rapports d’affectation est défini dans le périmètre de la mission.',
  },
  'azure-cloud': {
    scopeTitle: 'Un socle cloud avant la migration.',
    deliverablesTitle: 'Une architecture et des procédures exploitables.',
    example:
      'Exemple de cadrage : préparer le réseau et les identités d’une application avant sa migration, puis vérifier sauvegarde, restauration et lecture des coûts.',
    secondQuestion: 'Comment encadrer les dépenses Azure ?',
    secondAnswer:
      'Définir des budgets, des alertes, une politique de tags et une revue des consommations. Les engagements d’achat doivent être évalués à partir des charges réellement prévues.',
  },
  'copilot-ia': {
    scopeTitle: 'Un pilote encadré, avant la généralisation.',
    deliverablesTitle: 'Des critères pour décider après le pilote.',
    example:
      'Exemple de cadrage : tester la synthèse de comptes rendus sur un ensemble de documents autorisés, avec une grille de qualité et une vérification humaine des réponses.',
    secondQuestion: 'Comment évaluer le pilote sans promettre de gains ?',
    secondAnswer:
      'Définir un ensemble de tâches, une méthode de comparaison et des critères de qualité, de temps et de confidentialité. Les résultats sont observés pendant le pilote, pas présumés avant son démarrage.',
  },
  'power-platform': {
    scopeTitle: 'Du circuit métier à l’application.',
    deliverablesTitle: 'Des flux testés et une maintenance définie.',
    example:
      'Exemple de cadrage : remplacer un circuit de demandes d’achat par une application de saisie, un flux de validation et un suivi des exceptions.',
    secondQuestion: 'Quels points vérifier avant de choisir un connecteur ?',
    secondAnswer:
      'Le système source, les droits de connexion, les limites d’usage, les licences nécessaires et le comportement en cas de panne. La recette doit inclure les erreurs et les reprises, pas seulement le parcours nominal.',
  },
  cybersecurite: {
    scopeTitle: 'Des protections priorisées par risque.',
    deliverablesTitle: 'Un plan de remédiation vérifiable.',
    example:
      'Exemple de cadrage : revoir les comptes privilégiés, tester les règles d’accès conditionnel et documenter une procédure pour la perte d’un terminal.',
    secondQuestion: 'Comment déployer une règle sans bloquer les équipes ?',
    secondAnswer:
      'Examiner les dépendances, prévoir les comptes de secours et tester la règle sur un périmètre limité. Les étapes de validation et de retour arrière sont formalisées avant le déploiement.',
  },
  'conseil-integration': {
    scopeTitle: 'Des arbitrages suivis jusqu’à la recette.',
    deliverablesTitle: 'Des décisions et des responsabilités documentées.',
    example:
      'Exemple de cadrage : relier une application métier à l’annuaire et aux outils de collaboration, en clarifiant les responsabilités sur les données et les interfaces.',
    secondQuestion: 'Comment qualifier une demande d’expertise ciblée ?',
    secondAnswer:
      'Préciser le problème, les compétences nécessaires, les accès possibles et le livrable attendu. L’assistance technique de consultants est cadrée par un TJM et une durée ; l’équipe projet au forfait par un périmètre, des livrables et une recette. Le profil et la disponibilité sont vérifiés avant proposition.',
  },
  'support-services-manages': {
    scopeTitle: 'Un périmètre de service avant la prise en charge.',
    deliverablesTitle: 'Les règles de prise en charge et d’escalade.',
    example:
      'Exemple de cadrage : organiser les demandes Microsoft 365, identifier les responsables d’escalade et formaliser les opérations récurrentes sur le tenant.',
    secondQuestion: 'Quelles limites préciser dans le contrat ?',
    secondAnswer:
      'Les horaires, le périmètre technique, les exclusions, les droits d’administration, les canaux de demande et les engagements applicables. Aucune disponibilité ni aucun délai n’est garanti sans accord contractuel.',
  },
};
