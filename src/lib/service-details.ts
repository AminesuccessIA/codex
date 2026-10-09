import { microsoftServiceDetails } from './microsoft-offers';
export type ServiceDetail = {
  scopeIntro: string;
  methodTitle: string;
  method: [string, string][];
  benefitsTitle: string;
  benefits: string[];
  roadmap: [string, string][];
  additionalQuestion: string;
  additionalAnswer: string;
  scopeTitle: string;
  deliverablesTitle: string;
  example: string;
  secondQuestion: string;
  secondAnswer: string;
};
export const serviceDetails: Record<string, ServiceDetail> = {
  'microsoft-365': {
    scopeIntro:
      'Teams, SharePoint et OneDrive se travaillent ensemble : organisation des espaces, partage des documents et accompagnement des utilisateurs.',
    methodTitle: 'De l’usage réel à l’adoption.',
    method: [
      [
        'Observer les pratiques',
        'Entretiens ciblés et rapports d’usage disponibles : identifier les documents dispersés, les espaces peu utilisés et les freins métiers.',
      ],
      [
        'Dessiner les règles',
        'Convenir des propriétaires, des permissions et du cycle de vie des espaces avec les équipes IT et métiers.',
      ],
      [
        'Tester sur un groupe pilote',
        'Vérifier la migration, le partage interne et externe, puis recueillir les difficultés de prise en main avant extension.',
      ],
      [
        'Transmettre et suivre',
        'Documenter les règles, préparer les supports par métier et convenir des indicateurs d’usage à relire avec vos équipes.',
      ],
    ],
    benefitsTitle: 'Des pratiques plus faciles à transmettre.',
    benefits: [
      'Retrouver les documents dans des espaces identifiés, avec des responsabilités explicites.',
      'Évaluer l’adoption à partir des usages observés et des retours des utilisateurs, au-delà du seul déploiement.',
    ],
    roadmap: [
      ['D’abord', 'Clarifier les espaces et les accès prioritaires.'],
      ['Puis', 'Migrer et tester un périmètre pilote.'],
      ['Pour la suite', 'Accompagner les métiers et revoir les usages.'],
    ],
    additionalQuestion: 'Faut-il former toutes les équipes de la même façon ?',
    additionalAnswer:
      'Les parcours partent des tâches réelles : réunion Teams, partage de document, classement SharePoint ou travail hors connexion. Le pilote aide à identifier les supports et l’accompagnement utiles à chaque métier.',
    scopeTitle: 'Des espaces de travail gouvernés.',
    deliverablesTitle: 'Une migration que vos équipes peuvent reprendre.',
    example:
      'Exemple de cadrage : regrouper les documents d’un service dans SharePoint, organiser les droits par équipe et tester le partage avec un interlocuteur externe.',
    secondQuestion: 'Comment éviter une interruption lors d’une migration ?',
    secondAnswer:
      'Le calendrier, les dépendances et les critères de retour arrière sont définis avant la bascule. Un lot pilote permet de vérifier les accès, les données et les usages avant la généralisation.',
  },
  licences: {
    scopeIntro:
      'Rapprocher les dépenses, les affectations et les usages disponibles avant de comparer les options. Les engagements contractuels restent le cadre de la décision.',
    methodTitle: 'Du parc existant aux arbitrages budgétaires.',
    method: [
      [
        'Consolider les informations',
        'Recenser les abonnements, les modalités d’achat, les affectations et les échéances, à partir des exports convenus.',
      ],
      [
        'Relier les droits aux métiers',
        'Examiner les fonctionnalités nécessaires et les usages disponibles ; distinguer besoin non couvert, doublon potentiel et licence à conserver.',
      ],
      [
        'Comparer les options',
        'Documenter les hypothèses de coût, les prérequis et les limites de chaque scénario, y compris les impacts de sécurité.',
      ],
      [
        'Préparer la décision',
        'Restituer les écarts, classer les ajustements par échéance et identifier le responsable de chaque arbitrage.',
      ],
    ],
    benefitsTitle: 'Un budget que vous pouvez expliquer.',
    benefits: [
      'Disposer d’une lecture du parc par profil, fonctionnalité et échéance.',
      'Comparer des options chiffrées uniquement lorsque les données disponibles permettent de les justifier.',
    ],
    roadmap: [
      ['D’abord', 'Fiabiliser les affectations et les échéances.'],
      ['Puis', 'Étudier les ajustements compatibles avec vos contrats.'],
      ['Pour la suite', 'Organiser une revue du parc avant renouvellement.'],
    ],
    additionalQuestion:
      'Comment prenez-vous en compte le fournisseur de licences actuel ?',
    additionalAnswer:
      'L’analyse tient compte de vos engagements et peut être étudiée avec votre prestataire actuel. Les scénarios sont comparés dans ce cadre ; une évolution du mode d’achat est examinée avec vous si elle présente un intérêt.',
    scopeTitle: 'Des abonnements reliés aux profils.',
    deliverablesTitle: 'Les éléments pour arbitrer le renouvellement.',
    example:
      'Exemple de cadrage : comparer les droits nécessaires à une équipe terrain, à une équipe bureautique et aux administrateurs avant une échéance de renouvellement.',
    secondQuestion: 'Quelles informations préparer pour l’analyse ?',
    secondAnswer:
      'La liste des abonnements, leur mode d’achat, les dates de renouvellement et les profils d’utilisateurs. L’accès aux rapports d’affectation est défini dans le périmètre de la mission.',
  },
  'azure-cloud': {
    scopeIntro:
      'Les ressources, les dépenses et les responsabilités d’exploitation doivent être lisibles avant la migration. Le socle Azure est défini à partir des applications et de leurs dépendances.',
    methodTitle: 'Préparer le socle avant la bascule.',
    method: [
      [
        'Évaluer les charges',
        'Inventorier applications, dépendances, contraintes de réseau et besoins de restauration ; relever les données de consommation disponibles.',
      ],
      [
        'Concevoir le socle',
        'Définir les abonnements, les identités, le réseau, les politiques et les responsabilités d’exploitation.',
      ],
      [
        'Migrer par vagues',
        'Tester un premier périmètre avec critères de recette, sauvegarde et retour arrière avant d’organiser les vagues suivantes.',
      ],
      [
        'Passer en exploitation',
        'Transmettre les procédures et convenir d’une revue des dépenses, de la supervision et des responsabilités.',
      ],
    ],
    benefitsTitle: 'Des choix techniques et des coûts lisibles.',
    benefits: [
      'Comprendre les dépendances et les étapes nécessaires avant de déplacer une application.',
      'Relier chaque ressource à un responsable, un usage et des règles de suivi des dépenses.',
    ],
    roadmap: [
      ['D’abord', 'Vérifier les dépendances et les prérequis.'],
      ['Puis', 'Construire le socle et migrer un lot pilote.'],
      [
        'Pour la suite',
        'Revoir les consommations et les procédures d’exploitation.',
      ],
    ],
    additionalQuestion:
      'Quels livrables permettent de reprendre l’exploitation ?',
    additionalAnswer:
      'Le dossier d’architecture, les configurations convenues, les procédures de sauvegarde et de retour arrière ainsi que les responsabilités de supervision sont définis au cadrage. Le transfert est vérifié pendant la recette.',
    scopeTitle: 'Un socle cloud avant la migration.',
    deliverablesTitle: 'Une architecture et des procédures exploitables.',
    example:
      'Exemple de cadrage : préparer le réseau et les identités d’une application avant sa migration, puis vérifier sauvegarde, restauration et lecture des coûts.',
    secondQuestion: 'Comment encadrer les dépenses Azure ?',
    secondAnswer:
      'Définir des budgets, des alertes, une politique de tags et une revue des consommations. Les engagements d’achat doivent être évalués à partir des charges réellement prévues.',
  },
  'copilot-ia': {
    scopeIntro:
      'Les besoins métiers, la préparation des données et les permissions précèdent le choix des licences. Un pilote permet d’évaluer l’intérêt de Copilot sur des tâches identifiées.',
    methodTitle: 'Un pilote pour décider sur des observations.',
    method: [
      [
        'Choisir les tâches',
        'Recueillir les besoins métiers et sélectionner un ensemble limité de tâches avec critères de qualité, de temps et de confidentialité.',
      ],
      [
        'Vérifier les prérequis',
        'Examiner les sources, les droits d’accès et les règles de traitement ; identifier les corrections nécessaires avant le pilote.',
      ],
      [
        'Conduire le pilote',
        'Tester avec un groupe identifié, vérifier les réponses humainement et documenter les limites comme les usages pertinents.',
      ],
      [
        'Arbitrer la suite',
        'Comparer les observations aux critères convenus ; décider d’adapter, d’étendre ou d’arrêter le pilote et définir les conditions d’adoption.',
      ],
    ],
    benefitsTitle: 'Décider avant de généraliser les licences.',
    benefits: [
      'Distinguer les usages pertinents des attentes qui restent à vérifier dans votre environnement.',
      'Fonder une décision de déploiement sur un pilote documenté, avec risques et prérequis explicites.',
    ],
    roadmap: [
      ['D’abord', 'Qualifier les cas d’usage et revoir les permissions.'],
      ['Puis', 'Évaluer un pilote métier sur des critères convenus.'],
      [
        'Pour la suite',
        'Décider des licences et de l’accompagnement à partir des résultats.',
      ],
    ],
    additionalQuestion: 'Faut-il déjà utiliser Copilot ?',
    additionalAnswer:
      'L’accompagnement s’adapte à votre maturité : préparation des cas d’usage et des prérequis, conduite d’un pilote ou amélioration de l’adoption après déploiement.',
    scopeTitle: 'Un pilote encadré, avant la généralisation.',
    deliverablesTitle: 'Des critères pour décider après le pilote.',
    example:
      'Exemple de cadrage : tester la synthèse de comptes rendus sur un ensemble de documents autorisés, avec une grille de qualité et une vérification humaine des réponses.',
    secondQuestion: 'Comment évaluez-vous un pilote Copilot ?',
    secondAnswer:
      'Définir un ensemble de tâches, une méthode de comparaison et des critères de qualité, de temps et de confidentialité. Les mesures recueillies pendant le pilote étayent la décision de déploiement.',
  },
  'power-platform': {
    scopeIntro:
      'Commencer par le processus et ses exceptions, puis choisir les applications, les flux et les intégrations nécessaires. L’automatisation doit rester compréhensible et maintenable.',
    methodTitle: 'Du processus observé au flux testé.',
    method: [
      [
        'Décrire le circuit métier',
        'Identifier les ressaisies, les validations, les données sources, les responsables et les cas d’exception.',
      ],
      [
        'Définir les règles',
        'Convenir des rôles, des connecteurs, des licences et des conditions de traitement avec l’IT et le métier.',
      ],
      [
        'Construire et recetter',
        'Développer un périmètre pilote ; tester les refus, les erreurs de connexion et les reprises, autant que le parcours normal.',
      ],
      [
        'Documenter la maintenance',
        'Transmettre les règles de gestion, les responsabilités, le suivi des exceptions et les conditions d’évolution.',
      ],
    ],
    benefitsTitle: 'Un circuit métier que vous pouvez suivre.',
    benefits: [
      'Rendre visibles les validations et les exceptions, au lieu de les disperser entre fichiers et e-mails.',
      'Mesurer la ressaisie et les étapes de validation sur le processus pilote.',
    ],
    roadmap: [
      ['D’abord', 'Décrire un processus et choisir les exceptions à couvrir.'],
      ['Puis', 'Tester une application et ses flux sur un périmètre pilote.'],
      [
        'Pour la suite',
        'Organiser la maintenance et prioriser les évolutions.',
      ],
    ],
    additionalQuestion: 'Peut-on commencer par un seul processus ?',
    additionalAnswer:
      'Oui. Un circuit limité, avec données sources et responsables identifiés, permet de vérifier le fonctionnement et la maintenance avant d’étendre l’automatisation. Les autres processus sont priorisés séparément.',
    scopeTitle: 'Du circuit métier à l’application.',
    deliverablesTitle: 'Des flux testés et une maintenance définie.',
    example:
      'Exemple de cadrage : remplacer un circuit de demandes d’achat par une application de saisie, un flux de validation et un suivi des exceptions.',
    secondQuestion: 'Quels points vérifier avant de choisir un connecteur ?',
    secondAnswer:
      'Le système source, les droits de connexion, les limites d’usage, les licences nécessaires et le comportement en cas de panne. La recette couvre le parcours nominal, les erreurs et les reprises.',
  },
  cybersecurite: {
    scopeIntro:
      'La revue porte sur les identités, les permissions et les règles de gestion convenues. Les risques observés déterminent les priorités de remédiation et de vérification.',
    methodTitle: 'Prioriser les protections, valider les changements.',
    method: [
      [
        'Définir le périmètre',
        'Identifier les actifs, les accès, les responsabilités et les informations nécessaires ; convenir d’accès au moindre privilège.',
      ],
      [
        'Examiner les protections',
        'Revoir les identités, les comptes privilégiés, les terminaux et les règles de partage selon les axes retenus.',
      ],
      [
        'Tester les remédiations',
        'Prioriser les actions ; tester les changements sur un groupe limité avec critères de validation et retour arrière.',
      ],
      [
        'Préparer le suivi',
        'Documenter les configurations, les alertes, les responsables et les vérifications à renouveler après intervention.',
      ],
    ],
    benefitsTitle: 'Des risques documentés. Des actions vérifiables.',
    benefits: [
      'Relier chaque priorité à un risque observé, un responsable et un critère de vérification.',
      'Préparer l’exploitation des protections pour que les règles puissent être comprises et suivies par vos équipes.',
    ],
    roadmap: [
      ['D’abord', 'Traiter les écarts prioritaires dans le périmètre retenu.'],
      ['Puis', 'Valider les protections avec les équipes concernées.'],
      ['Pour la suite', 'Revoir les accès et les procédures dans la durée.'],
    ],
    additionalQuestion: 'Quel est le périmètre du diagnostic de sécurité ?',
    additionalAnswer:
      'Le diagnostic porte sur les identités, les permissions et les règles de gouvernance convenues. Il restitue les écarts observés et les priorités de remédiation. Le périmètre et la profondeur d’analyse sont fixés au cadrage.',
    scopeTitle: 'Des protections priorisées par risque.',
    deliverablesTitle: 'Un plan de remédiation vérifiable.',
    example:
      'Exemple de cadrage : revoir les comptes privilégiés, tester les règles d’accès conditionnel et documenter une procédure pour la perte d’un terminal.',
    secondQuestion: 'Comment déployer une règle sans bloquer les équipes ?',
    secondAnswer:
      'Examiner les dépendances, prévoir les comptes de secours et tester la règle sur un périmètre limité. Les étapes de validation et de retour arrière sont formalisées avant le déploiement.',
  },
  'conseil-integration': {
    scopeIntro:
      'Définir le besoin, examiner les dépendances et choisir l’organisation de la mission : conseil, intégration, assistance technique de consultants ou équipe projet au forfait.',
    methodTitle: 'Comprendre. Prioriser. Passer à l’action.',
    method: [
      [
        'Cadrer les objectifs',
        'Clarifier les enjeux, les interlocuteurs, le périmètre et les informations disponibles ; convenir du mode d’intervention et des livrables.',
      ],
      [
        'Analyser avec vos équipes',
        'Combiner inventaire, données disponibles et entretiens IT et métiers. Les accès nécessaires sont convenus au moindre privilège.',
      ],
      [
        'Documenter les arbitrages',
        'Distinguer les actions rapides, les projets structurants et les prérequis. Préciser les hypothèses de coût, les dépendances et les limites.',
      ],
      [
        'Restituer et organiser la suite',
        'Partager la synthèse et la feuille de route avec priorités, responsables et critères de validation. L’intégration est cadrée avant exécution.',
      ],
    ],
    benefitsTitle: 'Une prochaine étape que vous pouvez arbitrer.',
    benefits: [
      'Partager une synthèse lisible entre la direction, les équipes IT et les métiers.',
      'Choisir les actions et le mode d’accompagnement à partir de recommandations documentées.',
    ],
    roadmap: [
      ['D’abord', 'Établir l’état des lieux et les décisions urgentes.'],
      ['Puis', 'Cadrer les pilotes et les projets structurants.'],
      [
        'Pour la suite',
        'Définir les responsables, les prérequis et les indicateurs de suivi.',
      ],
    ],
    additionalQuestion:
      'Quels accès faut-il préparer et combien de temps prévoir ?',
    additionalAnswer:
      'Les informations strictement nécessaires sont définies au cadrage ; des exports et des entretiens peuvent suffire. Le calendrier dépend du périmètre, des données disponibles et des interlocuteurs. Les changements proposés font l’objet d’une validation avec vos interlocuteurs.',
    scopeTitle: 'Des arbitrages suivis jusqu’à la recette.',
    deliverablesTitle: 'Des décisions et des responsabilités documentées.',
    example:
      'Exemple de cadrage : relier une application métier à l’annuaire et aux outils de collaboration, en clarifiant les responsabilités sur les données et les interfaces.',
    secondQuestion: 'Comment qualifier une demande d’expertise ciblée ?',
    secondAnswer:
      'Préciser le problème, les compétences nécessaires, les accès possibles et le livrable attendu. L’assistance technique de consultants est cadrée par un TJM et une durée ; l’équipe projet au forfait par un périmètre, des livrables et une recette. Le profil et la disponibilité sont vérifiés avant proposition.',
  },
  'support-services-manages': {
    scopeIntro:
      'Clarifier ce qui est pris en charge, qui traite les demandes et comment les opérations sont suivies. Les horaires et engagements sont fixés au contrat.',
    methodTitle: 'De la reprise au suivi du service.',
    method: [
      [
        'Inventorier le périmètre',
        'Recenser les composants, les accès et la documentation ; identifier les dépendances et les éléments hors périmètre.',
      ],
      [
        'Organiser la prise en charge',
        'Convenir des canaux de demande, des catégories, des horaires, des responsabilités et des circuits d’escalade.',
      ],
      [
        'Vérifier les procédures',
        'Tester les opérations convenues et la transmission aux interlocuteurs désignés avant la prise en charge du service.',
      ],
      [
        'Relire les événements',
        'Partager le suivi des demandes et incidents, documenter les actions et prioriser les améliorations avec vos équipes.',
      ],
    ],
    benefitsTitle: 'Une exploitation avec des interlocuteurs identifiés.',
    benefits: [
      'Comprendre qui reçoit, qualifie et traite chaque demande dans le périmètre convenu.',
      'Conserver un suivi des incidents et des actions pour préparer les évolutions de l’environnement.',
    ],
    roadmap: [
      ['D’abord', 'Documenter le périmètre et les conditions de reprise.'],
      ['Puis', 'Valider les procédures et les circuits d’escalade.'],
      ['Pour la suite', 'Suivre les demandes et les actions d’amélioration.'],
    ],
    additionalQuestion: 'Le support peut-il suivre une mission d’intégration ?',
    additionalAnswer:
      'Oui. La prise en charge est définie séparément : périmètre, documentation, droits, horaires et responsabilités. Le contrat de services précise l’organisation de l’exploitation après livraison.',
    scopeTitle: 'Un périmètre de service avant la prise en charge.',
    deliverablesTitle: 'Les règles de prise en charge et d’escalade.',
    example:
      'Exemple de cadrage : organiser les demandes Microsoft 365, identifier les responsables d’escalade et formaliser les opérations récurrentes sur le tenant.',
    secondQuestion: 'Comment définissez-vous les engagements de service ?',
    secondAnswer:
      'Les horaires, le périmètre technique, les exclusions, les droits d’administration, les canaux de demande et les engagements applicables. Ces éléments formalisent les engagements convenus avec vos équipes.',
  },
  ...microsoftServiceDetails,
};
