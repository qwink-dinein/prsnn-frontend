import Link from 'next/link';
import PageHead from '../_components/PageHead';
import StoreButtons from '../_components/StoreButtons';
import Faq from '../_components/Faq';
import { CATEGORIES, PRICES, inr } from '../_lib/content';

export const metadata = {
  title: 'Companion booking in Hyderabad · prsnn',
  description: 'Book verified companions across Hyderabad for events, city walks, study or time with a loved one. Approved, ID-checked, public places only.',
  alternates: { canonical: '/hyderabad' },
};

export default function Hyderabad() {
  return (
    <>
      <PageHead title="prsnn is live in Hyderabad." intro="Book an approved, ID-checked companion anywhere in the city: for a gig, a weekend out, a study session, or a visit to a parent. From ₹399." crumb="Hyderabad" path="/hyderabad" img="/site/cat/explore.jpg"><StoreButtons /></PageHead>
      <section className="s-sec">
        <div className="s-wrap">
          <h2 className="s-h2">What people book in Hyderabad</h2>
          <div className="s-grid" style={{ marginTop: 24 }}>
            {CATEGORIES.map((c) => (
              <Link key={c.slug} href={`/${c.slug}`} className="s-card s-moment" style={{ padding: 24 }}>
                <strong style={{ fontSize: 22 }}>{c.title}</strong>
                <p>{c.line}. From {inr(PRICES[1])}.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="s-sec s-white">
        <div className="s-wrap" style={{ maxWidth: 900 }}>
          <h2 className="s-h2">Hyderabad questions</h2>
          <Faq items={[
            ['Which areas do you cover?', 'All of Hyderabad and Secunderabad. You choose the public meeting place when you book; companions in that area are offered the booking first.'],
            ['Can I book from outside Hyderabad for my parents here?', 'Yes. Choose Companion for a Loved One, add their details, and pay from anywhere in the world.'],
            ['When is prsnn coming to other cities?', 'Soon. Leave your number on the home page and we’ll tell you when it reaches yours.'],
          ]} />
        </div>
      </section>
    </>
  );
}
