import { readFile } from 'node:fs/promises';
import { articleSchema, sourceSchema } from '../../src/lib/editorial-schema.ts';
export const root = new URL('../../', import.meta.url);
export async function loadEditorial() {
  const [plan, articles, foundation, serviceFiles] = await Promise.all([
    readFile(new URL('src/content/seo-plan.json', root), 'utf8').then(
      JSON.parse,
    ),
    readFile(new URL('src/content/articles.json', root), 'utf8').then(
      JSON.parse,
    ),
    readFile(new URL('src/lib/guides.ts', root), 'utf8'),
    Promise.all(
      ['src/lib/services.ts', 'src/lib/microsoft-offers.ts'].map((path) =>
        readFile(new URL(path, root), 'utf8'),
      ),
    ),
  ]);
  const existingSlugs = [...foundation.matchAll(/slug: '([^']+)'/g)].map(
    (match) => match[1],
  );
  const serviceSlugs = new Set(
    serviceFiles.flatMap((file) =>
      [...file.matchAll(/slug: '([^']+)'/g)].map((match) => match[1]),
    ),
  );
  return { plan, articles, existingSlugs, serviceSlugs };
}
export function wordCount(article) {
  return [
    article.answer,
    ...article.sections.flatMap((section) => [
      ...section.paragraphs,
      ...section.checklist,
    ]),
    ...article.questions.map((question) => question.answer),
  ]
    .join(' ')
    .split(/\s+/).length;
}
export function validateCatalogue(
  { plan, articles, existingSlugs, serviceSlugs },
  now = new Date(),
) {
  if (
    plan.version !== 1 ||
    !Array.isArray(plan.clusters) ||
    !Array.isArray(plan.topics)
  )
    throw new Error('Plan éditorial invalide.');
  const clusters = new Map(
    plan.clusters.map((cluster) => [cluster.id, cluster]),
  );
  if (clusters.size !== plan.clusters.length)
    throw new Error('Famille de sujets en doublon.');
  const topicSlugs = new Set();
  for (const topic of plan.topics) {
    if (
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(topic.slug) ||
      topicSlugs.has(topic.slug)
    )
      throw new Error('Sujet invalide ou en doublon.');
    topicSlugs.add(topic.slug);
    if (
      !clusters.get(topic.cluster)?.services.includes(topic.service) ||
      !serviceSlugs.has(topic.service)
    )
      throw new Error(`Expertise incohérente : ${topic.slug}`);
    if (
      !topic.intent?.trim() ||
      !Number.isInteger(topic.priority) ||
      topic.priority < 1 ||
      topic.sources.length < 2 ||
      topic.sources.length > 4
    )
      throw new Error(`Brief incomplet : ${topic.slug}`);
    topic.sources.forEach((source) => sourceSchema.parse(source));
  }
  const slugs = new Set(existingSlugs);
  const titles = new Set();
  const seoTitles = new Set();
  const today = now.toISOString().slice(0, 10);
  for (const raw of articles) {
    const article = articleSchema.parse(raw);
    if (slugs.has(article.slug))
      throw new Error(`URL en doublon : ${article.slug}`);
    slugs.add(article.slug);
    if (
      !serviceSlugs.has(article.service) ||
      !clusters.get(article.cluster)?.services.includes(article.service)
    )
      throw new Error(`Article hors expertise : ${article.slug}`);
    if (titles.has(article.title.toLocaleLowerCase('fr')))
      throw new Error('Titre en doublon.');
    titles.add(article.title.toLocaleLowerCase('fr'));
    if (seoTitles.has(article.seoTitle.toLocaleLowerCase('fr')))
      throw new Error('Titre SEO en doublon.');
    seoTitles.add(article.seoTitle.toLocaleLowerCase('fr'));
    if (
      article.updatedAt > today ||
      (article.publishedAt &&
        (article.publishedAt > today ||
          article.publishedAt > article.updatedAt))
    )
      throw new Error(
        'Les dates doivent correspondre à des événements passés ou présents.',
      );
    const words = wordCount(article);
    if (words < 450 || words > 1800)
      throw new Error(
        `Contenu incomplet ou trop long : ${article.slug} (${words} mots)`,
      );
    const paragraphs = article.sections.flatMap(
      (section) => section.paragraphs,
    );
    if (new Set(paragraphs).size !== paragraphs.length)
      throw new Error('Paragraphes répétés.');
    const text = [
      article.title,
      article.answer,
      ...paragraphs,
      ...article.questions.map((question) => question.answer),
    ].join(' ');
    if (
      /(?:\b(?:[0-9]+\s*%|[0-9]+\s*€)|garanti(?:e|s)?\s+(?:de|à)|nos clients (?:ont|gagnent)|certifié(?:e)?s?\s+(?:Microsoft|Azure)|(?:À compléter|TODO|Lorem ipsum))/i.test(
        text,
      )
    )
      throw new Error(
        'Une affirmation chiffrée ou non vérifiée nécessite une relecture spécifique.',
      );
  }
  return {
    articles: articles.length,
    topics: plan.topics.length,
    clusters: clusters.size,
  };
}
export async function readSource(source, fetcher = fetch) {
  sourceSchema.parse(source);
  let url = source.url;
  for (let i = 0; i < 4; i++) {
    sourceSchema.parse({ ...source, url });
    const response = await fetcher(url, {
      redirect: 'manual',
      signal: AbortSignal.timeout(20000),
      headers: { 'User-Agent': 'LaPepiiteEditorial/1.0' },
    });
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const location = response.headers.get('location');
      if (!location) throw new Error('Redirection sans destination.');
      url = new URL(location, url).href;
      continue;
    }
    if (
      !response.ok ||
      !response.headers.get('content-type')?.includes('text/html')
    )
      throw new Error(`Source inaccessible : ${source.url}`);
    const reader = response.body.getReader();
    let total = 0;
    const chunks = [];
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        total += value.byteLength;
        if (total > 1_500_000) throw new Error('Source trop volumineuse.');
        chunks.push(value);
      }
    } finally {
      await reader.cancel();
    }
    let html = Buffer.concat(chunks).toString('utf8');
    html = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || html;
    const text = html
      .replace(/<(script|style|nav)\b[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;|&#160;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;|&apos;/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
    if (text.length < 800) throw new Error('Source insuffisante pour rédiger.');
    return { ...source, resolvedUrl: url, text: text.slice(0, 18000) };
  }
  throw new Error('Trop de redirections.');
}
export function chooseTopic(data, requested) {
  const existing = new Set([
    ...data.existingSlugs,
    ...data.articles.map((article) => article.slug),
  ]);
  const topics = data.plan.topics
    .filter((topic) => !existing.has(topic.slug))
    .sort((a, b) => a.priority - b.priority);
  if (requested && !topics.some((topic) => topic.slug === requested))
    throw new Error('Ce sujet est absent du calendrier ou déjà publié.');
  return requested
    ? topics.find((topic) => topic.slug === requested)
    : topics[0];
}
