import PageHead from '../_components/PageHead';
import LegalLinks from '../_components/LegalLinks';
import { CompanionTerms, Contact, UPDATED } from '../_lib/legal';

export const metadata = {
  title: 'Companion Terms · prsnn',
  description: 'The terms for offering your time as a companion on prsnn: joining, ID checks, conduct, pay and taxes.',
  alternates: { canonical: '/companion-terms' },
};

export default function Page() {
  return (
    <>
      <PageHead title="Companion Terms" intro={`For everyone who offers their time on prsnn. Last updated ${UPDATED}.`} path="/companion-terms" />
      <div className="s-wrap s-sec">
        <div className="s-prose">
          <CompanionTerms />
          <Contact />
          <LegalLinks current="/companion-terms" />
        </div>
      </div>
    </>
  );
}
