// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // REMPLACE PAR TON URL SURGE OU TON DOMAINE RÉEL
  // Exemple : https://afoc34-herault.surge.sh ou https://afoc34.fr
  site: 'https://votre-site-afoc.fr',
  integrations: [sitemap()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
