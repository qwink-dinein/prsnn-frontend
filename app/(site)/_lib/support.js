/**
 * The support address, read at build time from NEXT_PUBLIC_SUPPORT_EMAIL (kept out of the repo) and
 * handed to the Support page only in encoded form, so it never appears as text in any page's HTML
 * or in the shared JavaScript. The browser decodes it when someone taps "Show email address".
 */
export function encodedSupportEmail() {
  const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || '';
  return email ? Buffer.from([...email].reverse().join(''), 'utf8').toString('base64') : '';
}
