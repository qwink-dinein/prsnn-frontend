import PageHead from '../_components/PageHead';
import LegalLinks from '../_components/LegalLinks';
import { ChildSafety, Contact, UPDATED } from '../_lib/legal';

export const metadata = {
  title: 'Child Safety Standards · prsnn',
  description: 'prsnn is for adults only and has zero tolerance for child sexual abuse and exploitation. How we prevent, report and act.',
  alternates: { canonical: '/child-safety' },
};

export default function Page() {
  return (
    <>
      <PageHead title="Child Safety Standards" intro={`Adults only. Zero tolerance. Last updated ${UPDATED}.`} path="/child-safety" />
      <div className="s-wrap s-sec">
        <div className="s-prose">
          <ChildSafety />
          <Contact />
          <LegalLinks current="/child-safety" />
        </div>
      </div>
    </>
  );
}
