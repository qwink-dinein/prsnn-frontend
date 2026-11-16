import { rich } from '../_components/Brand';
import Link from 'next/link';
import PageHead from '../_components/PageHead';
import { LEGAL_PAGES } from '../_components/LegalLinks';
import { Contact, UPDATED } from '../_lib/legal';

export const metadata = {
  title: 'Legal · prsnn',
  description: 'Every prsnn policy in one place: terms, privacy, refunds, community guidelines, companion terms, grievances, child safety, cookies and account deletion.',
  alternates: { canonical: '/legal' },
};

export default function Page() {
  return (
    <>
      <PageHead title="Legal" intro={`Every prsnn policy in one place. Last updated ${UPDATED}.`} path="/legal" />
      <div className="s-wrap s-sec">
        <div className="s-prose">
          <ul>
            {LEGAL_PAGES.map(([href, label]) => (
              <li key={href}><Link href={href}>{rich(label)}</Link></li>
            ))}
          </ul>
          <Contact />
        </div>
      </div>
    </>
  );
}
