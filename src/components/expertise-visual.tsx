import Image from 'next/image';

const visuals = {
  cloud: {
    src: '/images/architecture-cloud.webp',
    alt: 'Illustration de socles cloud, applications et données reliés dans une architecture commune.',
    caption: 'Cloud · Applications · Données',
  },
  data: {
    src: '/images/data-automatisation.webp',
    alt: 'Illustration de données structurées circulant entre plusieurs couches applicatives.',
    caption: 'Données · IA · Automatisation',
  },
  security: {
    src: '/images/identites-securite.webp',
    alt: 'Illustration d’un socle technique entouré de couches de protection et de points d’accès contrôlés.',
    caption: 'Identités · Accès · Protection',
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
  compact = false,
}: {
  kind?: keyof typeof visuals;
  hero?: boolean;
  compact?: boolean;
}) {
  const visual = visuals[kind];
  return (
    <figure
      className={`expertise-visual${hero ? ' expertise-visual-hero' : ''}${compact ? ' expertise-visual-compact' : ''}`}
    >
      <Image
        src={visual.src}
        alt={visual.alt}
        width={1440}
        height={960}
        sizes={
          compact
            ? '(max-width: 700px) 90vw, 38vw'
            : '(max-width: 700px) 90vw, 48vw'
        }
        preload={hero}
      />
      {!compact && <figcaption>{visual.caption}</figcaption>}
    </figure>
  );
}
