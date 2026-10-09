export type ClientReference = {
  slug: string;
  name: string;
  logo?: { src: string; width: number; height: number; dark?: boolean };
};
export type ClientSector = {
  slug: string;
  name: string;
  clients: ClientReference[];
};
// Client relationships confirmed by La Pépiite IT. Asset provenance: docs/references-clients.md.
export const clientSectors: ClientSector[] = [
  {
    slug: 'retail',
    name: 'Retail & grande distribution',
    clients: [
      {
        slug: 'monoprix',
        name: 'Monoprix',
        logo: {
          src: '/clients/monoprix.svg',
          width: 440,
          height: 58,
          dark: false,
        },
      },
      {
        slug: 'luxury-of-retail',
        name: 'Luxury of Retail',
      },
    ],
  },
  {
    slug: 'sport',
    name: 'Sport & lifestyle',
    clients: [
      {
        slug: 'le-coq-sportif',
        name: 'Le Coq Sportif',
        logo: {
          src: '/clients/le-coq-sportif.svg',
          width: 121,
          height: 20,
          dark: false,
        },
      },
    ],
  },
  {
    slug: 'gastronomie',
    name: 'Gastronomie & restauration',
    clients: [
      {
        slug: 'michalak',
        name: 'Kosmik / Café Michalak',
        logo: {
          src: '/clients/michalak.svg',
          width: 1701,
          height: 1701,
          dark: false,
        },
      },
    ],
  },
  {
    slug: 'emploi',
    name: 'Emploi & ressources humaines',
    clients: [
      {
        slug: 'now-jobs',
        name: 'Now Jobs',
        logo: {
          src: '/clients/now-jobs.webp',
          width: 700,
          height: 146,
          dark: false,
        },
      },
      {
        slug: 'majobi',
        name: 'Majobi',
      },
    ],
  },
  {
    slug: 'formation',
    name: 'Enseignement supérieur & formation',
    clients: [
      {
        slug: 'cfa-codis',
        name: 'CFA Codis',
      },
      {
        slug: 'akor-alternance',
        name: 'AKOR Alternance',
        logo: {
          src: '/clients/akor-alternance.webp',
          width: 695,
          height: 250,
          dark: false,
        },
      },
      {
        slug: 'rocket-school',
        name: 'Rocket School',
        logo: {
          src: '/clients/rocket-school.svg',
          width: 626,
          height: 390,
          dark: false,
        },
      },
      {
        slug: 'schola-nova',
        name: 'Schola Nova',
        logo: {
          src: '/clients/schola-nova.webp',
          width: 200,
          height: 63,
          dark: false,
        },
      },
      {
        slug: 'ppa',
        name: 'Pôle Paris Alternance',
        logo: {
          src: '/clients/ppa.svg',
          width: 101,
          height: 61,
          dark: true,
        },
      },
      {
        slug: 'talis',
        name: 'Talis Business School',
        logo: {
          src: '/clients/talis.svg',
          width: 117,
          height: 60,
          dark: true,
        },
      },
      {
        slug: 'euridis',
        name: 'Euridis Business School',
        logo: {
          src: '/clients/euridis.webp',
          width: 240,
          height: 100,
          dark: false,
        },
      },
      {
        slug: 'imcp',
        name: 'IMCP',
        logo: {
          src: '/clients/imcp.webp',
          width: 353,
          height: 250,
          dark: false,
        },
      },
      {
        slug: 'esct',
        name: 'ESCT',
        logo: {
          src: '/clients/esct.webp',
          width: 480,
          height: 227,
          dark: false,
        },
      },
      {
        slug: 'cercle-des-langues',
        name: 'Le Cercle des Langues',
        logo: {
          src: '/clients/cercle-des-langues.svg',
          width: 6275,
          height: 907,
          dark: false,
        },
      },
      {
        slug: 'lsl-learning',
        name: 'LSL Learning',
      },
    ],
  },
  {
    slug: 'impact',
    name: 'Économie sociale & entrepreneuriat',
    clients: [
      {
        slug: 'live-for-good',
        name: 'Live For Good',
        logo: {
          src: '/clients/live-for-good.svg',
          width: 75,
          height: 33,
          dark: false,
        },
      },
    ],
  },
];
export const featuredClients = [
  'monoprix',
  'le-coq-sportif',
  'now-jobs',
  'rocket-school',
  'euridis',
  'live-for-good',
].map((slug) =>
  clientSectors
    .flatMap((sector) => sector.clients)
    .find((client) => client.slug === slug)!,
);
