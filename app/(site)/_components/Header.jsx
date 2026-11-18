import Link from 'next/link';
import { Logo } from './Brand';

export default function Header() {
  return (
    <header className="s-header">
      <div className="s-wrap">
        <Logo />
        <nav className="s-nav" aria-label="Main">
          <Link href="/#how">How it works</Link>
          <Link href="/pricing">Prices</Link>
          <Link href="/safety">Safety</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/about">Our story</Link>
        </nav>
        {/* A button, not a menu link, so phones (where the menu is hidden) see it too. */}
        <div className="s-head-cta">
          <Link className="s-btn s-btn-outline s-head-earn" href="/become-a-companion">
            <span className="s-wide">Become a companion</span>
            <span className="s-narrow">Earn as a companion</span>
          </Link>
          <Link className="s-btn s-btn-gold" href="/#join">Get the app</Link>
        </div>
      </div>
    </header>
  );
}
