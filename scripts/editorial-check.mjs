import {
  loadEditorial,
  validateCatalogue,
  readSource,
} from './lib/editorial.mjs';
try {
  const data = await loadEditorial();
  const result = validateCatalogue(data);
  if (process.argv.includes('--sources')) {
    const sources = [
      ...data.articles.flatMap((article) => article.sources),
      ...data.plan.topics.flatMap((topic) => topic.sources),
    ];
    const unique = [
      ...new Map(sources.map((source) => [source.url, source])).values(),
    ];
    const results = await Promise.allSettled(
      unique.map((source) => readSource(source)),
    );
    const failures = results.flatMap((result, i) =>
      result.status === 'rejected'
        ? [`${unique[i].url} (${result.reason.message})`]
        : [],
    );
    if (failures.length)
      throw new Error(`Sources à corriger : ${failures.join(', ')}`);
    result.sources = unique.length;
  }
  console.log('Contrôles éditoriaux validés :', result);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
