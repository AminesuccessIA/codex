import { z } from 'zod';
import { services } from './services';
export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(254),
  company: z.string().trim().max(150),
  service: z
    .string()
    .max(100)
    .refine(
      (v) =>
        v === '' ||
        v === 'audit-microsoft' ||
        services.some((s) => s.slug === v),
    )
    .optional()
    .default(''),
  message: z.string().trim().min(10).max(5000),
  consent: z.literal(true),
  website: z.string().max(0),
});
