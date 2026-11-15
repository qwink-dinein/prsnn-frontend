import PageHead from '../_components/PageHead';
import LegalLinks from '../_components/LegalLinks';
import { Grievance, Contact, UPDATED } from '../_lib/legal';

export const metadata = {
  title: 'Grievance Redressal · prsnn',
  description: 'How to raise a complaint with prsnn, who our Grievance Officer is, and how fast we respond.',
  alternates: { canonical: '/grievance' },
};

export default function Page() {
  return (
    <>
      <PageHead title="Grievance Redressal" intro={`Who to contact, and how fast we respond. Last updated ${UPDATED}.`} path="/grievance" />
      <div className="s-wrap s-sec">
        <div className="s-prose">
          <Grievance />
          <Contact />
          <LegalLinks current="/grievance" />
        </div>
      </div>
    </>
  );
}
