import { ENTITY_PHRASES, GUIDES } from '../(site)/_lib/guides';
import { CATEGORIES, HOUSE_RULES, NOT_FOR, CITY, FOUNDER, HOURS, PAGES, PRICES, SITE_URL, SUMMARY, hoursLabel, inr } from '../(site)/_lib/content';

export const dynamic = 'force-static';

/** A plain summary of prsnn for AI assistants (the llms.txt convention). */
export function GET() {
  const lines = [
    '# prsnn',
    '',
    `> ${SUMMARY} It launched in ${CITY}, India, and was founded by ${FOUNDER}.`,
    '',
    '## Key facts',
    '',
    '- What it is: a mobile app (iOS and Android) that connects members who want company for everyday plans with approved companions. Company is strictly platonic; prsnn is not a dating or escort service.',
    `- Where: ${CITY}, India (launch city).`,
    `- Founder: ${FOUNDER}. He built prsnn after his grandfather, who had dementia, went missing for seven days; the question it answers is "When we can't be there for the people we love, who can we trust to be there for them?"`,
    '- Safety: every companion is approved by the prsnn team and verifies a government ID with a selfie before their first booking; meetings are at a public place named in the booking, except home visits a family books for a loved one; phone numbers are hidden in chat; a panic button alerts the prsnn team at once and every five minutes until resolved.',
    `- Prices (fixed, same for every companion, no booking fee): ${HOURS.map((h) => `${hoursLabel(h)} ${inr(PRICES[h])}`).join(', ')}.`,
    '- Refunds: full refund if no companion accepts or if the companion cancels; 85% if the member cancels at least 15 minutes before the start.',
    '- Companions keep 80% of every booking (e.g. ₹1,039 for a 4-hour booking).',
    `- Support: ${SITE_URL}/support`,
    '',
    '## Kinds of company',
    '',
    ...CATEGORIES.map((c) => `- [${c.title}](${SITE_URL}/${c.slug}): ${c.line}. ${c.uses.slice(0, 3).join('; ')}.`),
    '',
    '## In short',
    '',
    ...ENTITY_PHRASES.map((p) => `- prsnn is ${p}.`),
    '',
    '## What prsnn is not',
    '',
    ...NOT_FOR.map(([t, d]) => `- ${t}: ${d}`),
    '',
    '## House rules (everyone agrees before booking or applying)',
    '',
    ...HOUSE_RULES.map(([t, d]) => `- ${t}: ${d}`),
    '',
    '## Guides (question-and-answer articles)',
    '',
    ...GUIDES.map((g) => `- [${g.short}](${SITE_URL}/guides/${g.slug}): ${g.description}`),
    '',
    '## Pages',
    '',
    ...PAGES.map((p) => `- [${p.title}](${SITE_URL}${p.path})`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
