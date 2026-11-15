import Link from 'next/link';
import { FOUNDER, SUPPORT_EMAIL } from './content';

export const UPDATED = '15 November 2026';
const Email = () => (SUPPORT_EMAIL ? <Link href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</Link> : <span>the support email shown in the app</span>);

export function Terms() {
  return (
    <section id="terms">
      <h2>Terms of Service</h2>
      <p className="s-meta">Effective {UPDATED}</p>
      <p>These terms are an agreement between you and prsnn (“prsnn”, “we”, “us”), which runs the prsnn app and website. By creating an account or making a booking, you agree to them. If you don’t agree, please don’t use prsnn.</p>
      <h3>1. What prsnn is</h3>
      <p>prsnn is a platform that connects people who want company for everyday plans (“members”) with people who offer their time as company (“companions”). Company on prsnn is strictly platonic: going to an event together, exploring a city, studying side by side, or spending time with someone’s loved one. prsnn is not a dating, escort or adult service, and it is not an emergency, medical, nursing or care service.</p>
      <p>Companions are independent individuals, not prsnn employees or agents. prsnn approves profiles, checks companions’ identity documents and provides the booking, payment, chat and safety tools, but does not supervise what happens during a meeting.</p>
      <h3>2. Who can use prsnn</h3>
      <ul>
        <li>You must be at least 18 years old and able to enter a binding contract.</li>
        <li>One account per person. The details you give us (name, photo, number) must be true and your own.</li>
        <li>Companions must be approved by our team before they appear to members, and must complete an ID check before their first booking.</li>
        <li>We may refuse, suspend or close accounts that break these terms or our Community Guidelines.</li>
      </ul>
      <h3>3. Bookings</h3>
      <ul>
        <li>Members choose a length (1 to 12 hours), a date, a start time, and a public meeting place. For “Companion for a Loved One” bookings, the member may instead ask for a visit at the loved one’s home. Sessions run between the hours shown in the app.</li>
        <li>Members pay the full price in the app when they book. The booking is offered to the chosen companion and, if they can’t accept, to other suitable companions. A booking is confirmed only when a companion accepts.</li>
        <li>If no companion accepts in time, the booking is cancelled and the member is refunded in full.</li>
        <li>Unpaid bookings lapse after the payment window shown in the app.</li>
        <li>The price covers the companion’s time only. Tickets, food, travel and other costs on the day are paid by whoever agrees to pay them, outside prsnn.</li>
      </ul>
      <h3>4. Prices and fees</h3>
      <p>Prices are fixed per length and are the same for every companion. They are shown in the app before you pay. There is no separate booking fee. Of each booking, the companion receives 80% and prsnn keeps 20% as its platform fee, unless the app shows a different split before the companion accepts. Companions are paid for completed bookings and are responsible for their own taxes.</p>
      <h3>5. Your responsibilities</h3>
      <ul>
        <li>Meet only at the place named in the booking (a public place, or the loved one’s home for a home visit the family requested), and keep to the booked time.</li>
        <li>Follow the Community Guidelines in every message and meeting.</li>
        <li>Don’t ask for or make payments outside prsnn for a booking, and don’t use prsnn to arrange off-platform meetings.</li>
        <li>Keep your login and PIN private. You are responsible for activity on your account.</li>
      </ul>
      <h3>6. Content you share</h3>
      <p>You keep ownership of the photos and text you add. You allow prsnn to store and show them inside the service as your privacy settings allow (for example, a locked photo is shown only to people with a confirmed booking with you). Our team reviews photos and profiles and may reject or remove content.</p>
      <h3>7. Safety tools</h3>
      <p>The panic button alerts the prsnn team; it does not contact the police or an ambulance. In an emergency, call 112 first. We do our best to respond quickly but cannot guarantee a response time or outcome.</p>
      <h3>8. Suspension and termination</h3>
      <p>We may suspend or remove an account, cancel bookings and withhold payouts linked to a breach of these terms, fraud, or a safety risk. You can delete your account at any time from your profile; open paid bookings must be cancelled first.</p>
      <h3>9. Liability</h3>
      <p>prsnn provides the platform “as is”. To the extent the law allows, prsnn is not liable for the acts or omissions of members or companions, or for indirect or consequential loss. Our total liability for any booking is limited to the amount paid for that booking. Nothing in these terms limits rights you have under Indian consumer law that cannot be excluded.</p>
      <h3>10. Changes and governing law</h3>
      <p>We may update these terms; we’ll tell you in the app before important changes take effect. These terms are governed by the laws of India, and the courts of Hyderabad, Telangana have jurisdiction.</p>
    </section>
  );
}

export function Privacy() {
  return (
    <section id="privacy">
      <h2>Privacy Policy</h2>
      <p className="s-meta">Effective {UPDATED} · Written for India’s Digital Personal Data Protection Act, 2023</p>
      <p>This policy explains what personal data prsnn collects, why, who we share it with, and the choices you have. prsnn is the data fiduciary responsible for your data.</p>
      <h3>What we collect</h3>
      <ul>
        <li><b>Account details:</b> mobile number (or email for sign-ups from outside India), name, gender, who you’d like to meet, city and area, the kinds of company you’re interested in, and your photo.</li>
        <li><b>Companion details:</b> profile description, interests, languages, availability, the lengths you offer, and, at your first booking, a photo of your government ID and a selfie for identity checks.</li>
        <li><b>Bookings and payments:</b> dates, times, meeting places, amounts, refunds, and payment references. Card and UPI details are handled by our payment partner; we don’t store them.</li>
        <li><b>Booking for someone else:</b> the name, relationship and phone number of the person you book for, and their address if you ask for a home visit. Companions never see that number.</li>
        <li><b>Messages:</b> chats between members and companions. Phone numbers in messages are hidden automatically.</li>
        <li><b>Safety records:</b> panic alerts, reports and support conversations.</li>
        <li><b>Device:</b> a push notification token. Your PIN is stored only on your phone, in protected storage, as a one-way code.</li>
        <li><b>Website enquiries:</b> the mobile number and interest (member, companion or both) you leave on our website.</li>
      </ul>
      <h3>Why we use it</h3>
      <ul>
        <li>To create your account, sign you in, and show your profile as your privacy settings allow.</li>
        <li>To arrange, confirm, pay for and refund bookings, and to pay companions.</li>
        <li>To keep people safe: approving profiles and photos, verifying companions’ identity, handling panic alerts, reports and disputes.</li>
        <li>To send booking updates by push notification and WhatsApp, and, if you left your number on our website, news about the app.</li>
        <li>To prevent fraud and abuse, and to meet legal obligations.</li>
      </ul>
      <p>We don’t sell your personal data, and we don’t use it for third-party advertising.</p>
      <h3>Who sees it</h3>
      <ul>
        <li><b>Other users:</b> members see a companion’s first name, photo (or a locked placeholder), area and profile. Full names unlock after a confirmed, paid booking.</li>
        <li><b>The prsnn team:</b> staff can see what they need to approve profiles, check IDs, resolve disputes and respond to safety alerts. This may include reading the chat for a booking under dispute. Every staff action is logged.</li>
        <li><b>Service providers</b> who process data for us: cloud hosting and database (Supabase), messaging (WhatsApp Business via Waplify, SMS backup via MSG91), push notifications (Expo), and payments (Razorpay). They may only use it to provide their service to us.</li>
        <li><b>Authorities,</b> when the law requires it or to protect someone’s safety.</li>
      </ul>
      <h3>How long we keep it</h3>
      <p>We keep your data while your account is open. When you delete your account, your profile, photos and sign-in are deleted. We keep a minimal record (your number, role and the deletion date) and booking, payment and safety records for as long as the law or a dispute requires. ID documents are kept only as long as needed to verify you and handle safety issues.</p>
      <h3>Your rights</h3>
      <p>You can ask to access, correct or erase your personal data, withdraw consent, and nominate someone to exercise your rights. Many settings (photo privacy, who you see, profile details) can be changed in the app; for anything else, contact our Grievance Officer below. You also have the right to complain to the Data Protection Board of India.</p>
      <h3>Security</h3>
      <p>Data is encrypted in transit, ID documents are kept in private storage that only you and authorised staff can open, and access is limited by role. No system is perfectly secure; tell us at once if you think your account has been compromised.</p>
      <h3>Children</h3>
      <p>prsnn is for people aged 18 and over. We don’t knowingly collect data from children.</p>
    </section>
  );
}

export function Refunds() {
  return (
    <section id="refunds">
      <h2>Cancellation &amp; Refunds</h2>
      <p className="s-meta">Applies to every booking made through the prsnn app</p>
      <ul>
        <li><b>Nobody accepts:</b> if no companion confirms your booking in time, it’s cancelled and you get a 100% refund automatically.</li>
        <li><b>You cancel 15 minutes or more before the start:</b> 85% is refunded; 15% is kept as a cancellation fee.</li>
        <li><b>You cancel less than 15 minutes before the start, or after it begins:</b> no automatic refund. If something went wrong, use “Report a problem” on the booking.</li>
        <li><b>Your companion cancels:</b> you get a 100% refund.</li>
        <li><b>prsnn cancels</b> (for example for a safety reason): our team decides the refund and tells you why.</li>
        <li><b>Problems during a booking:</b> report them from the booking. Our team reviews the chat and details and may refund all or part of the amount.</li>
      </ul>
      <p>Refunds go back to the original payment method. They usually appear within 5–7 working days, depending on your bank. The exact rules shown in the app when you book apply to that booking.</p>
    </section>
  );
}

export function Guidelines() {
  return (
    <section id="guidelines">
      <h2>Community Guidelines</h2>
      <p className="s-meta">For members and companions alike. Breaking them can mean a permanent ban.</p>
      <ul>
        <li><b>Company, never a date.</b> No romantic or sexual requests, comments or contact. No escort or adult services of any kind.</li>
        <li><b>Public places, with one exception.</b> Meet at the place named in the booking. The only home visits allowed are ones a family books for a loved one, at that person’s home. Never ask anyone to come to your home, a hotel room or a private vehicle.</li>
        <li><b>Respect.</b> No harassment, threats, hate speech or discrimination. Respect boundaries, including when someone says no.</li>
        <li><b>Keep personal details private.</b> Don’t share or ask for phone numbers, addresses or social media in chat. Keep the chat about the plan; leave politics and religion out.</li>
        <li><b>Pay only through prsnn.</b> No cash or off-platform payments for bookings, and no tips that are a condition of the meeting.</li>
        <li><b>Be yourself.</b> Use your real name and a recent photo of you. No fake profiles.</li>
        <li><b>Stay sober and safe.</b> No illegal drugs, and don’t pressure anyone to drink.</li>
        <li><b>Be on time.</b> If plans change, cancel in the app as early as you can.</li>
        <li><b>Look after loved ones.</b> When you spend time with someone booked by their family, treat them with patience and care, and follow the family’s instructions shared in the booking.</li>
      </ul>
      <p>See something wrong? Report it from the booking or write to us. In danger? Hold the panic button, and call 112.</p>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact">
      <h2>Contact &amp; grievances</h2>
      <p>Support: <Email /></p>
      <p><b>Grievance Officer:</b> {FOUNDER}, <Email />. We acknowledge complaints within 24 hours and aim to resolve them within 15 days, as required by Indian law.</p>
      <p>prsnn, Hyderabad, Telangana, India.</p>
    </section>
  );
}
