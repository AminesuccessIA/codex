import { test, expect } from '@playwright/test';
import { services } from '../../src/lib/services';
const paths = [
  '/',
  ...services.map((s) => '/' + s.slug),
  '/cas-d-usage',
  '/references',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/a-propos',
  '/contact',
];
for (const width of [360, 390, 768, 1024, 1440]) {
  test(`15 pages: layout, navigation and SEO at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1000 });
    const errors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    page.on('pageerror', (error) => errors.push(error.message));
    for (const path of paths) {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).toBeVisible();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      expect(
        await page.locator('link[rel="canonical"]').getAttribute('href'),
      ).toBe('https://www.lapepiite.com' + (path === '/' ? '' : path));
      await expect(page.locator('meta[name="description"]')).toHaveAttribute(
        'content',
        /.+/,
      );
    }
    expect(errors).toEqual([]);
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({
      path: `test-results/home-${width}.png`,
      fullPage: true,
    });
  });
}
test('mobile menu opens, navigates and closes; keyboard escape works', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Menu', exact: true });
  await menu.click();
  await page.getByRole('button', { name: 'Nos expertises' }).click();
  await page
    .locator('#expertise-menu')
    .getByRole('link', { name: 'Azure & Cloud', exact: false })
    .click();
  await expect(page).toHaveURL(/azure-cloud/);
  await expect(page.locator('#main-navigation')).not.toBeVisible();
  await menu.click();
  await page.keyboard.press('Escape');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(menu).toBeFocused();
});
test('direct email contact remains available while automatic delivery is closed', async ({
  page,
  request,
}) => {
  await page.goto('/contact?service=azure-cloud');
  await expect(
    page.getByRole('link', { name: 'Écrire à notre équipe' }),
  ).toHaveAttribute('href', /^mailto:contact@lapepiite.com/);
  await expect(page.locator('form')).toHaveCount(0);
  const response = await request.post('/api/contact', {
    data: {
      name: 'Test',
      email: 'test@example.com',
      company: '',
      service: 'azure-cloud',
      message: 'Test sans envoi réel',
      website: '',
    },
  });
  expect(response.status()).toBe(503);
});
test('published legal pages and legacy URL are coherent', async ({
  page,
  request,
}) => {
  await page.goto('/mentions-legales');
  await expect(page.locator('main')).toContainText('LA PEPIITE');
  await expect(page.locator('main')).toContainText('Vercel Inc.');
  await expect(page.locator('main')).not.toContainText('À compléter');
  await expect(page.locator('main')).toContainText('partenaire Microsoft');
  await expect(page.locator('meta[name=robots]')).toHaveAttribute(
    'content',
    /index, follow/,
  );
  const response = await request.get('/realisations', { maxRedirects: 0 });
  expect(response.status()).toBe(308);
  expect(response.headers().location).toContain('/cas-d-usage');
});
test('API rejects bad data, foreign origins and oversized bodies', async ({
  request,
}) => {
  expect((await request.post('/api/contact', { data: {} })).status()).toBe(503);
  expect(
    (
      await request.post('/api/contact', {
        data: {},
        headers: { Origin: 'https://foreign.example' },
      })
    ).status(),
  ).toBe(403);
  expect(
    (
      await request.post('/api/contact', {
        data: { message: 'x'.repeat(21000) },
      })
    ).status(),
  ).toBe(413);
  const sitemap = await request.get('/sitemap.xml');
  expect((await sitemap.text()).match(/<loc>/g)?.length).toBe(15);
  expect((await request.get('/unknown-page')).status()).toBe(404);
});
test('all internal links on all pages resolve', async ({ page, request }) => {
  const links = new Set<string>();
  for (const path of paths) {
    await page.goto(path);
    for (const href of await page
      .locator('a[href^="/"]')
      .evaluateAll((els) => els.map((el) => el.getAttribute('href')!)))
      links.add(href.split('#')[0]);
  }
  for (const href of links)
    expect((await request.get(href)).status(), href).toBe(200);
});

test('expertise content, anchors and JSON-LD form a coherent page', async ({
  page,
}) => {
  for (const service of services) {
    await page.goto('/' + service.slug);
    const toc = page.getByRole('navigation', {
      name: 'Sommaire de l’expertise',
    });
    for (const href of await toc
      .locator('a')
      .evaluateAll((elements) =>
        elements.map((element) => element.getAttribute('href')!),
      )) {
      await expect(page.locator(href)).toHaveCount(1);
    }
    await expect(page.locator('#methode li')).toHaveCount(4);
    await expect(page.locator('#questions details')).toHaveCount(3);
    const graphs = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((elements) =>
        elements.flatMap(
          (element) => JSON.parse(element.textContent!)['@graph'],
        ),
      );
    expect(
      graphs.filter((node) => node['@type'] === 'Organization'),
    ).toHaveLength(1);
    const structuredService = graphs.find(
      (node) => node['@type'] === 'Service',
    );
    expect(structuredService.url).toBe(
      'https://www.lapepiite.com/' + service.slug,
    );
    expect(structuredService.provider['@id']).toBe(
      'https://www.lapepiite.com/#organization',
    );
    expect(
      graphs.find((node) => node['@type'] === 'BreadcrumbList')
        .itemListElement[1].item,
    ).toBe(structuredService.url);
    expect(
      graphs.some((node) => node.aggregateRating || node.review || node.offers),
    ).toBe(false);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      'content',
      structuredService.url,
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      'https://www.lapepiite.com/social-card.png',
    );
  }
});
test('keyboard operates the FAQ and Escape never steals focus when menus are closed', async ({
  page,
}) => {
  await page.goto('/licences');
  const summary = page.locator('#questions summary').first();
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#questions details').first()).toHaveAttribute(
    'open',
    '',
  );
  await page.keyboard.press('Escape');
  await expect(summary).toBeFocused();
  const menu = page.getByRole('button', { name: 'Nos expertises' });
  await menu.click();
  await page.keyboard.press('Escape');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(menu).toBeFocused();
});
test('known legacy route and non-www redirect preserve meaning without redirecting unknown URLs', async ({
  request,
}) => {
  const nonWww = await request.get('/licences?source=legacy', {
    headers: { Host: 'lapepiite.com' },
    maxRedirects: 0,
  });
  expect(nonWww.status()).toBe(308);
  expect(nonWww.headers().location).toBe(
    'https://www.lapepiite.com/licences?source=legacy',
  );
  for (const path of [
    '/wp-sitemap.xml',
    '/sitemap_index.xml',
    '/unknown-legacy-url',
  ])
    expect((await request.get(path)).status()).toBe(404);
  const robots = await request.get('/robots.txt');
  expect(await robots.text()).toContain(
    'Sitemap: https://www.lapepiite.com/sitemap.xml',
  );
  const share = await request.get('/social-card.png');
  expect(share.status()).toBe(200);
  expect(share.headers()['content-type']).toContain('image/png');
});

test('public copy has no working notes or fabricated client references', async ({
  page,
}) => {
  for (const path of paths) {
    await page.goto(path);
    await expect(page.locator('main')).not.toContainText(
      /À compléter|Document à compléter|résultats? revendiqués?|résultat client représenté|Structure indicative|réponses HTTP observées|LEGAL_HOST_|version auditée|avant publication|aucun résultat/i,
    );
  }
  await page.goto('/');
  await expect(page.locator('.partner-mention')).toHaveText(
    'Partenaire Microsoft',
  );
  await page.goto('/cas-d-usage');
  await expect(page.locator('main')).toContainText('scénarios d’intervention');
});
test('enabled contact confirms only successful responses and preserves failed submissions', async ({
  page,
}) => {
  await page.goto('http://127.0.0.1:3101/contact?service=azure-cloud');
  await expect(page.locator('select[name=service]')).toHaveValue('azure-cloud');
  await page.getByLabel('Votre nom').fill('Test navigateur');
  await page.getByLabel('E-mail professionnel').fill('test@example.com');
  await page
    .getByLabel('Votre contexte et votre besoin')
    .fill('Test simulé uniquement, aucun message réel.');
  // No OAuth credentials are provided to either test server.
  await page.getByRole('button', { name: 'Envoyer ma demande' }).click();
  await expect(page.getByRole('status')).toContainText(
    'momentanément indisponible',
  );
  await expect(page.getByLabel('Votre nom')).toHaveValue('Test navigateur');
  await page.route('**/api/contact', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true }),
    }),
  );
  await page.getByRole('button', { name: 'Envoyer ma demande' }).click();
  await expect(page.getByRole('status')).toContainText('bien été transmise');
  await expect(page.getByLabel('Votre nom')).toHaveValue('');
});

test('confirmed client references load local logos and preserve exclusions', async ({
  page,
}) => {
  await page.goto('/references');
  await expect(page.locator('.client-sector')).toHaveCount(6);
  await expect(page.locator('.client-reference')).toHaveCount(18);
  await expect(page.locator('main')).toContainText('Monoprix');
  await expect(page.locator('main')).toContainText('LSL Learning');
  for (const excluded of ['Monabanq', 'CD95', 'collèges du Val']) {
    await expect(page.locator('main')).not.toContainText(excluded);
  }
  const logos = page.locator('.client-mark img');
  expect(await logos.count()).toBeGreaterThanOrEqual(14);
  for (const logo of await logos.all()) {
    await logo.scrollIntoViewIfNeeded();
    await expect(logo).toHaveAttribute('src', /^\/clients\//);
    await expect
      .poll(() =>
        logo.evaluate((element) => (element as HTMLImageElement).naturalWidth),
      )
      .toBeGreaterThan(0);
  }
  await page.goto('/');
  await expect(page.locator('.client-preview .client-reference')).toHaveCount(
    6,
  );
  await page.getByRole('link', { name: 'Toutes nos références' }).click();
  await expect(page).toHaveURL(/references/);
});
