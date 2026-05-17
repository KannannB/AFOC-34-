import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://afoc34.netlify.app',
  integrations: [sitemap()],
  output: 'static',
});
