import Link from 'next/link';

export const LEGAL_PAGES = [
  ['/terms', 'Terms of Service'],
  ['/privacy', 'Privacy Policy'],
  ['/refunds', 'Cancellation & Refunds'],
  ['/guidelines', 'Community Guidelines'],
  ['/companion-terms', 'Companion Terms'],
  ['/grievance', 'Grievance Redressal'],
  ['/child-safety', 'Child Safety Standards'],
  ['/cookies', 'Cookie Notice'],
  ['/delete-account', 'Delete your account'],
  ['/safety', 'Safety'],
  ['/support', 'Help & support'],
];

export default function LegalLinks({ current }) {
  return (
    <p className="s-meta">
      Also see:{' '}
      {LEGAL_PAGES.filter(([href]) => href !== current).map(([href, label], i) => (
        <span key={href}>
          {i ? ' · ' : ''}
          <Link href={href}>{label}</Link>
        </span>
      ))}
    </p>
  );
}
