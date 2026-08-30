import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  image: z.string().optional(),
  // SEO overrides — used for the <title> and <meta name="description"> only.
  // Fall back to `title` / `description` when absent.
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
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
  conseils: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/conseils' }),
    schema: articleSchema,
  }),
};
