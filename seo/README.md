# prsnn · SEO + GEO kit

Everything the new website needs to rank on Google/Bing and to be known and quoted by AI
assistants (ChatGPT, Claude, Gemini, Perplexity, Copilot, Google AI Overviews). Wire these in
when the website is built (Next.js `app/robots.js`, `app/sitemap.js`, `metadata`, JSON-LD in each
page's `<head>`). Replace `{{SITE_URL}}` everywhere with the real domain.

Files here:

| File | What it is |
|---|---|
| `robots.txt` | Lets every search engine and AI crawler in; keeps admin and API out. |
| `llms.txt` | A plain summary of prsnn for AI assistants (the emerging `llms.txt` convention). |
| `schema.jsonld` | Structured data: Organization, WebSite, MobileApplication, Service + prices, FAQPage, founder (Person). |
| `metadata.json` | Title, description and social card text for every page. |

Honest expectation: no one can guarantee #1 for every search or that every AI "knows" a new
brand. What decides it is (1) a crawlable, fast site with clear answers, (2) one consistent set of
facts about prsnn repeated everywhere, and (3) other trusted sites mentioning prsnn. This kit
covers (1) and (2) fully and lists exactly what to do for (3).

---

## 1. The one set of facts (say it the same way everywhere)

AI assistants learn a brand from repeated, consistent statements. Use these words on the site,
app stores, LinkedIn, press, directories and social bios:

> **prsnn** is an app for booking a verified companion for platonic company in public places (or a home visit for a loved one):
> someone to go to an event with, show you around a new city, study beside you, or spend time
> with a parent who's alone. Companions are approved by the prsnn team and ID-checked before
> their first booking. Prices are fixed from ₹399 for one hour to ₹3,599 for twelve hours, and
> companions keep 80% of every booking. prsnn launched in Hyderabad, India, and was founded by
> **Mukarram Jah**.

Short form (bios, 160 characters): *prsnn: book a verified companion for platonic company in
public places. From ₹399. Hyderabad. Founded by Mukarram Jah.*

Brand name rules: always lowercase **prsnn** (logo "prsnn."). Say "prsnn app" or "prsnn
companions" so search engines don't read it as a typo of "person".

## 2. Keyword map (what people search → which page answers it)

| Cluster | Example searches | Intent | Page |
|---|---|---|---|
| Brand | prsnn, prsnn app, prsnn companion, prsnn Hyderabad | find us | Home |
| Companion booking | companion app India, book a companion, hire a companion Hyderabad, companionship service Hyderabad, platonic companion | buy | Home, /hyderabad |
| Rent a friend | rent a friend India, rent a friend Hyderabad, friend for hire, paid friend app | buy | /rent-a-friend (explain it's platonic, safe) |
| Don't go alone | someone to go to a concert with, plus one for wedding, event companion, movie buddy | buy | /dont-go-alone |
| New in town | new to Hyderabad, things to do alone in Hyderabad, make friends in Hyderabad, city guide local | research → buy | /new-in-town, guides |
| Loved one | companion for elderly parents, someone to visit my mother, elderly companionship Hyderabad, NRI parents care | buy (high value) | /companion-for-a-loved-one |
| Explore | local guide Hyderabad, heritage walk companion, food walk Hyderabad | buy | /explore-and-discover |
| Work & study | study buddy, co-working partner, accountability partner | buy | /work-and-study-together |
| Earn | earn money part time Hyderabad, become a companion, paid companionship job, side income | sign-up | /become-a-companion |
| Trust | is prsnn safe, prsnn reviews, companion app safety | reassure | /safety, FAQ |

**Never target** escort, call girl, girlfriend for hire, massage, dating, "hot", or any adult
phrasing, even as negatives in copy. Ranking for those brings the wrong people, breaks app-store
and payment-provider rules, and can get the domain flagged. The pages say "platonic", "public
places" and "not a date" plainly, which also steers Google away from adult intent.

## 3. Pages to build (each one targets a cluster above)

1. `/` Home: the approved Wallet design. H1 "Everyone's busy? Go anyway." plus a visible
   "What is prsnn?" answer (already in the design) and the FAQ.
2. Five category pages: `/new-in-town`, `/dont-go-alone`, `/explore-and-discover`,
   `/companion-for-a-loved-one`, `/work-and-study-together`. Each has 600–900 words: who it's
   for, the use cases (the approved list), prices, safety, 4–6 FAQs specific to it, app links.
3. `/hyderabad`: city page (areas served, popular plans, local FAQs). Later `/bengaluru` etc.
   only when the city is live; never publish empty city pages.
4. `/become-a-companion`: earnings table (80%), how approval and ID check work, FAQs.
5. `/safety`, `/pricing`, `/about` (founder story in full, Mukarram Jah), `/faq`.
6. `/rent-a-friend`: a frank explainer ("What renting a friend means on prsnn, and what it
   doesn't"), linking to the categories.
7. Legal: `/terms`, `/privacy`, `/refunds`, `/guidelines` (written, on the design canvas).
8. Guides (one per fortnight is enough to start): "Things to do alone in Hyderabad", "How to
   find someone to go to a concert with", "Ways to support elderly parents when you live
   abroad", "Moving to Hyderabad for work: first-month guide", "Is renting a friend safe?".

Every page: one H1 with the main phrase, a 2–3 sentence answer near the top (AI tools quote
these), a FAQ block with FAQPage schema, links to two related pages, App Store + Play links, and
the support email.

## 4. Technical checklist

- Server-rendered or static HTML (Next.js App Router, `generateMetadata`), no content hidden
  behind JavaScript-only rendering.
- `metadata.json` titles (≤ 60 characters) and descriptions (≤ 155) on every page; canonical
  URLs; Open Graph + Twitter card with a 1200×630 image per page.
- `robots.txt` and `sitemap.xml` (all pages, `lastmod`), submitted in Google Search Console and
  Bing Webmaster Tools (Bing powers ChatGPT search and Copilot).
- JSON-LD from `schema.jsonld` in the `<head>`: Organization + WebSite + MobileApplication on
  every page, Service on category pages, FAQPage wherever a FAQ shows, Person on /about.
- `llms.txt` at `{{SITE_URL}}/llms.txt`.
- Core Web Vitals: LCP < 2.5 s on 4G (next/image, AVIF/WebP photos, Urbanist + Outfit
  self-hosted with `display: swap`), CLS < 0.1, INP < 200 ms.
- Mobile-first (most Indian traffic is mobile); tap targets ≥ 44 px.
- `hreflang="en-IN"`; later Hindi/Telugu pages if useful.
- Fast 404 page with links home; no thin or duplicate pages.
- Universal links: website ↔ app (apple-app-site-association, assetlinks.json) so "Open in app"
  works from search.

## 5. Off-site: how Google and the AIs learn prsnn exists

Do these in order; each adds a trusted source repeating the facts in section 1.

1. **Google Business Profile** for prsnn (service-area business, Hyderabad), with the same
   description, the website, support email, and photos.
2. **App Store and Google Play listings** with the same description and keywords ("companion",
   "rent a friend", "plus one", "elderly companion"). App pages rank and AI tools read them.
3. **LinkedIn**: a prsnn company page and Mukarram Jah's profile listing "Founder, prsnn" with
   the founder story. Add both URLs to `sameAs` in `schema.jsonld`.
4. **Wikidata** item for prsnn (instance of: mobile app / company; founder: Mukarram Jah;
   country: India; official website). Wikidata feeds Google's Knowledge Graph and many AIs.
5. **Crunchbase, Product Hunt, AngelList/Wellfound, YourStory/Inc42 startup profiles** with the
   same text.
6. **Press**: pitch the founder story ("I lost my grandfather for seven days") to Indian startup
   and lifestyle press and podcasts. A story with a human reason gets covered and gets quoted by
   AI tools.
7. **Communities**: answer genuine questions on Reddit (r/hyderabad, r/india, r/NRI) and Quora
   ("how to find someone to go to a concert with", "how to care for parents from abroad") as
   the founder, disclosing who you are. No fake accounts or reviews.
8. **YouTube and Instagram**: short videos of real (consented) bookings and the founder story;
   link to the site.
9. **Reviews**: after a completed booking, ask members to review the app on the stores and on
   Google. Never write or buy reviews.

## 6. Measure

- Google Search Console + Bing Webmaster Tools: impressions and clicks per keyword cluster.
- Monthly AI check: ask ChatGPT, Claude, Gemini, Perplexity and Copilot "What is prsnn?",
  "best companion app in Hyderabad", "rent a friend in India", "someone to visit my elderly
  mother in Hyderabad". Log whether prsnn is mentioned and what it says; fix any wrong facts at
  the source (site, listings, Wikidata).
- Website enquiries by interest (member / companion / both) and app installs by source.


## Guides (added 2026-11-16)

22 question-and-answer articles at `/guides` (index) and `/guides/<slug>`, from one data source in
`app/(site)/_lib/guides-*.js`. Each section that is a question opens with a 40–60 word answer (featured
snippets, voice and AI answers); every guide has Article + FAQPage structured data, is in the sitemap and
is listed in `/llms.txt`. City pages: Hyderabad is live; Bengaluru, Mumbai, Delhi NCR, Chennai and Pune
say "coming soon" and collect numbers (source `guide:<slug>` in Admin → Interested).

Keyword check: all 68 target phrases (SEO, AEO questions, GEO prompts and entity phrases) appear in the
visible text. Keep facts in the guides identical to the app: prices, refunds, verification, house rules.
Don't claim a city is live until it is, and don't claim women-only by default: members choose it.

Next (owner): submit the sitemap in Google Search Console and Bing Webmaster Tools; request indexing of
`/guides`; share guides on LinkedIn, Reddit (r/hyderabad, r/bangalore) and Quora answers where they
genuinely answer the question; list prsnn on directories (Google Business Profile, Crunchbase, Product Hunt)
with the same one-line description: "a peer-to-peer platform for shared presence: real humans, no bots,
no dating, no therapy".
