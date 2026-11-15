import PageHead from '../_components/PageHead';
import LegalLinks from '../_components/LegalLinks';
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
          <LegalLinks current="/guidelines" />
        </div>
      </div>
    </>
  );
}
