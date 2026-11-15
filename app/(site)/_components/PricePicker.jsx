'use client';
import Link from 'next/link';
import { useState } from 'react';
import { PRICES, hoursLabel, inr, savingFor } from '../_lib/content';
import { Guilloche, Mark } from './Brand';

const MAT = { 1: 'pearl', 2: 'mist', 4: 'midnight', 6: 'steel', 12: 'champagne' };
const CHOICES = [1, 2, 4, 6, 12];

/** The Wallet price card: pick a length and the card shows its price, hourly rate and saving. */
export default function PricePicker() {
  const [h, setH] = useState(4);
  const save = savingFor(h);
  const tag = h === 4 ? 'Suggested' : h === 12 ? 'Best value' : null;
  return (
    <div className="s-split">
      <div>
        <p className="s-eyebrow">One fair price list</p>
        <h2 className="s-h2">Longer together, less per hour.</h2>
        <p className="s-lead">The same price for every companion. You pay in the app; if nobody can make it, you get every rupee back.</p>
        <div className="s-pills" role="radiogroup" aria-label="How long">
          {CHOICES.map((x) => (
            <button key={x} type="button" role="radio" aria-checked={h === x} className="s-pill" onClick={() => setH(x)}>
              {hoursLabel(x)}
            </button>
          ))}
        </div>
        <Link className="s-btn s-btn-dark" href="/pricing">See all 12 lengths</Link>
      </div>
      <div>
        <div className={`s-pricecard s-mat-${MAT[h]}`} aria-live="polite">
          <Guilloche tall />
          <div className="s-pricecard-top">
            <Mark />
            {tag ? <span className="s-tag">{tag}</span> : null}
          </div>
          <div className="s-pricecard-body">
            <small>{hoursLabel(h)}</small>
            <strong>{inr(PRICES[h])}</strong>
            <p>{inr(Math.round(PRICES[h] / h))} an hour{save ? `  ·  Save ${inr(save)}` : ''}</p>
          </div>
        </div>
        <p className="s-small">Tickets, food and travel on the day are yours. The price is the companion’s time.</p>
      </div>
    </div>
  );
}
