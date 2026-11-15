import Link from 'next/link';
import { FOUNDER, HOUSE_RULES, NOT_FOR } from './content';

export const UPDATED = '15 November 2026';
/** The address itself is shown only on the Support page, after a tap. */
const Email = () => <Link href="/support">the email on our Support page</Link>;

export function Terms() {
  return (
    <section id="terms">
      <h2>Terms of Service</h2>
      <p className="s-meta">Effective {UPDATED}</p>
      <p>These terms are an agreement between you and prsnn (“prsnn”, “we”, “us”), which runs the prsnn app and website. By creating an account or making a booking, you agree to them. If you don’t agree, please don’t use prsnn.</p>
      <h3>1. What prsnn is</h3>
      <p>prsnn is a platform that connects people who want company for everyday plans (“members”) with people who offer their time as company (“companions”). Company on prsnn is strictly platonic: going to an event together, exploring a city, studying side by side, or spending time with someone’s loved one. prsnn is not a dating, escort or adult service, and it is not an emergency, medical, nursing or care service.</p>
      <p>To be clear, prsnn is not: {NOT_FOR.map(([t]) => t.replace(/^Not (a |an )?/, '').toLowerCase()).join('; ')}. Bookings for any of these are cancelled without a refund and may lead to a ban.</p>
      <p>Before your first booking or companion application, you agree to our house rules (the <Link href="/guidelines">Community Guidelines</Link>). We keep a timestamped record of each agreement you give: these terms, the privacy policy, that you’re 18 or older, the house rules, the Companion Terms, and the terms of each booking.</p>
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
      <h3>5A. Content you must not share</h3>
      <p>As required by India’s Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, you must not post, send or share anything on prsnn that:</p>
      <ul>
        <li>belongs to someone else and you have no right to share;</li>
        <li>is obscene, pornographic, paedophilic, invades another person’s privacy (including bodily privacy), insults or harasses on the basis of gender, or is racially or ethnically objectionable;</li>
        <li>is harmful to children;</li>
        <li>infringes a patent, trademark, copyright or other proprietary right;</li>
        <li>deceives or misleads about where it came from, or knowingly shares false or misleading information;</li>
        <li>impersonates another person;</li>
        <li>threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with other countries, or public order, incites an offence, or insults another nation;</li>
        <li>contains software viruses or code meant to disrupt any computer resource;</li>
        <li>promotes gambling, money laundering, or anything else that breaks any law in force.</li>
      </ul>
      <p>We may remove such content and suspend or close the account. We act on valid orders from courts and government agencies, and keep records as the law requires. To report content, see our <Link href="/grievance">Grievance Redressal</Link> page.</p>
      <h3>6. Content you share</h3>
      <p>You keep ownership of the photos and text you add. You allow prsnn to store and show them inside the service as your privacy settings allow (for example, a locked photo is shown only to people with a confirmed booking with you). Our team reviews photos and profiles and may reject or remove content.</p>
      <h3>7. Safety tools</h3>
      <p>The panic button alerts the prsnn team; it does not contact the police or an ambulance. In an emergency, call 112 first. We do our best to respond quickly but cannot guarantee a response time or outcome.</p>
      <h3>8. Suspension and termination</h3>
      <p>We may suspend or remove an account, cancel bookings and withhold payouts linked to a breach of these terms, fraud, or a safety risk. You can delete your account at any time from your profile; open paid bookings must be cancelled first.</p>
      <h3>8A. Companions</h3>
      <p>If you offer your time as a companion, the <Link href="/companion-terms">Companion Terms</Link> also apply to you.</p>
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
      <h3>Where it’s stored</h3>
      <p>Our database and files are hosted in Mumbai, India. Some providers (for example error monitoring and push notifications) may process limited data outside India, only as the law allows.</p>
      <h3>Consent</h3>
      <p>We process your data on the basis of the consent you give when you sign up or leave your number, and for the legitimate uses the Digital Personal Data Protection Act, 2023 allows (such as meeting legal duties and responding to emergencies). You can withdraw consent at any time by deleting your account or writing to our Grievance Officer; this doesn’t affect processing that happened before. Some features (such as booking) can’t work without the data they need.</p>
      <h3>Records of your consent</h3>
      <p>Each time you agree to something (these policies, the house rules, the Companion Terms, a booking’s terms, opening your photo to everyone, or being contacted after leaving your number on our website), we record what you agreed to, the version, and the date and time. We keep these records even after you delete your account, so we can show what was agreed if there’s ever a question.</p>
      <h3>Website</h3>
      <p>Our website doesn’t use advertising or tracking cookies. See the <Link href="/cookies">Cookie Notice</Link>.</p>
      <h3>How long we keep it</h3>
      <p>We keep your data while your account is open. When you delete your account, your profile, photos and sign-in are deleted. We keep a minimal record (your number, role and the deletion date) and booking, payment and safety records for as long as the law or a dispute requires. ID documents are kept only as long as needed to verify you and handle safety issues.</p>
      <h3>Your rights</h3>
      <p>You can ask to access, correct or erase your personal data, withdraw consent, and nominate someone to exercise your rights if you die or become unable to. Many settings (photo privacy, who you see, profile details) can be changed in the app, and you can <Link href="/delete-account">delete your account</Link> yourself. For anything else, contact our Grievance Officer (see <Link href="/grievance">Grievance Redressal</Link>). We reply within the time the law sets. If you’re not satisfied, you can complain to the Data Protection Board of India.</p>
      <h3>Security</h3>
      <p>Data is encrypted in transit, ID documents are kept in private storage that only you and authorised staff can open, and access is limited by role. No system is perfectly secure; tell us at once if you think your account has been compromised.</p>
      <h3>Children</h3>
      <p>prsnn is for people aged 18 and over. We don’t knowingly collect data from children, and we delete any account we find belongs to a child. See our <Link href="/child-safety">Child Safety Standards</Link>.</p>
      <h3>Changes</h3>
      <p>If we change this policy in a way that matters, we’ll tell you in the app before it takes effect.</p>
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
      <p className="s-meta">House rules for members and companions alike. Everyone agrees to them before their first booking or application. Breaking them can mean a permanent ban.</p>
      <p>prsnn is company, and nothing more. Everyone deserves to be treated with respect: the member, the companion, and the loved one a family books for.</p>
      <h3>What prsnn is not</h3>
      <ul>
        {NOT_FOR.map(([t, d]) => (
          <li key={t}><b>{t}.</b> {d}</li>
        ))}
      </ul>
      <h3>House rules</h3>
      <ol>
        {HOUSE_RULES.map(([t, d]) => (
          <li key={t}><b>{t}.</b> {d}</li>
        ))}
      </ol>
      <h3>Visits to a loved one</h3>
      <p>When a family books you to spend time with their parent or grandparent, treat them with patience and care, follow the family’s instructions in the booking, and stay in the rooms you’re invited into. Company and a helping hand with everyday things only: no medicines, personal care, money or valuables.</p>
      <p>See something wrong? Report it from the booking or contact our <Link href="/grievance">Grievance Officer</Link>. In danger? Hold the panic button, and call 112.</p>
    </section>
  );
}

export function Grievance() {
  return (
    <section id="grievance">
      <h2>Grievance Redressal</h2>
      <p className="s-meta">Under the IT (Intermediary Guidelines) Rules, 2021, the Consumer Protection (E-Commerce) Rules, 2020 and the Digital Personal Data Protection Act, 2023</p>
      <p>If you have a complaint about prsnn, a booking, a payment, another user, content on prsnn, or how we handle your personal data, our Grievance Officer will look into it.</p>
      <h3>Grievance Officer</h3>
      <ul>
        <li><b>Name:</b> {FOUNDER}</li>
        <li><b>Email:</b> <Email /></li>
        <li><b>Registered address:</b> prsnn, Hyderabad, Telangana, India (prsnn serves customers across India)</li>
      </ul>
      <h3>How to raise a complaint</h3>
      <ol>
        <li>For a booking, use <b>Report a problem</b> on the booking in the app. It reaches our team with the booking details attached.</li>
        <li>For anything else, email the Grievance Officer with your registered mobile number, the booking number if there is one, what happened, and what you’d like us to do.</li>
      </ol>
      <h3>What happens next</h3>
      <ul>
        <li>We acknowledge your complaint within 24 hours and give you a reference.</li>
        <li>We resolve it within 15 days, and tell you what we decided and why.</li>
        <li>Content that exposes someone’s private parts, shows them in a sexual act, or impersonates them (including morphed images): we act within 24 hours of the complaint.</li>
        <li>Requests to remove unlawful content from a court or authorised government agency: we act within the time the order sets.</li>
      </ul>
      <h3>If you’re not satisfied</h3>
      <ul>
        <li>Consumer complaints: National Consumer Helpline, 1915 or consumerhelpline.gov.in.</li>
        <li>Personal data complaints: the Data Protection Board of India, once you have raised the issue with us.</li>
        <li>Content decisions: the Grievance Appellate Committee set up under the IT Rules.</li>
      </ul>
      <p>In an emergency, call 112 first.</p>
    </section>
  );
}

export function CompanionTerms() {
  return (
    <section id="companion-terms">
      <h2>Companion Terms</h2>
      <p className="s-meta">Effective {UPDATED} · In addition to the Terms of Service</p>
      <p>These terms apply when you offer your time as a companion on prsnn.</p>
      <h3>1. Your relationship with prsnn</h3>
      <p>You are an independent individual offering your own time. You are not an employee, partner or agent of prsnn. You choose your days, hours and booking lengths, and whether to accept each booking.</p>
      <h3>2. Joining</h3>
      <ul>
        <li>You must be at least 18, live in India, and be legally allowed to earn income in India.</li>
        <li>Our team reviews every profile and photo before it’s shown to members. Photos must be recent, of you alone, and show your face.</li>
        <li>Before your first booking you must upload a valid government ID and a selfie. Nobody meets anyone before their ID is checked.</li>
      </ul>
      <h3>3. Bookings</h3>
      <ul>
        <li>A booking is offered to you with a time limit to accept. Accept only what you can keep.</li>
        <li>Meet only at the place in the booking: a public place, or the loved one’s home for a home visit the family requested. Never go to a hotel room, a member’s home or a private vehicle.</li>
        <li>Company on prsnn is platonic. Romantic, sexual or escort activity of any kind leads to immediate, permanent removal and may be reported to the police.</li>
        <li>Keep chat about the plan. Don’t ask for or share phone numbers, addresses or social media, and don’t take payment outside prsnn.</li>
        <li>For home visits to a loved one: offer company and help with everyday things only. Don’t give medical, nursing or personal care, handle money or valuables, or enter rooms you aren’t invited into.</li>
      </ul>
      <h3>4. Pay</h3>
      <ul>
        <li>You receive 80% of the booking price for each completed booking. prsnn keeps 20% as its platform fee. The split is shown before you accept.</li>
        <li>Payouts go to the bank account or UPI ID you give us, after the booking is completed and any dispute is settled.</li>
        <li>If you cancel a confirmed booking, the member is refunded in full and you earn nothing for it. Repeated cancellations or no-shows can lead to removal.</li>
        <li>You are responsible for your own income tax and, if it applies to you, GST. Where the law requires, prsnn deducts tax at source (for example under section 194-O of the Income-tax Act) and gives you a certificate.</li>
      </ul>
      <h3>5. Safety and reviews</h3>
      <p>The panic button is on from the start of every session until an hour after it ends. Our team may review a booking’s chat if a problem is reported. We may pause your profile while we look into a report.</p>
      <h3>6. Members’ privacy</h3>
      <p>Use members’ details, and any loved one’s details, only for the booking. Don’t save, share or contact them outside prsnn.</p>
      <h3>7. Leaving</h3>
      <p>You can stop accepting bookings or delete your account at any time, once your confirmed bookings are finished or cancelled. We may remove you for breaking these terms, the Terms of Service or the Community Guidelines, and may withhold payouts linked to the breach.</p>
    </section>
  );
}

export function Cookies() {
  return (
    <section id="cookies">
      <h2>Cookie Notice</h2>
      <p className="s-meta">Effective {UPDATED}</p>
      <p>The prsnn website doesn’t use advertising cookies, tracking pixels or third-party analytics, and we don’t sell or share your browsing with advertisers.</p>
      <h3>What the website does store</h3>
      <ul>
        <li><b>Strictly necessary:</b> anything needed to show the page you asked for and to keep the interest form from being abused.</li>
        <li><b>Error monitoring (Sentry):</b> when a page breaks, a short technical report is sent so we can fix it. It doesn’t include your IP address or anything you typed; any replay of the error masks all text and inputs.</li>
      </ul>
      <p>You can block or delete cookies in your browser settings; the website will still work.</p>
    </section>
  );
}

export function DeleteAccount() {
  return (
    <section id="delete-account">
      <h2>Delete your prsnn account</h2>
      <p className="s-meta">For members and companions</p>
      <h3>In the app</h3>
      <ol>
        <li>Open prsnn and go to <b>Profile</b>.</li>
        <li>Scroll down and tap <b>Delete account</b>.</li>
        <li>Confirm. If you have a paid booking that hasn’t happened yet, cancel it first.</li>
      </ol>
      <h3>Without the app</h3>
      <p>Email our Grievance Officer (<Email />) from any address, with your registered mobile number, and ask us to delete your account. We confirm by WhatsApp or SMS to that number before deleting.</p>
      <h3>What’s deleted</h3>
      <ul>
        <li>Your profile, photos, preferences, saved companions and sign-in.</li>
        <li>Your ID documents and selfie (companions), unless they are needed for an open safety case.</li>
        <li>Your device’s push token. Your PIN only ever lived on your phone.</li>
      </ul>
      <h3>What we keep, and for how long</h3>
      <ul>
        <li>Booking, payment and refund records: for 8 years, as Indian tax and accounting law requires.</li>
        <li>Safety records (panic alerts, reports, and the chat of a booking under dispute): until the matter is closed and for up to 3 years after, or longer if a law or an authority requires it.</li>
        <li>A minimal record of the deleted account (number, role and deletion date): so a banned account can’t simply sign up again.</li>
      </ul>
    </section>
  );
}

export function ChildSafety() {
  return (
    <section id="child-safety">
      <h2>Child Safety Standards</h2>
      <p className="s-meta">Effective {UPDATED}</p>
      <p>prsnn is only for adults aged 18 and over. We have zero tolerance for child sexual abuse and exploitation (CSAE), including child sexual abuse material (CSAM), grooming, and any attempt to arrange contact with a minor.</p>
      <h3>How we prevent it</h3>
      <ul>
        <li>Everyone must confirm they are 18 or older to sign up. Companions’ age is checked against a government ID before their first booking.</li>
        <li>Our team reviews every profile photo before it’s shown. Meetings are in public places or, for loved-one visits, at a home the family names.</li>
        <li>Phone numbers and contact details are hidden in chat, and staff can review a reported booking’s chat.</li>
      </ul>
      <h3>How to report</h3>
      <p>Report a profile or booking from the app, or email our child safety contact, {FOUNDER} (<Email />). If a child is in danger, call 112 or the Childline at 1098 straight away.</p>
      <h3>What we do</h3>
      <ul>
        <li>Remove the content and the account at once, and keep the evidence securely.</li>
        <li>Report CSAM and child exploitation to the National Cyber Crime Reporting Portal (cybercrime.gov.in) and the police, as Indian law (including the POCSO Act) requires, and cooperate with investigations.</li>
        <li>Ban the people involved from prsnn permanently.</li>
      </ul>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact">
      <h2>Contact &amp; grievances</h2>
      <p>Support: <Link href="/support">Help &amp; support</Link></p>
      <p><b>Grievance Officer:</b> {FOUNDER} (<Email />). We acknowledge complaints within 24 hours and resolve them within 15 days, as Indian law requires. <Link href="/grievance">How to raise a complaint</Link>.</p>
      <p>prsnn · India. Registered address on the <Link href="/grievance">Grievance Redressal</Link> page.</p>
    </section>
  );
}
