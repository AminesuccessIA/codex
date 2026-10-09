import { z } from 'zod';
const editorialText = z
  .string()
  .trim()
  .min(1)
  .refine(
    (value) => !/<\/?[a-z][^>]*>|https?:\/\//i.test(value),
    'Le texte éditorial doit rester sans HTML ni URL libre.',
  );
export const candidateSchema = z.strictObject({
  title: editorialText.min(15).max(110),
  seoTitle: editorialText.min(15).max(55),
  description: editorialText.min(90).max(180),
  answer: editorialText.min(100).max(650),
  sections: z
    .array(
      z.strictObject({
        title: editorialText.min(8).max(110),
        paragraphs: z.array(editorialText.min(60).max(1800)).min(1).max(4),
        checklist: z.array(editorialText.min(8).max(300)).max(8),
      }),
    )
    .min(4)
    .max(7),
  questions: z
    .array(
      z.strictObject({
        question: editorialText.min(10).max(180),
        answer: editorialText.min(60).max(900),
      }),
    )
    .min(2)
    .max(5),
});
export const sourceSchema = z.strictObject({
  label: z.string().min(5).max(160),
  url: z.url().refine((value) => {
    const url = new URL(value);
    return (
      url.protocol === 'https:' &&
      !url.username &&
      !url.password &&
      !url.port &&
      [
        'learn.microsoft.com',
        'www.microsoft.com',
        'www.lapepiite.com',
      ].includes(url.hostname)
    );
  }, 'Une source officielle Microsoft ou La Pépiite IT est requise.'),
});
export const articleSchema = candidateSchema.extend({
  slug: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .max(100),
  service: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  cluster: z.string().min(2).max(60),
  category: z.string().min(3).max(60),
  updatedAt: z.iso.date(),
  publishedAt: z.iso.date().optional(),
  sources: z.array(sourceSchema).min(2).max(4),
});
export type EditorialArticle = z.infer<typeof articleSchema>;
