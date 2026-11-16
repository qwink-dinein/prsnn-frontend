# Graph Report - prsnn-frontend  (2026-11-16)

## Corpus Check
- 146 files · ~79,266 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 2, .css 2, .jsonld 1)

## Summary
- 554 nodes · 1470 edges · 24 communities (18 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2baa339c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- next
- Reveal
- companions/page.jsx
- LegalLayout.jsx
- @sentry/nextjs
- login/page.jsx
- route.js
- sentry-example-page/page.jsx
- devDependencies
- legal.jsx
- engines
- ProcessIllustrations.jsx
- WhyChooseUs.jsx
- app/layout.jsx
- [slug]/page.jsx
- allowBuilds
- dependencies
- compilerOptions
- vitest
- postcss.config.mjs
- eslint.config.mjs
- scripts
- (site)/layout.jsx
- content.js

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
- `Home()` --calls--> `FounderStory()`  [EXTRACTED]
  app/(site)/page.jsx → app/(site)/_components/FounderStory.jsx
- `About()` --calls--> `PageHead()`  [EXTRACTED]
  app/(site)/about/page.jsx → app/(site)/_components/PageHead.jsx
- `SiteLayout()` --calls--> `JsonLd()`  [EXTRACTED]
  app/(site)/layout.jsx → app/(site)/_components/JsonLd.jsx
- `VerificationGuard()` --calls--> `useAuth()`  [EXTRACTED]
  legacy/web-app/app/(app)/components/common/VerificationGuard.jsx → legacy/web-app/app/(app)/context/AuthContext.jsx

## Import Cycles
- None detected.

## Communities (24 total, 6 thin omitted)

### Community 0 - "next"
Cohesion: 0.06
Nodes (53): AdminLayout(), AdminOnboardingPage(), AdminPanel(), UserDetailsPage(), FellowProfile(), GlobalClickGuard(), Chat(), EnvBanner() (+45 more)

### Community 1 - "Reveal"
Cohesion: 0.08
Nodes (38): AboutUs(), values, Reveal(), SectionHeader(), BecomeCompanion(), benefits, FAQ(), faqs (+30 more)

### Community 2 - "companions/page.jsx"
Cohesion: 0.15
Nodes (15): allInterestTags, CompanionCard(), CompanionsContent(), CompanionsPage(), daysOfWeek, EmptyState(), FilterChip(), modeApiLabels (+7 more)

### Community 3 - "LegalLayout.jsx"
Cohesion: 0.50
Nodes (12): CodeOfConduct(), LegalBody(), LegalHero(), LegalIntro(), LegalList(), legalNav, LegalNav(), LegalSection() (+4 more)

### Community 4 - "@sentry/nextjs"
Cohesion: 0.25
Nodes (5): onRouterTransitionStart, onRequestError, register(), nextConfig, @sentry/nextjs

### Community 5 - "login/page.jsx"
Cohesion: 0.10
Nodes (32): AuthField(), AuthShell(), AuthSubmit(), EyeToggle(), IconEye(), IconEyeOff(), IconLock(), IconMail() (+24 more)

### Community 6 - "route.js"
Cohesion: 0.50
Nodes (3): dynamic, GET(), SentryExampleAPIError

### Community 8 - "devDependencies"
Cohesion: 0.14
Nodes (19): devDependencies, jsdom@^29.0.1, tailwindcss@^4, @tailwindcss/postcss@^4, @testing-library/user-event@^14.6.1, @types/node@20.19.30, @types/react@19.2.9, @types/react-dom@^19 (+11 more)

### Community 9 - "legal.jsx"
Cohesion: 0.11
Nodes (39): metadata, Page(), metadata, Page(), LEGAL_PAGES, LegalLinks(), PageHead(), metadata (+31 more)

### Community 13 - "app/layout.jsx"
Cohesion: 0.40
Nodes (3): metadata, SITE_URL, viewport

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
Cohesion: 0.17
Nodes (6): @testing-library/jest-dom@^6.9.1, @vitejs/plugin-react@^6.0.1, vitest@^4.1.0, @testing-library/jest-dom, @vitejs/plugin-react, vitest

### Community 21 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.1.4, eslint, eslint-config-next

### Community 23 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, start, test

### Community 25 - "(site)/layout.jsx"
Cohesion: 0.11
Nodes (21): metadata, NotFound(), outfit, urbanist, About(), metadata, Logo(), OpenCategory() (+13 more)

### Community 27 - "content.js"
Cohesion: 0.05
Nodes (79): AI_AND_SEARCH, dynamic, PRIVATE, Become(), metadata, STEPS, CategoryPage(), dynamicParams (+71 more)

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `Reveal`, `companions/page.jsx`, `LegalLayout.jsx`, `login/page.jsx`, `sentry-example-page/page.jsx`, `devDependencies`, `legal.jsx`, `[slug]/page.jsx`, `dependencies`, `(site)/layout.jsx`, `content.js`?**
  _High betweenness centrality (0.512) - this node is a cross-community bridge._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.062424242424242424 - nodes in this community are weakly interconnected._
- **Why does `react` connect `next` to `Reveal`, `companions/page.jsx`, `LegalLayout.jsx`, `login/page.jsx`, `sentry-example-page/page.jsx`, `devDependencies`, `ProcessIllustrations.jsx`, `WhyChooseUs.jsx`, `dependencies`, `content.js`?**
  _High betweenness centrality (0.185) - this node is a cross-community bridge._
- **Should `Reveal` be split into smaller, more focused modules?**
  _Cohesion score 0.07792207792207792 - nodes in this community are weakly interconnected._
- **Why does `@sentry/nextjs` connect `@sentry/nextjs` to `next`, `route.js`, `sentry-example-page/page.jsx`, `devDependencies`, `dependencies`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Should `login/page.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.1368421052631579 - nodes in this community are weakly interconnected._