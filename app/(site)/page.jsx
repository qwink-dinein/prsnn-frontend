import Link from 'next/link';
import { CategoryProvider } from './_components/CategoryContext';
import HeroStack from './_components/HeroStack';
import PhotoCardRow from './_components/PhotoCardRow';
import CommunityBanner from './_components/CommunityBanner';
import UseExplorer from './_components/UseExplorer';
import PricePicker from './_components/PricePicker';
import InterestForm from './_components/InterestForm';
import StoreButtons from './_components/StoreButtons';
import JsonLd from './_components/JsonLd';
import Faq from './_components/Faq';
import FounderStory from './_components/FounderStory';
import { Check, Clock, Pin, Refund, Shield } from './_components/Icons';
import { HOME_FAQ, PRICES, SITE_URL, companionShare, hoursLabel, inr } from './_lib/content';

export const metadata = {
  title: 'prsnn · Book a verified companion for any plan',
  description: 'Everyone’s busy? Go anyway. Book a verified companion for concerts, a new city, study or a visit for your parents. Public places only. From ₹399.',
  alternates: { canonical: '/' },
  openGraph: { title: 'prsnn · Everyone’s busy? Go anyway.', description: 'Verified companions for every plan, from ₹399.', url: '/' },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq`,
  mainEntity: HOME_FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const PROMISES = [
  { Icon: Shield, title: 'Approved and ID-checked', sub: 'Our team reviews every companion' },
  { Icon: Pin, title: 'Public places', sub: 'Home visits only for loved ones' },
  { Icon: Clock, title: 'Panic button, every session', sub: 'Our team is alerted at once' },
  { Icon: Refund, title: 'Full refund if nobody accepts', sub: 'No booking fee, ever' },
];

export default function Home() {
  return (
    <CategoryProvider>
      <JsonLd data={faqLd} />

      <section className="s-hero" aria-labelledby="hero-h">
        <div className="s-wrap">
          <div className="s-hero-copy">
            <span className="s-badge">Now in Hyderabad</span>
            <h1 id="hero-h" className="s-h1">{'Everyone’s busy?\nGo anyway.'}</h1>
            <p className="s-hero-sub">prsnn finds you a verified companion for the gig, the café, the new city, or a visit for your parents. Always in public. From ₹399.</p>
            <div className="s-stores">
              <StoreButtons />
              <Link className="s-link" href="#familiar">See how it works</Link>
            </div>
            <ul className="s-checks">
              {['Not dating. Just good company.', 'Public places, or home for loved ones', 'Full refund if nobody accepts'].map((t) => (
                <li key={t}><span style={{ color: 'var(--champagne)' }}><Check size={14} /></span>{t}</li>
              ))}
            </ul>
          </div>
          <HeroStack />
        </div>
      </section>

      <section className="s-promises" aria-label="Our promises">
        <div className="s-wrap">
          {PROMISES.map(({ Icon, title, sub }) => (
            <div key={title} className="s-promise">
              <span className="s-icon-well"><Icon size={20} /></span>
              <span><b>{title}</b><small>{sub}</small></span>
            </div>
          ))}
        </div>
      </section>

      <section id="familiar" className="s-sec" style={{ paddingBottom: 0 }} aria-labelledby="familiar-h">
        <div className="s-wrap">
          <p className="s-eyebrow">Sound familiar?</p>
          <h2 id="familiar-h" className="s-h2" style={{ marginBottom: 36 }}>The plan’s good. The company’s missing.</h2>
          <PhotoCardRow />
          <p className="s-note">Tap a card to see everything you can use it for, the length and the price.</p>
        </div>
      </section>

      <section id="kinds" className="s-sec" aria-labelledby="kinds-h" style={{ scrollMarginTop: 16 }}>
        <div className="s-wrap">
          <p className="s-eyebrow">What you can use prsnn for</p>
          <h2 id="kinds-h" className="s-h2">Five kinds of company. Endless plans.</h2>
          <p className="s-lead">Pick what fits your day. Every one is booked in the app, by the hour, with an approved companion.</p>
          <UseExplorer />
          <p className="s-note">Always in a public place (or at home, when you book a visit for a loved one), and always just company: never a date.</p>
        </div>
      </section>

      <section className="s-sec" style={{ paddingTop: 0 }} aria-label="Real people">
        <div className="s-wrap">
          <CommunityBanner />
        </div>
      </section>

      <section className="s-sec s-white" aria-label="Prices">
        <div className="s-wrap">
          <PricePicker />
        </div>
      </section>

      <section id="how" className="s-sec" aria-labelledby="how-h">
        <div className="s-wrap">
          <p className="s-eyebrow">How it works</p>
          <h2 id="how-h" className="s-h2" style={{ marginBottom: 40 }}>Three taps to good company.</h2>
          <ol className="s-steps s-grid">
            <li className="s-card"><span className="s-num">1</span><h3>Pick a plan and a time</h3><p>Choose a kind of company, a length and a public place. Pay securely with UPI or card.</p></li>
            <li className="s-card"><span className="s-num">2</span><h3>A companion confirms</h3><p>An approved companion accepts and chat opens. Numbers stay hidden. Nobody free? Full refund.</p></li>
            <li className="s-card"><span className="s-num">3</span><h3>Meet, safely</h3><p>In a public place, or at home for a loved one. A panic button is on from the start until an hour after you finish.</p></li>
          </ol>
        </div>
      </section>

      <section className="s-dark" aria-labelledby="safety-h">
        <div className="s-wrap s-sec s-split">
          <div><div className="s-sos" aria-hidden="true"><span><b>SOS</b><small>hold 3 s</small></span></div></div>
          <div style={{ flexBasis: 460 }}>
            <p className="s-eyebrow">Safety, built in</p>
            <h2 id="safety-h" className="s-h2">{'Hold three seconds.\nWe’re there.'}</h2>
            <p className="s-lead">Press and hold the panic button in the booking or the chat. Every prsnn admin gets your details and the meeting place at once, and again every five minutes until you’re safe.</p>
            <ul className="s-boxes">
              <li>Every companion approved by our team</li>
              <li>ID checked before their first booking</li>
              <li>Phone numbers hidden in chat</li>
              <li>Photos can stay locked until you book</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="earn" className="s-sec s-mist" aria-labelledby="earn-h">
        <div className="s-wrap s-split">
          <div>
            <p className="s-eyebrow">For companions</p>
            <h2 id="earn-h" className="s-h2">Earn doing what you love.</h2>
            <p className="s-lead">Coffee, walks, gigs, a quiet afternoon of study. Choose your days, your hours and your lengths, and keep 80% of every booking.</p>
            <Link className="s-btn s-btn-dark" href="/become-a-companion">Become a companion</Link>
          </div>
          <div className="s-card s-rows">
            {[2, 4, 6, 8].map((h) => (
              <div key={h} className="s-row">
                <span>{hoursLabel(h)}</span>
                <span><b className="s-num">{inr(companionShare(PRICES[h]))}</b><small>you get, of {inr(PRICES[h])}</small></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="s-sec" aria-labelledby="join-h" style={{ scrollMarginTop: 16 }}>
        <div className="s-wrap">
          <div className="s-join">
            <div>
              <h2 id="join-h" className="s-h2">Your next plan is a tap away.</h2>
              <p className="s-lead" style={{ margin: 0 }}>Download prsnn, pick a plan, and a verified companion confirms. Free to download; pay only when you book.</p>
              <StoreButtons />
            </div>
            <InterestForm />
          </div>
        </div>
      </section>

      <section id="faq" className="s-sec" style={{ paddingTop: 0 }} aria-labelledby="faq-h">
        <div className="s-wrap" style={{ maxWidth: 900 }}>
          <h2 id="faq-h" className="s-h2">Questions, answered</h2>
          <Faq items={HOME_FAQ} />
        </div>
      </section>

      <FounderStory />
    </CategoryProvider>
  );
}
