import { withSentryConfig } from '@sentry/nextjs';

/**
 * The public website is a fully static export (`out/`), served by Cloudflare Workers static assets
 * (see wrangler.jsonc and DEPLOY.md). No server: the interest form talks to Supabase from the browser.
 * Redirects and security headers live in public/_redirects and public/_headers, which Cloudflare applies.
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // Static export: images are served as they are (they're already sized and compressed in public/site).
  images: { unoptimized: true },
  devIndicators: { buildActivity: false },
};

export default withSentryConfig(nextConfig, {
  org: 'awadh-z7',
  project: 'rent-a-fellow-frontend',
  // Source maps upload only when SENTRY_AUTH_TOKEN is set in the build environment.
  silent: !process.env.CI,
  widenClientFileUpload: true,
  webpack: { treeshake: { removeDebugLogging: true } },
});
