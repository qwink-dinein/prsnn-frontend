import PageHead from '../_components/PageHead';
import LegalLinks from '../_components/LegalLinks';
import { Cookies, Contact, UPDATED } from '../_lib/legal';

export const metadata = {
  title: 'Cookie Notice · prsnn',
  description: 'The prsnn website uses no advertising or tracking cookies. Here is what it does store.',
  alternates: { canonical: '/cookies' },
};

export default function Page() {
  return (
    <>
      <PageHead title="Cookie Notice" intro={`No advertising or tracking cookies. Last updated ${UPDATED}.`} path="/cookies" />
      <div className="s-wrap s-sec">
        <div className="s-prose">
          <Cookies />
          <Contact />
          <LegalLinks current="/cookies" />
        </div>
      </div>
    </>
  );
}
