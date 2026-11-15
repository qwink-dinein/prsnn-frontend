import Link from 'next/link';
import PageHead from '../_components/PageHead';
import JsonLd from '../_components/JsonLd';
import { GUIDE_GROUPS, GUIDES, ENTITY_PHRASES } from '../_lib/guides';
import { SITE_URL } from '../_lib/content';

export const metadata = {
  title: 'Guides: renting a friend, platonic companions and safety in India · prsnn',
  description: 'Plain guides to platonic companion apps in India: how renting a friend works, prices, safety for women, body doubling, plus-ones, walking buddies, and city pages.',
  alternates: { canonical: '/guides' },
};

const list = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'prsnn guides',
  url: `${SITE_URL}/guides`,
  hasPart: GUIDES.map((g) => ({ '@type': 'Article', headline: g.title, url: `${SITE_URL}/guides/${g.slug}` })),
};

export default function Guides() {
  return (
    <>
      <JsonLd data={list} />
      <PageHead title="Guides" intro={`Straight answers about booking platonic company in India. prsnn is ${ENTITY_PHRASES[0]}: ${ENTITY_PHRASES[1]}, with ${ENTITY_PHRASES[2]}.`} path="/guides" />
      <div className="s-wrap s-sec">
        {GUIDE_GROUPS.map((grp) => (
          <section key={grp.title} className="s-guide-group" aria-labelledby={`g-${grp.title}`}>
            <h2 id={`g-${grp.title}`} className="s-h2" style={{ fontSize: 30 }}>{grp.title}</h2>
            <ul className="s-guide-list">
              {grp.guides.map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`}>
                    <b>{g.short}</b>
                    <small>{g.description}</small>
                    <span className="s-guide-meta">{g.minutes} min read{g.city ? (g.live ? ' · Live now' : ' · Coming soon') : ''}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
