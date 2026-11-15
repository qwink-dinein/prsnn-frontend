export const dynamic = 'force-static';

import { PAGES, SITE_URL } from './(site)/_lib/content';
import { GUIDES } from './(site)/_lib/guides';

export default function sitemap() {
  const now = new Date();
  const pages = [...PAGES, { path: '/guides' }, ...GUIDES.map((g) => ({ path: `/guides/${g.slug}` }))];
  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.path === '/' ? 'weekly' : 'monthly',
    priority: p.path === '/' ? 1 : ['/terms', '/privacy', '/refunds', '/guidelines'].includes(p.path) ? 0.3 : 0.8,
  }));
}
