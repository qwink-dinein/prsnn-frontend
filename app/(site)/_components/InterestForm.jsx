'use client';
import { Name, rich } from './Brand';
import Link from 'next/link';
import { useState } from 'react';
import { COUNTRY_CODES, phoneError, submitEnquiry } from '../_lib/enquiry';
import { Check } from './Icons';

const CHOICES = [
  { key: 'member', title: 'Find company', sub: 'Book companions for plans' },
  { key: 'companion', title: 'Become a companion', sub: 'Earn 80% of every booking' },
  { key: 'both', title: 'Both', sub: 'Book and earn' },
];

/** "Not ready yet? Count me in.": a mobile number and what the person is interested in. */
export default function InterestForm({ initial = 'member', source = 'website' }) {
  const [interest, setInterest] = useState(initial);
  const [cc, setCc] = useState('+91');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState({ busy: false, error: null, done: false });

  const submit = async (e) => {
    e.preventDefault();
    const err = phoneError(cc, phone);
    if (err) return setState({ busy: false, error: err, done: false });
    setState({ busy: true, error: null, done: false });
    try {
      await submitEnquiry({ cc, phone, interest, source });
      setState({ busy: false, error: null, done: true });
    } catch (x) {
      setState({ busy: false, error: x.message, done: false });
    }
  };

  if (state.done) {
    return (
      <div className="s-form" role="status">
        <div className="s-done">
          <span className="s-icon-well" style={{ width: 52, height: 52 }}><Check size={24} /></span>
          <h3 style={{ margin: 0, fontSize: 24, fontWeight: 600 }}>You’re on the list.</h3>
          <p style={{ margin: 0, fontSize: 16, color: 'var(--muted)' }}>
            We’ll message {rich(cc)} {rich(phone)} on WhatsApp when the app is ready to download.
            {rich(interest !== 'member' ? ' We’ll include the companion sign-up steps.' : '')}
          </p>
          <button type="button" className="s-link" style={{ color: 'var(--midnight)', background: 'none', border: 0, padding: 0, cursor: 'pointer', font: 'inherit' }} onClick={() => { setPhone(''); setState({ busy: false, error: null, done: false }); }}>
            Use another number
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="s-form" onSubmit={submit} noValidate aria-label="Count me in">
      <fieldset>
        <legend>Not ready yet? Count me in.</legend>
        <p className="s-fine" style={{ marginBottom: 6, fontSize: 14 }}>Tell us what interests you and we’ll keep you posted.</p>
        <div role="radiogroup" aria-label="I’m interested in" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {CHOICES.map((c) => (
            <button key={c.key} type="button" role="radio" aria-checked={interest === c.key} className="s-choice" onClick={() => setInterest(c.key)}>
              <span><b>{rich(c.title)}</b><small>{rich(c.sub)}</small></span>
              <i />
            </button>
          ))}
        </div>
      </fieldset>
      <label htmlFor={`phone-${source}`} style={{ fontWeight: 600, fontSize: 16 }}>Mobile number</label>
      <div className="s-phone">
        <select aria-label="Country code" value={cc} onChange={(e) => setCc(e.target.value)}>
          {COUNTRY_CODES.map((x) => <option key={x} value={x}>{x}</option>)}
        </select>
        <input
          id={`phone-${source}`}
          inputMode="numeric"
          autoComplete="tel-national"
          placeholder="98765 43210"
          value={phone}
          aria-invalid={!!state.error}
          aria-describedby={state.error ? `phone-${source}-err` : undefined}
          onChange={(e) => { setPhone(e.target.value.replace(/[^\d ]/g, '').slice(0, 15)); if (state.error) setState((s) => ({ ...s, error: null })); }}
        />
      </div>
      {rich(state.error ? <p id={`phone-${source}-err`} role="alert" className="s-error">{rich(state.error)}</p> : null)}
      <button type="submit" className="s-btn s-btn-dark" disabled={state.busy} aria-busy={state.busy}>
        {rich(state.busy ? 'Saving…' : 'Count me in')}
      </button>
      <p className="s-fine">By tapping Count me in, you confirm you’re 18 or older and agree that we may message you on WhatsApp about <Name /> We record this agreement with the date and time. Never shared. See our <Link href="/privacy">Privacy Policy</Link>.</p>
    </form>
  );
}
