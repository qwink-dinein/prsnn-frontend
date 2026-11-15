'use client';
import { CATEGORIES } from '../_lib/content';
import { useCategory } from './CategoryContext';
import PhotoCard from './PhotoCard';

/** The five photo cards; tapping one opens it in the explorer below (homepage). */
export default function PhotoCardRow() {
  const { open } = useCategory();
  return (
    <div className="s-pc-row" role="list">
      {CATEGORIES.map((c) => (
        <div key={c.slug} role="listitem">
          <PhotoCard c={c} onClick={() => open(c.slug)} />
        </div>
      ))}
    </div>
  );
}
