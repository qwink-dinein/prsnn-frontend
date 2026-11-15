import { PAGES, SITE_URL } from './(site)/_lib/content';

export default function sitemap() {
  const now = new Date();
  return PAGES.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.path === '/' ? 'weekly' : 'monthly',
    priority: p.path === '/' ? 1 : ['/terms', '/privacy', '/refunds', '/guidelines'].includes(p.path) ? 0.3 : 0.8,
  }));
}
