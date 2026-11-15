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
          <Link href="/become-a-companion">Become a companion</Link>
          <Link href="/about">Our story</Link>
        </nav>
        <Link className="s-btn s-btn-gold" href="/#join">Get the app</Link>
      </div>
    </header>
  );
}
