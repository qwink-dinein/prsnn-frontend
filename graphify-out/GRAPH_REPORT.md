# Graph Report - prsnn-frontend  (2026-11-15)

## Corpus Check
- 135 files · ~67,666 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .css 2, .jsonld 1)

## Summary
- 508 nodes · 1377 edges · 29 communities (23 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a97c61f1`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- next
- (site)/page.jsx
- companions/page.jsx
- (app)/layout.jsx
- @sentry/nextjs
- login/page.jsx
- Reveal
- pricing/page.jsx
- package.json
- legal.jsx
- content.js
- LegalLayout.jsx
- ProcessIllustrations.jsx
- app/layout.jsx
- WhyChooseUs.jsx
- Home
- allowBuilds
- dependencies
- compilerOptions
- vitest
- postcss.config.mjs
- eslint.config.mjs
- setup.jsx
- scripts
- CategoryContext.jsx
- [category]/page.jsx
- about/page.jsx
- InterestForm.jsx
- @vitejs/plugin-react

## God Nodes (most connected - your core abstractions)
1. `next` - 67 edges
2. `useAuth()` - 60 edges
3. `react` - 56 edges
4. `Reveal()` - 37 edges
5. `Loading()` - 36 edges
6. `PageHead()` - 23 edges
7. `axios` - 23 edges
8. `Contact()` - 22 edges
9. `SectionHeader()` - 20 edges
10. `LegalLinks()` - 19 edges

## Surprising Connections (you probably didn't know these)
- `TestConsumer()` --calls--> `useAuth()`  [EXTRACTED]
  src/tests/context/AuthContext.test.jsx → app/(app)/context/AuthContext.jsx
- `Footer()` --calls--> `Logo()`  [EXTRACTED]
  app/(site)/_components/Footer.jsx → app/(site)/_components/Brand.jsx
- `CategoryPage()` --calls--> `inr()`  [EXTRACTED]
  app/(site)/[category]/page.jsx → app/(site)/_lib/content.js
- `PhotoCard()` --calls--> `inr()`  [EXTRACTED]
  app/(site)/_components/PhotoCard.jsx → app/(site)/_lib/content.js
- `Hyderabad()` --calls--> `inr()`  [EXTRACTED]
  app/(site)/hyderabad/page.jsx → app/(site)/_lib/content.js

## Import Cycles
- None detected.

## Communities (29 total, 6 thin omitted)

### Community 0 - "next"
Cohesion: 0.07
Nodes (53): AdminLayout(), AdminOnboardingPage(), AdminPanel(), UserDetailsPage(), FellowProfile(), AuthField(), AuthShell(), AuthSubmit() (+45 more)

### Community 1 - "(site)/page.jsx"
Cohesion: 0.22
Nodes (16): Arrow(), base, Check(), Chevron(), Clock(), I(), Mail(), Pin() (+8 more)

### Community 2 - "companions/page.jsx"
Cohesion: 0.15
Nodes (16): allInterestTags, CompanionCard(), CompanionsContent(), CompanionsPage(), daysOfWeek, EmptyState(), FilterChip(), modeApiLabels (+8 more)

### Community 3 - "(app)/layout.jsx"
Cohesion: 0.20
Nodes (10): GlobalClickGuard(), EnvBanner(), marketingLinks, NavBar(), NavBarInner(), NotificationProvider(), AppLayout(), dmSans (+2 more)

### Community 4 - "@sentry/nextjs"
Cohesion: 0.12
Nodes (10): dynamic, GET(), SentryExampleAPIError, Page(), SentryExampleFrontendError, onRouterTransitionStart, onRequestError, register() (+2 more)

### Community 5 - "login/page.jsx"
Cohesion: 0.15
Nodes (16): AuthInput(), getPasswordStrength(), IconEye(), IconEyeOff(), Login(), LoginContent(), trustItems, DEFAULT_PASSWORD_LENGTH (+8 more)

### Community 6 - "Reveal"
Cohesion: 0.08
Nodes (38): AboutUs(), values, Reveal(), SectionHeader(), BecomeCompanion(), benefits, FAQ(), faqs (+30 more)

### Community 7 - "pricing/page.jsx"
Cohesion: 0.18
Nodes (14): Faq(), Apple(), Play(), StoreButtons(), Hyderabad(), metadata, PRICES, savingFor() (+6 more)

### Community 8 - "package.json"
Cohesion: 0.12
Nodes (21): devDependencies, jsdom@^29.0.1, tailwindcss@^4, @tailwindcss/postcss@^4, @testing-library/user-event@^14.6.1, @types/node@20.19.30, @types/react@19.2.9, @types/react-dom@^19 (+13 more)

### Community 9 - "legal.jsx"
Cohesion: 0.13
Nodes (35): metadata, Page(), metadata, Page(), LEGAL_PAGES, LegalLinks(), PageHead(), metadata (+27 more)

### Community 10 - "content.js"
Cohesion: 0.10
Nodes (20): AI_AND_SEARCH, PRIVATE, Logo(), CommunityBanner(), Footer(), Header(), graph, metadata (+12 more)

### Community 11 - "LegalLayout.jsx"
Cohesion: 0.50
Nodes (12): CodeOfConduct(), LegalBody(), LegalHero(), LegalIntro(), LegalList(), legalNav, LegalNav(), LegalSection() (+4 more)

### Community 13 - "app/layout.jsx"
Cohesion: 0.40
Nodes (3): metadata, SITE_URL, viewport

### Community 15 - "Home"
Cohesion: 0.23
Nodes (13): Become(), metadata, STEPS, Guilloche(), Mark(), CHOICES, MAT, PricePicker() (+5 more)

### Community 16 - "allowBuilds"
Cohesion: 0.40
Nodes (4): allowBuilds, @sentry/cli, sharp, unrs-resolver

### Community 17 - "dependencies"
Cohesion: 0.22
Nodes (9): dependencies, axios@^1.13.2, next@16.1.4, react@19.2.3, react-dom@19.2.3, @sentry/nextjs@^10.44.0, socket.io-client@^4.8.3, react-dom (+1 more)

### Community 19 - "vitest"
Cohesion: 0.25
Nodes (7): Footer(), AuthProvider(), @testing-library/react@^16.3.2, vitest@^4.1.0, @testing-library/react, vitest, TestConsumer()

### Community 21 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.1.4, eslint, eslint-config-next

### Community 23 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, start, test

### Community 24 - "CategoryContext.jsx"
Cohesion: 0.33
Nodes (8): CategoryProvider(), Ctx, useCategory(), HeroStack(), ICONS, PhotoCard(), PhotoCardRow(), CATEGORIES

### Community 25 - "[category]/page.jsx"
Cohesion: 0.27
Nodes (7): CategoryPage(), dynamicParams, generateMetadata(), SHARED_FAQ, JsonLd(), SiteLayout(), categoryBySlug()

### Community 26 - "about/page.jsx"
Cohesion: 0.39
Nodes (6): About(), metadata, OpenCategory(), FounderStory(), FOUNDER, SUMMARY

### Community 27 - "InterestForm.jsx"
Cohesion: 0.46
Nodes (5): CHOICES, InterestForm(), COUNTRY_CODES, phoneError(), submitEnquiry()

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `(site)/page.jsx`, `companions/page.jsx`, `(app)/layout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `Reveal`, `pricing/page.jsx`, `package.json`, `legal.jsx`, `content.js`, `LegalLayout.jsx`, `Home`, `dependencies`, `CategoryContext.jsx`, `[category]/page.jsx`, `about/page.jsx`, `InterestForm.jsx`?**
  _High betweenness centrality (0.495) - this node is a cross-community bridge._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.06921944035346098 - nodes in this community are weakly interconnected._
- **Why does `react` connect `next` to `(site)/page.jsx`, `companions/page.jsx`, `(app)/layout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `Reveal`, `package.json`, `LegalLayout.jsx`, `ProcessIllustrations.jsx`, `WhyChooseUs.jsx`, `Home`, `dependencies`, `CategoryContext.jsx`, `InterestForm.jsx`?**
  _High betweenness centrality (0.200) - this node is a cross-community bridge._
- **Should `companions/page.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14761904761904762 - nodes in this community are weakly interconnected._
- **Why does `@sentry/nextjs` connect `@sentry/nextjs` to `next`, `package.json`, `dependencies`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Should `@sentry/nextjs` be split into smaller, more focused modules?**
  _Cohesion score 0.12380952380952381 - nodes in this community are weakly interconnected._
- **Should `Reveal` be split into smaller, more focused modules?**
  _Cohesion score 0.07792207792207792 - nodes in this community are weakly interconnected._