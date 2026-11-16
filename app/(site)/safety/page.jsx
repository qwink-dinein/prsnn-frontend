import { rich } from '../_components/Brand';
import PageHead from '../_components/PageHead';
import Faq from '../_components/Faq';
import { Clock, Pin, Shield } from '../_components/Icons';

export const metadata = {
  title: 'Safety on prsnn · Verified companions, panic button',
  description: 'Approved and ID-checked companions, public meeting places, hidden phone numbers, and a panic button that alerts our team at once.',
  alternates: { canonical: '/safety' },
};

const ITEMS = [
  { Icon: Shield, title: 'Approved companions', body: 'Our team reviews every companion profile and photo before it goes live.' },
  { Icon: Shield, title: 'ID checks', body: 'Companions verify a government ID with a selfie before their first booking. Until then, members see them marked as new.' },
  { Icon: Pin, title: 'Public places', body: 'Every booking names a public meeting place. The one exception is a home visit a family books for a loved one; every protection applies there too.' },
  { Icon: Clock, title: 'Panic button', body: 'On from the session start until an hour after it ends, in the booking and in the chat. Hold it for 3 seconds and every prsnn admin is alerted with both people’s details and the meeting place, again every 5 minutes until it’s resolved.' },
  { Icon: Shield, title: 'Private numbers', body: 'Chat hides phone numbers automatically, and the person you book for a loved one never has their number shown.' },
  { Icon: Shield, title: 'Locked photos', body: 'Members and companions can keep their photo hidden until a confirmed booking.' },
];

export default function Safety() {
  return (
    <>
      <PageHead title="Safety isn’t a feature. It’s the whole product." intro="How we work to keep every meeting safe, for members, companions and the loved ones they visit." crumb="Safety" path="/safety" />
      <section className="s-sec">
        <div className="s-wrap">
          <div className="s-grid">
            {ITEMS.map(({ Icon, title, body }) => (
              <div key={title} className="s-card" style={{ padding: 28 }}>
                <span className="s-icon-well"><Icon size={20} /></span>
                <h2 style={{ margin: '14px 0 8px', fontSize: 22, fontWeight: 600 }}>{rich(title)}</h2>
                <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6 }}>{rich(body)}</p>
              </div>
            ))}
          </div>
          <p className="s-note" style={{ fontWeight: 600, color: 'var(--danger)' }}>The panic button is not a replacement for emergency services. If you are in danger, call 112.</p>
          <div style={{ maxWidth: 900, margin: '48px auto 0' }}>
            <Faq items={[
              ['What happens when I press the panic button?', 'Every prsnn admin gets a WhatsApp and push alert with both people’s names and numbers, the meeting place and the booking, at once and again every five minutes until someone on the team resolves it.'],
              ['Who can see my photo?', 'You choose. A locked photo shows only to people with a confirmed, paid booking with you.'],
              ['How do I report someone?', 'Use “Report a problem” on the booking. Our team reviews the details and the chat.'],
            ]} />
          </div>
        </div>
      </section>
    </>
  );
}
