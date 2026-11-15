'use client';
import { useState } from 'react';
import { Mail } from './Icons';

/** Shows the support address only after a tap (keeps it away from scrapers and spam bots). */
export default function RevealEmail({ code }) {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);
  if (!code) return <p className="s-meta">Email support isn’t set up yet. Please use “Report a problem” in the app.</p>;
  if (!email) {
    return (
      <button type="button" className="s-btn s-btn-dark" onClick={() => setEmail([...atob(code)].reverse().join(''))}>
        <Mail size={18} /> Show email address
      </button>
    );
  }
  const copy = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); } catch { /* the address is selectable */ }
  };
  return (
    <span style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
      <a className="s-btn s-btn-dark" href={`mailto:${email}`}><Mail size={18} /> {email}</a>
      <button type="button" className="s-btn s-btn-light" style={{ border: '1px solid var(--line-strong)' }} onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>
    </span>
  );
}
