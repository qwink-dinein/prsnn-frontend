// Root shell only. The website lives in app/(site) with its own look; the earlier web app
// (Express API era) lives in app/(app) with its own navbar, providers and fonts.
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'prsnn · Book a verified companion for any plan', template: '%s' },
  description: 'Everyone’s busy? Go anyway. Book a verified companion for concerts, a new city, study or a visit for your parents. Public places only. From ₹399.',
  applicationName: 'prsnn',
  // Search console ownership checks (optional; set in Cloudflare build variables). DNS verification works too.
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { other: { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } } : {}),
  },
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#181B34' };

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body suppressHydrationWarning style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
