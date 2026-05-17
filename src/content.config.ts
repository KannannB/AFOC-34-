import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  image: z.string().optional(),
});

export const collections = {
  consommation: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/consommation' }),
    schema: articleSchema,
  }),
  logement: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/logement' }),
    schema: articleSchema,
  }),
  'services-public': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/services-public' }),
    schema: articleSchema,
  }),
};
