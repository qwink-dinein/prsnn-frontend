import { describe, it, expect } from 'vitest';
import { phoneError } from '../../../app/(site)/_lib/enquiry.js';
import { CATEGORIES, PRICES, companionShare, savingFor } from '../../../app/(site)/_lib/content.js';

describe('website interest form', () => {
  it('accepts a 10-digit Indian mobile', () => {
    expect(phoneError('+91', '98765 43210')).toBeNull();
  });
  it('rejects short or landline-looking Indian numbers', () => {
    expect(phoneError('+91', '12345')).toMatch(/10-digit/);
    expect(phoneError('+91', '1234567890')).toMatch(/10-digit/);
  });
  it('accepts international numbers of a sensible length', () => {
    expect(phoneError('+44', '7700 900123')).toBeNull();
    expect(phoneError('+1', '12')).toMatch(/mobile/);
  });
});

describe('website facts match the app', () => {
  it('uses the fixed price list', () => {
    expect(PRICES[1]).toBe(399);
    expect(PRICES[4]).toBe(1299);
    expect(PRICES[12]).toBe(3599);
  });
  it('companions keep 80% (rounded down) and longer is cheaper per hour', () => {
    expect(companionShare(PRICES[4])).toBe(1039);
    expect(savingFor(4)).toBe(297);
  });
  it('has five categories, each with uses and a page slug', () => {
    expect(CATEGORIES).toHaveLength(5);
    for (const c of CATEGORIES) {
      expect(c.slug).toMatch(/^[a-z-]+$/);
      expect(c.uses.length).toBeGreaterThanOrEqual(5);
    }
  });
});
