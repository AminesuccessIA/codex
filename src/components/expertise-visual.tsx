import Image from 'next/image';
import { editorialVisuals } from '@/lib/editorial-visuals';

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

export function ExpertiseVisual({
  kind = 'collaboration',
  page,
  hero = false,
  fullWidth = false,
  inline = false,
  sizes,
}: {
  kind?: keyof typeof visuals;
  page?: string;
  hero?: boolean;
  fullWidth?: boolean;
  inline?: boolean;
  sizes?: string;
}) {
  const visual = page ? editorialVisuals[page] : visuals[kind];
  if (!visual) throw new Error(`Visuel éditorial manquant : ${page}`);
  return (
    <figure
      data-visual-key={page ?? `accueil-${kind}`}
      className={
        inline
          ? 'human-media'
          : `expertise-visual${hero ? ' expertise-visual-hero' : ''}${fullWidth ? ' expertise-visual-full' : ''}`
      }
    >
      <Image
        src={visual.src}
        alt={visual.alt}
        style={page ? { objectPosition: 'center 25%' } : undefined}
        width={1440}
        height={960}
        sizes={sizes ?? (fullWidth ? '100vw' : '(max-width: 850px) 90vw, 48vw')}
        preload={hero}
      />
    </figure>
  );
}
