import { rich } from './Brand';
import Link from 'next/link';
import { Mail } from './Icons';

/** Questions with short, direct answers (search engines and AI assistants quote these). */
export default function Faq({ items, help = true }) {
  return (
    <>
      <div className="s-card s-faq">
        {items.map(([q, a]) => (
          <details key={q}>
            <summary>{rich(q)}</summary>
            <p>{rich(a)}</p>
          </details>
        ))}
      </div>
      {rich(help ? (
        <div className="s-help">
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <b style={{ fontSize: 18 }}>Need help?</b>
            <span style={{ fontSize: 15, color: 'var(--muted)' }}>Questions, problems with a booking, or feedback. Write to us any time.</span>
          </span>
          <Link className="s-btn s-btn-dark" href="/support"><Mail size={18} />Contact support</Link>
        </div>
      ) : null)}
    </>
  );
}
