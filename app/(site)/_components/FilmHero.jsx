'use client';
import { useEffect, useRef, useState } from 'react';

const WORD = 'prsnn';

/**
 * Opening film: a silent, looping clip of two friends laughing over coffee, darkened and slowly
 * drifting, with the wordmark writing itself in the middle once the film is playing. No sound
 * (browsers only autoplay muted video, and a landing page shouldn't talk). With reduced motion the
 * still frame shows and the wordmark is simply there.
 */
export default function FilmHero() {
  const video = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const v = video.current;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      // Still frame; the wordmark is shown by CSS (prefers-reduced-motion).
      v?.pause();
      return undefined;
    }
    // Reveal the wordmark once the film is actually playing (or after a moment, if it can't).
    const show = () => setOn(true);
    const fallback = setTimeout(show, 1400);
    v?.addEventListener('playing', show, { once: true });
    v?.play?.().catch(() => {});
    return () => {
      clearTimeout(fallback);
      v?.removeEventListener('playing', show);
    };
  }, []);

  return (
    <section className={`s-film${on ? ' is-on' : ''}`} aria-label="prsnn">
      <video ref={video} className="s-film-video" autoPlay muted loop playsInline preload="auto" poster="/site/film/poster.jpg" aria-hidden="true" tabIndex={-1} disablePictureInPicture>
        <source src="/site/film/hero.mp4" type="video/mp4" />
      </video>
      <div className="s-film-shade" aria-hidden="true" />
      <div className="s-film-grain" aria-hidden="true" />
      <div className="s-film-center">
        <p className="s-film-word" aria-label="prsnn">
          {WORD.split('').map((ch, i) => (
            <span key={i} className="s-film-ch" style={{ '--i': i }} aria-hidden="true">
              {ch}
            </span>
          ))}
          <span className="s-film-dot" aria-hidden="true" />
        </p>
        <span className="s-film-rule" aria-hidden="true" />
        <p className="s-film-tag">Good company, whenever you need it.</p>
      </div>
      <a className="s-film-cue" href="#hero-h" aria-label="Scroll to learn more">
        <span />
      </a>
    </section>
  );
}
