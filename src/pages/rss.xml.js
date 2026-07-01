import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const consommation = await getCollection('consommation');
  const logement = await getCollection('logement');
  const conseils = await getCollection('conseils');

  const articles = [...consommation, ...logement, ...conseils].sort(
    (a, b) => new Date(b.data.date) - new Date(a.data.date)
  );

  return rss({
    title: 'AFOC 34 - Actualités',
    description: "Défense des consommateurs et locataires dans l'Hérault",
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.date,
      description: article.data.description,
      link: `/${article.collection}/${article.id.replace(/\.md$/, '')}/`,
    })),
  });
}
