'use client';
import { CATEGORIES } from '../_lib/content';
import { useCategory } from './CategoryContext';
import PhotoCard from './PhotoCard';

/** Hero: three photo cards fanned out. The front one opens its page; tap a back card to bring it forward. */
export default function HeroStack() {
  const { index, select } = useCategory();
  const n = CATEGORIES.length;
  const left = (index + 1) % n;
  const right = (index + 2) % n;
  return (
    <div className="s-stack">
      <div className="s-stack-back s-stack-right"><PhotoCard c={CATEGORIES[right]} onClick={() => select(right)} price={false} /></div>
      <div className="s-stack-back s-stack-left"><PhotoCard c={CATEGORIES[left]} onClick={() => select(left)} price={false} /></div>
      <div className="s-stack-front"><PhotoCard c={CATEGORIES[index]} size="lg" priority /></div>
      <div className="s-stack-dots" role="tablist" aria-label="Choose a kind of company">
        {CATEGORIES.map((c, i) => (
          <button key={c.slug} type="button" role="tab" aria-selected={i === index} aria-label={c.title} onClick={() => select(i)} className={i === index ? 'on' : ''} />
        ))}
      </div>
    </div>
  );
}
