# Graph Report - prsnn-frontend  (2026-11-15)

## Corpus Check
- 146 files · ~77,537 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 2, .css 2, .jsonld 1)

## Summary
- 551 nodes · 1477 edges · 31 communities (26 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `14d5de3d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- next
- Reveal
- companions/page.jsx
- LegalLayout.jsx
- @sentry/nextjs
- login/page.jsx
- (app)/layout.jsx
- PageHead.jsx
- package.json
- legal.jsx
- devDependencies
- ProcessIllustrations.jsx
- WhyChooseUs.jsx
- app/layout.jsx
- support/page.jsx
- [slug]/page.jsx
- allowBuilds
- dependencies
- compilerOptions
- vitest
- postcss.config.mjs
- eslint.config.mjs
- setup.jsx
- scripts
- content.js
- (site)/layout.jsx
- (site)/page.jsx
- InterestForm.jsx
- CategoryContext.jsx
- [category]/page.jsx
- robots.js

## God Nodes (most connected - your core abstractions)
1. `next` - 73 edges
2. `useAuth()` - 60 edges
3. `react` - 57 edges
4. `Reveal()` - 37 edges
5. `Loading()` - 36 edges
6. `PageHead()` - 25 edges
7. `axios` - 23 edges
8. `Contact()` - 22 edges
9. `LegalLinks()` - 21 edges
10. `SectionHeader()` - 20 edges

## Surprising Connections (you probably didn't know these)
- `TestConsumer()` --calls--> `useAuth()`  [EXTRACTED]
  src/tests/context/AuthContext.test.jsx → legacy/web-app/app/(app)/context/AuthContext.jsx
- `Home()` --calls--> `CommunityBanner()`  [EXTRACTED]
  app/(site)/page.jsx → app/(site)/_components/CommunityBanner.jsx
- `StoreButtons()` --indirect_call--> `Apple()`  [INFERRED]
  app/(site)/_components/StoreButtons.jsx → app/(site)/_components/Icons.jsx
- `StoreButtons()` --indirect_call--> `Play()`  [INFERRED]
  app/(site)/_components/StoreButtons.jsx → app/(site)/_components/Icons.jsx
- `PhotoCard()` --calls--> `inr()`  [EXTRACTED]
  app/(site)/_components/PhotoCard.jsx → app/(site)/_lib/content.js

## Import Cycles
- None detected.

## Communities (31 total, 5 thin omitted)

### Community 0 - "next"
Cohesion: 0.08
Nodes (38): AdminLayout(), AdminOnboardingPage(), AdminPanel(), UserDetailsPage(), FellowProfile(), Chat(), Loading(), VerificationGuard() (+30 more)

### Community 1 - "Reveal"
Cohesion: 0.08
Nodes (38): AboutUs(), values, Reveal(), SectionHeader(), BecomeCompanion(), benefits, FAQ(), faqs (+30 more)

### Community 2 - "companions/page.jsx"
Cohesion: 0.15
Nodes (16): allInterestTags, CompanionCard(), CompanionsContent(), CompanionsPage(), daysOfWeek, EmptyState(), FilterChip(), modeApiLabels (+8 more)

### Community 3 - "LegalLayout.jsx"
Cohesion: 0.50
Nodes (12): CodeOfConduct(), LegalBody(), LegalHero(), LegalIntro(), LegalList(), legalNav, LegalNav(), LegalSection() (+4 more)

### Community 4 - "@sentry/nextjs"
Cohesion: 0.12
Nodes (10): onRouterTransitionStart, onRequestError, register(), dynamic, GET(), SentryExampleAPIError, Page(), SentryExampleFrontendError (+2 more)

### Community 5 - "login/page.jsx"
Cohesion: 0.09
Nodes (34): AuthField(), AuthShell(), AuthSubmit(), EyeToggle(), IconEye(), IconEyeOff(), IconLock(), IconMail() (+26 more)

### Community 6 - "(app)/layout.jsx"
Cohesion: 0.20
Nodes (10): GlobalClickGuard(), EnvBanner(), marketingLinks, NavBar(), NavBarInner(), AuthProvider(), AppLayout(), dmSans (+2 more)

### Community 7 - "PageHead.jsx"
Cohesion: 0.20
Nodes (18): Become(), CategoryPage(), Faq(), JsonLd(), PageHead(), StoreButtons(), Hyderabad(), metadata (+10 more)

### Community 8 - "package.json"
Cohesion: 0.18
Nodes (10): @types/node@20.19.30, @types/react-dom@^19, engines, node, name, packageManager, private, version (+2 more)

### Community 9 - "legal.jsx"
Cohesion: 0.12
Nodes (35): metadata, Page(), metadata, Page(), LEGAL_PAGES, LegalLinks(), metadata, Page() (+27 more)

### Community 10 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, jsdom@^29.0.1, tailwindcss@^4, @tailwindcss/postcss@^4, @testing-library/react@^16.3.2, @testing-library/user-event@^14.6.1, @types/react@19.2.9, jsdom (+5 more)

### Community 13 - "app/layout.jsx"
Cohesion: 0.40
Nodes (3): metadata, SITE_URL, viewport

### Community 14 - "support/page.jsx"
Cohesion: 0.43
Nodes (5): Mail(), RevealEmail(), encodedSupportEmail(), metadata, Page()

### Community 15 - "[slug]/page.jsx"
Cohesion: 0.11
Nodes (18): Guides(), list, metadata, Cta(), dynamicParams, generateMetadata(), Guide(), PAGES (+10 more)

### Community 16 - "allowBuilds"
Cohesion: 0.40
Nodes (4): allowBuilds, @sentry/cli, sharp, unrs-resolver

### Community 17 - "dependencies"
Cohesion: 0.22
Nodes (9): dependencies, axios@^1.13.2, next@16.1.4, react@19.2.3, react-dom@19.2.3, @sentry/nextjs@^10.44.0, socket.io-client@^4.8.3, react-dom (+1 more)

### Community 19 - "vitest"
Cohesion: 0.33
Nodes (4): @vitejs/plugin-react@^6.0.1, vitest@^4.1.0, @vitejs/plugin-react, vitest

### Community 21 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.1.4, eslint, eslint-config-next

### Community 23 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, start, test

### Community 24 - "content.js"
Cohesion: 0.11
Nodes (21): About(), metadata, CommunityBanner(), FounderStory(), Apple(), Play(), graph, metadata (+13 more)

### Community 25 - "(site)/layout.jsx"
Cohesion: 0.16
Nodes (14): metadata, NotFound(), outfit, urbanist, Guilloche(), Logo(), Mark(), Footer() (+6 more)

### Community 26 - "(site)/page.jsx"
Cohesion: 0.21
Nodes (18): CategoryProvider(), Arrow(), base, Check(), Chevron(), Clock(), Cross(), I() (+10 more)

### Community 27 - "InterestForm.jsx"
Cohesion: 0.23
Nodes (10): metadata, STEPS, CHOICES, InterestForm(), companionShare(), HOURS, PRICES, COUNTRY_CODES (+2 more)

### Community 28 - "CategoryContext.jsx"
Cohesion: 0.35
Nodes (8): Ctx, OpenCategory(), useCategory(), HeroStack(), ICONS, PhotoCard(), PhotoCardRow(), CATEGORIES

### Community 29 - "[category]/page.jsx"
Cohesion: 0.40
Nodes (4): dynamicParams, generateMetadata(), SHARED_FAQ, categoryBySlug()

### Community 30 - "robots.js"
Cohesion: 0.40
Nodes (3): AI_AND_SEARCH, dynamic, PRIVATE

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `Reveal`, `companions/page.jsx`, `LegalLayout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `(app)/layout.jsx`, `PageHead.jsx`, `package.json`, `legal.jsx`, `support/page.jsx`, `[slug]/page.jsx`, `dependencies`, `content.js`, `(site)/layout.jsx`, `(site)/page.jsx`, `InterestForm.jsx`, `CategoryContext.jsx`, `[category]/page.jsx`?**
  _High betweenness centrality (0.516) - this node is a cross-community bridge._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.08458208458208458 - nodes in this community are weakly interconnected._
- **Why does `react` connect `next` to `Reveal`, `companions/page.jsx`, `LegalLayout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `(app)/layout.jsx`, `package.json`, `ProcessIllustrations.jsx`, `WhyChooseUs.jsx`, `support/page.jsx`, `dependencies`, `(site)/layout.jsx`, `(site)/page.jsx`, `InterestForm.jsx`, `CategoryContext.jsx`?**
  _High betweenness centrality (0.177) - this node is a cross-community bridge._
- **Should `Reveal` be split into smaller, more focused modules?**
  _Cohesion score 0.07792207792207792 - nodes in this community are weakly interconnected._
- **Why does `@sentry/nextjs` connect `@sentry/nextjs` to `next`, `package.json`, `dependencies`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Should `companions/page.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14761904761904762 - nodes in this community are weakly interconnected._
- **Should `@sentry/nextjs` be split into smaller, more focused modules?**
  _Cohesion score 0.12380952380952381 - nodes in this community are weakly interconnected._