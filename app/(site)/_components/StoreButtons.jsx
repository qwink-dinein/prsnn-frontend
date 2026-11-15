import Link from 'next/link';
import { APP_STORE_URL, PLAY_STORE_URL } from '../_lib/content';
import { Apple, Play } from './Icons';

/**
 * App Store and Google Play buttons. Until the store links are set (NEXT_PUBLIC_APP_STORE_URL,
 * NEXT_PUBLIC_PLAY_STORE_URL) they honestly say "coming soon" and lead to the interest form.
 */
export default function StoreButtons({ light = false }) {
  const stores = [
    { url: APP_STORE_URL, small: 'Download on the', name: 'App Store', Icon: Apple },
    { url: PLAY_STORE_URL, small: 'Get it on', name: 'Google Play', Icon: Play },
  ];
  return (
    <div className={`s-stores ${light ? 's-light' : ''}`}>
      {stores.map(({ url, small, name, Icon }) =>
        url ? (
          <Link key={name} className="s-store" href={url} rel="noopener" aria-label={`${small} ${name}`}>
            <Icon />
            <span><small>{small}</small><strong>{name}</strong></span>
          </Link>
        ) : (
          <Link key={name} className="s-store s-store-soon" href="/#join" aria-label={`${name}: coming soon. Get notified`}>
            <Icon />
            <span><small>Coming soon to</small><strong>{name}</strong></span>
          </Link>
        ),
      )}
    </div>
  );
}
