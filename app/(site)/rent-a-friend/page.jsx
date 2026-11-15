import Link from 'next/link';
import PageHead from '../_components/PageHead';
import StoreButtons from '../_components/StoreButtons';
import Faq from '../_components/Faq';
import { CATEGORIES } from '../_lib/content';

export const metadata = {
  title: 'Rent a friend in India, safely · prsnn',
  description: 'What renting a friend means on prsnn: platonic company for plans, verified companions, public places only, fixed prices from ₹399.',
  alternates: { canonical: '/rent-a-friend' },
};

export default function RentAFriend() {
  return (
    <>
      <PageHead title="Rent a friend, the safe way." intro="“Rent a friend” sounds strange until you need one: a plus-one for a wedding, a local in a new city, someone to sit with your mum. Here’s what it means on prsnn, and what it doesn’t." crumb="Rent a friend" path="/rent-a-friend"><StoreButtons /></PageHead>
      <section className="s-sec">
        <div className="s-wrap s-prose">
          <section>
            <h2>What it is</h2>
            <p>On prsnn you book a companion’s time, by the hour, for a plan: an event, a walk, a meal, a study session, or a visit to someone you love. Companions are approved by our team and ID-checked before their first booking. Prices are fixed, from ₹399 for an hour to ₹3,599 for twelve.</p>
            <h2 style={{ marginTop: 28 }}>What it isn’t</h2>
            <ul>
              <li>Not dating, and never romantic or sexual. Requests like that get an account banned.</li>
              <li>Not a private meeting: every booking names a public place (home visits only for a loved one, booked by their family).</li>
              <li>Not paid in cash: everything is paid in the app, with a full refund if nobody accepts.</li>
            </ul>
            <h2 style={{ marginTop: 28 }}>Popular reasons</h2>
            <ul>{CATEGORIES.map((c) => <li key={c.slug}><Link href={`/${c.slug}`}>{c.title}</Link>: {c.line.toLowerCase()}.</li>)}</ul>
          </section>
          <Faq items={[
            ['Is renting a friend legal in India?', 'Booking someone’s company for a platonic plan in a public place is legal. prsnn forbids anything romantic or sexual.'],
            ['Is it safe?', 'Companions are approved and ID-checked, numbers stay hidden in chat, and a panic button alerts our team at once during the session.'],
            ['How much does it cost to rent a friend?', 'From ₹399 for one hour to ₹3,599 for twelve hours, the same for every companion.'],
          ]} />
        </div>
      </section>
    </>
  );
}
