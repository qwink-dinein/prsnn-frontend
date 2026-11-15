import { withSentryConfig } from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'prssn-backend.onrender.com',
        port: '5000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '*.render.com',
        pathname: '/uploads/**',
      },
      // The old API's own host, only when it's configured (an empty hostname breaks the build).
      ...(process.env.NEXT_PUBLIC_API_URL
        ? [{ protocol: 'https', hostname: process.env.NEXT_PUBLIC_API_URL.replace(/^https?:\/\//, '').replace(/:\d+/, '').replace(/\/.*$/, ''), pathname: '/uploads/**' }]
        : []),
    ],
    formats: ['image/avif', 'image/webp'], // Use modern image formats
    deviceSizes: [640, 750, 828, 1080, 1200], // Optimize for common device sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Optimize for common image sizes
  },
  // Old policy pages → the new ones (keeps any search ranking they had).
  async redirects() {
    return [
      { source: '/terms-of-service', destination: '/terms', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/refund-policy', destination: '/refunds', permanent: true },
      { source: '/code-of-conduct', destination: '/guidelines', permanent: true },
      { source: '/how-it-works', destination: '/#how', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      // Old policy pages from the previous app: one current set of policies only.
      { source: '/payment-terms', destination: '/refunds', permanent: true },
      { source: '/dispute-policy', destination: '/grievance', permanent: true },
      { source: '/fellow-training-manual', destination: '/companion-terms', permanent: true },
      { source: '/user-instructions', destination: '/safety', permanent: true },
      { source: '/sentry-example-page', destination: '/', permanent: false },
    ];
  },
  devIndicators: {
    buildActivity: false,
  },
};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: "awadh-z7",

  project: "rent-a-fellow-frontend",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  webpack: {
    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,

    // Tree-shaking options for reducing bundle size
    treeshake: {
      // Automatically tree-shake Sentry logger statements to reduce bundle size
      removeDebugLogging: true,
    },
  },
});
