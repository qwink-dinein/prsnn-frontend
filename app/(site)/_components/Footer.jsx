import Link from 'next/link';
import { Logo } from './Brand';
import { CATEGORIES } from '../_lib/content';

export default function Footer() {
  return (
    <footer className="s-footer">
      <div className="s-wrap s-footer-grid">
        <div>
          <Logo />
          <span>Book verified companions for platonic company, in public places.</span>
        </div>
        <nav aria-label="Kinds of company">
          <b>Use prsnn for</b>
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`}>{c.title}</Link>
          ))}
        </nav>
        <nav aria-label="prsnn">
          <b>prsnn</b>
          <Link href="/pricing">Prices</Link>
          <Link href="/safety">Safety</Link>
          <Link href="/become-a-companion">Become a companion</Link>
          <Link href="/rent-a-friend">Rent a friend, safely</Link>
          <Link href="/hyderabad">prsnn in Hyderabad</Link>
          <Link href="/about">Our story</Link>
          <Link href="/guides">Guides</Link>
        </nav>
        <nav aria-label="Legal and support">
          <b>Legal &amp; support</b>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/refunds">Cancellation &amp; Refunds</Link>
          <Link href="/guidelines">Community Guidelines</Link>
          <Link href="/companion-terms">Companion Terms</Link>
          <Link href="/grievance">Grievance Redressal</Link>
          <Link href="/child-safety">Child Safety</Link>
          <Link href="/delete-account">Delete your account</Link>
          <Link href="/legal">All policies</Link>
          <Link href="/support">Help &amp; support</Link>
        </nav>
      </div>
      <div className="s-wrap s-footer-base">
        <span>© {new Date().getFullYear()} prsnn · Hyderabad, India</span>
        <span>In an emergency, call 112.</span>
      </div>
    </footer>
  );
}
