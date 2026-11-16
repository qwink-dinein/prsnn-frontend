import { Name } from '../_components/Brand';
import PageHead from '../_components/PageHead';
import FounderStory from '../_components/FounderStory';
import { FOUNDER, SUMMARY } from '../_lib/content';

export const metadata = {
  title: `Why prsnn exists · Founder ${FOUNDER}`,
  description: `${FOUNDER} built prsnn after his grandfather went missing for seven days: so someone trusted can be there when you can’t.`,
  alternates: { canonical: '/about' },
  openGraph: { images: [{ url: '/site/founder-mukarram.jpg', width: 1206, height: 1203 }] },
};

export default function About() {
  return (
    <>
      <PageHead title="When you can’t be there, someone trusted can." intro={SUMMARY} crumb="Our story" path="/about" />
      <FounderStory onHome={false} />
      <section className="s-sec">
        <div className="s-wrap s-prose">
          <section>
            <h2>What we’re building</h2>
            <p>A city where nobody has to skip the plan, spend a new city’s first months alone, or worry all day about a parent at home. <Name /> connects people with approved, ID-checked companions for platonic company, in public places, with a panic button in every session.</p>
            <p>In one line: <Name /> is a peer-to-peer platform for shared presence. Real humans, no bots, no dating, no therapy. Manually verified companions and public meetups only, women-only matching when you choose it, and soft company with hard boundaries.</p>
            <p><Name /> is for the whole of India: wherever you live, companions in your city can sign up, and you can book company where you are. We grow only as fast as we can keep every companion approved and every booking safe.</p>
          </section>
        </div>
      </section>
    </>
  );
}
