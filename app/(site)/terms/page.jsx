import Link from 'next/link';
import PageHead from '../_components/PageHead';
import { Terms, Contact, UPDATED } from '../_lib/legal';

export const metadata = {
  title: 'Terms of Service · prsnn',
  description: 'The rules for using prsnn: bookings, prices, responsibilities and safety.',
  alternates: { canonical: '/terms' },
};

export default function Page() {
  return (
    <>
      <PageHead title="Terms of Service" intro={`Plain-language rules for using prsnn. Last updated ${UPDATED}.`} path="/terms" />
      <div className="s-wrap s-sec">
        <div className="s-prose">
          <Terms />
          <Contact />
          <p className="s-meta">Also see: <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link> · <Link href="/refunds">Cancellation &amp; Refunds</Link> · <Link href="/guidelines">Community Guidelines</Link> · <Link href="/safety">Safety</Link></p>
        </div>
      </div>
    </>
  );
}
