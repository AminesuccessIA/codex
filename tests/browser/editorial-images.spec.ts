import { createHash } from 'node:crypto';
import { test, expect } from '@playwright/test';
import { services } from '../../src/lib/services';
import { guides } from '../../src/lib/guides';
import { editorialVisuals } from '../../src/lib/editorial-visuals';

const pages = [
  '/',
  ...services.map((service) => '/' + service.slug),
  '/a-propos',
  '/cas-d-usage',
  '/references',
  '/solutions-microsoft',
  '/partenaire-microsoft',
  '/ressources',
  '/contact',
  '/diagnostic',
  ...guides.map((guide) => '/ressources/' + guide.slug),
];
test('editorial imagery is distinct on every page and assets resolve', async ({
  page,
  request,
}) => {
  const used = new Map<string, string>();
  const contents = new Map<string, string>();
  for (const path of pages) {
    await page.goto(path);
    const visuals = await page
      .locator('main figure[data-visual-key]')
      .evaluateAll((figures) =>
        figures.map((figure) => {
          const img = figure.querySelector('img');
          const svg = figure.querySelector('svg');
          return {
            key: figure.getAttribute('data-visual-key'),
            image: img
              ? (new URL(img.src).searchParams.get('url') ??
                new URL(img.src).pathname)
              : null,
            diagram: svg
              ? Array.from(svg.querySelectorAll('text'))
                  .map((text) => text.textContent)
                  .join('|')
              : null,
          };
        }),
      );
    expect(visuals.length, path).toBeGreaterThan(0);
    for (const visual of visuals) {
      expect(visual.key).toBeTruthy();
      const identity = visual.image ?? visual.diagram!;
      expect(
        used.has(identity),
        `${path} reuses a visual from ${used.get(identity)}`,
      ).toBe(false);
      used.set(identity, path);
      if (visual.image) {
        const response = await request.get(visual.image);
        expect(response.status(), visual.image).toBe(200);
        const hash = createHash('sha256')
          .update(await response.body())
          .digest('hex');
        expect(
          contents.has(hash),
          `${path} reuses image content from ${contents.get(hash)}`,
        ).toBe(false);
        contents.set(hash, path);
      }
    }
  }
  const photos = Object.keys(editorialVisuals).length + 3;
  expect(contents.size).toBe(photos);
  expect(used.size).toBe(photos + services.length + guides.length);
});
