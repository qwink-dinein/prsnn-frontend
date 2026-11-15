import PageHead from '../_components/PageHead';
import FounderStory from '../_components/FounderStory';
import { FOUNDER, SUMMARY } from '../_lib/content';

export const metadata = {
  title: `Why prsnn exists · Founder ${FOUNDER}`,
  description: `${FOUNDER} built prsnn after his grandfather went missing for seven days: so someone trusted can be there when you can’t.`,
  alternates: { canonical: '/about' },
  openGraph: { images: [{ url: '/site/founder.jpg', width: 1024, height: 1536 }] },
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
            <p>A city where nobody has to skip the plan, spend a new city’s first months alone, or worry all day about a parent at home. prsnn connects people with approved, ID-checked companions for platonic company, in public places, with a panic button in every session.</p>
            <p>We started in Hyderabad. We’ll grow city by city, only as fast as we can keep every companion approved and every booking safe.</p>
          </section>
        </div>
      </section>
    </>
  );
}
