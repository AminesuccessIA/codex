export type Service = {
  slug: string;
  name: string;
  short: string;
  eyebrow: string;
  title: string;
  description: string;
  tech: string[];
  problem: string;
  context: string;
  scope: string[][];
  deliverables: string[];
  question: string;
  answer: string;
  related: string[];
};
export const services: Service[] = [
  {
    slug: 'microsoft-365',
    name: 'Microsoft 365',
    short: 'Le travail, mieux connecté.',
    eyebrow: 'COLLABORATION & MODERN WORK',
    title: 'Un environnement de travail qui fonctionne ensemble.',
    description:
      'Structurez Microsoft 365 autour de vos équipes : messagerie, collaboration, documents et gouvernance. La Pépiite IT vous accompagne du cadrage à l’adoption.',
    tech: ['Teams', 'SharePoint', 'Exchange Online', 'OneDrive'],
    problem: 'Des outils communs. Des pratiques qui ne le sont pas toujours.',
    context:
      'Des fichiers dispersés, des espaces Teams qui se multiplient, des droits difficiles à relire : la collaboration a besoin d’une architecture aussi claire que vos processus.',
    scope: [
      [
        'Architecture & gouvernance',
        'Définir les espaces, les règles de partage, les responsabilités et le cycle de vie des contenus.',
      ],
      [
        'Migration & intégration',
        'Préparer la messagerie et les documents, planifier les bascules et vérifier les accès dans l’environnement cible.',
      ],
      [
        'Adoption & usages',
        'Construire des parcours adaptés aux équipes et accompagner les nouveaux usages au-delà du déploiement.',
      ],
    ],
    deliverables: [
      'Cartographie des espaces et des accès',
      'Plan de migration et critères de recette',
      'Règles de gouvernance documentées',
      'Supports de prise en main',
    ],
    question:
      'Peut-on améliorer un environnement Microsoft 365 déjà en place ?',
    answer:
      'Oui. Le cadrage part de votre tenant, des usages existants et des difficultés rencontrées. Une refonte complète n’est pas systématique : les changements peuvent être ciblés et progressifs.',
    related: ['licences', 'copilot-ia', 'cybersecurite'],
  },
  {
    slug: 'licences',
    name: 'Licences',
    short: 'Les bons droits. Les bons usages.',
    eyebrow: 'ABONNEMENTS & PILOTAGE',
    title: 'Un parc de licences lisible, aligné sur vos besoins.',
    description:
      'Mettez en regard vos abonnements Microsoft, les profils de vos utilisateurs et vos contraintes contractuelles. Décidez sur la base d’un inventaire documenté.',
    tech: ['Microsoft 365', 'Microsoft Azure', 'Copilot', 'Power Platform'],
    problem:
      'Une licence choisie par habitude peut ne plus correspondre au besoin.',
    context:
      'Les arrivées, départs et évolutions de métiers modifient votre parc. Nous rapprochons les affectations, les fonctionnalités nécessaires et les échéances pour éclairer vos arbitrages.',
    scope: [
      [
        'Inventaire du parc',
        'Reconstituer les abonnements, les affectations, les renouvellements et les modalités d’achat.',
      ],
      [
        'Analyse par profil',
        'Relier les besoins de collaboration, de sécurité et d’administration aux droits réellement nécessaires.',
      ],
      [
        'Trajectoire & renouvellement',
        'Construire des scénarios comparables, expliciter les limites et préparer vos prochaines échéances.',
      ],
    ],
    deliverables: [
      'Inventaire consolidé des abonnements',
      'Matrice des besoins par profil',
      'Scénarios d’allocation argumentés',
      'Calendrier des décisions et renouvellements',
    ],
    question: 'L’analyse garantit-elle une réduction de coûts ?',
    answer:
      'Non. Les conclusions dépendent de votre parc, de vos contrats et des besoins de sécurité ou de conformité. L’objectif est une décision justifiée ; les économies éventuelles doivent être établies à partir de vos données.',
    related: ['microsoft-365', 'azure-cloud', 'conseil-integration'],
  },
  {
    slug: 'azure-cloud',
    name: 'Azure & Cloud',
    short: 'Une architecture faite pour durer.',
    eyebrow: 'INFRASTRUCTURE & INGÉNIERIE CLOUD',
    title: 'Un cloud conçu pour vos applications. Et votre exploitation.',
    description:
      'Architecture Azure, migration, environnements hybrides et maîtrise des coûts : construisez une infrastructure dont les choix sont explicites et les opérations documentées.',
    tech: ['Azure', 'Infrastructure as Code', 'Cloud hybride', 'FinOps'],
    problem: 'Migrer ne suffit pas. Il faut pouvoir exploiter.',
    context:
      'Réseau, identités, résilience, sauvegardes et budgets se décident ensemble. Une architecture utile tient compte de vos applications existantes et de la capacité de vos équipes à la maintenir.',
    scope: [
      [
        'Architecture & landing zone',
        'Définir les abonnements, le réseau, les identités et les politiques de gouvernance de votre socle Azure.',
      ],
      [
        'Migration & modernisation',
        'Évaluer les dépendances, choisir les trajectoires par application et organiser la migration par étapes.',
      ],
      [
        'Exploitation & FinOps',
        'Prévoir la supervision, les sauvegardes, les budgets et la lecture régulière des consommations.',
      ],
    ],
    deliverables: [
      'Dossier d’architecture et décisions techniques',
      'Plan de migration avec retour arrière',
      'Socle de déploiement reproductible',
      'Runbooks et règles de suivi des coûts',
    ],
    question: 'Faut-il migrer toutes les applications dans Azure ?',
    answer:
      'Non. Les contraintes de latence, de dépendances, de réglementation et de coûts peuvent justifier une architecture hybride. Chaque application doit être évaluée avant de choisir sa trajectoire.',
    related: [
      'cybersecurite',
      'support-services-manages',
      'conseil-integration',
    ],
  },
  {
    slug: 'copilot-ia',
    name: 'Copilot & IA',
    short: 'Des usages précis avant les promesses.',
    eyebrow: 'INTELLIGENCE ARTIFICIELLE & USAGES',
    title: 'L’IA commence par un cas d’usage. Pas par une licence.',
    description:
      'Préparez Copilot et vos projets IA avec des usages identifiés, des données accessibles aux bonnes personnes et un pilote mesurable.',
    tech: [
      'Microsoft 365 Copilot',
      'Copilot Studio',
      'Azure AI',
      'Gouvernance des données',
    ],
    problem: 'Le vrai sujet : ce que l’IA peut faire dans votre contexte.',
    context:
      'Synthétiser des documents, retrouver une information ou assister un processus : les usages doivent être confrontés à vos données, à vos droits d’accès et aux exigences de vos métiers.',
    scope: [
      [
        'Cadrage des usages',
        'Sélectionner les tâches pertinentes, définir les critères d’évaluation et clarifier les limites de l’assistance IA.',
      ],
      [
        'Préparation & sécurité',
        'Examiner les permissions, la qualité des sources et les règles de traitement avant d’ouvrir le pilote.',
      ],
      [
        'Pilote & adoption',
        'Tester avec un groupe identifié, recueillir les retours et décider de la suite à partir des observations.',
      ],
    ],
    deliverables: [
      'Portefeuille de cas d’usage priorisés',
      'État des prérequis et des risques',
      'Protocole de pilote et d’évaluation',
      'Guide d’utilisation et de gouvernance',
    ],
    question: 'Peut-on déployer Copilot sans revoir les accès aux documents ?',
    answer:
      'Les droits existants doivent être examinés : un assistant peut rendre plus visibles des informations déjà accessibles. Le périmètre du contrôle dépend du tenant, des données et des exigences de votre organisation.',
    related: ['microsoft-365', 'power-platform', 'cybersecurite'],
  },
  {
    slug: 'power-platform',
    name: 'Power Platform',
    short: 'Moins de ressaisie. Plus de continuité.',
    eyebrow: 'APPLICATIONS MÉTIERS & AUTOMATISATION',
    title: 'Des processus fluides. Des applications proches du métier.',
    description:
      'Transformez un circuit de validation, un suivi métier ou une saisie répétitive en une application et des flux intégrés à votre environnement Microsoft.',
    tech: ['Power Apps', 'Power Automate', 'Power BI', 'Dataverse'],
    problem: 'Le tableur a rendu service. Le processus a grandi.',
    context:
      'Lorsque les fichiers circulent par e-mail et que les mêmes informations sont ressaisies, le problème dépasse l’interface. Il faut comprendre le processus, les exceptions et la source de référence.',
    scope: [
      [
        'Analyse du processus',
        'Décrire les acteurs, les données, les règles et les exceptions avant de concevoir l’application.',
      ],
      [
        'Application & intégration',
        'Construire les écrans et les flux, choisir les connecteurs et vérifier les droits de chaque rôle.',
      ],
      [
        'Gouvernance & maintenance',
        'Organiser les environnements, les déploiements et la responsabilité de maintenance des solutions.',
      ],
    ],
    deliverables: [
      'Parcours et règles métiers formalisés',
      'Application et flux avec recette',
      'Documentation des connecteurs et des accès',
      'Procédure de déploiement et maintenance',
    ],
    question: 'Une application low-code peut-elle être maintenue durablement ?',
    answer:
      'Oui, si sa gouvernance est prévue dès le départ : environnements séparés, versionnement, propriétaire identifié et documentation. Les licences et les limites des connecteurs sont également à vérifier au cadrage.',
    related: ['copilot-ia', 'microsoft-365', 'conseil-integration'],
  },
  {
    slug: 'cybersecurite',
    name: 'Cybersécurité',
    short: 'La sécurité fait partie de l’architecture.',
    eyebrow: 'IDENTITÉS, DONNÉES & PROTECTION',
    title: 'Protéger les accès. Réduire l’exposition. Préparer la réponse.',
    description:
      'Renforcez votre environnement Microsoft avec une approche fondée sur les identités, les accès, les terminaux et les données. Priorisez les actions selon vos risques.',
    tech: [
      'Entra ID',
      'Microsoft Defender',
      'Microsoft Intune',
      'Microsoft Purview',
    ],
    problem: 'Les protections doivent rester cohérentes avec vos usages.',
    context:
      'Un accès trop large, un terminal non géré ou une règle mal comprise peut fragiliser l’ensemble. Nous relions les mesures techniques à vos pratiques et aux responsabilités de votre organisation.',
    scope: [
      [
        'Identités & accès',
        'Examiner l’authentification, les comptes privilégiés et les règles d’accès conditionnel.',
      ],
      [
        'Terminaux & données',
        'Définir les configurations, les règles de partage et les protections adaptées aux informations traitées.',
      ],
      [
        'Détection & préparation',
        'Clarifier les alertes, les responsabilités et les procédures à appliquer face à un incident.',
      ],
    ],
    deliverables: [
      'Évaluation du périmètre et des risques',
      'Plan de remédiation priorisé',
      'Configurations et procédures documentées',
      'Scénarios de vérification des protections',
    ],
    question: 'Un audit permet-il de garantir l’absence de risque ?',
    answer:
      'Non. Une évaluation porte sur un périmètre et une date donnés. Elle permet de documenter les risques observés et les mesures recommandées ; la sécurité nécessite un suivi continu.',
    related: ['azure-cloud', 'microsoft-365', 'support-services-manages'],
  },
  {
    slug: 'conseil-integration',
    name: 'Conseil & Intégration',
    short: 'Du besoin métier à la mise en œuvre.',
    eyebrow: 'CONSEIL, ARCHITECTURE & EXPERTISE',
    title: 'Des décisions éclairées. Une mise en œuvre structurée.',
    description:
      'Cadrez vos projets Microsoft, arbitrez les choix techniques et préparez leur intégration dans votre système d’information avec La Pépiite IT.',
    tech: [
      'Architecture SI',
      'Intégration',
      'Audit Microsoft',
      'Expertise technique',
    ],
    problem: 'Votre projet ne commence pas avec le choix d’un outil.',
    context:
      'Il commence avec des objectifs, des dépendances et des contraintes. Le conseil doit relier cette réalité aux choix d’architecture, au budget et à une séquence de réalisation crédible.',
    scope: [
      [
        'Cadrage & architecture',
        'Formaliser les besoins, examiner l’existant et comparer des options explicites.',
      ],
      [
        'Intégration & réalisation',
        'Organiser les interfaces, les reprises de données, les déploiements et les critères de recette.',
      ],
      [
        'Expertise & transmission',
        'Intervenir sur un sujet ciblé et transmettre aux équipes les décisions, configurations et procédures.',
      ],
    ],
    deliverables: [
      'Note de cadrage et périmètre',
      'Dossier d’architecture et arbitrages',
      'Feuille de route et critères de recette',
      'Documentation et transfert de compétences',
    ],
    question: 'L’audit Microsoft est-il un préalable obligatoire ?',
    answer:
      'Non. C’est une offre de diagnostic adaptée à certains contextes : licences, adoption, sécurité ou préparation à Copilot. Un projet déjà cadré peut commencer par une mission d’intégration ou d’expertise ciblée.',
    related: ['azure-cloud', 'power-platform', 'licences'],
  },
  {
    slug: 'support-services-manages',
    name: 'Support & services managés',
    short: 'Penser aussi au jour d’après.',
    eyebrow: 'EXPLOITATION & CONTINUITÉ',
    title: 'Un environnement suivi. Des responsabilités claires.',
    description:
      'Organisez le support et l’exploitation de votre environnement Microsoft : périmètre, demandes, supervision, documentation et amélioration continue.',
    tech: ['Microsoft 365', 'Azure', 'Supervision', 'Gestion des incidents'],
    problem: 'Un projet livré doit devenir un service exploitable.',
    context:
      'Qui reçoit les demandes ? Qui traite une alerte ? Quelle information faut-il pour résoudre un incident ? Nous définissons ces règles avec vos équipes avant de prendre en charge un périmètre.',
    scope: [
      [
        'Reprise & documentation',
        'Inventorier les composants, les accès et les procédures pour préparer une prise en charge maîtrisée.',
      ],
      [
        'Support & exploitation',
        'Définir les catégories de demandes, les circuits d’escalade et les opérations récurrentes.',
      ],
      [
        'Suivi & amélioration',
        'Analyser les incidents, suivre les actions et tenir à jour les procédures et configurations.',
      ],
    ],
    deliverables: [
      'Périmètre de service et responsabilités',
      'Procédures d’exploitation et escalade',
      'Indicateurs de suivi convenus',
      'Plan d’amélioration de l’environnement',
    ],
    question: 'Proposez-vous une couverture permanente ?',
    answer:
      'Les horaires, délais de prise en charge et engagements sont définis selon le périmètre et formalisés dans le contrat. Aucune couverture 24/7 ni aucun délai standard n’est présumé sur ce site.',
    related: ['microsoft-365', 'azure-cloud', 'cybersecurite'],
  },
];
export const findService = (slug: string) =>
  services.find((service) => service.slug === slug);
