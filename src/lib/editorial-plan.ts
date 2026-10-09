import plan from '@/content/seo-plan.json' with { type: 'json' };
import type { Guide } from './guides';
export const editorialClusters = plan.clusters;
export function findEditorialCluster(service: string) {
  return editorialClusters.find((cluster) =>
    cluster.services.includes(service),
  );
}
export function relatedGuides(guide: Guide, allGuides: Guide[]) {
  const cluster = findEditorialCluster(guide.service);
  return allGuides
    .filter(
      (other) =>
        other.slug !== guide.slug &&
        findEditorialCluster(other.service)?.id === cluster?.id,
    )
    .slice(0, 2);
}
