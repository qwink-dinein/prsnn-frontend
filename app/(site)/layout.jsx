import Link from 'next/link';
import { Outfit, Urbanist } from 'next/font/google';
import './site.css';
import Header from './_components/Header';
import Footer from './_components/Footer';
import JsonLd from './_components/JsonLd';
import { APP_STORE_URL, FOUNDER, PLAY_STORE_URL, SITE_URL, SUMMARY, SUPPORT_EMAIL } from './_lib/content';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-urbanist', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], weight: ['700'], variable: '--font-outfit', display: 'swap' });

export const metadata = {
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: 'prsnn', locale: 'en_IN', images: [{ url: '/site/together.jpg', width: 600, height: 900, alt: 'prsnn' }] },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

const sameAs = [APP_STORE_URL, PLAY_STORE_URL].filter(Boolean);
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
      areaServed: { '@type': 'City', name: 'Hyderabad', containedInPlace: { '@type': 'Country', name: 'India' } },
      ...(SUPPORT_EMAIL ? { contactPoint: [{ '@type': 'ContactPoint', contactType: 'customer support', email: SUPPORT_EMAIL }] } : {}),
      ...(sameAs.length ? { sameAs } : {}),
    },
    { '@type': 'Person', '@id': `${SITE_URL}/#founder`, name: FOUNDER, jobTitle: 'Founder', worksFor: { '@id': `${SITE_URL}/#organization` }, image: `${SITE_URL}/site/founder.jpg` },
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: 'prsnn', inLanguage: 'en-IN', publisher: { '@id': `${SITE_URL}/#organization` } },
    {
      '@type': 'MobileApplication',
      '@id': `${SITE_URL}/#app`,
      name: 'prsnn',
      operatingSystem: 'iOS, Android',
      applicationCategory: 'LifestyleApplication',
      description: 'Book a verified companion for platonic company in public places. Approved, ID-checked companions, fixed prices from ₹399, a panic button in every session.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
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
