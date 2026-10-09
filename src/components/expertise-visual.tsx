import Image from 'next/image';

const visuals = {
  collaboration: {
    src: '/images/collaboration-projet.webp',
    alt: 'Illustration : trois professionnels échangent sur un projet informatique.',
  },
  accompagnement: {
    src: '/images/accompagnement-microsoft.webp',
    alt: 'Illustration : deux professionnels travaillent ensemble sur une solution informatique.',
  },
  expertise: {
    src: '/images/expertise-infrastructure.webp',
    alt: 'Illustration : une professionnelle intervient sur une infrastructure de datacenter.',
  },
};

export function serviceVisualKind(service: string): keyof typeof visuals {
  if (
    [
      'azure-cloud',
      'cybersecurite',
      'intune',
      'support-services-manages',
      'windows-365',
      'azure-devops',
    ].includes(service)
  )
    return 'expertise';
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
    return 'accompagnement';
  return 'collaboration';
}

export function ExpertiseVisual({
  kind = 'collaboration',
  hero = false,
  fullWidth = false,
  inline = false,
  sizes,
}: {
  kind?: keyof typeof visuals;
  hero?: boolean;
  fullWidth?: boolean;
  inline?: boolean;
  sizes?: string;
}) {
  const visual = visuals[kind];
  return (
    <figure
      className={
        inline
          ? 'human-media'
          : `expertise-visual${hero ? ' expertise-visual-hero' : ''}${fullWidth ? ' expertise-visual-full' : ''}`
      }
    >
      <Image
        src={visual.src}
        alt={visual.alt}
        width={1440}
        height={960}
        sizes={sizes ?? (fullWidth ? '100vw' : '(max-width: 850px) 90vw, 48vw')}
        preload={hero}
      />
    </figure>
  );
}
