import Image from 'next/image';
import Link from 'next/link';
import { COMMUNITY_IMG } from '../_lib/content';

/** "Real people. Real connections." (same photo and words as the app). */
export default function CommunityBanner() {
  return (
    <div className="s-community">
      <span className="s-community-photo"><Image src={COMMUNITY_IMG} alt="Four friends laughing together outdoors" fill sizes="(max-width: 860px) 100vw, 760px" /></span>
      <span className="s-community-shade" />
      <div className="s-community-text">
        <h2 className="s-h2" style={{ margin: 0 }}>{'Real people.\nReal connections.'}</h2>
        <p>Every companion approved by our team and ID-checked. Book one, or become one and keep 80% of every booking.</p>
        <div className="s-stores">
          <Link className="s-btn s-btn-gold" href="/#join">Find company</Link>
          <Link className="s-btn s-btn-outline" href="/become-a-companion">Become a companion</Link>
        </div>
      </div>
    </div>
  );
}
