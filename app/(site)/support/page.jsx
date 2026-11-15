import Link from 'next/link';
import PageHead from '../_components/PageHead';
import LegalLinks from '../_components/LegalLinks';
import RevealEmail from '../_components/RevealEmail';
import { encodedSupportEmail } from '../_lib/support';
import { FOUNDER } from '../_lib/content';

export const metadata = {
  title: 'Help & support · prsnn',
  description: 'Get help with prsnn: report a problem with a booking, safety, account deletion, or write to our support team and Grievance Officer.',
  alternates: { canonical: '/support' },
};

export default function Page() {
  return (
    <>
      <PageHead title="Help & support" intro="The fastest help for a booking is in the app. For anything else, write to us." path="/support" />
      <div className="s-wrap s-sec">
        <div className="s-prose">
          <h2>In danger?</h2>
          <p>Call <b>112</b> first. Then hold the panic button in your booking or chat: the prsnn team is alerted at once and every five minutes until you’re safe.</p>

          <h2>A problem with a booking</h2>
          <p>Open the booking in the app and tap <b>Report a problem</b>. It reaches our team with the booking details attached, so it’s the quickest way to a refund or a fix.</p>

          <h2>Write to us</h2>
          <p>Questions, feedback, account help, or anything that isn’t about one booking. Include your registered mobile number.</p>
          <RevealEmail code={encodedSupportEmail()} />

          <h2>Complaints and your data</h2>
          <p>Our Grievance Officer is {FOUNDER}, at the same address. We acknowledge complaints within 24 hours and resolve them within 15 days. See <Link href="/grievance">Grievance Redressal</Link> for how complaints are handled, and <Link href="/delete-account">Delete your account</Link> to remove your data.</p>

          <p className="s-meta">prsnn · India</p>
          <LegalLinks current="/support" />
        </div>
      </div>
    </>
  );
}
