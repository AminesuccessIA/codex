import type { Service } from './services';
import type { ServiceDetail } from './service-details';

export const microsoftServices: Service[] = [
  {
    slug: 'power-bi',
    name: 'Power BI',
    short: 'Des indicateurs partagés. Des décisions étayées.',
    eyebrow: 'DATA & BUSINESS INTELLIGENCE',
    title: 'Des données dispersées aux décisions partagées.',
    description:
      'La Pépiite IT conçoit vos tableaux de bord Power BI : préparation des données, modèle sémantique, indicateurs, accès et diffusion auprès des métiers.',
    tech: [
      'Power BI Desktop',
      'Modèles sémantiques & DAX',
      'Power Query',
      'Power BI Service',
    ],
    problem: 'Le même indicateur. Plusieurs chiffres.',
    context:
      'Un chiffre d’affaires calculé différemment selon le service, des exports Excel manuels ou un reporting trop tardif : le premier travail consiste à définir les indicateurs et leurs sources avec les métiers.',
    scope: [
      [
        'Modèle & indicateurs',
        'Relier les sources, fixer les règles de calcul et construire un modèle sémantique avec les mesures DAX nécessaires.',
      ],
      [
        'Tableaux de bord',
        'Concevoir des vues de pilotage, des filtres et des parcours de lecture adaptés à la direction, aux finances ou aux opérations.',
      ],
      [
        'Publication & gouvernance',
        'Organiser les espaces de travail, les actualisations, les droits par rôle et le partage selon les licences et capacités disponibles.',
      ],
    ],
    deliverables: [
      'Dictionnaire des indicateurs',
      'Modèle et rapports Power BI',
      'Règles d’accès et d’actualisation',
      'Guide de lecture et d’administration',
    ],
    question: 'Peut-on partir de fichiers Excel ?',
    answer:
      'Oui. Nous examinons leur structure et leur fiabilité, puis préparons les transformations. Pour un usage durable, la fréquence de mise à jour, la propriété des données et les sources de référence sont définies.',
    related: ['microsoft-fabric', 'power-platform', 'licences'],
  },
  {
    slug: 'microsoft-fabric',
    name: 'Microsoft Fabric',
    short: 'Un socle de données, du traitement au reporting.',
    eyebrow: 'PLATEFORME DATA & ANALYTICS',
    title: 'Organiser votre chaîne de données. De la source au métier.',
    description:
      'Intégrez vos données dans Microsoft Fabric avec une architecture adaptée : ingestion, lakehouse ou entrepôt, transformations, orchestration et connexion à Power BI.',
    tech: ['OneLake', 'Lakehouse & Warehouse', 'Data Factory', 'Power BI'],
    problem:
      'Les données circulent. Leur chaîne de traitement doit rester lisible.',
    context:
      'Les mêmes extractions se multiplient entre applications, fichiers et reporting. Une plateforme data doit préciser les sources, les transformations, les responsables et la fréquence attendue par les métiers.',
    scope: [
      [
        'Architecture data',
        'Comparer lakehouse et entrepôt, définir les domaines de données et organiser les espaces de travail et capacités.',
      ],
      [
        'Ingestion & transformation',
        'Construire les pipelines, les contrôles de qualité et les traitements nécessaires à la mise à disposition des données.',
      ],
      [
        'Gouvernance & exploitation',
        'Configurer les accès, suivre les traitements et la consommation de capacité, puis préparer la reprise après un échec.',
      ],
    ],
    deliverables: [
      'Architecture et contrats de données',
      'Pipelines et traitements documentés',
      'Contrôles qualité et suivi des traitements',
      'Procédures de gestion des accès et capacités',
    ],
    question: 'Faut-il remplacer toute la plateforme data ?',
    answer:
      'Une trajectoire progressive permet de conserver les sources et traitements utiles. Le cadrage identifie les composants à intégrer, à faire évoluer ou à migrer.',
    related: ['power-bi', 'azure-cloud', 'cybersecurite'],
  },
  {
    slug: 'power-apps',
    name: 'Power Apps',
    short: 'Une application adaptée à votre processus.',
    eyebrow: 'APPLICATIONS MÉTIERS & LOW-CODE',
    title: 'Remplacer la saisie dispersée par un parcours métier clair.',
    description:
      'Concevez avec La Pépiite IT des applications Power Apps intégrées à vos données et à Microsoft 365 : écrans, rôles, validations et déploiement maîtrisé.',
    tech: [
      'Applications canevas',
      'Applications pilotées par modèle',
      'Dataverse',
      'Connecteurs',
    ],
    problem: 'Un fichier partagé devient difficile à suivre.',
    context:
      'Demandes internes, interventions terrain ou suivi d’équipements : lorsque les saisies et validations dépendent de fichiers qui circulent, il faut clarifier le processus avant de construire les écrans.',
    scope: [
      [
        'Parcours métier',
        'Définir les écrans, les rôles, les étapes de validation et les exceptions avec les utilisateurs.',
      ],
      [
        'Données & intégration',
        'Choisir Dataverse ou une source adaptée, configurer les connecteurs et vérifier les règles d’accès.',
      ],
      [
        'Déploiement & maintenance',
        'Séparer développement, test et production, préparer les solutions et documenter leur reprise.',
      ],
    ],
    deliverables: [
      'Parcours et règles de gestion',
      'Application et modèle de données',
      'Recette des rôles et exceptions',
      'Dossier de déploiement et maintenance',
    ],
    question: 'Canevas ou application pilotée par modèle ?',
    answer:
      'Le choix dépend de la liberté d’interface, de la structure des données et des règles du processus. Un prototype aide à comparer les options avec les utilisateurs.',
    related: ['power-automate', 'power-platform', 'dynamics-365'],
  },
  {
    slug: 'power-automate',
    name: 'Power Automate',
    short: 'Des flux suivis, des exceptions traitées.',
    eyebrow: 'AUTOMATISATION & ORCHESTRATION',
    title:
      'Automatiser les étapes répétitives. Garder la maîtrise du processus.',
    description:
      'La Pépiite IT met en œuvre vos flux Power Automate : approbations, synchronisations, notifications et automatisation de tâches, avec règles d’erreur et suivi d’exécution.',
    tech: [
      'Flux cloud',
      'Approbations',
      'Power Automate Desktop',
      'Connecteurs & API',
    ],
    problem: 'La même information passe d’un outil à l’autre.',
    context:
      'Copier une demande, envoyer une relance ou rapprocher des statuts consomme du temps et introduit des écarts. Le flux doit traiter les exceptions, les doublons et les indisponibilités autant que le parcours habituel.',
    scope: [
      [
        'Règles & déclencheurs',
        'Décrire les événements, les conditions, les volumes et les validations qui déclenchent le processus.',
      ],
      [
        'Flux & intégration',
        'Configurer les connecteurs, les appels API et les identités techniques ; comparer flux cloud et automatisation de bureau.',
      ],
      [
        'Suivi & reprise',
        'Prévoir les journaux, les alertes, les reprises et la responsabilité du traitement des erreurs.',
      ],
    ],
    deliverables: [
      'Cartographie des flux et exceptions',
      'Automatisations et connexions documentées',
      'Tests de reprise et de non-duplication',
      'Procédures de suivi des exécutions',
    ],
    question:
      'Une automatisation peut-elle remplacer tous les contrôles humains ?',
    answer:
      'Les décisions sensibles et les exceptions gardent un responsable identifié. Le cadrage précise quelles étapes peuvent être automatisées et lesquelles nécessitent une validation.',
    related: ['power-apps', 'power-platform', 'copilot-ia'],
  },
  {
    slug: 'dynamics-365',
    name: 'Dynamics 365 CRM',
    short: 'Un suivi commercial partagé, du contact au service.',
    eyebrow: 'CRM & RELATION CLIENT',
    title: 'Relier vos opportunités, vos clients et vos équipes.',
    description:
      'La Pépiite IT intègre Dynamics 365 pour vos processus de vente et de relation client : qualification, pipeline, activités, données clients et interfaces avec vos outils.',
    tech: [
      'Dynamics 365 Sales',
      'Customer Service',
      'Dataverse',
      'Microsoft 365',
    ],
    problem: 'Le suivi client dépend encore de fichiers individuels.',
    context:
      'Les contacts, comptes, opportunités et échanges doivent être reliés dans un référentiel exploitable. Le CRM se construit autour du cycle commercial et des règles de gestion, puis se connecte aux autres applications.',
    scope: [
      [
        'Vente & relation client',
        'Formaliser les étapes de qualification, les activités, les rôles et les processus de suivi ou de service.',
      ],
      [
        'Paramétrage & reprise',
        'Configurer les tables, formulaires et règles, puis préparer la déduplication et la migration des données.',
      ],
      [
        'Interfaces & adoption',
        'Intégrer la messagerie et les applications utiles, définir les indicateurs et accompagner les utilisateurs.',
      ],
    ],
    deliverables: [
      'Processus commercial et règles CRM',
      'Paramétrage et matrice des rôles',
      'Plan de reprise et contrôles des données',
      'Guide utilisateur et interfaces documentées',
    ],
    question: 'Peut-on migrer depuis un autre CRM ?',
    answer:
      'Oui, après examen des exports, du modèle cible, de la qualité des données et des historiques à conserver. Un lot pilote vérifie les correspondances avant la bascule.',
    related: ['business-central', 'power-bi', 'power-apps'],
  },
  {
    slug: 'business-central',
    name: 'Business Central',
    short: 'Des opérations reliées, de la commande à la finance.',
    eyebrow: 'ERP & GESTION D’ENTREPRISE',
    title: 'Structurer la gestion. Relier les opérations.',
    description:
      'La Pépiite IT vous accompagne sur Dynamics 365 Business Central : cadrage ERP, finance, achats, ventes, stocks, reprise des données et intégration dans votre système d’information.',
    tech: [
      'Dynamics 365 Business Central',
      'Finance & comptabilité',
      'Achats, ventes & stocks',
      'Interfaces & extensions',
    ],
    problem: 'Les opérations et la finance avancent sur des bases différentes.',
    context:
      'Les commandes, les stocks et les écritures doivent suivre des règles cohérentes. La mise en place d’un ERP engage vos données de référence, vos processus et vos obligations locales, à valider avec les responsables concernés.',
    scope: [
      [
        'Processus & adéquation',
        'Décrire les flux de gestion et comparer les besoins au standard, aux extensions et aux contraintes de localisation.',
      ],
      [
        'Configuration & intégration',
        'Paramétrer le périmètre retenu et concevoir les échanges avec CRM, e-commerce ou applications métiers.',
      ],
      [
        'Reprise & bascule',
        'Préparer les référentiels et soldes, tester les opérations puis planifier la bascule et l’accompagnement.',
      ],
    ],
    deliverables: [
      'Dossier d’adéquation fonctionnelle',
      'Paramétrage et interfaces ERP',
      'Plan de reprise et rapprochements',
      'Scénarios de recette et plan de bascule',
    ],
    question: 'Business Central convient-il à notre activité ?',
    answer:
      'Un atelier d’adéquation compare vos processus au standard, aux extensions disponibles et aux contraintes locales. Les écarts structurants sont documentés avant la décision.',
    related: ['dynamics-365', 'power-bi', 'conseil-integration'],
  },
  {
    slug: 'teams-telephonie',
    name: 'Téléphonie Teams',
    short: 'Vos appels dans un environnement de travail commun.',
    eyebrow: 'COMMUNICATIONS & VOIX',
    title: 'Intégrer la téléphonie à vos usages Teams.',
    description:
      'Déployez Teams Phone avec La Pépiite IT : architecture voix, raccordement opérateur, numérotation, standards, files d’appels et accompagnement des utilisateurs.',
    tech: [
      'Teams Phone',
      'Operator Connect',
      'Direct Routing',
      'Standards & files d’appels',
    ],
    problem: 'Les appels et la collaboration restent séparés.',
    context:
      'Le choix de raccordement dépend des pays, de l’opérateur, des numéros et des équipements à conserver. La continuité d’appel, le réseau et les appels d’urgence se préparent avant la portabilité.',
    scope: [
      [
        'Architecture voix',
        'Comparer forfaits d’appels disponibles, Operator Connect et Direct Routing selon le contexte et les contraintes locales.',
      ],
      [
        'Routage & équipements',
        'Préparer la numérotation, les standards, les files d’attente, les terminaux et les usages spécifiques.',
      ],
      [
        'Migration & exploitation',
        'Tester la qualité, planifier la portabilité et documenter les opérations et escalades opérateur.',
      ],
    ],
    deliverables: [
      'Architecture voix et plan de numérotation',
      'Configuration des standards et files d’appels',
      'Plan de portabilité et scénarios de recette',
      'Guide utilisateur et procédures voix',
    ],
    question: 'Peut-on garder les numéros existants ?',
    answer:
      'La portabilité dépend de l’opérateur, des pays et de l’éligibilité des numéros. Elle est confirmée avant de fixer le calendrier de migration.',
    related: ['microsoft-365', 'licences', 'support-services-manages'],
  },
  {
    slug: 'intune',
    name: 'Microsoft Intune',
    short: 'Des terminaux gérés selon vos usages.',
    eyebrow: 'POSTES DE TRAVAIL & MOBILITÉ',
    title: 'Déployer vos équipements. Contrôler leur configuration.',
    description:
      'La Pépiite IT met en œuvre Microsoft Intune pour l’inscription des appareils, les applications, les politiques de conformité et la protection des données professionnelles.',
    tech: [
      'Microsoft Intune',
      'Windows Autopilot',
      'Gestion des applications',
      'Conformité & accès conditionnel',
    ],
    problem: 'Le parc grandit. Les configurations se dispersent.',
    context:
      'Postes Windows, appareils mobiles et équipements personnels n’impliquent pas les mêmes responsabilités. Les politiques doivent tenir compte des usages et du niveau de gestion accepté par l’organisation.',
    scope: [
      [
        'Inscription & déploiement',
        'Définir les profils d’équipement, préparer l’inscription et tester les parcours de déploiement.',
      ],
      [
        'Applications & conformité',
        'Configurer les applications, les profils et les critères de conformité adaptés aux groupes d’utilisateurs.',
      ],
      [
        'Protection & suivi',
        'Articuler les règles Intune avec Entra ID, documenter les exceptions et organiser le suivi du parc.',
      ],
    ],
    deliverables: [
      'Profils d’équipement et stratégie d’inscription',
      'Politiques et applications déployées',
      'Matrice de conformité et exceptions',
      'Procédures d’arrivée, de support et de départ',
    ],
    question: 'Peut-on gérer des appareils personnels ?',
    answer:
      'Des modes de protection applicative ou d’inscription peuvent répondre aux usages BYOD. Les règles d’information, la séparation des données et le niveau de contrôle sont définis avant déploiement.',
    related: ['cybersecurite', 'windows-365', 'microsoft-365'],
  },
  {
    slug: 'windows-365',
    name: 'Windows 365 & AVD',
    short: 'Un poste distant adapté à vos contraintes.',
    eyebrow: 'CLOUD PC & BUREAUX VIRTUELS',
    title: 'Donner accès au poste de travail. Au-delà du matériel.',
    description:
      'Comparez puis déployez Windows 365 ou Azure Virtual Desktop avec La Pépiite IT : profils utilisateurs, applications, réseau, sécurité et exploitation des postes distants.',
    tech: [
      'Windows 365',
      'Azure Virtual Desktop',
      'Microsoft Intune',
      'Réseau & profils utilisateurs',
    ],
    problem: 'Les usages distants demandent un environnement maîtrisé.',
    context:
      'Accès prestataires, travail à distance ou applications centralisées : le choix du poste distant dépend des profils, de la simultanéité, des applications et des contraintes de latence ou de résidence.',
    scope: [
      [
        'Choix d’architecture',
        'Comparer Cloud PC et bureaux virtuels Azure selon les usages, les modes de session et les coûts d’exploitation.',
      ],
      [
        'Applications & accès',
        'Préparer les images ou politiques, les profils, le réseau et les règles d’accès et de protection.',
      ],
      [
        'Pilote & exploitation',
        'Mesurer l’expérience utilisateur, tester les applications et transmettre les procédures de gestion.',
      ],
    ],
    deliverables: [
      'Comparatif Windows 365 et AVD',
      'Architecture des accès et applications',
      'Résultats de recette du pilote',
      'Procédures de gestion des postes distants',
    ],
    question: 'Quelle différence entre Windows 365 et Azure Virtual Desktop ?',
    answer:
      'Windows 365 propose des Cloud PC par utilisateur. AVD permet de concevoir une infrastructure de postes et applications virtuels sur Azure. La gestion, les licences et le dimensionnement sont comparés pour votre contexte.',
    related: ['azure-cloud', 'intune', 'cybersecurite'],
  },
  {
    slug: 'azure-devops',
    name: 'Azure DevOps',
    short: 'Des livraisons reproductibles, des changements traçables.',
    eyebrow: 'INGÉNIERIE LOGICIELLE & DEVOPS',
    title: 'Organiser les développements. Fiabiliser les déploiements.',
    description:
      'La Pépiite IT structure vos projets Azure DevOps : dépôts, pipelines CI/CD, infrastructure as code, tests et règles de validation des changements.',
    tech: [
      'Azure Repos',
      'Azure Pipelines',
      'Azure Boards',
      'Infrastructure as Code',
    ],
    problem: 'Le déploiement dépend encore de gestes individuels.',
    context:
      'Un script local, un secret partagé ou une validation implicite fragilise la livraison. Les dépôts, les pipelines et les environnements doivent permettre de comprendre ce qui change et de reprendre une exécution.',
    scope: [
      [
        'Dépôts & organisation',
        'Définir les branches, les revues, les droits et le suivi du travail avec les équipes de développement.',
      ],
      [
        'Pipelines & environnements',
        'Construire les étapes de compilation, de test et de déploiement, avec des identités et accès adaptés.',
      ],
      [
        'Validation & reprise',
        'Prévoir les approbations, le retour arrière, les journaux et la documentation des opérations.',
      ],
    ],
    deliverables: [
      'Règles de dépôt et revue de code',
      'Pipelines et déploiements documentés',
      'Gestion des accès et secrets',
      'Procédures de validation et retour arrière',
    ],
    question: 'Peut-on conserver GitHub pour le code ?',
    answer:
      'Le choix des outils et leurs intégrations est examiné selon les dépôts et pratiques existants. Une migration est proposée seulement lorsque son périmètre et son intérêt sont établis.',
    related: ['azure-cloud', 'conseil-integration', 'cybersecurite'],
  },
];

export const microsoftServiceDetails: Record<string, ServiceDetail> = {
  'power-bi': {
    scopeIntro:
      'La préparation, le modèle et le rapport se travaillent ensemble. Nous définissons la granularité, les transformations et les modalités de publication selon les utilisateurs du reporting.',
    scopeTitle: 'Du calcul à la lecture métier.',
    deliverablesTitle: 'Un reporting que vos équipes peuvent expliquer.',
    methodTitle: 'Convenir du sens des chiffres.',
    method: [
      [
        'Définir les mesures',
        'Valider les formules, le grain des données, les périodes et les écarts acceptables avec les responsables métiers.',
      ],
      [
        'Préparer les sources',
        'Contrôler la qualité, les clés de rapprochement, les accès et le besoin d’une passerelle de données.',
      ],
      [
        'Confronter le rapport aux données',
        'Tester les mesures sur un échantillon connu et vérifier les filtres ainsi que la sécurité au niveau des lignes.',
      ],
      [
        'Organiser la diffusion',
        'Publier, transmettre les règles de lecture et surveiller les actualisations et les performances.',
      ],
    ],
    benefitsTitle: 'Des indicateurs partagés. Des décisions étayées.',
    benefits: [
      'Comparer les indicateurs sur des définitions communes et des sources identifiées.',
      'Consulter les données selon son périmètre de responsabilité, avec des actualisations suivies.',
    ],
    roadmap: [
      ['D’abord', 'Choisir un tableau de bord prioritaire et ses indicateurs.'],
      ['Puis', 'Livrer un modèle et un rapport validés par le métier.'],
      [
        'Pour la suite',
        'Étendre les usages et revoir les performances du modèle.',
      ],
    ],
    example:
      'Exemple de cadrage : rapprocher des ventes issues d’un ERP et d’un fichier d’objectifs pour analyser les écarts par période et équipe.',
    secondQuestion: 'Power BI Pro ou une capacité Fabric : comment choisir ?',
    secondAnswer:
      'Le nombre d’auteurs, de lecteurs, les volumes et les modes de diffusion orientent le choix. Les droits de partage et de consultation sont vérifiés dans les conditions de licence applicables.',
    additionalQuestion:
      'Peut-on limiter les données visibles par utilisateur ?',
    additionalAnswer:
      'La sécurité au niveau des lignes peut filtrer les données selon les rôles. Les droits des espaces de travail et des modèles restent à vérifier, puis à tester avec des comptes représentatifs.',
  },
  'microsoft-fabric': {
    scopeIntro:
      'Le socle s’organise par domaines : sources, stockage, traitements et mise à disposition. Les contrôles de qualité et le suivi de capacité sont prévus dès le pilote.',
    scopeTitle: 'Une chaîne de données exploitable.',
    deliverablesTitle: 'Des flux dont vous connaissez le parcours.',
    methodTitle: 'Partir des sources et des usages.',
    method: [
      [
        'Cartographier les flux',
        'Identifier les sources, les propriétaires, les volumes, la sensibilité et la fraîcheur attendue.',
      ],
      [
        'Valider un domaine pilote',
        'Choisir le stockage et tester un premier flux avec des données représentatives.',
      ],
      [
        'Industrialiser les traitements',
        'Prévoir les dépendances, les reprises, les tests qualité et la mise à disposition pour Power BI.',
      ],
      [
        'Transmettre l’exploitation',
        'Documenter les alertes, les accès et les éléments à suivre pour ajuster la capacité.',
      ],
    ],
    benefitsTitle: 'Un socle de données, du traitement au reporting.',
    benefits: [
      'Tracer le parcours de la donnée entre une source et un indicateur.',
      'Faire évoluer les traitements à partir d’un socle documenté et supervisé.',
    ],
    roadmap: [
      [
        'D’abord',
        'Sélectionner un domaine de données et son niveau de service.',
      ],
      ['Puis', 'Valider les pipelines et la consommation sur un pilote.'],
      [
        'Pour la suite',
        'Étendre la plateforme par domaines et suivre la capacité.',
      ],
    ],
    example:
      'Exemple de cadrage : alimenter un entrepôt depuis un ERP et un CRM, contrôler les rapprochements puis servir un modèle Power BI.',
    secondQuestion: 'Comment dimensionner Fabric ?',
    secondAnswer:
      'Le dimensionnement part des volumes, de la simultanéité, des traitements et des besoins de diffusion. Un pilote mesure la consommation avant une décision de capacité.',
    additionalQuestion: 'Comment prendre en compte les données sensibles ?',
    additionalAnswer:
      'Le projet définit la classification, les accès et les contraintes de résidence. Les régions disponibles et les conditions contractuelles sont vérifiées pour le périmètre retenu.',
  },
  'power-apps': {
    scopeIntro:
      'Les parcours, les données et les responsabilités guident la conception. La recette vérifie autant la saisie quotidienne que les rôles et les situations exceptionnelles.',
    scopeTitle: 'Le processus avant les écrans.',
    deliverablesTitle: 'Une application que vos équipes peuvent faire évoluer.',
    methodTitle: 'Comprendre les gestes du métier.',
    method: [
      [
        'Observer le travail réel',
        'Décrire les tâches, les points de ressaisie et les situations hors du parcours nominal.',
      ],
      [
        'Prototyper les écrans',
        'Valider la navigation avec des utilisateurs, notamment sur téléphone lorsque le contexte l’exige.',
      ],
      [
        'Tester les rôles et données',
        'Vérifier la confidentialité, les connecteurs et le comportement des validations.',
      ],
      [
        'Déployer et transmettre',
        'Mettre en production une version validée et former les responsables de maintenance.',
      ],
    ],
    benefitsTitle: 'Une application adaptée à votre processus.',
    benefits: [
      'Saisir une information dans un parcours défini et retrouver son état.',
      'Maintenir les règles de gestion dans une application documentée.',
    ],
    roadmap: [
      ['D’abord', 'Valider un processus et ses utilisateurs.'],
      ['Puis', 'Tester une application sur un groupe identifié.'],
      [
        'Pour la suite',
        'Déployer les évolutions avec une procédure de versionnement.',
      ],
    ],
    example:
      'Exemple de cadrage : une application de demande de matériel avec suivi des validations et lien vers le référentiel d’équipements.',
    secondQuestion: 'Quels connecteurs faut-il licencier ?',
    secondAnswer:
      'Les sources et connecteurs prévus sont inventoriés au cadrage. Les droits standard ou premium, les utilisateurs et les limites de plateforme sont examinés avant la proposition.',
    additionalQuestion: 'Peut-on concevoir un portail externe ?',
    additionalAnswer:
      'Power Pages répond à certains parcours externes. L’authentification, les accès, les licences et les exigences de sécurité font l’objet d’un cadrage distinct.',
  },
  'power-automate': {
    scopeIntro:
      'L’automatisation intègre les événements, les connexions et les reprises. Chaque flux possède un responsable et une procédure de traitement des échecs.',
    scopeTitle: 'Le parcours nominal. Et les exceptions.',
    deliverablesTitle: 'Des flux prêts à être suivis.',
    methodTitle: 'Définir les événements et les règles.',
    method: [
      [
        'Choisir un flux prioritaire',
        'Relever sa fréquence, ses systèmes, ses règles et les exceptions connues.',
      ],
      [
        'Construire sur un environnement de test',
        'Configurer les connexions et vérifier le déroulement avec des données de recette.',
      ],
      [
        'Simuler les incidents',
        'Tester l’indisponibilité d’une source, les doublons, les refus et les limites de service.',
      ],
      [
        'Organiser la surveillance',
        'Transmettre les alertes et la procédure de reprise au responsable du processus.',
      ],
    ],
    benefitsTitle: 'Des flux suivis, des exceptions traitées.',
    benefits: [
      'Suivre les validations et les échanges entre applications dans un circuit défini.',
      'Identifier et traiter les erreurs d’exécution avant qu’elles ne deviennent des écarts métiers.',
    ],
    roadmap: [
      ['D’abord', 'Décrire les règles et les exceptions du processus.'],
      ['Puis', 'Valider le flux et les scénarios de panne.'],
      ['Pour la suite', 'Mettre en production avec un suivi convenu.'],
    ],
    example:
      'Exemple de cadrage : synchroniser une demande validée vers un outil métier, envoyer une notification et gérer une reprise sans créer de doublon.',
    secondQuestion: 'Flux cloud ou automatisation de bureau ?',
    secondAnswer:
      'Les flux cloud privilégient les connecteurs et API. L’automatisation de bureau peut répondre à un outil sans interface adaptée, avec une attention particulière à la stabilité et aux conditions d’exécution.',
    additionalQuestion: 'Comment éviter les doublons lors d’une reprise ?',
    additionalAnswer:
      'Nous définissons les identifiants, les règles de reprise et les contrôles d’état. Ces mécanismes sont testés sur des scénarios d’erreur avant la mise en production.',
  },
  'dynamics-365': {
    scopeIntro:
      'Le modèle client, les étapes du pipeline et les règles d’accès précèdent les écrans. Les interfaces avec la messagerie et les outils de gestion sont préparées avec la reprise.',
    scopeTitle: 'Le CRM autour du cycle client.',
    deliverablesTitle: 'Un référentiel et des processus partagés.',
    methodTitle: 'Qualifier avant de paramétrer.',
    method: [
      [
        'Cartographier le cycle client',
        'Identifier les étapes, les propriétaires, les données utiles et les points de passage entre services.',
      ],
      [
        'Valider un prototype métier',
        'Tester un parcours de qualification et de suivi avant de généraliser le paramétrage.',
      ],
      [
        'Fiabiliser la reprise',
        'Nettoyer les données, vérifier les correspondances et contrôler les accès sur un lot pilote.',
      ],
      [
        'Accompagner la prise en main',
        'Former par rôle et relire la qualité de saisie ainsi que l’usage des étapes du pipeline.',
      ],
    ],
    benefitsTitle: 'Un suivi commercial partagé, du contact au service.',
    benefits: [
      'Partager l’état d’une opportunité, ses prochaines actions et son responsable.',
      'Relier les données de relation client à des processus et indicateurs définis.',
    ],
    roadmap: [
      ['D’abord', 'Définir le référentiel client et le cycle de vente.'],
      ['Puis', 'Valider le CRM et la reprise sur un périmètre pilote.'],
      [
        'Pour la suite',
        'Étendre les interfaces et les usages de service client.',
      ],
    ],
    example:
      'Exemple de cadrage : reprendre un fichier de prospects, définir les étapes de qualification et organiser les relances dans Dynamics 365 Sales.',
    secondQuestion: 'Sales et Customer Service répondent-ils au même besoin ?',
    secondAnswer:
      'Sales organise le suivi commercial ; Customer Service accompagne des processus de service, notamment les demandes et leur traitement. Les applications et licences sont sélectionnées selon les usages.',
    additionalQuestion: 'Comment connecter CRM et ERP ?',
    additionalAnswer:
      'Le projet définit les données échangées, leur source de référence et les règles de synchronisation. Les interfaces sont testées avec les exceptions et les reprises prévues.',
  },
  'business-central': {
    scopeIntro:
      'Le projet ERP relie processus, paramétrage et données. Les responsables métiers participent aux contrôles du standard, aux écarts et aux scénarios de recette.',
    scopeTitle: 'La gestion comme un ensemble.',
    deliverablesTitle: 'Les éléments pour préparer une bascule ERP.',
    methodTitle: 'Vérifier l’adéquation aux processus.',
    method: [
      [
        'Décrire les flux de gestion',
        'Cadrer les sociétés, les processus, les règles comptables et les référentiels avec les métiers.',
      ],
      [
        'Tester l’adéquation au standard',
        'Valider des parcours achat, vente et stock avant de décider des extensions.',
      ],
      [
        'Rapprocher les données reprises',
        'Vérifier référentiels, soldes et opérations de test avec les responsables finance et gestion.',
      ],
      [
        'Préparer la bascule',
        'Planifier le gel, les contrôles, la reprise et la prise en main par rôle.',
      ],
    ],
    benefitsTitle: 'Des opérations reliées, de la commande à la finance.',
    benefits: [
      'Relier les opérations et les contrôles sur un référentiel de gestion partagé.',
      'Disposer de règles de reprise et de validation avant une bascule ERP.',
    ],
    roadmap: [
      ['D’abord', 'Valider les processus et les écarts au standard.'],
      ['Puis', 'Tester le paramétrage et une reprise représentative.'],
      [
        'Pour la suite',
        'Basculer avec les rapprochements et l’accompagnement prévus.',
      ],
    ],
    example:
      'Exemple de cadrage : relier achats, stocks et facturation, reprendre les articles et tiers, puis vérifier un cycle complet sur des données de recette.',
    secondQuestion: 'Peut-on conserver des applications existantes ?',
    secondAnswer:
      'Des interfaces peuvent relier Business Central aux outils à conserver. La source de référence, la fréquence d’échange et les règles de reprise sont définies pour chaque flux.',
    additionalQuestion: 'Comment traiter les exigences comptables locales ?',
    additionalAnswer:
      'Les obligations de vos pays d’activité et les localisations disponibles sont examinées avec vos responsables finance et conseils compétents. Les contrôles de recette intègrent ces exigences.',
  },
  'teams-telephonie': {
    scopeIntro:
      'Numéros, opérateurs, réseau et parcours d’appel font l’objet d’un même cadrage. La migration se prépare avec un pilote et un calendrier de portabilité confirmé.',
    scopeTitle: 'L’architecture voix, de bout en bout.',
    deliverablesTitle: 'Un plan d’appels prêt pour la migration.',
    methodTitle: 'Qualifier les usages et les pays.',
    method: [
      [
        'Inventorier les usages voix',
        'Recenser numéros, pays, opérateurs, standards, équipements et contraintes d’urgence.',
      ],
      [
        'Tester le raccordement',
        'Valider les licences, le réseau et un parcours d’appel sur un périmètre pilote.',
      ],
      [
        'Préparer la portabilité',
        'Convenir du calendrier, des responsabilités et des conditions de continuité avec l’opérateur.',
      ],
      [
        'Vérifier et accompagner',
        'Contrôler entrants, sortants, transferts et files d’attente ; transmettre les procédures.',
      ],
    ],
    benefitsTitle: 'Vos appels dans un environnement de travail commun.',
    benefits: [
      'Retrouver les appels et la collaboration dans un même environnement utilisateur.',
      'Administrer la numérotation et les parcours d’appel avec des responsabilités identifiées.',
    ],
    roadmap: [
      ['D’abord', 'Choisir le raccordement adapté aux pays et usages.'],
      ['Puis', 'Tester les appels et préparer la portabilité.'],
      ['Pour la suite', 'Déployer par lots et suivre la qualité voix.'],
    ],
    example:
      'Exemple de cadrage : remplacer un standard par un accueil Teams, une file d’appels et des transferts vers les collaborateurs concernés.',
    secondQuestion:
      'Teams Phone inclut-il automatiquement un abonnement opérateur ?',
    secondAnswer:
      'La licence téléphonique et le raccordement au réseau public sont des éléments distincts à examiner. Les offres et disponibilités varient selon le pays et le mode retenu.',
    additionalQuestion:
      'Comment traiter les appels d’urgence et équipements spéciaux ?',
    additionalAnswer:
      'Le cadrage examine les emplacements, les obligations locales et les équipements comme fax, interphonie ou terminaux spécifiques. Chaque usage est validé avec les interlocuteurs compétents.',
  },
  intune: {
    scopeIntro:
      'Les politiques se construisent par profils d’utilisateurs et d’appareils. Les applications, la conformité et les règles d’accès sont testées sur un parc représentatif.',
    scopeTitle: 'Les politiques au plus près des usages.',
    deliverablesTitle: 'Un parc et des règles documentés.',
    methodTitle: 'Comprendre les profils d’équipement.',
    method: [
      [
        'Qualifier les profils d’appareils',
        'Distinguer équipements d’entreprise, appareils personnels et contraintes des métiers.',
      ],
      [
        'Construire les politiques pilotes',
        'Tester l’inscription, les applications et les réglages sur des appareils représentatifs.',
      ],
      [
        'Valider les accès',
        'Vérifier l’effet des règles de conformité et d’accès conditionnel, avec les exceptions prévues.',
      ],
      [
        'Étendre et suivre',
        'Déployer par groupes et transmettre les rapports, les alertes et les opérations récurrentes.',
      ],
    ],
    benefitsTitle: 'Des terminaux gérés selon vos usages.',
    benefits: [
      'Appliquer des configurations documentées à des groupes d’appareils définis.',
      'Gérer les accès professionnels en tenant compte de l’état des équipements.',
    ],
    roadmap: [
      ['D’abord', 'Établir les profils et règles de gestion du parc.'],
      ['Puis', 'Valider les politiques et les applications sur un pilote.'],
      [
        'Pour la suite',
        'Étendre la gestion et organiser le suivi des exceptions.',
      ],
    ],
    example:
      'Exemple de cadrage : préparer des postes pour de nouveaux collaborateurs, déployer les applications et vérifier l’accès aux données professionnelles.',
    secondQuestion: 'Intune remplace-t-il une protection contre les menaces ?',
    secondAnswer:
      'Intune gère les appareils et applications. L’intégration avec des protections comme Microsoft Defender est étudiée pour relier état de sécurité et accès.',
    additionalQuestion: 'Faut-il tout déployer en une seule fois ?',
    additionalAnswer:
      'Un pilote permet de vérifier les applications, les usages et les effets des politiques. La généralisation suit des groupes et des critères de validation convenus.',
  },
  'windows-365': {
    scopeIntro:
      'Le choix du poste distant part des applications et des réseaux utilisés. Nous comparons les architectures, préparons les accès et validons l’expérience sur un pilote.',
    scopeTitle: 'Choisir avant de provisionner.',
    deliverablesTitle: 'Une architecture de poste distant validée.',
    methodTitle: 'Comparer sur vos applications.',
    method: [
      [
        'Qualifier les utilisateurs',
        'Décrire les tâches, les applications, la localisation et les besoins d’accès.',
      ],
      [
        'Tester l’expérience',
        'Comparer les options sur les applications et réseaux représentatifs du périmètre.',
      ],
      [
        'Valider la sécurité',
        'Vérifier les identités, les transferts de données et les règles d’accès distant.',
      ],
      [
        'Organiser l’exploitation',
        'Définir la gestion des images, profils, incidents et capacités avec les responsables IT.',
      ],
    ],
    benefitsTitle: 'Un poste distant adapté à vos contraintes.',
    benefits: [
      'Accéder à un environnement de travail centralisé selon des droits définis.',
      'Choisir une architecture sur des tests d’usage et des hypothèses de coût explicites.',
    ],
    roadmap: [
      ['D’abord', 'Identifier les profils et applications prioritaires.'],
      ['Puis', 'Comparer les solutions sur un pilote représentatif.'],
      ['Pour la suite', 'Déployer avec un suivi de l’expérience et des coûts.'],
    ],
    example:
      'Exemple de cadrage : donner à un groupe de prestataires un accès distant aux applications utiles, avec des droits et règles de transfert définis.',
    secondQuestion: 'Peut-on publier uniquement une application ?',
    secondAnswer:
      'AVD peut répondre à des scénarios de publication d’applications distantes. La compatibilité, les profils et l’expérience utilisateur sont testés avant décision.',
    additionalQuestion:
      'Les données restent-elles toujours dans une région précise ?',
    additionalAnswer:
      'La localisation dépend de l’architecture, des services et des options retenues. Les régions disponibles, les flux et les conditions contractuelles sont examinés au cadrage.',
  },
  'azure-devops': {
    scopeIntro:
      'Le parcours de livraison associe code, tests et environnements. Les revues, les permissions et les règles de reprise sont intégrées à la chaîne de déploiement.',
    scopeTitle: 'De la modification à la livraison.',
    deliverablesTitle: 'Une chaîne de déploiement transmissible.',
    methodTitle: 'Reconstituer le parcours de livraison.',
    method: [
      [
        'Reconstituer la livraison actuelle',
        'Identifier les dépôts, les environnements, les accès et les opérations manuelles.',
      ],
      [
        'Automatiser un premier parcours',
        'Construire un pipeline de test jusqu’à un environnement de recette.',
      ],
      [
        'Vérifier les contrôles',
        'Tester les droits, les approbations, les secrets et le comportement en cas d’échec.',
      ],
      [
        'Transmettre les opérations',
        'Documenter l’ajout d’un projet, la reprise d’une exécution et le retour à une version connue.',
      ],
    ],
    benefitsTitle: 'Des livraisons reproductibles, des changements traçables.',
    benefits: [
      'Reproduire une livraison à partir d’un code et d’une configuration versionnés.',
      'Relier chaque changement à une validation et à des opérations documentées.',
    ],
    roadmap: [
      ['D’abord', 'Choisir un projet et un environnement de recette.'],
      ['Puis', 'Valider le pipeline et les contrôles de sécurité.'],
      [
        'Pour la suite',
        'Étendre les automatisations et revoir les procédures.',
      ],
    ],
    example:
      'Exemple de cadrage : automatiser les tests et le déploiement d’une application Azure, avec approbation avant production et retour arrière documenté.',
    secondQuestion: 'Comment gérez-vous les secrets des pipelines ?',
    secondAnswer:
      'Les accès suivent des identités et permissions limitées au besoin. Les mécanismes de secret ou de fédération adaptés sont retenus, avec rotation et responsabilité documentées.',
    additionalQuestion: 'Automatisez-vous aussi l’infrastructure Azure ?',
    additionalAnswer:
      'L’infrastructure as code peut faire partie du projet. Les ressources, politiques et validations sont définies avec le socle Azure et testées dans les environnements convenus.',
  },
};

export const microsoftProductSources: Record<string, string> = {
  'power-bi':
    'https://learn.microsoft.com/fr-fr/power-bi/fundamentals/power-bi-overview',
  'microsoft-fabric':
    'https://learn.microsoft.com/fr-fr/fabric/fundamentals/microsoft-fabric-overview',
  'power-apps':
    'https://learn.microsoft.com/fr-fr/power-apps/powerapps-overview',
  'power-automate':
    'https://learn.microsoft.com/fr-fr/power-automate/getting-started',
  'dynamics-365':
    'https://learn.microsoft.com/fr-fr/dynamics365/sales/overview',
  'business-central':
    'https://learn.microsoft.com/fr-fr/dynamics365/business-central/welcome',
  'teams-telephonie':
    'https://learn.microsoft.com/fr-fr/microsoftteams/what-is-phone-system-in-office-365',
  intune:
    'https://learn.microsoft.com/fr-fr/intune/intune-service/fundamentals/what-is-intune',
  'windows-365': 'https://learn.microsoft.com/fr-fr/windows-365/overview',
  'azure-devops': 'https://azure.microsoft.com/fr-fr/products/devops/',
};
