import { Name, rich } from '../../_components/Brand';
import Link from 'next/link';
import PageHead from '../../_components/PageHead';
import JsonLd from '../../_components/JsonLd';
import StoreButtons from '../../_components/StoreButtons';
import { GUIDES, GUIDES_UPDATED, guideBySlug, guideQuestions } from '../../_lib/guides';
import { FOUNDER, SITE_URL } from '../../_lib/content';

export const dynamicParams = false;
export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const g = guideBySlug((await params).slug);
  return {
    title: `${g.title} · prsnn`,
    description: g.description,
    keywords: g.keywords,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: { type: 'article', title: g.title, description: g.description, url: `/guides/${g.slug}`, images: [{ url: '/site/cat/community-cafe.jpg', width: 1600, height: 781 }] },
  };
}

function Cta({ kind }) {
  if (kind === 'companion') {
    return (
      <section className="s-guide-cta" aria-label="Become a companion">
        <h2>Earn doing what you love</h2>
        <p>Choose your days and hours and keep 80% of every booking. Download <Name /> and choose Become a companion.</p>
        <StoreButtons />
        <p><Link className="s-link" href="/become-a-companion">How companion work on <Name /> works</Link></p>
      </section>
    );
  }
  return (
    <section className="s-guide-cta" aria-label="Get the app">
      <h2>Your next plan is a tap away</h2>
      <p>Book a verified companion in the <Name /> app. From ₹399 an hour, public places only, full refund if nobody accepts.</p>
      <StoreButtons />
    </section>
  );
}

export default async function Guide({ params }) {
  const g = guideBySlug((await params).slug);
  const qa = guideQuestions(g);
  const url = `${SITE_URL}/guides/${g.slug}`;
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: g.title,
        description: g.description,
        keywords: g.keywords.join(', '),
        datePublished: GUIDES_UPDATED,
        dateModified: GUIDES_UPDATED,
        inLanguage: 'en-IN',
        mainEntityOfPage: url,
        author: { '@type': 'Person', name: FOUNDER, '@id': `${SITE_URL}/#founder` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      ...(qa.length ? [{ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: qa.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }] : []),
    ],
  };
  const related = (g.related ?? []).map(guideBySlug).filter(Boolean);
  return (
    <>
      <JsonLd data={ld} />
      <PageHead title={g.title} intro={g.description} crumb={g.short} path={`/guides/${g.slug}`} />
      <article className="s-wrap s-sec s-prose s-guide">
        <p className="s-meta">By {rich(FOUNDER)}, founder of <Name /> · Updated {rich(new Date(GUIDES_UPDATED).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }))} · {rich(g.minutes)} min read · <Link href="/guides">All guides</Link></p>
        <section>
          {g.intro.map((p) => <p key={p}>{rich(p)}</p>)}
        </section>
        {g.sections.map((s) => (
          <section key={s.h}>
            <h2>{rich(s.h)}</h2>
            {rich(s.answer ? <p className="s-answer">{rich(s.answer)}</p> : null)}
            {(s.paras ?? []).map((p) => <p key={p}>{rich(p)}</p>)}
            {rich(s.list ? <ul>{s.list.map((x) => <li key={x}>{rich(x)}</li>)}</ul> : null)}
          </section>
        ))}
        {rich(g.faq?.length ? (
          <section>
            <h2>Quick answers</h2>
            {g.faq.map(([q, a]) => (
              <div key={q}><h3>{rich(q)}</h3><p>{rich(a)}</p></div>
            ))}
          </section>
        ) : null)}
        <Cta kind={g.cta} />
        {rich(related.length ? (
          <section>
            <h2>Read next</h2>
            <ul>{related.map((r) => <li key={r.slug}><Link href={`/guides/${r.slug}`}>{rich(r.short)}</Link></li>)}</ul>
            <p className="s-meta">See also: <Link href="/guidelines">House rules</Link> · <Link href="/safety">Safety</Link> · <Link href="/pricing">Prices</Link> · <Link href="/support">Help &amp; support</Link></p>
          </section>
        ) : null)}
      </article>
    </>
  );
}
