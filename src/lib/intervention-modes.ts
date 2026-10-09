export const interventionModes = [
  {
    name: 'Conseil & intégration',
    summary: 'Cadrer les choix, puis mettre en œuvre les solutions.',
    detail:
      'Architecture, arbitrages, interfaces et recette : une mission définie à partir de votre existant et des livrables attendus.',
    agreement: 'Périmètre et livrables convenus avant intervention.',
    href: '/conseil-integration',
  },
  {
    name: 'Assistance technique & consultants',
    summary: 'Renforcer votre équipe sur une compétence identifiée.',
    detail:
      'Mise à disposition de consultants pour un besoin technique qualifié. Le profil, sa disponibilité et les responsabilités sont vérifiés avant proposition.',
    agreement: 'TJM, durée et organisation de la mission définis ensemble.',
    href: '/a-propos#expertise-technique',
  },
  {
    name: 'Équipe projet au forfait',
    summary: 'Organiser la réalisation d’un périmètre défini.',
    detail:
      'Un projet avec des livrables, des dépendances et des critères de recette explicites. Les évolutions de périmètre font l’objet d’un arbitrage.',
    agreement: 'Périmètre, prix, jalons et recette fixés dans la proposition.',
    href: '/conseil-integration#intervention',
  },
  {
    name: 'Support & services managés',
    summary: 'Préparer la prise en charge et le suivi de l’exploitation.',
    detail:
      'Support, opérations récurrentes et suivi des incidents dans un périmètre convenu, avec interlocuteurs et circuits d’escalade identifiés.',
    agreement: 'Horaires, exclusions et engagements définis au contrat.',
    href: '/support-services-manages',
  },
] as const;
