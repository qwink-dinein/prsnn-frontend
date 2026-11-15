import Link from 'next/link';
import { Outfit, Urbanist } from 'next/font/google';
import './(site)/site.css';
import Header from './(site)/_components/Header';
import Footer from './(site)/_components/Footer';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-urbanist', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], weight: ['700'], variable: '--font-outfit', display: 'swap' });

export const metadata = { title: 'Page not found · prsnn', robots: { index: false } };

/** Every unknown address (the static 404.html Cloudflare serves). */
export default function NotFound() {
  return (
    <div className={`s-root ${urbanist.variable} ${outfit.variable}`}>
      <Header />
      <main id="main" className="s-wrap s-sec" style={{ minHeight: '50vh' }}>
        <p className="s-eyebrow">404</p>
        <h1 className="s-h2">This page isn’t here.</h1>
        <p className="s-lead">The link may be old or mistyped. Everything about prsnn starts on the home page.</p>
        <p style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <Link className="s-btn s-btn-dark" href="/">Go to the home page</Link>
          <Link className="s-link" href="/legal">All policies</Link>
        </p>
      </main>
      <Footer />
    </div>
  );
}
