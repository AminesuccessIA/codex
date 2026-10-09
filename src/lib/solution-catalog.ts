export const solutionGroups = [
  {
    id: 'modern-work',
    name: 'Travail & collaboration',
    description:
      'Messagerie, documents, appels et postes de travail : organiser les usages et leurs accès.',
    slugs: ['microsoft-365', 'teams-telephonie', 'intune', 'windows-365'],
    products:
      'Teams · SharePoint · Exchange Online · OneDrive · Planner · Intune',
  },
  {
    id: 'data-apps',
    name: 'Données & applications',
    description:
      'Relier les données aux décisions, transformer les processus et automatiser les échanges.',
    slugs: [
      'power-bi',
      'microsoft-fabric',
      'power-apps',
      'power-automate',
      'power-platform',
    ],
    products:
      'Power BI · Fabric · Power Apps · Power Automate · Power Pages · Dataverse',
  },
  {
    id: 'business',
    name: 'Gestion & relation client',
    description:
      'Structurer le suivi commercial et connecter finance, achats, ventes et opérations.',
    slugs: ['dynamics-365', 'business-central'],
    products: 'Dynamics 365 Sales · Customer Service · Business Central',
  },
  {
    id: 'cloud-ai',
    name: 'Cloud, IA & sécurité',
    description:
      'Concevoir l’architecture, intégrer l’IA et préparer la protection comme l’exploitation.',
    slugs: ['azure-cloud', 'copilot-ia', 'azure-devops', 'cybersecurite'],
    products:
      'Azure · Azure SQL · Microsoft 365 Copilot · Copilot Studio · Entra ID · Defender · Sentinel · Purview',
  },
  {
    id: 'delivery',
    name: 'Conseil & continuité',
    description:
      'Choisir les licences, cadrer le projet, mobiliser l’expertise et organiser le service.',
    slugs: ['licences', 'conseil-integration', 'support-services-manages'],
    products:
      'Conseil · Consultants au TJM · Projet au forfait · Intégration · Services managés',
  },
] as const;

export const solutionCoverage: Record<string, [string, string][]> = {
  'microsoft-365': [
    [
      'Teams & SharePoint',
      'Espaces de travail, sites documentaires, permissions et règles de partage interne ou externe.',
    ],
    [
      'Exchange Online & OneDrive',
      'Migration de messagerie, délégations, partage de fichiers et parcours d’arrivée ou de départ.',
    ],
    [
      'Planner, Loop & usages collaborateurs',
      'Organisation des tâches et des contenus collaboratifs selon les métiers, avec règles d’adoption.',
    ],
  ],
  'azure-cloud': [
    [
      'Infrastructure & réseau',
      'Machines virtuelles, stockage, connectivité et architecture hybride avec votre datacenter.',
    ],
    [
      'Azure SQL & applications',
      'Choix d’hébergement, migration des données et intégration des applications ; le dimensionnement part des charges existantes.',
    ],
    [
      'Sauvegarde & reprise',
      'Politique de sauvegarde, scénarios de restauration, dépendances et objectifs de reprise convenus.',
    ],
  ],
  'copilot-ia': [
    [
      'Microsoft 365 Copilot',
      'Usages dans les outils de travail, contrôle des droits documentaires et accompagnement des utilisateurs.',
    ],
    [
      'Copilot Studio',
      'Conception d’agents reliés à des sources et processus identifiés, avec contrôle des accès et des actions autorisées.',
    ],
    [
      'IA sur Azure',
      'Architecture des projets IA, choix des sources, protocole d’évaluation et suivi des coûts et des limites.',
    ],
  ],
  cybersecurite: [
    [
      'Entra ID',
      'Authentification multifacteur, accès conditionnel, comptes privilégiés et cycle de vie des identités.',
    ],
    [
      'Defender & Sentinel',
      'Protection, détection et organisation du traitement des alertes dans un périmètre défini.',
    ],
    [
      'Purview',
      'Classification, protection et gouvernance des données : les règles suivent vos responsabilités et vos contraintes.',
    ],
  ],
  'power-platform': [
    [
      'Power Apps & Power Automate',
      'Applications et automatisations reliées aux données et aux rôles des utilisateurs.',
    ],
    [
      'Power BI & Fabric',
      'Modèles, reporting et plateforme de données selon les volumes, les usages et les capacités.',
    ],
    [
      'Power Pages & Dataverse',
      'Portails et données métiers, avec authentification, permissions et gouvernance de déploiement.',
    ],
  ],
};
