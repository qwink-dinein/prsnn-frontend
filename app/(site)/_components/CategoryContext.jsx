'use client';
import { rich } from './Brand';
import { createContext, useCallback, useContext, useState } from 'react';
import { CATEGORIES } from '../_lib/content';

/** The category shown in the hero wallet and the "What you can use prsnn for" explorer. */
const Ctx = createContext({ index: 0, select: () => {}, open: () => {} });

export function CategoryProvider({ children }) {
  const [index, setIndex] = useState(0);
  const select = useCallback((i) => setIndex(i), []);
  // Select and bring the explorer into view (from the story cards or the founder section).
  const open = useCallback((slug) => {
    const i = CATEGORIES.findIndex((c) => c.slug === slug);
    if (i >= 0) setIndex(i);
    document.getElementById('kinds')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, []);
  return <Ctx.Provider value={{ index, select, open }}>{rich(children)}</Ctx.Provider>;
}
export const useCategory = () => useContext(Ctx);

/** A link that opens a category in the explorer (works without JavaScript too: it goes to the category page). */
export function OpenCategory({ slug, className, children }) {
  const { open } = useCategory();
  return (
    <a
      href={`/${slug}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        open(slug);
      }}
    >
      {rich(children)}
    </a>
  );
}
