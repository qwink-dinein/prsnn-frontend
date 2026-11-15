import Link from 'next/link';
import Image from 'next/image';
import { OpenCategory } from './CategoryContext';
import { FOUNDER } from '../_lib/content';

/** The founder's story, short version (home). The full story is on /about. */
export default function FounderStory({ onHome = true }) {
  const cta = onHome ? (
    <OpenCategory slug="companion-for-a-loved-one" className="s-btn s-btn-gold">Book company for a loved one</OpenCategory>
  ) : (
    <Link className="s-btn s-btn-gold" href="/companion-for-a-loved-one">Book company for a loved one</Link>
  );
  return (
    <section id="story" className="s-dark s-founder" aria-labelledby="story-h">
      <div className="s-wrap s-sec" style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'center' }}>
        <figure>
          <Image src="/site/founder.jpg" alt={`${FOUNDER}, founder of prsnn`} width={1024} height={1536} sizes="(max-width: 860px) 100vw, 420px" />
          <figcaption><b>{FOUNDER}</b><small>Founder, prsnn</small></figcaption>
        </figure>
        <div className="s-story">
          <p className="s-eyebrow" style={{ margin: 0 }}>Why prsnn exists</p>
          <h2 id="story-h" className="s-h2" style={{ fontSize: 44, marginBottom: 6 }}>I lost my grandfather for seven days. It was my fault.</h2>
          <p>My grandfather was 90 and had dementia. He couldn’t remember our names or find his way home, so someone always stayed with him.</p>
          <p>One day it was my turn. I left for two hours to finish some work.</p>
          <p className="s-beat">When I got back, the gate was open. He was gone.</p>
          <p>For seven days we searched the streets, went to the police and put up posters. My father cried every day.</p>
          <p>On the seventh day, a relative found him asleep at a bus stand, under a blanket. He was alive.</p>
          <blockquote>When we can’t be there for the people we love, who can we trust to be there for them?</blockquote>
          <p>I built prsnn to answer that: a trusted person who can be there, keep them company and look out for them, when you can’t.</p>
          <p className="s-beat" style={{ fontSize: 19 }}>I hope you never learn this the way I did.</p>
          <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
            {cta}
            <span style={{ fontSize: 15, color: 'var(--on-dark-dim)' }}>— {FOUNDER}, Founder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
