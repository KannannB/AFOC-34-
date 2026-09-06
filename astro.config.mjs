import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://afoc34.fr',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      // Exclut les pages de confirmation (post-formulaire) de l'index.
      filter: (page) => !/\/(merci-contact|success)\/?$/.test(page),
    }),
  ],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
