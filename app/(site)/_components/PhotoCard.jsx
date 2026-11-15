import Image from 'next/image';
import Link from 'next/link';
import { PRICES, inr } from '../_lib/content';

/** Pill icons (same set as the app's PhotoCard). */
const ICONS = {
  pin: <><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.3" /></>,
  ticket: <path d="M4 8h16v3a2 2 0 0 0 0 4v3H4v-3a2 2 0 0 0 0-4z" />,
  compass: <><circle cx="12" cy="12" r="8.5" /><path d="M15.5 8.5 13 13l-4.5 2.5L11 11z" /></>,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />,
  book: <><path d="M3 9l9-4 9 4-9 4z" /><path d="M7 11v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4" /></>,
};

/**
 * The approved photo card (same design and words as the app): pill, pain-line headline, promise,
 * the photo fading up into the card, and a corner arrow that never covers a face.
 * Renders a link (href) or, inside the homepage, a button that opens the category (onClick).
 */
export default function PhotoCard({ c, href, onClick, size = 'md', price = true, priority = false, className = '' }) {
  const body = (
    <>
      <span className="s-pc-photo"><Image src={c.img} alt="" fill sizes={size === 'lg' ? '340px' : '(max-width: 860px) 80vw, 260px'} priority={priority} /></span>
      <span className="s-pc-fade" />
      <span className="s-pc-text">
        <span className="s-pc-pill">
          <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{ICONS[c.icon]}</svg>
          {c.title}
        </span>
        <span className="s-pc-h">{c.pain}</span>
        <span className="s-pc-p">{c.promise}{price ? ` From ${inr(PRICES[1])}.` : ''}</span>
      </span>
      <span className="s-pc-go" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </span>
    </>
  );
  const cls = `s-pc ${c.dark ? 's-pc-dark' : 's-pc-light'} s-pc-${size} ${className}`;
  const label = `${c.title}. ${c.pain} ${c.promise}`;
  if (onClick) return <button type="button" className={cls} onClick={onClick} aria-label={label}>{body}</button>;
  return <Link className={cls} href={href || `/${c.slug}`} aria-label={label}>{body}</Link>;
}
