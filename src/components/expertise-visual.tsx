import Image from 'next/image';

const visuals = {
  cloud: {
    src: '/images/architecture-cloud.webp',
    alt: 'Illustration de socles cloud, applications et données reliés dans une architecture commune.',
  },
  data: {
    src: '/images/data-automatisation.webp',
    alt: 'Illustration de données structurées circulant entre plusieurs couches applicatives.',
  },
  security: {
    src: '/images/identites-securite.webp',
    alt: 'Illustration d’un socle technique entouré de couches de protection et de points d’accès contrôlés.',
  },
};

export function serviceVisualKind(service: string): keyof typeof visuals {
  if (['cybersecurite', 'intune'].includes(service)) return 'security';
  if (
    [
      'copilot-ia',
      'power-platform',
      'power-bi',
      'microsoft-fabric',
      'power-apps',
      'power-automate',
      'dynamics-365',
      'business-central',
    ].includes(service)
  )
    return 'data';
  return 'cloud';
}

export function ExpertiseVisual({
  kind = 'cloud',
  hero = false,
  fullWidth = false,
}: {
  kind?: keyof typeof visuals;
  hero?: boolean;
  fullWidth?: boolean;
}) {
  const visual = visuals[kind];
  return (
    <figure
      className={`expertise-visual${hero ? ' expertise-visual-hero' : ''}${fullWidth ? ' expertise-visual-full' : ''}`}
    >
      <Image
        src={visual.src}
        alt={visual.alt}
        width={1440}
        height={960}
        sizes={fullWidth ? '100vw' : '(max-width: 700px) 90vw, 48vw'}
        preload={hero}
      />
    </figure>
  );
}
