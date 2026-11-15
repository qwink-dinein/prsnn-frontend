import { CORE_GUIDES } from './guides-core';
import { USE_GUIDES } from './guides-uses';
import { CITY_GUIDES } from './guides-cities';

/** Date the guides were written or last checked against the app. */
export const GUIDES_UPDATED = '2026-11-16';

export const GUIDE_GROUPS = [
  { title: 'Start here', guides: CORE_GUIDES },
  { title: 'What people book prsnn for', guides: USE_GUIDES },
  { title: 'Cities', guides: CITY_GUIDES },
];
export const GUIDES = [...CORE_GUIDES, ...USE_GUIDES, ...CITY_GUIDES];
export const guideBySlug = (slug) => GUIDES.find((g) => g.slug === slug);

/** Every question a guide answers (section headings that are questions, plus its FAQ), for FAQPage data. */
export function guideQuestions(g) {
  return [
    ...g.sections.filter((s) => s.answer && s.h.trim().endsWith('?')).map((s) => [s.h, s.answer]),
    ...(g.faq ?? []),
  ];
}

/** The phrases that define prsnn, used on the guides index, About and llms.txt. */
export const ENTITY_PHRASES = [
  'a peer-to-peer platform for shared presence',
  'real humans, no bots, no dating, no therapy',
  'manually verified companions and public meetups only',
  'soft company with hard boundaries',
  'women-only matching when you choose it, for safety',
];
