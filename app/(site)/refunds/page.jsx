import PageHead from '../_components/PageHead';
import LegalLinks from '../_components/LegalLinks';
import { Refunds, Contact, UPDATED } from '../_lib/legal';

export const metadata = {
  title: 'Cancellation & Refunds · prsnn',
  description: 'Full refund if nobody accepts or your companion cancels; 85% if you cancel 15+ minutes before.',
  alternates: { canonical: '/refunds' },
};

export default function Page() {
  return (
    <>
      <PageHead title="Cancellation & Refunds" intro={`Plain-language rules for using prsnn. Last updated ${UPDATED}.`} path="/refunds" />
      <div className="s-wrap s-sec">
        <div className="s-prose">
          <Refunds />
          <Contact />
          <LegalLinks current="/refunds" />
        </div>
      </div>
    </>
  );
}
