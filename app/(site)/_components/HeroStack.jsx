'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CATEGORIES } from '../_lib/content';
import { useCategory } from './CategoryContext';
import PhotoCard from './PhotoCard';

const N = CATEGORIES.length;
/** Signed distance from the front card, the short way round the loop (−2…2 for five cards). */
const wrap = (d) => ((((d + N / 2) % N) + N) % N) - N / 2;

/** Auto-rotation: the next card comes forward every second (paused while someone is using the deck). */
const AUTO_MS = 1000;

/**
 * Hero: a swipeable deck of the photo cards. Drag (finger or mouse) and every card follows; let go and
 * it eases onto the next card. A quick flick counts even if it's short. The front card opens its page,
 * a side card comes forward when tapped, arrow keys and the dots work too. On its own it turns every
 * second, round and round; it pauses while hovered, focused or dragged, when off screen or in a background
 * tab, and doesn't turn at all with reduced motion. Only a person's choice moves the explorer below.
 */
export default function HeroStack() {
  const { index: chosen, select } = useCategory();
  const [index, setFront] = useState(chosen);
  const wrapRef = useRef(null);
  const hold = useRef({ hover: false, focus: false, drag: false, seen: true });
  // A person's choice: move the deck and the explorer below.
  const pick = useCallback((i) => {
    setFront(i);
    select(i);
  }, [select]);
  const [drag, setDrag] = useState(0); // px the deck has been dragged; 0 when resting
  const [dragging, setDragging] = useState(false);
  const g = useRef({ id: null, x0: 0, y0: 0, t0: 0, lastX: 0, lastT: 0, v: 0, axis: null, moved: false });
  const raf = useRef(0);

  /**
   * How far a side card sits from the front card, in px. Ideally 62% of a card, but never so far that a side
   * card (scaled and tilted) pokes out of the deck's own box and covers the hero text beside it.
   */
  const width = () => {
    const box = wrapRef.current;
    const card = box?.querySelector('.s-deck-card');
    if (!box || !card) return 200;
    const w = card.offsetWidth;
    const tilt = card.offsetHeight * Math.sin((7 * Math.PI) / 180) * 0.89; // top corner swings out this far
    const fits = box.clientWidth / 2 - (w * 0.89) / 2 - tilt;
    return Math.max(w * 0.22, Math.min(w * 0.62, fits));
  };
  const go = useCallback((d) => pick((((index + d) % N) + N) % N), [index, pick]);

  const onDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    g.current = { id: e.pointerId, x0: e.clientX, y0: e.clientY, t0: performance.now(), lastX: e.clientX, lastT: performance.now(), v: 0, axis: null, moved: false };
  };
  const onMove = (e) => {
    const s = g.current;
    if (s.id !== e.pointerId) return;
    const dx = e.clientX - s.x0;
    const dy = e.clientY - s.y0;
    if (!s.axis) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      s.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      if (s.axis === 'y') return; // a vertical scroll: let the page have it
      wrapRef.current?.setPointerCapture?.(e.pointerId);
      hold.current.drag = true;
      setDragging(true);
    }
    if (s.axis !== 'x') return;
    s.moved = true;
    const now = performance.now();
    s.v = (e.clientX - s.lastX) / Math.max(1, now - s.lastT); // px per ms
    s.lastX = e.clientX;
    s.lastT = now;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => setDrag(dx));
  };
  const onUp = (e) => {
    const s = g.current;
    if (s.id !== e.pointerId) return;
    s.id = null;
    hold.current.drag = false;
    if (s.axis !== 'x') return;
    cancelAnimationFrame(raf.current);
    const dx = e.clientX - s.x0;
    const step = width();
    // How many cards to move: by distance, or one for a quick flick.
    let d = Math.round(-dx / step);
    if (d === 0 && Math.abs(s.v) > 0.35) d = s.v < 0 ? 1 : -1;
    d = Math.max(-2, Math.min(2, d));
    setDragging(false);
    setDrag(0);
    if (d) go(d);
  };
  // A drag shouldn't also count as a tap on the card underneath.
  const onClickCapture = (e) => {
    if (g.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      g.current.moved = false;
    }
  };
  const onKey = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
  };
  useEffect(() => () => cancelAnimationFrame(raf.current), []);
  // Turn by itself, round and round.
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    const el = wrapRef.current;
    const io = typeof IntersectionObserver !== 'undefined' && el ? new IntersectionObserver(([e]) => { hold.current.seen = e.isIntersecting; }, { threshold: 0.25 }) : null;
    if (io && el) io.observe(el);
    const t = setInterval(() => {
      const h = hold.current;
      if (h.hover || h.focus || h.drag || !h.seen || document.hidden) return;
      setFront((f) => (f + 1) % N);
    }, AUTO_MS);
    return () => {
      clearInterval(t);
      io?.disconnect();
    };
  }, []);
  // How far one card is from the next (measured, and again when the screen size changes).
  const [step, setStep] = useState(200);
  useEffect(() => {
    const measure = () => setStep(width());
    measure();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;
    if (ro && wrapRef.current) ro.observe(wrapRef.current);
    else window.addEventListener('resize', measure);
    return () => (ro ? ro.disconnect() : window.removeEventListener('resize', measure));
  }, []);
  return (
    <div
      ref={wrapRef}
      className={`s-stack s-deck${dragging ? ' is-dragging' : ''}`}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onClickCapture={onClickCapture}
      onKeyDown={onKey}
      onPointerEnter={(e) => { if (e.pointerType === 'mouse') hold.current.hover = true; }}
      onPointerLeave={() => { hold.current.hover = false; }}
      onFocus={() => { hold.current.focus = true; }}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) hold.current.focus = false; }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Kinds of company. Swipe or use the arrow keys."
      tabIndex={0}
    >
      {CATEGORIES.map((c, i) => {
        const p = wrap(i - index) + drag / step; // position: 0 front, ±1 beside it, ±2 hidden
        const a = Math.abs(p);
        const style = {
          transform: `translateX(calc(-50% + ${p * step}px)) translateY(${Math.min(a, 1.5) * 26}px) rotate(${Math.max(-1.6, Math.min(1.6, p)) * 7}deg) scale(${1 - Math.min(a, 1.6) * 0.11})`,
          opacity: a <= 1.15 ? 1 : Math.max(0, 1 - (a - 1.15) * 1.6),
          zIndex: 10 - Math.round(a * 3),
          pointerEvents: a > 1.4 ? 'none' : undefined,
        };
        const front = a < 0.5;
        return (
          <div key={c.slug} className="s-deck-card" style={style} aria-hidden={!front} inert={!front && a > 1.4 ? true : undefined}>
            {front ? (
              <PhotoCard c={c} size="lg" priority={i === index} />
            ) : (
              <PhotoCard c={c} size="lg" price={false} onClick={() => pick(i)} />
            )}
          </div>
        );
      })}
      <div className="s-stack-dots" role="tablist" aria-label="Choose a kind of company">
        {CATEGORIES.map((c, i) => (
          <button key={c.slug} type="button" role="tab" aria-selected={i === index} aria-label={c.title} onClick={() => pick(i)} className={i === index ? 'on' : ''} />
        ))}
      </div>
    </div>
  );
}
