import PageHead from '../_components/PageHead';
import LegalLinks from '../_components/LegalLinks';
import { DeleteAccount, Contact, UPDATED } from '../_lib/legal';

export const metadata = {
  title: 'Delete your account · prsnn',
  description: 'How to delete your prsnn account in the app or by email, what is deleted and what we keep.',
  alternates: { canonical: '/delete-account' },
};

export default function Page() {
  return (
    <>
      <PageHead title="Delete your account" intro={`In the app, or by email without it. Last updated ${UPDATED}.`} path="/delete-account" />
      <div className="s-wrap s-sec">
        <div className="s-prose">
          <DeleteAccount />
          <Contact />
          <LegalLinks current="/delete-account" />
        </div>
      </div>
    </>
  );
}
