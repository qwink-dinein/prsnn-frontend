import Link from 'next/link';
import { Outfit, Urbanist } from 'next/font/google';
import './site.css';
import Header from './_components/Header';
import Footer from './_components/Footer';
import JsonLd from './_components/JsonLd';
import { ANDROID_APK_URL, APP_STORE_URL, FOUNDER, PLAY_STORE_URL, SITE_URL, SOCIALS, SUMMARY } from './_lib/content';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-urbanist', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], weight: ['700'], variable: '--font-outfit', display: 'swap' });

export const metadata = {
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: 'prsnn', locale: 'en_IN', images: [{ url: '/site/cat/community-cafe.jpg', width: 1600, height: 781, alt: 'prsnn: real people, real connections' }] },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

const sameAs = [...SOCIALS.map((s) => s.url), APP_STORE_URL, PLAY_STORE_URL].filter(Boolean);
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'prsnn',
      alternateName: ['prsnn app', 'prsnn companions'],
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/icon.svg`,
      description: SUMMARY,
      founder: { '@id': `${SITE_URL}/#founder` },
      areaServed: { '@type': 'Country', name: 'India' },
      contactPoint: [{ '@type': 'ContactPoint', contactType: 'customer support', url: `${SITE_URL}/support` }],
      ...(sameAs.length ? { sameAs } : {}),
    },
    { '@type': 'Person', '@id': `${SITE_URL}/#founder`, name: FOUNDER, jobTitle: 'Founder', worksFor: { '@id': `${SITE_URL}/#organization` }, image: `${SITE_URL}/site/founder-mukarram.jpg` },
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: 'prsnn', inLanguage: 'en-IN', publisher: { '@id': `${SITE_URL}/#organization` } },
    {
      '@type': 'MobileApplication',
      '@id': `${SITE_URL}/#app`,
      name: 'prsnn',
      operatingSystem: 'iOS, Android',
      applicationCategory: 'LifestyleApplication',
      description: 'Book a verified companion for platonic company in public places. Approved, ID-checked companions, fixed prices from ₹399, a panic button in every session.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      ...(PLAY_STORE_URL || ANDROID_APK_URL ? { downloadUrl: PLAY_STORE_URL || ANDROID_APK_URL } : {}),
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default function SiteLayout({ children }) {
  return (
    <div className={`s-root ${urbanist.variable} ${outfit.variable}`}>
      <Link className="s-skip" href="#main">Skip to content</Link>
      <JsonLd data={graph} />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
