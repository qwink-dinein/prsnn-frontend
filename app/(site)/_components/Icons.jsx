// Stroke icons, one colour (currentColor). Decorative unless a label is given.
const base = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' };
const I = ({ d, size = 18, width = 2, children }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" strokeWidth={width} {...base}>
    {d ? <path d={d} /> : children}
  </svg>
);
export const Check = (p) => <I d="M5 12.5 10 17l9-10" width={2.6} {...p} />;
export const Cross = (p) => <I d="M6 6l12 12M18 6 6 18" width={2.4} {...p} />;
export const Arrow = (p) => <I d="M5 12h14M13 6l6 6-6 6" width={2.2} {...p} />;
export const Chevron = (p) => <I d="M9 6l6 6-6 6" width={2.2} {...p} />;
export const Shield = (p) => (
  <I {...p} width={1.8}>
    <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6z" />
    <path d="m8.8 12 2.2 2.2 4.4-4.4" />
  </I>
);
export const Pin = (p) => (
  <I {...p} width={1.8}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.3" />
  </I>
);
export const Clock = (p) => (
  <I {...p} width={1.8}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5v5l3 2" />
  </I>
);
export const Refund = (p) => (
  <I {...p} width={1.8}>
    <path d="M4 12a8 8 0 1 0 2.4-5.7" />
    <path d="M4 4v4h4" />
  </I>
);
export const Mail = (p) => (
  <I {...p} width={1.8}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6 8.5-6" />
  </I>
);
export const Apple = ({ size = 22 }) => (
  <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9s-1.9-.9-3.2-.8c-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8s1.9.8 3.2.8 2.1-1.2 2.9-2.4c.9-1.4 1.3-2.7 1.3-2.8 0 0-2.4-1-2.4-3.9zM14 5.5c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.1-.6 2.8-1.4z" />
  </svg>
);
export const Play = ({ size = 22 }) => (
  <svg aria-hidden="true" width={size - 2} height={size} viewBox="0 0 22 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
    <path d="M3 2.5 14 12 3 21.5z" />
    <path d="M3 2.5 17.5 10.5 14 12zM3 21.5 17.5 13.5 14 12z" />
  </svg>
);
