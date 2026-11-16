import Link from 'next/link';
/** The approved wordmark: "prsnn" in Outfit Bold with a round champagne dot (design.md). */
export function Logo({ className = '', label = 'prsnn home', href = '/' }) {
  return (
    <Link href={href} className={`s-logo ${className}`} aria-label={label}>
      <b>prsnn</b>
      <i />
    </Link>
  );
}
export function Mark() {
  return (
    <span className="s-logo" aria-hidden="true">
      <b>prsnn</b>
      <i />
    </span>
  );
}

/** Fine engraved lines on the wallet cards. */
export function Guilloche({ tall = false }) {
  const h = tall ? 190 : 70;
  const step = tall ? 18 : 10;
  const lines = [];
  for (let y = tall ? -1 : 8; y < h + 10; y += step) {
    lines.push(<path key={y} d={`M-20 ${y} C75 ${y - (tall ? 26 : 14)} 150 ${y + (tall ? 26 : 14)} 225 ${y} S340 ${y - (tall ? 26 : 14)} 340 ${y}`} />);
  }
  return (
    <svg className="s-guilloche" aria-hidden="true" viewBox={`0 0 300 ${h}`} preserveAspectRatio={tall ? 'xMidYMid slice' : 'none'} fill="none" stroke="currentColor" strokeOpacity="0.16" strokeWidth="0.8">
      {lines}
      {tall ? [18, 30, 42, 54, 66].map((r) => <circle key={r} cx="258" cy="38" r={r} />) : null}
    </svg>
  );
}

/**
 * The company name in running text: always "prsnn." (with the dot), in italics, so it stands apart from
 * the words around it. The logo (Logo / Mark) and the opening film keep their own designed wordmark.
 */
export function Name() {
  return <em className="s-brand">prsnn.</em>;
}

// "prsnn" as a word, not a web address (prsnn.com), handle (prsnn_india) or path; a dot right after it is
// taken in, so it never doubles.
const NAME_RE = /\bprsnn(?![\w-]|\.\w)\.?/g;

/**
 * Text that may mention the company: every "prsnn" becomes <Name />. Anything that isn't a string
 * (an element, a number, nothing) is returned unchanged, so it's safe to wrap any rendered value.
 */
export function rich(value) {
  if (typeof value !== 'string' || !value.includes('prsnn')) return value;
  const out = [];
  let last = 0;
  let k = 0;
  for (const m of value.matchAll(NAME_RE)) {
    if (m.index > last) out.push(value.slice(last, m.index));
    out.push(<Name key={`n${k++}`} />);
    last = m.index + m[0].length;
  }
  if (!out.length) return value;
  if (last < value.length) out.push(value.slice(last));
  return out;
}
