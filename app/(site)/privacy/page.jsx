import Link from 'next/link';
import PageHead from '../_components/PageHead';
import { Privacy, Contact, UPDATED } from '../_lib/legal';

export const metadata = {
  title: 'Privacy Policy · prsnn',
  description: 'What data prsnn collects, why, who sees it, and your rights under India’s DPDP Act.',
  alternates: { canonical: '/privacy' },
};

export default function Page() {
  return (
    <>
      <PageHead title="Privacy Policy" intro={`Plain-language rules for using prsnn. Last updated ${UPDATED}.`} path="/privacy" />
      <div className="s-wrap s-sec">
        <div className="s-prose">
          <Privacy />
          <Contact />
          <p className="s-meta">Also see: <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link> · <Link href="/refunds">Cancellation &amp; Refunds</Link> · <Link href="/guidelines">Community Guidelines</Link> · <Link href="/safety">Safety</Link></p>
        </div>
      </div>
    </>
  );
}
