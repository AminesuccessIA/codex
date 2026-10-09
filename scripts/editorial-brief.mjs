import { mkdir, writeFile, appendFile } from 'node:fs/promises';
import {
  root,
  loadEditorial,
  validateCatalogue,
  chooseTopic,
  readSource,
} from './lib/editorial.mjs';
export async function run() {
  const data = await loadEditorial();
  validateCatalogue(data);
  const topic = chooseTopic(data, process.env.SEO_TOPIC || undefined);
  if (!topic) {
    console.log('Tous les sujets du calendrier sont déjà publiés.');
    if (process.env.GITHUB_OUTPUT)
      await appendFile(process.env.GITHUB_OUTPUT, 'topic=\n');
    return;
  }
  await Promise.all(topic.sources.map((source) => readSource(source)));
  const brief = `# ${topic.title}\n\nIntention : ${topic.intent}\n\nExpertise : /${topic.service}\n\nURL proposée : /ressources/${topic.slug}\n\n## Sources accessibles\n${topic.sources.map((source) => `- ${source.label} : ${source.url}`).join('\n')}\n\n## Rédaction dans ChatGPT\nConsigne : https://github.com/AminesuccessIA/codex/blob/main/docs/consigne-chatgpt-articles.md\n\nCe workflow prépare le brief. Il ne rédige pas et ne publie pas.\n\n## Recette éditoriale\n- Vérifier chaque affirmation produit avec les sources.\n- Vérifier les licences et conditions actuelles si elles sont évoquées.\n- Écarter chiffres, références client et engagements non confirmés.\n- Relire le titre, la réponse directe, les sections et les questions.\n- Vérifier les liens vers l’expertise et les guides complémentaires.\n- Examiner l’aperçu Vercel de la demande de modification.\n- Fusionner uniquement lorsque le contenu est approuvé : cela déclenche la publication.\n`;
  await mkdir(new URL('.editorial/', root), { recursive: true });
  await writeFile(new URL('.editorial/brief.md', root), brief);
  if (process.env.GITHUB_OUTPUT)
    await appendFile(process.env.GITHUB_OUTPUT, `topic=${topic.slug}\n`);
  if (process.env.GITHUB_STEP_SUMMARY)
    await appendFile(process.env.GITHUB_STEP_SUMMARY, brief);
  console.log('Brief préparé pour ChatGPT. Le catalogue reste inchangé.');
}
if (
  process.argv[1] &&
  new URL(process.argv[1], 'file:').href === import.meta.url
) {
  run().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
