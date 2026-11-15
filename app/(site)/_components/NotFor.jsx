import Link from 'next/link';
import { Cross } from './Icons';
import { NOT_FOR } from '../_lib/content';

/** "Company. Nothing more.": what prsnn is not, said plainly (same list as the app and the guidelines). */
export default function NotFor() {
  return (
    <div className="s-not">
      <div className="s-not-head">
        <p className="s-eyebrow">Company. Nothing more.</p>
        <h2 id="not-h" className="s-h2">What prsnn is not.</h2>
        <p className="s-lead">Good company works because everyone knows what it is. Respect is the whole deal, for members and companions alike.</p>
        <Link className="s-btn s-btn-dark" href="/guidelines">Read the house rules</Link>
      </div>
      <ul className="s-not-list">
        {NOT_FOR.map(([t, d]) => (
          <li key={t}>
            <span className="s-not-x" aria-hidden="true"><Cross size={14} /></span>
            <span><b>{t}</b><small>{d}</small></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
