import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHead from '../_components/PageHead';
import StoreButtons from '../_components/StoreButtons';
import InterestForm from '../_components/InterestForm';
import Faq from '../_components/Faq';
import JsonLd from '../_components/JsonLd';
import { Check } from '../_components/Icons';
import { CATEGORIES, HOURS, PRICES, SITE_URL, categoryBySlug, hoursLabel, inr } from '../_lib/content';

export const dynamicParams = false;
export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }) {
  const c = categoryBySlug((await params).category);
  if (!c) return {};
  return {
    title: c.seoTitle,
    description: c.seoDescription,
    alternates: { canonical: `/${c.slug}` },
    openGraph: { title: c.seoTitle, description: c.seoDescription, url: `/${c.slug}`, images: [{ url: c.img, width: 900, height: 600 }] },
  };
}

const SHARED_FAQ = [
  ['Is it safe?', 'Every companion is approved by our team and ID-checked before their first booking. Phone numbers stay hidden in chat, and a panic button alerts our team at once during the session.'],
  ['What if nobody accepts?', 'You get a full refund, automatically.'],
];

export default async function CategoryPage({ params }) {
  const c = categoryBySlug((await params).category);
  if (!c) notFound();
  const faq = [...c.faq, ...SHARED_FAQ];
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${c.title} · prsnn`,
      serviceType: 'Platonic companionship',
      description: c.intro,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: { '@type': 'City', name: 'Hyderabad' },
      offers: { '@type': 'AggregateOffer', priceCurrency: 'INR', lowPrice: PRICES[1], highPrice: PRICES[12], offerCount: HOURS.length },
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  ];
  const others = CATEGORIES.filter((x) => x.slug !== c.slug);
  return (
    <>
      <JsonLd data={ld} />
      <PageHead title={c.title} intro={`${c.pain} ${c.intro}`} path={`/${c.slug}`} img={c.img}>
        <StoreButtons />
      </PageHead>

      <section className="s-sec">
        <div className="s-wrap s-split" style={{ alignItems: 'flex-start' }}>
          <div>
            <p className="s-eyebrow">Use it for</p>
            <h2 className="s-h2">{c.line}.</h2>
            <ul className="s-uses" style={{ gridTemplateColumns: '1fr', marginTop: 24 }}>
              {c.uses.map((u) => (
                <li key={u}><span className="s-tick"><Check size={12} /></span><span>{u}</span></li>
              ))}
            </ul>
          </div>
          <div className="s-card" style={{ padding: 28 }}>
            <p className="s-eyebrow">Suggested</p>
            <p className="s-num" style={{ fontSize: 34, margin: '0 0 6px', letterSpacing: -1 }}>{c.suggest}</p>
            <p style={{ margin: '0 0 18px', color: 'var(--muted)' }}>Book any length from 1 to 12 hours. Longer bookings cost less per hour.</p>
            <table className="s-table">
              <caption className="s-sr">Popular lengths and prices</caption>
              <tbody>
                {[1, 2, 4, 6, 8].map((h) => (
                  <tr key={h}><th scope="row" style={{ fontWeight: 500 }}>{hoursLabel(h)}</th><td className="s-num">{inr(PRICES[h])}</td></tr>
                ))}
              </tbody>
            </table>
            <Link className="s-btn s-btn-dark" href="/pricing" style={{ marginTop: 18, width: '100%' }}>All prices</Link>
          </div>
        </div>
      </section>

      <section className="s-sec s-white">
        <div className="s-wrap" style={{ maxWidth: 900 }}>
          <h2 className="s-h2">Questions about {c.title}</h2>
          <Faq items={faq} />
        </div>
      </section>

      <section className="s-sec">
        <div className="s-wrap">
          <h2 className="s-h2" style={{ fontSize: 34 }}>Other kinds of company</h2>
          <div className="s-grid" style={{ marginTop: 20 }}>
            {others.map((o) => (
              <Link key={o.slug} href={`/${o.slug}`} className="s-card s-moment" style={{ padding: 24 }}>
                <strong style={{ fontSize: 22 }}>{o.title}</strong>
                <p>{o.line}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="s-sec" style={{ paddingTop: 0 }}>
        <div className="s-wrap">
          <div className="s-join">
            <div>
              <h2 className="s-h2">Book {c.title.toLowerCase()} in the app.</h2>
              <p className="s-lead" style={{ margin: 0 }}>Free to download; pay only when you book.</p>
              <StoreButtons />
            </div>
            <InterestForm source={`website:${c.slug}`} />
          </div>
        </div>
      </section>
    </>
  );
}
