import { site } from '@/lib/site';
import { services } from '@/lib/services';
import { guides } from '@/lib/guides';
export function GET() {
  const text = `# La Pépiite IT\n\n> ESN, intégrateur et partenaire Microsoft. Conseil, intégration, consultants au TJM, projets au forfait, support et services managés pour les organisations en Europe et en Afrique.\n\n## Présentation\n- [À propos](${site.url}/a-propos)\n- [Partenaire Microsoft](${site.url}/partenaire-microsoft)\n- [Solutions Microsoft](${site.url}/solutions-microsoft)\n- [Références clients](${site.url}/references)\n- [Scénarios d’intervention](${site.url}/cas-d-usage)\n\n## Expertises\n${services.map((s) => `- [${s.name}](${site.url}/${s.slug}): ${s.description}`).join('\n')}\n\n## Guides pratiques\n${guides.map((g) => `- [${g.title}](${site.url}/ressources/${g.slug}): ${g.description}`).join('\n')}\n\n## Contact et informations légales\n- [Cadrer un projet](${site.url}/diagnostic)\n- [Contact](${site.url}/contact): contact@lapepiite.com\n- [Mentions légales](${site.url}/mentions-legales)\n- [Confidentialité](${site.url}/politique-de-confidentialite)\n`;
  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
