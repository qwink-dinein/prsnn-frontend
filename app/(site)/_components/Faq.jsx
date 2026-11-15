import Link from 'next/link';
import { SUPPORT_EMAIL } from '../_lib/content';
import { Mail } from './Icons';

/** Questions with short, direct answers (search engines and AI assistants quote these). */
export default function Faq({ items, help = true }) {
  return (
    <>
      <div className="s-card s-faq">
        {items.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
      {help ? (
        <div className="s-help">
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <b style={{ fontSize: 18 }}>Need help?</b>
            <span style={{ fontSize: 15, color: 'var(--muted)' }}>Questions, problems with a booking, or feedback. Write to us any time.</span>
          </span>
          {SUPPORT_EMAIL ? (
            <Link className="s-btn s-btn-dark" href={`mailto:${SUPPORT_EMAIL}`}><Mail size={18} />{SUPPORT_EMAIL}</Link>
          ) : (
            <Link className="s-btn s-btn-dark" href="/#join">Get in touch</Link>
          )}
        </div>
      ) : null}
    </>
  );
}
