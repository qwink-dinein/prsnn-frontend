'use client';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES, PRICES, inr } from '../_lib/content';
import { useCategory } from './CategoryContext';
import { Guilloche, Mark } from './Brand';
import { Arrow } from './Icons';

const TAB_MATS = ['midnight', 'pearl', 'steel', 'mist'];

/** Home categories as a wallet: the chosen one lifts as a photo card, the rest stack under it. */
export default function HeroWallet() {
  const { index, select } = useCategory();
  const big = CATEGORIES[index];
  const others = CATEGORIES.map((c, i) => ({ ...c, i })).filter((c) => c.i !== index);
  return (
    <div className="s-wallet">
      <Link className="s-wallet-hero" href={`/${big.slug}`} aria-label={`${big.title}. ${big.line}. Find company`}>
        <Image src={big.img} alt="" fill sizes="(max-width: 860px) 100vw, 500px" priority style={{ objectFit: 'cover' }} />
        <span className="s-shade" />
        <span className="s-wallet-top">
          <Mark />
          <span>{index + 1} of {CATEGORIES.length}</span>
        </span>
        <span className="s-wallet-body">
          <span className="s-wallet-title">
            <strong>{big.title}</strong>
            <span>from {inr(PRICES[big.hours])}</span>
          </span>
          <span className="s-wallet-line">{big.line}</span>
          <span className="s-wallet-cta">Find company <Arrow size={16} /></span>
        </span>
      </Link>
      {others.map((c, k) => (
        <button key={c.slug} type="button" className={`s-tab s-mat-${TAB_MATS[k]}`} style={{ zIndex: k + 1 }} onClick={() => select(c.i)} aria-label={`Show ${c.title}`}>
          <Guilloche />
          <span>{c.title}</span>
          <Image src={c.img} alt="" width={34} height={34} />
        </button>
      ))}
      <p className="s-hint">Tap a card to lift it</p>
    </div>
  );
}
