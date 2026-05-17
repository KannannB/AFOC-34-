import { defineCollection, z } from 'astro:content';

const consommation = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  consommation,
};
