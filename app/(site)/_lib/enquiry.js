// Saves a website enquiry (mobile number + interest) through the database function
// submit_enquiry: validated, throttled, one row per number, readable only by staff.
// The publishable key is meant for browsers (row-level security protects the data).
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mhovyhapzhxcmcuelbol.supabase.co';
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_EjvwHde8WRvzboJF3JE6LQ_1L5FJdIT';

export const COUNTRY_CODES = ['+91', '+971', '+1', '+44', '+65', '+61', '+966', '+974'];

/** Returns null when the number looks right, else a message to show. */
export function phoneError(cc, raw) {
  const digits = String(raw || '').replace(/\D/g, '');
  if (cc === '+91') return /^[6-9]\d{9}$/.test(digits) ? null : 'Enter a 10-digit mobile number.';
  return digits.length >= 6 && digits.length <= 13 ? null : 'Enter your mobile number.';
}

export async function submitEnquiry({ cc, phone, interest, source = 'website' }) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/submit_enquiry`, {
    method: 'POST',
    headers: { apikey: SUPABASE_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone_number: cc + String(phone).replace(/\D/g, ''), interest_choice: interest, src: source }),
  }).catch(() => null);
  if (!res) throw new Error('No internet connection. Please try again.');
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body?.message || 'Something went wrong. Please try again.');
  }
  return true;
}
