import jobs from '../../docs/design/visual-jobs.json';

export const editorialVisuals: Record<string, { src: string; alt: string }> =
  Object.fromEntries(
    jobs.map(({ key, alt }) => [
      key,
      { src: `/images/editorial/${key}.webp`, alt },
    ]),
  );
