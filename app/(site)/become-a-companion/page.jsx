import PageHead from '../_components/PageHead';
import StoreButtons from '../_components/StoreButtons';
import InterestForm from '../_components/InterestForm';
import Faq from '../_components/Faq';
import { HOURS, PRICES, companionShare, hoursLabel, inr } from '../_lib/content';

export const metadata = {
  title: 'Become a companion · Earn 80% of every booking | prsnn',
  description: 'Be good company and get paid. Choose your days, hours and booking lengths. Keep 80%: ₹1,039 for a 4-hour booking. Apply in the app.',
  alternates: { canonical: '/become-a-companion' },
};

const STEPS = [
  ['Sign up in the app', 'Add your photo, a few lines about you, what you enjoy, your area, the lengths you offer and when you’re free.'],
  ['Our team reviews your profile', 'Usually within 24 hours. You go live as soon as you’re approved.'],
  ['Quick ID check at your first booking', 'Nothing needed at sign-up. When your first offer arrives, verify a government ID with a selfie.'],
  ['Accept the bookings you want', 'Every offer is already paid and shows what you’ll earn. Accept within the time shown or it goes to someone else.'],
  ['Get paid', 'You keep 80% of every completed booking.'],
];

export default function Become() {
  return (
    <>
      <PageHead title="Earn doing what you love." intro="Be good company for people who could use some: a concert, a walk, a quiet afternoon of study, a visit to someone’s parent. Your days, your hours, your lengths. Keep 80% of every booking." crumb="Become a companion" path="/become-a-companion" img="/site/cat/community.jpg"><StoreButtons /></PageHead>
      <section className="s-sec">
        <div className="s-wrap s-split" style={{ alignItems: 'flex-start' }}>
          <div>
            <p className="s-eyebrow">How it works</p>
            <h2 className="s-h2">Five steps to your first booking.</h2>
            <ol className="s-steps" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
              {STEPS.map(([t, b], i) => (
                <li key={t} className="s-card" style={{ padding: 22 }}><span className="s-num" style={{ fontSize: 28 }}>{i + 1}</span><h3 style={{ margin: '4px 0 6px' }}>{t}</h3><p>{b}</p></li>
              ))}
            </ol>
          </div>
          <div className="s-card" style={{ padding: '12px 28px' }}>
            <table className="s-table">
              <caption className="s-sr">What you get for each length</caption>
              <thead><tr><th scope="col">LENGTH</th><th scope="col">PRICE</th><th scope="col">YOU GET</th></tr></thead>
              <tbody>
                {HOURS.map((h) => (
                  <tr key={h}><th scope="row" style={{ fontWeight: 500 }}>{hoursLabel(h)}</th><td style={{ color: 'var(--muted)' }}>{inr(PRICES[h])}</td><td className="s-num" style={{ fontSize: 19 }}>{inr(companionShare(PRICES[h]))}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="s-sec s-white">
        <div className="s-wrap" style={{ maxWidth: 900 }}>
          <h2 className="s-h2">Questions from companions</h2>
          <Faq items={[
            ['Is this dating or escort work?', 'No. prsnn is strictly platonic company. Members who make romantic or sexual requests are banned, and you can report anything from the booking.'],
            ['Where do bookings happen?', 'At a public place named in the booking. The only exception is a home visit a family books for their loved one; the panic button works there too.'],
            ['Do I need an ID to sign up?', 'No. We ask for a government ID and a selfie only when your first booking arrives.'],
            ['Can I choose my hours?', 'Yes. You pick your days, your hours and the booking lengths you offer, and accept only what suits you.'],
          ]} />
        </div>
      </section>
      <section id="join" className="s-sec">
        <div className="s-wrap">
          <div className="s-join">
            <div><h2 className="s-h2">Apply in the app.</h2><p className="s-lead" style={{ margin: 0 }}>Sign-up takes a few minutes.</p><StoreButtons /></div>
            <InterestForm initial="companion" source="website:companion" />
          </div>
        </div>
      </section>
    </>
  );
}
