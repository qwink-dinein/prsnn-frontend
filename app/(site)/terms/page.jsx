import PageHead from '../_components/PageHead';
import LegalLinks from '../_components/LegalLinks';
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
          <LegalLinks current="/terms" />
        </div>
      </div>
    </>
  );
}
