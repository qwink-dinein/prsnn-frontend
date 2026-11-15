'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { CATEGORIES } from '../_lib/content';
import { useCategory } from './CategoryContext';
import { Arrow, Check, Chevron } from './Icons';

/** "What you can use prsnn for": pick a kind of company, see every use, the length and price. */
export default function UseExplorer() {
  const { index, select } = useCategory();
  const c = CATEGORIES[index];
  const tabs = useRef([]);
  // Arrow keys move between tabs (WAI-ARIA tabs pattern).
  const onKey = (e) => {
    const d = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const n = (index + d + CATEGORIES.length) % CATEGORIES.length;
    select(n);
    tabs.current[n]?.focus();
  };
  return (
    <div className="s-explorer">
      <div className="s-explorer-tabs" role="tablist" aria-label="Kinds of company" aria-orientation="vertical" onKeyDown={onKey}>
        {CATEGORIES.map((t, i) => (
          <button
            key={t.slug}
            ref={(el) => (tabs.current[i] = el)}
            type="button"
            role="tab"
            id={`tab-${t.slug}`}
            aria-selected={i === index}
            aria-controls="use-panel"
            tabIndex={i === index ? 0 : -1}
            className="s-utab"
            onClick={() => select(i)}
          >
            <Image src={t.img} alt="" width={52} height={52} />
            <span><b>{t.title}</b><small>{t.line}</small></span>
            <Chevron size={16} />
          </button>
        ))}
      </div>
      <div id="use-panel" role="tabpanel" aria-labelledby={`tab-${c.slug}`} className="s-panel s-card">
        <div className="s-panel-photo">
          <Image src={c.img} alt="" fill sizes="(max-width: 860px) 100vw, 760px" style={{ objectFit: 'cover', objectPosition: 'center 22%' }} />
          <span className="s-shade" />
          <div><strong>{c.title}</strong><span>{c.line}</span></div>
        </div>
        <div className="s-panel-body">
          <p className="s-eyebrow" style={{ margin: 0 }}>Use it for</p>
          <ul className="s-uses">
            {c.uses.map((u) => (
              <li key={u}><span className="s-tick"><Check size={12} /></span><span>{u}</span></li>
            ))}
          </ul>
          <div className="s-panel-foot">
            <span><small>Suggested</small><b className="s-num">{c.suggest}</b></span>
            <span style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Link className="s-btn s-btn-light" href={`/${c.slug}`} style={{ border: '1px solid var(--line-strong)' }}>More about {c.title}</Link>
              <Link className="s-btn s-btn-dark" href="/#join">Book in the app <Arrow size={16} /></Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
