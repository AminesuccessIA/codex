import editorialArticles from '@/content/articles.json' with { type: 'json' };
export type Guide = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  category: string;
  service: string;
  answer: string;
  readingTime: string;
  sections: { title: string; paragraphs: string[]; checklist?: string[] }[];
  comparison?: { headers: string[]; rows: string[][] };
  questions: [string, string][];
  sources: { label: string; url: string }[];
  publishedAt?: string;
  updatedAt: string;
};
export const guidePublicationDate = '2026-10-09';
const foundationalGuides: Omit<Guide, 'updatedAt'>[] = [
  {
    slug: 'preparer-projet-power-bi',
    title: 'Préparer un projet Power BI : données, indicateurs et accès',
    category: 'DATA & PILOTAGE',
    service: 'power-bi',
    readingTime: '5 min',
    description:
      'Les éléments à réunir avant un projet Power BI : sources, indicateurs, actualisation, permissions, licences et critères de validation.',
    answer:
      'Un projet Power BI commence par un indicateur métier défini, des sources identifiées et un responsable capable de valider les chiffres. Le rapport vient ensuite : modèle, mesures, droits et modalités de diffusion doivent être cohérents.',
    sections: [
      {
        title: '1. Choisir la décision à éclairer',
        paragraphs: [
          'Partir d’un besoin de décision évite un tableau de bord qui accumule les graphiques. Définissez qui le consulte, à quelle fréquence et quelle action doit suivre un écart.',
        ],
        checklist: [
          'Nommer le responsable métier et les lecteurs.',
          'Définir chaque indicateur : formule, période, exclusions et niveau de détail.',
          'Réunir un exemple de calcul validé pour la recette.',
        ],
      },
      {
        title: '2. Identifier les sources et leur qualité',
        paragraphs: [
          'Un export Excel peut servir de point de départ. Il faut cependant connaître sa provenance, son propriétaire et la façon dont il sera actualisé. Les identifiants qui relient les tables et les historiques disponibles déterminent le modèle.',
        ],
        checklist: [
          'Inventorier ERP, CRM, fichiers et bases de données utiles.',
          'Vérifier les clés de rapprochement, doublons et champs manquants.',
          'Préciser la fréquence attendue et le besoin d’une passerelle pour les sources locales.',
        ],
      },
      {
        title: '3. Prévoir les droits et la diffusion',
        paragraphs: [
          'Les espaces de travail, les applications publiées et la sécurité au niveau des lignes ne répondent pas au même besoin. Une règle de filtrage doit être testée avec des comptes représentatifs et les rôles de l’espace de travail.',
          'Le choix des licences et capacités dépend des auteurs, des lecteurs et du mode de diffusion. Il se vérifie avant de retenir une architecture ; un rapport partagé n’est pas automatiquement accessible à tous.',
        ],
      },
      {
        title: '4. Définir une recette exploitable',
        paragraphs: [
          'La validation couvre les calculs, les filtres, les permissions, les actualisations et la lisibilité. Une liste d’indicateurs rapprochés avec une source connue permet d’expliquer les écarts plutôt que de valider seulement l’apparence.',
        ],
        checklist: [
          'Tester un périmètre représentatif avant extension.',
          'Identifier le propriétaire des données et celui du rapport.',
          'Documenter les actualisations, les alertes et la reprise d’un échec.',
        ],
      },
    ],
    questions: [
      [
        'Faut-il d’abord acheter des licences ?',
        'Le cadrage identifie les usages et droits nécessaires. Les licences, les capacités et les conditions de diffusion sont vérifiées avant la décision de déploiement.',
      ],
      [
        'Peut-on commencer avec un seul tableau de bord ?',
        'Oui. Un périmètre limité permet de valider les indicateurs, les sources et le modèle avant de les étendre à d’autres métiers.',
      ],
    ],
    sources: [
      {
        label: 'Microsoft Learn — Présentation de Power BI',
        url: 'https://learn.microsoft.com/fr-fr/power-bi/fundamentals/power-bi-overview',
      },
      {
        label: 'Microsoft Learn — Sécurité au niveau des lignes',
        url: 'https://learn.microsoft.com/fr-fr/fabric/security/service-admin-row-level-security',
      },
    ],
  },
  {
    slug: 'preparer-microsoft-365-copilot',
    title: 'Préparer Microsoft 365 Copilot : usages, données et gouvernance',
    category: 'COPILOT & ADOPTION',
    service: 'copilot-ia',
    readingTime: '5 min',
    description:
      'Comment préparer Microsoft 365 Copilot : choisir les usages, vérifier les accès documentaires, organiser un pilote et accompagner les utilisateurs.',
    answer:
      'Préparer Microsoft 365 Copilot consiste à sélectionner des tâches utiles, vérifier les accès aux données et tester avec un groupe identifié. Les licences ne remplacent ni le contrôle des permissions ni l’accompagnement des utilisateurs.',
    sections: [
      {
        title: '1. Choisir des tâches concrètes',
        paragraphs: [
          'Préparer une réunion, synthétiser un ensemble de documents ou retrouver une information sont des tâches différentes. Pour chacune, décrivez les sources, les utilisateurs, les limites et les critères de qualité.',
        ],
        checklist: [
          'Nommer les équipes du pilote.',
          'Retenir des tâches récurrentes avec des documents accessibles.',
          'Définir ce qui doit être vérifié par un utilisateur avant utilisation.',
        ],
      },
      {
        title: '2. Relire les accès aux documents',
        paragraphs: [
          'Copilot s’appuie sur les droits et contenus disponibles dans le contexte utilisateur. Un document déjà accessible à un public trop large peut devenir plus facile à retrouver : la revue des permissions fait donc partie de la préparation.',
        ],
        checklist: [
          'Identifier les propriétaires des espaces Teams et SharePoint.',
          'Examiner les partages larges, liens externes et données sensibles.',
          'Prévoir les règles de classification et de protection utiles au périmètre.',
        ],
      },
      {
        title: '3. Tester avant de généraliser',
        paragraphs: [
          'Le pilote confronte les réponses aux sources et aux tâches réelles. Il sert à comprendre les limites, les besoins d’accompagnement et les prérequis qui restent à traiter. Les résultats du pilote appartiennent à votre contexte : ils ne se déduisent pas d’un pourcentage annoncé ailleurs.',
        ],
        checklist: [
          'Préparer des cas de test et des critères d’évaluation.',
          'Comparer les réponses avec les documents de référence.',
          'Recueillir les difficultés et les usages effectivement retenus.',
        ],
      },
      {
        title: '4. Organiser les responsabilités',
        paragraphs: [
          'Un responsable métier suit l’usage ; les équipes IT administrent le périmètre et les protections. Les règles précisent la vérification des réponses, les données à utiliser et les modalités de signalement d’une difficulté.',
          'Copilot Studio répond à des projets d’agents et d’actions spécifiques. Leurs sources, connecteurs et autorisations nécessitent un cadrage distinct du déploiement de Microsoft 365 Copilot.',
        ],
      },
    ],
    questions: [
      [
        'Copilot peut-il corriger les permissions de notre tenant ?',
        'Le déploiement de Copilot ne remplace pas une revue des permissions. Les propriétaires et règles de partage doivent être examinés et ajustés dans le périmètre convenu.',
      ],
      [
        'Comment apprécier l’intérêt du pilote ?',
        'En observant la qualité des réponses, les tâches réellement couvertes et les retours des utilisateurs, avec des critères définis avant le pilote.',
      ],
    ],
    sources: [
      {
        label: 'Microsoft Learn — Présentation de Microsoft 365 Copilot',
        url: 'https://learn.microsoft.com/fr-fr/copilot/microsoft-365/microsoft-365-copilot-overview',
      },
      {
        label: 'Microsoft Learn — Confidentialité et sécurité de Copilot',
        url: 'https://learn.microsoft.com/fr-fr/copilot/microsoft-365/microsoft-365-copilot-privacy',
      },
    ],
  },
  {
    slug: 'business-central-ou-dynamics-365-crm',
    title: 'Business Central ou Dynamics 365 CRM : quel besoin couvrir ?',
    category: 'ERP & RELATION CLIENT',
    service: 'business-central',
    readingTime: '4 min',
    description:
      'ERP et CRM Microsoft : comparez Business Central et Dynamics 365 Sales selon vos besoins de finance, opérations et suivi commercial.',
    answer:
      'Business Central est un ERP qui relie notamment finance, achats, ventes et stocks. Dynamics 365 Sales est un CRM orienté comptes, opportunités et activités commerciales. Ils peuvent se compléter lorsque les règles de synchronisation et les responsabilités sont définies.',
    comparison: {
      headers: ['Besoin', 'Business Central', 'Dynamics 365 Sales'],
      rows: [
        [
          'Finance et comptabilité',
          'Périmètre ERP à configurer et valider',
          'Intégration avec un outil de gestion',
        ],
        [
          'Achats et stocks',
          'Processus de gestion selon le périmètre retenu',
          'Données utiles au suivi commercial via interfaces',
        ],
        [
          'Opportunités et activités',
          'Données de vente et intégrations selon les usages',
          'Suivi du cycle commercial et des activités',
        ],
        [
          'Projet commun',
          'Référentiel de gestion et opérations',
          'Référentiel de relation client et pipeline',
        ],
      ],
    },
    sections: [
      {
        title: '1. Partir des processus qui doivent évoluer',
        paragraphs: [
          'Une difficulté de suivi des prospects n’appelle pas le même projet qu’un rapprochement entre stocks et factures. Décrivez le flux métier, les outils actuels et les ruptures avant de comparer les produits.',
        ],
        checklist: [
          'Recenser les processus prioritaires : qualification, devis, commande, facture, stock.',
          'Identifier les responsables finance, vente et opérations.',
          'Distinguer les besoins couverts par le standard et ceux qui demandent une interface ou extension.',
        ],
      },
      {
        title: '2. Préparer la reprise des données',
        paragraphs: [
          'La reprise d’un CRM concerne comptes, contacts, opportunités et historiques retenus. Une reprise ERP implique des référentiels et contrôles de gestion, notamment les soldes et rapprochements définis avec la finance. Le périmètre de migration doit être explicite.',
        ],
      },
      {
        title: '3. Définir les interfaces et la source de référence',
        paragraphs: [
          'Lorsque CRM et ERP coexistent, chaque donnée échangée possède un propriétaire et une source de référence. Les règles portent sur le sens de l’échange, la fréquence, les doublons, les erreurs et les reprises.',
        ],
        checklist: [
          'Définir où créer et modifier chaque donnée.',
          'Valider un parcours complet avec des données de recette.',
          'Examiner les licences, localisations et contraintes applicables avant la proposition.',
        ],
      },
    ],
    questions: [
      [
        'Faut-il choisir seulement un ERP ou un CRM ?',
        'Les deux peuvent coexister lorsque leurs rôles sont définis. La décision dépend des processus à couvrir et des interfaces à organiser.',
      ],
      [
        'Business Central convient-il à toutes les activités ?',
        'Un atelier d’adéquation compare vos processus au standard et aux extensions, avec les contraintes de localisation et de gestion. Les écarts structurants sont documentés avant décision.',
      ],
    ],
    sources: [
      {
        label: 'Microsoft Learn — Business Central',
        url: 'https://learn.microsoft.com/fr-fr/dynamics365/business-central/welcome',
      },
      {
        label: 'Microsoft Learn — Dynamics 365 Sales',
        url: 'https://learn.microsoft.com/fr-fr/dynamics365/sales/overview',
      },
    ],
  },
  {
    slug: 'checklist-migration-azure',
    title: 'Migration Azure : les points à cadrer avant la bascule',
    category: 'CLOUD & EXPLOITATION',
    service: 'azure-cloud',
    readingTime: '5 min',
    description:
      'Préparez une migration Azure : applications, dépendances, identités, réseau, coûts, sauvegardes, recette et passage en exploitation.',
    answer:
      'Une migration Azure se prépare application par application, avec ses dépendances, ses contraintes de réseau et ses conditions de reprise. Le socle, les tests et les responsabilités d’exploitation doivent être définis avant la bascule.',
    sections: [
      {
        title: '1. Reconstituer les dépendances',
        paragraphs: [
          'Une machine virtuelle n’est pas une application complète. Recensez bases de données, identités, stockage, échanges, traitements planifiés et contraintes de latence. Les dépendances orientent les lots de migration.',
        ],
        checklist: [
          'Nommer les responsables d’application et d’exploitation.',
          'Recenser les flux réseau et systèmes à conserver.',
          'Documenter les fenêtres de maintenance et contraintes locales.',
        ],
      },
      {
        title: '2. Préparer le socle et la gouvernance',
        paragraphs: [
          'Les abonnements, identités, politiques, journaux et réseaux structurent le socle Azure. La landing zone doit être proportionnée au contexte et aux responsabilités de vos équipes.',
        ],
        checklist: [
          'Définir les accès administratifs et mécanismes de protection.',
          'Choisir les régions et vérifier les conditions de traitement.',
          'Organiser les budgets, étiquettes et revues de consommation.',
        ],
      },
      {
        title: '3. Prévoir sauvegarde, recette et retour arrière',
        paragraphs: [
          'Les objectifs de reprise se discutent avec les métiers. Une sauvegarde doit être accompagnée d’un scénario de restauration testé. Les critères de bascule et de retour arrière précisent les données, interfaces et responsabilités concernées.',
        ],
        checklist: [
          'Valider les tests fonctionnels et les performances attendues.',
          'Tester une restauration sur un périmètre convenu.',
          'Identifier qui décide et exécute un retour arrière.',
        ],
      },
      {
        title: '4. Organiser le passage en exploitation',
        paragraphs: [
          'L’équipe qui exploite doit disposer des accès, runbooks, alertes et contacts nécessaires. Une revue des consommations aide ensuite à rapprocher l’architecture des usages observés.',
          'La résidence des données et les garanties de transfert dépendent des services et contrats retenus. La présence d’une région Azure dans un pays ne suffit pas à conclure sur tous les traitements.',
        ],
      },
    ],
    questions: [
      [
        'Faut-il migrer toutes les applications ?',
        'Le cadrage peut retenir une trajectoire hybride et des lots progressifs. Les dépendances, coûts et contraintes de chaque application orientent la décision.',
      ],
      [
        'Peut-on estimer le coût avant un pilote ?',
        'Une estimation documente les hypothèses de ressources, volumes et usages. Un pilote et les premières consommations permettent de les vérifier et d’ajuster l’architecture.',
      ],
    ],
    sources: [
      {
        label: 'Microsoft Learn — Cloud Adoption Framework',
        url: 'https://learn.microsoft.com/fr-fr/azure/cloud-adoption-framework/',
      },
      {
        label: 'Microsoft Learn — Landing zones Azure',
        url: 'https://learn.microsoft.com/fr-fr/azure/cloud-adoption-framework/ready/landing-zone/',
      },
    ],
  },
];
export const guides: Guide[] = [
  ...foundationalGuides.map((guide) => ({
    ...guide,
    publishedAt: guidePublicationDate,
    updatedAt: guidePublicationDate,
  })),
  ...editorialArticles.map((article): Guide => ({
    ...article,
    publishedAt: 'publishedAt' in article ? article.publishedAt : undefined,
    readingTime: `${Math.max(
      3,
      Math.ceil(
        article.sections
          .flatMap((section) => section.paragraphs)
          .join(' ')
          .split(/\s+/).length / 220,
      ),
    )} min`,
    questions: article.questions.map(
      ({ question, answer }): [string, string] => [question, answer],
    ),
  })),
];
export const findGuide = (slug: string) =>
  guides.find((guide) => guide.slug === slug);
