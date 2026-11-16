import { rich } from './Brand';
import Link from 'next/link';
import { ANDROID_APK_URL, APP_STORE_URL, PLAY_STORE_URL } from '../_lib/content';
import { Apple, Play } from './Icons';

/**
 * Download buttons. Android: the Google Play listing once NEXT_PUBLIC_PLAY_STORE_URL is set; until then the
 * app file (APK) to download directly. It's never labelled "Google Play" (Google's badge rules).
 * iPhone: App Store once NEXT_PUBLIC_APP_STORE_URL is set; until then it honestly says "coming soon".
 */
export default function StoreButtons({ light = false }) {
  const android = PLAY_STORE_URL
    ? { url: PLAY_STORE_URL, small: 'Get it on', name: 'Google Play', label: 'Get it on Google Play' }
    : ANDROID_APK_URL
      ? { url: ANDROID_APK_URL, small: 'Free · APK', name: 'Download for Android', label: 'Download the prsnn app for Android (APK file, opens Google Drive)' }
      : null;
  return (
    <div className={`s-stores ${light ? 's-light' : ''}`}>
      {rich(android ? (
        <a className="s-store" href={android.url} target="_blank" rel="noopener" aria-label={android.label}>
          <Play />
          <span><small>{rich(android.small)}</small><strong>{rich(android.name)}</strong></span>
        </a>
      ) : (
        <Link className="s-store s-store-soon" href="/#join" aria-label="Android app: coming soon. Get notified">
          <Play />
          <span><small>Coming soon to</small><strong>Android</strong></span>
        </Link>
      ))}
      {rich(APP_STORE_URL ? (
        <a className="s-store" href={APP_STORE_URL} target="_blank" rel="noopener" aria-label="Download on the App Store">
          <Apple />
          <span><small>Download on the</small><strong>App Store</strong></span>
        </a>
      ) : (
        <Link className="s-store s-store-soon" href="/#join" aria-label="App Store: coming soon. Get notified">
          <Apple />
          <span><small>Coming soon to</small><strong>App Store</strong></span>
        </Link>
      ))}
    </div>
  );
}
