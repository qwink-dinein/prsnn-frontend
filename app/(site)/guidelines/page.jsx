import Link from 'next/link';
import PageHead from '../_components/PageHead';
import { Guidelines, Contact, UPDATED } from '../_lib/legal';

export const metadata = {
  title: 'Community Guidelines · prsnn',
  description: 'Company, never a date. Public places, respect, privacy and safety for everyone.',
  alternates: { canonical: '/guidelines' },
};

export default function Page() {
  return (
    <>
      <PageHead title="Community Guidelines" intro={`Plain-language rules for using prsnn. Last updated ${UPDATED}.`} path="/guidelines" />
      <div className="s-wrap s-sec">
        <div className="s-prose">
          <Guidelines />
          <Contact />
          <p className="s-meta">Also see: <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link> · <Link href="/refunds">Cancellation &amp; Refunds</Link> · <Link href="/guidelines">Community Guidelines</Link> · <Link href="/safety">Safety</Link></p>
        </div>
      </div>
    </>
  );
}
