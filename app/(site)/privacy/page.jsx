import PageHead from '../_components/PageHead';
import LegalLinks from '../_components/LegalLinks';
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
          <LegalLinks current="/privacy" />
        </div>
      </div>
    </>
  );
}
