export const useCases = [
  {
    category: 'MODERN WORK',
    title: 'Structurer la collaboration dans Microsoft 365',
    context:
      'Des espaces et des documents dispersés, des droits à clarifier et des pratiques de partage à harmoniser.',
    approach:
      'Cartographier les usages, définir la gouvernance Teams et SharePoint, organiser les migrations et accompagner la prise en main.',
    deliverables:
      'Cartographie des espaces, règles de partage et plan de migration du périmètre pilote.',
    validation:
      'Vérifier les accès, retrouver les documents attendus et recueillir les retours des utilisateurs pilotes.',
    mode: 'Conseil et intégration, avec périmètre de projet convenu.',
    slug: 'microsoft-365',
    tags: ['Teams', 'SharePoint', 'Adoption'],
  },
  {
    category: 'LICENCES & COÛTS',
    title: 'Préparer un renouvellement de licences',
    context:
      'Des abonnements accumulés et des profils utilisateurs qui ont évolué, avec une échéance contractuelle à préparer.',
    approach:
      'Rapprocher les affectations, les usages disponibles et les fonctionnalités nécessaires ; comparer les scénarios compatibles avec les engagements existants.',
    deliverables:
      'Inventaire des abonnements, matrice par profil et scénarios avec hypothèses de coût.',
    validation:
      'Faire valider les besoins par l’IT et les métiers, documenter les limites et les prochaines échéances.',
    mode: 'Mission de conseil avec livrables définis.',
    slug: 'licences',
    tags: ['Abonnements', 'Profils', 'Renouvellement'],
  },
  {
    category: 'CLOUD & INFRASTRUCTURE',
    title: 'Préparer une trajectoire vers Azure',
    context:
      'Des applications existantes, des dépendances à identifier et une exploitation à organiser avant la migration.',
    approach:
      'Évaluer les charges, construire le socle réseau et identités, définir les vagues de migration et les procédures de retour arrière.',
    deliverables:
      'Dossier d’architecture, plan de migration par lots et procédures d’exploitation.',
    validation:
      'Recetter un lot pilote, tester la restauration et confirmer les responsabilités de suivi des dépenses.',
    mode: 'Équipe projet au forfait ou renfort d’expertise au TJM, selon le périmètre retenu.',
    slug: 'azure-cloud',
    tags: ['Azure', 'Architecture', 'Migration'],
  },
  {
    category: 'COPILOT & IA',
    title: 'Évaluer Copilot sur un usage métier',
    context:
      'Un intérêt pour la synthèse ou la recherche documentaire, avec des permissions et des critères de qualité encore à clarifier.',
    approach:
      'Sélectionner les tâches, vérifier les données et les accès, puis conduire un pilote limité avec contrôle humain et retours des métiers.',
    deliverables:
      'Cas d’usage priorisés, liste des prérequis et protocole d’évaluation du pilote.',
    validation:
      'Comparer les observations aux critères convenus et décider d’adapter, d’étendre ou d’arrêter.',
    mode: 'Conseil et projet pilote à périmètre défini.',
    slug: 'copilot-ia',
    tags: ['Copilot', 'Données', 'Pilote métier'],
  },
  {
    category: 'APPLICATIONS MÉTIERS',
    title: 'Remplacer la ressaisie par un circuit de validation',
    context:
      'Un processus réparti entre fichiers, e-mails et validations manuelles, avec peu de visibilité sur son état.',
    approach:
      'Décrire le processus et ses exceptions, créer l’application et les flux, définir les rôles et les critères de recette.',
    deliverables:
      'Application Power Apps, flux documentés et procédure de suivi des exceptions dans le périmètre convenu.',
    validation:
      'Tester les validations, les refus, les erreurs de connexion et la reprise d’un traitement interrompu.',
    mode: 'Projet au forfait avec règles de gestion et recette convenues.',
    slug: 'power-platform',
    tags: ['Power Apps', 'Power Automate', 'Dataverse'],
  },
  {
    category: 'GOUVERNANCE & CYBERSÉCURITÉ',
    title: 'Revoir les accès avant de faire évoluer les usages',
    context:
      'Des comptes privilégiés et des règles de partage difficiles à relire avant un nouveau projet de collaboration ou d’IA.',
    approach:
      'Revoir les identités, les permissions et les responsabilités sur un périmètre ciblé ; prioriser et tester les corrections convenues.',
    deliverables:
      'État des risques observés, plan de remédiation et procédures de vérification.',
    validation:
      'Tester les protections et les accès nécessaires aux utilisateurs concernés.',
    mode: 'Conseil et renfort d’expertise technique, avec disponibilités vérifiées.',
    slug: 'cybersecurite',
    tags: ['Entra ID', 'Permissions', 'Gouvernance'],
  },
] as const;
