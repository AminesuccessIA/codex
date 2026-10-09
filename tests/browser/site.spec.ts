import { test, expect } from '@playwright/test';
import { services } from '../../src/lib/services';
const paths = [
  '/',
  ...services.map((s) => '/' + s.slug),
  '/realisations',
  '/a-propos',
  '/contact',
];
for (const width of [360, 390, 768, 1024, 1440]) {
  test(`12 pages: layout, navigation and SEO at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1000 });
    const errors: string[] = [];
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
      ).toBe('https://lapepiite.com' + (path === '/' ? '' : path));
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
test('contact service is preselected and real unconfigured API never claims delivery', async ({
  page,
}) => {
  await page.goto('/contact?service=azure-cloud');
  await expect(page.locator('select[name=service]')).toHaveValue('azure-cloud');
  await page.getByLabel('Votre nom').fill('Utilisateur test');
  await page.getByLabel('E-mail professionnel').fill('test@example.com');
  await page
    .getByLabel('Votre contexte et votre besoin')
    .fill('Demande de test uniquement, aucun envoi réel.');
  await page.locator('input[name=consent]').check();
  await page.getByRole('button', { name: 'Envoyer ma demande' }).click();
  await expect(page.getByRole('status')).toContainText('contact@lapepiite.com');
  await expect(page.getByLabel('Votre nom')).toHaveValue('Utilisateur test');
});
test('client shows confirmation only after successful delivery response (simulated)', async ({
  page,
}) => {
  await page.route('**/api/contact', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true }),
    }),
  );
  await page.goto('/contact');
  await page.getByLabel('Votre nom').fill('Utilisateur test');
  await page.getByLabel('E-mail professionnel').fill('test@example.com');
  await page
    .getByLabel('Votre contexte et votre besoin')
    .fill('Test de confirmation simulée.');
  await page.locator('input[name=consent]').check();
  await page.getByRole('button', { name: 'Envoyer ma demande' }).click();
  await expect(page.getByRole('status')).toContainText('bien été transmise');
  await expect(page.getByLabel('Votre nom')).toHaveValue('');
});
test('API rejects bad data, foreign origins and oversized bodies', async ({
  request,
}) => {
  expect((await request.post('/api/contact', { data: {} })).status()).toBe(400);
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
  expect((await sitemap.text()).match(/<loc>/g)?.length).toBe(12);
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
