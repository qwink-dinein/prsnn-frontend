# Graph Report - prsnn-frontend  (2026-11-16)

## Corpus Check
- 146 files · ~79,299 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 2, .css 2, .jsonld 1)

## Summary
- 555 nodes · 1471 edges · 28 communities (23 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6f17ff83`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- next
- Reveal
- companions/page.jsx
- LegalLayout.jsx
- @sentry/nextjs
- login/page.jsx
- Home
- [category]/page.jsx
- devDependencies
- legal.jsx
- package.json
- ProcessIllustrations.jsx
- WhyChooseUs.jsx
- app/layout.jsx
- _components/Footer.jsx
- [slug]/page.jsx
- allowBuilds
- dependencies
- compilerOptions
- setup.jsx
- postcss.config.mjs
- eslint.config.mjs
- CategoryContext.jsx
- scripts
- InterestForm.jsx
- content.js
- vitest
- (site)/page.jsx

## God Nodes (most connected - your core abstractions)
1. `next` - 72 edges
2. `useAuth()` - 60 edges
3. `react` - 59 edges
4. `Reveal()` - 37 edges
5. `Loading()` - 36 edges
6. `PageHead()` - 24 edges
7. `axios` - 23 edges
8. `Contact()` - 22 edges
9. `SectionHeader()` - 20 edges
10. `LegalLinks()` - 20 edges

## Surprising Connections (you probably didn't know these)
- `TestConsumer()` --calls--> `useAuth()`  [EXTRACTED]
  src/tests/context/AuthContext.test.jsx → legacy/web-app/app/(app)/context/AuthContext.jsx
- `Home()` --calls--> `CommunityBanner()`  [EXTRACTED]
  app/(site)/page.jsx → app/(site)/_components/CommunityBanner.jsx
- `SiteLayout()` --calls--> `Header()`  [EXTRACTED]
  app/(site)/layout.jsx → app/(site)/_components/Header.jsx
- `VerificationGuard()` --calls--> `useAuth()`  [EXTRACTED]
  legacy/web-app/app/(app)/components/common/VerificationGuard.jsx → legacy/web-app/app/(app)/context/AuthContext.jsx
- `BecomeCompanion()` --calls--> `Reveal()`  [EXTRACTED]
  legacy/web-app/app/(app)/components/home/BecomeCompanion.jsx → legacy/web-app/app/(app)/components/common/Reveal.jsx

## Import Cycles
- None detected.

## Communities (28 total, 5 thin omitted)

### Community 0 - "next"
Cohesion: 0.06
Nodes (53): AdminLayout(), AdminOnboardingPage(), AdminPanel(), UserDetailsPage(), FellowProfile(), GlobalClickGuard(), Chat(), EnvBanner() (+45 more)

### Community 1 - "Reveal"
Cohesion: 0.09
Nodes (35): AboutUs(), values, Reveal(), SectionHeader(), FAQ(), faqs, HowItWorks(), steps (+27 more)

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
Cohesion: 0.10
Nodes (32): AuthField(), AuthShell(), AuthSubmit(), EyeToggle(), IconEye(), IconEyeOff(), IconLock(), IconMail() (+24 more)

### Community 6 - "Home"
Cohesion: 0.17
Nodes (19): Become(), metadata, STEPS, Guilloche(), Mark(), JsonLd(), CHOICES, MAT (+11 more)

### Community 7 - "[category]/page.jsx"
Cohesion: 0.18
Nodes (13): CategoryPage(), dynamicParams, generateMetadata(), SHARED_FAQ, Faq(), Apple(), Play(), StoreButtons() (+5 more)

### Community 8 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, jsdom@^29.0.1, tailwindcss@^4, @tailwindcss/postcss@^4, @testing-library/react@^16.3.2, @testing-library/user-event@^14.6.1, @types/react@19.2.9, jsdom (+5 more)

### Community 9 - "legal.jsx"
Cohesion: 0.11
Nodes (38): metadata, Page(), metadata, Page(), LEGAL_PAGES, LegalLinks(), PageHead(), metadata (+30 more)

### Community 10 - "package.json"
Cohesion: 0.18
Nodes (10): @types/node@20.19.30, @types/react-dom@^19, engines, node, name, packageManager, private, version (+2 more)

### Community 13 - "app/layout.jsx"
Cohesion: 0.40
Nodes (3): metadata, SITE_URL, viewport

### Community 14 - "_components/Footer.jsx"
Cohesion: 0.19
Nodes (10): metadata, NotFound(), outfit, urbanist, Logo(), Footer(), ICONS, Header() (+2 more)

### Community 15 - "[slug]/page.jsx"
Cohesion: 0.11
Nodes (18): Guides(), list, metadata, Cta(), dynamicParams, generateMetadata(), Guide(), PAGES (+10 more)

### Community 16 - "allowBuilds"
Cohesion: 0.40
Nodes (4): allowBuilds, @sentry/cli, sharp, unrs-resolver

### Community 17 - "dependencies"
Cohesion: 0.22
Nodes (9): dependencies, axios@^1.13.2, next@16.1.4, react@19.2.3, react-dom@19.2.3, @sentry/nextjs@^10.44.0, socket.io-client@^4.8.3, react-dom (+1 more)

### Community 21 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.1.4, eslint, eslint-config-next

### Community 22 - "CategoryContext.jsx"
Cohesion: 0.27
Nodes (9): CategoryProvider(), Ctx, useCategory(), HeroStack(), wrap(), ICONS, PhotoCard(), PhotoCardRow() (+1 more)

### Community 23 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, start, test

### Community 24 - "InterestForm.jsx"
Cohesion: 0.46
Nodes (5): CHOICES, InterestForm(), COUNTRY_CODES, phoneError(), submitEnquiry()

### Community 25 - "content.js"
Cohesion: 0.09
Nodes (24): AI_AND_SEARCH, dynamic, PRIVATE, About(), metadata, OpenCategory(), CommunityBanner(), FounderStory() (+16 more)

### Community 26 - "vitest"
Cohesion: 0.33
Nodes (4): @vitejs/plugin-react@^6.0.1, vitest@^4.1.0, @vitejs/plugin-react, vitest

### Community 27 - "(site)/page.jsx"
Cohesion: 0.14
Nodes (22): FilmHero(), Arrow(), base, Check(), Chevron(), Clock(), Cross(), I() (+14 more)

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `Reveal`, `companions/page.jsx`, `LegalLayout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `Home`, `[category]/page.jsx`, `legal.jsx`, `package.json`, `_components/Footer.jsx`, `[slug]/page.jsx`, `dependencies`, `CategoryContext.jsx`, `InterestForm.jsx`, `content.js`, `(site)/page.jsx`?**
  _High betweenness centrality (0.511) - this node is a cross-community bridge._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.06095903708017861 - nodes in this community are weakly interconnected._
- **Why does `react` connect `next` to `Reveal`, `companions/page.jsx`, `LegalLayout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `Home`, `package.json`, `ProcessIllustrations.jsx`, `WhyChooseUs.jsx`, `dependencies`, `CategoryContext.jsx`, `InterestForm.jsx`, `(site)/page.jsx`?**
  _High betweenness centrality (0.184) - this node is a cross-community bridge._
- **Should `Reveal` be split into smaller, more focused modules?**
  _Cohesion score 0.08705882352941176 - nodes in this community are weakly interconnected._
- **Why does `@sentry/nextjs` connect `@sentry/nextjs` to `next`, `dependencies`, `package.json`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Should `companions/page.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14761904761904762 - nodes in this community are weakly interconnected._
- **Should `@sentry/nextjs` be split into smaller, more focused modules?**
  _Cohesion score 0.12380952380952381 - nodes in this community are weakly interconnected._