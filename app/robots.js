export const dynamic = 'force-static';

import { SITE_URL } from './(site)/_lib/content';

// Everyone may read the public site, including AI assistants, so they describe prsnn accurately.
const AI_AND_SEARCH = ['Googlebot', 'Bingbot', 'Google-Extended', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Applebot', 'Applebot-Extended', 'DuckAssistBot'];
const PRIVATE = ['/admin', '/super-admin', '/api/', '/monitoring', '/profile', '/my-bookings', '/notifications', '/session/', '/onboarding', '/login'];

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: PRIVATE }, ...AI_AND_SEARCH.map((userAgent) => ({ userAgent, allow: '/', disallow: PRIVATE }))],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
