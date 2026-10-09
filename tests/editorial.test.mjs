import test from 'node:test';
import assert from 'node:assert/strict';
import {
  loadEditorial,
  validateCatalogue,
  chooseTopic,
  readSource,
} from '../scripts/lib/editorial.mjs';
import { generateCandidate } from '../scripts/editorial-generate.mjs';
const data = await loadEditorial();
const article = data.articles[0];
const candidate = (({
  title,
  seoTitle,
  description,
  answer,
  sections,
  questions,
}) => ({
  title,
  seoTitle,
  description,
  answer,
  sections,
  questions,
}))(article);
test('editorial plan covers existing services and published articles are complete', () => {
  assert.ok(validateCatalogue(data).articles >= 3);
  assert.equal(data.plan.clusters.length, 6);
  const next = chooseTopic(data);
  assert.ok(data.plan.topics.some((topic) => topic.slug === next.slug));
  assert.ok(!data.articles.some((item) => item.slug === next.slug));
  const advanced = chooseTopic({
    ...data,
    articles: [...data.articles, { slug: next.slug }],
  });
  assert.notEqual(advanced?.slug, next.slug);
});
test('duplicate URLs, future dates and invented statistics block publication', () => {
  assert.throws(
    () => validateCatalogue({ ...data, articles: [...data.articles, article] }),
    /doublon/,
  );
  assert.throws(
    () =>
      validateCatalogue({
        ...data,
        articles: [{ ...article, updatedAt: '2099-01-01' }],
      }),
    /dates/,
  );
  assert.throws(
    () =>
      validateCatalogue({
        ...data,
        articles: [
          {
            ...article,
            answer: article.answer + ' Les gains atteignent 50 %.',
          },
        ],
      }),
    /affirmation/,
  );
});
test('unknown services and arbitrary markup cannot enter the article catalogue', () => {
  assert.throws(
    () =>
      validateCatalogue({
        ...data,
        articles: [{ ...article, service: 'service-invente' }],
      }),
    /expertise/,
  );
  assert.throws(() =>
    validateCatalogue({
      ...data,
      articles: [
        { ...article, answer: article.answer + ' <script>alert(1)</script>' },
      ],
    }),
  );
});
test('private addresses, foreign domains and redirect escapes are rejected before fetching', async () => {
  let calls = 0;
  const fake = async () => {
    calls++;
    return new Response(null, {
      status: 302,
      headers: { location: 'http://127.0.0.1/admin' },
    });
  };
  await assert.rejects(() =>
    readSource({ label: 'Source privée', url: 'http://127.0.0.1/' }, fake),
  );
  assert.equal(calls, 0);
  await assert.rejects(() => readSource(article.sources[0], fake));
  assert.equal(calls, 1);
});
test('source failures block drafting while accessible HTML becomes reference text only', async () => {
  await assert.rejects(
    () =>
      readSource(
        article.sources[0],
        async () => new Response('absent', { status: 404 }),
      ),
    /inaccessible/,
  );
  const source = await readSource(
    article.sources[0],
    async () =>
      new Response(
        '<main><script>NE_PAS_TRANSMETTRE</script><p>' +
          'Documentation de référence. '.repeat(60) +
          '</p></main>',
        { headers: { 'content-type': 'text/html' } },
      ),
  );
  assert.ok(source.text.includes('Documentation'));
  assert.ok(!source.text.includes('NE_PAS_TRANSMETTRE'));
});
test('no key never triggers a paid API call', async () => {
  let calls = 0;
  await assert.rejects(
    () =>
      generateCandidate(data.plan.topics[0], [], {
        fetcher: async () => {
          calls++;
        },
      }),
    /OPENAI_API_KEY/,
  );
  assert.equal(calls, 0);
});
test('structured drafting uses only reference documents and refuses incomplete or bad API results', async () => {
  const topic = data.plan.topics[0];
  let body;
  const fetcher = async (url, options) => {
    assert.equal(url, 'https://api.openai.com/v1/responses');
    body = JSON.parse(options.body);
    return new Response(
      JSON.stringify({
        status: 'completed',
        output: [
          {
            content: [{ type: 'output_text', text: JSON.stringify(candidate) }],
          },
        ],
      }),
      { headers: { 'content-type': 'application/json' } },
    );
  };
  assert.deepEqual(
    await generateCandidate(
      topic,
      [
        {
          label: 'Documentation',
          url: topic.sources[0].url,
          text: 'Référence de test',
        },
      ],
      { apiKey: 'test-not-a-secret', fetcher },
    ),
    candidate,
  );
  assert.equal(body.store, false);
  assert.equal(body.text.format.strict, true);
  assert.equal(body.max_output_tokens, 6500);
  await assert.rejects(
    () =>
      generateCandidate(topic, [], {
        apiKey: 'test',
        fetcher: async () => new Response('error', { status: 429 }),
      }),
    /429/,
  );
  await assert.rejects(
    () =>
      generateCandidate(topic, [], {
        apiKey: 'test',
        fetcher: async () =>
          new Response(JSON.stringify({ status: 'incomplete' })),
      }),
    /incomplète/,
  );
});
