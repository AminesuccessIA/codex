import { notFound } from 'next/navigation';
import { services, findService } from '@/lib/services';
import { pageMetadata } from '@/lib/site';
import { serviceSeoDescriptions } from '@/lib/seo-descriptions';
import { ServicePage } from '@/components/service-page';
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const s = findService(service);
  if (!s) notFound();
  return pageMetadata(
    s.name,
    serviceSeoDescriptions[s.slug] || s.description,
    '/' + s.slug,
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const s = findService(service);
  if (!s) notFound();
  return <ServicePage service={s} />;
}
