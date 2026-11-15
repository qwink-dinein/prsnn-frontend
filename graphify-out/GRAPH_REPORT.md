# Graph Report - prsnn-frontend  (2026-11-15)

## Corpus Check
- 136 files · ~68,367 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .css 2, .jsonld 1)

## Summary
- 513 nodes · 1388 edges · 29 communities (23 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e23bc235`
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
- [category]/page.jsx
- package.json
- legal.jsx
- content.js
- LegalLayout.jsx
- ProcessIllustrations.jsx
- app/layout.jsx
- WhyChooseUs.jsx
- PricePicker.jsx
- allowBuilds
- dependencies
- compilerOptions
- vitest
- postcss.config.mjs
- eslint.config.mjs
- setup.jsx
- scripts
- CategoryContext.jsx
- (site)/layout.jsx
- Faq.jsx
- InterestForm.jsx
- @vitejs/plugin-react

## God Nodes (most connected - your core abstractions)
1. `next` - 69 edges
2. `useAuth()` - 60 edges
3. `react` - 56 edges
4. `Reveal()` - 36 edges
5. `Loading()` - 35 edges
6. `PageHead()` - 23 edges
7. `axios` - 23 edges
8. `Contact()` - 22 edges
9. `SectionHeader()` - 19 edges
10. `LegalLinks()` - 19 edges

## Surprising Connections (you probably didn't know these)
- `TestConsumer()` --calls--> `useAuth()`  [EXTRACTED]
  src/tests/context/AuthContext.test.jsx → app/(app)/context/AuthContext.jsx
- `Home()` --calls--> `CommunityBanner()`  [EXTRACTED]
  app/(site)/page.jsx → app/(site)/_components/CommunityBanner.jsx
- `CategoryPage()` --calls--> `Check()`  [EXTRACTED]
  app/(site)/[category]/page.jsx → app/(site)/_components/Icons.jsx
- `InterestForm()` --calls--> `Check()`  [EXTRACTED]
  app/(site)/_components/InterestForm.jsx → app/(site)/_components/Icons.jsx
- `StoreButtons()` --indirect_call--> `Apple()`  [INFERRED]
  app/(site)/_components/StoreButtons.jsx → app/(site)/_components/Icons.jsx

## Import Cycles
- None detected.

## Communities (29 total, 6 thin omitted)

### Community 0 - "next"
Cohesion: 0.09
Nodes (38): AdminLayout(), AdminOnboardingPage(), AdminPanel(), UserDetailsPage(), FellowProfile(), Chat(), Loading(), VerificationGuard() (+30 more)

### Community 1 - "(site)/page.jsx"
Cohesion: 0.23
Nodes (17): CategoryProvider(), Arrow(), base, Check(), Chevron(), Clock(), Cross(), I() (+9 more)

### Community 2 - "companions/page.jsx"
Cohesion: 0.15
Nodes (16): allInterestTags, CompanionCard(), CompanionsContent(), CompanionsPage(), daysOfWeek, EmptyState(), FilterChip(), modeApiLabels (+8 more)

### Community 3 - "(app)/layout.jsx"
Cohesion: 0.24
Nodes (9): GlobalClickGuard(), EnvBanner(), Footer(), AuthProvider(), NotificationProvider(), AppLayout(), dmSans, metadata (+1 more)

### Community 4 - "@sentry/nextjs"
Cohesion: 0.12
Nodes (10): dynamic, GET(), SentryExampleAPIError, Page(), SentryExampleFrontendError, onRouterTransitionStart, onRequestError, register() (+2 more)

### Community 5 - "login/page.jsx"
Cohesion: 0.10
Nodes (32): AuthField(), AuthShell(), AuthSubmit(), EyeToggle(), IconEye(), IconEyeOff(), IconLock(), IconMail() (+24 more)

### Community 6 - "Reveal"
Cohesion: 0.08
Nodes (38): AboutUs(), values, Reveal(), SectionHeader(), BecomeCompanion(), benefits, FAQ(), faqs (+30 more)

### Community 7 - "[category]/page.jsx"
Cohesion: 0.15
Nodes (22): Become(), metadata, STEPS, CategoryPage(), dynamicParams, generateMetadata(), SHARED_FAQ, Apple() (+14 more)

### Community 8 - "package.json"
Cohesion: 0.12
Nodes (21): devDependencies, jsdom@^29.0.1, tailwindcss@^4, @tailwindcss/postcss@^4, @testing-library/user-event@^14.6.1, @types/node@20.19.30, @types/react@19.2.9, @types/react-dom@^19 (+13 more)

### Community 9 - "legal.jsx"
Cohesion: 0.12
Nodes (36): metadata, Page(), metadata, Page(), LEGAL_PAGES, LegalLinks(), PageHead(), metadata (+28 more)

### Community 10 - "content.js"
Cohesion: 0.13
Nodes (15): AI_AND_SEARCH, PRIVATE, About(), metadata, CommunityBanner(), FounderStory(), CITY, COMMUNITY_IMG (+7 more)

### Community 11 - "LegalLayout.jsx"
Cohesion: 0.50
Nodes (12): CodeOfConduct(), LegalBody(), LegalHero(), LegalIntro(), LegalList(), legalNav, LegalNav(), LegalSection() (+4 more)

### Community 13 - "app/layout.jsx"
Cohesion: 0.40
Nodes (3): metadata, SITE_URL, viewport

### Community 15 - "PricePicker.jsx"
Cohesion: 0.43
Nodes (6): Guilloche(), Mark(), CHOICES, MAT, PricePicker(), savingFor()

### Community 16 - "allowBuilds"
Cohesion: 0.40
Nodes (4): allowBuilds, @sentry/cli, sharp, unrs-resolver

### Community 17 - "dependencies"
Cohesion: 0.22
Nodes (9): dependencies, axios@^1.13.2, next@16.1.4, react@19.2.3, react-dom@19.2.3, @sentry/nextjs@^10.44.0, socket.io-client@^4.8.3, react-dom (+1 more)

### Community 19 - "vitest"
Cohesion: 0.27
Nodes (7): marketingLinks, NavBar(), NavBarInner(), @testing-library/react@^16.3.2, vitest@^4.1.0, @testing-library/react, vitest

### Community 21 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.1.4, eslint, eslint-config-next

### Community 23 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, start, test

### Community 24 - "CategoryContext.jsx"
Cohesion: 0.35
Nodes (8): Ctx, OpenCategory(), useCategory(), HeroStack(), ICONS, PhotoCard(), PhotoCardRow(), CATEGORIES

### Community 25 - "(site)/layout.jsx"
Cohesion: 0.17
Nodes (12): Logo(), Footer(), Header(), graph, metadata, outfit, sameAs, SiteLayout() (+4 more)

### Community 26 - "Faq.jsx"
Cohesion: 0.31
Nodes (7): Faq(), Mail(), metadata, RentAFriend(), ITEMS, metadata, Safety()

### Community 27 - "InterestForm.jsx"
Cohesion: 0.46
Nodes (5): CHOICES, InterestForm(), COUNTRY_CODES, phoneError(), submitEnquiry()

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `(site)/page.jsx`, `companions/page.jsx`, `(app)/layout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `Reveal`, `[category]/page.jsx`, `package.json`, `legal.jsx`, `content.js`, `LegalLayout.jsx`, `PricePicker.jsx`, `dependencies`, `vitest`, `CategoryContext.jsx`, `(site)/layout.jsx`, `Faq.jsx`, `InterestForm.jsx`?**
  _High betweenness centrality (0.502) - this node is a cross-community bridge._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.08524808524808525 - nodes in this community are weakly interconnected._
- **Why does `react` connect `next` to `(site)/page.jsx`, `companions/page.jsx`, `@sentry/nextjs`, `login/page.jsx`, `Reveal`, `package.json`, `LegalLayout.jsx`, `ProcessIllustrations.jsx`, `WhyChooseUs.jsx`, `PricePicker.jsx`, `dependencies`, `vitest`, `CategoryContext.jsx`, `InterestForm.jsx`?**
  _High betweenness centrality (0.191) - this node is a cross-community bridge._
- **Should `companions/page.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14761904761904762 - nodes in this community are weakly interconnected._
- **Why does `@sentry/nextjs` connect `@sentry/nextjs` to `next`, `package.json`, `dependencies`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Should `@sentry/nextjs` be split into smaller, more focused modules?**
  _Cohesion score 0.12380952380952381 - nodes in this community are weakly interconnected._
- **Should `login/page.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._