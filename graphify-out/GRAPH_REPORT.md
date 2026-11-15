# Graph Report - prsnn-frontend  (2026-11-15)

## Corpus Check
- 128 files · ~65,210 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .css 2, .jsonld 1)

## Summary
- 482 nodes · 1286 edges · 24 communities (19 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f784b4b4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- next
- content.js
- companions/page.jsx
- (app)/layout.jsx
- @sentry/nextjs
- login/page.jsx
- Reveal
- reset-password/page.jsx
- package.json
- legal.jsx
- (site)/layout.jsx
- LegalLayout.jsx
- ProcessIllustrations.jsx
- app/layout.jsx
- WhyChooseUs.jsx
- devDependencies
- allowBuilds
- dependencies
- compilerOptions
- vitest
- postcss.config.mjs
- eslint.config.mjs
- setup.jsx
- scripts

## God Nodes (most connected - your core abstractions)
1. `next` - 69 edges
2. `useAuth()` - 60 edges
3. `react` - 56 edges
4. `Reveal()` - 37 edges
5. `Loading()` - 36 edges
6. `axios` - 23 edges
7. `PageHead()` - 21 edges
8. `SectionHeader()` - 20 edges
9. `Home()` - 16 edges
10. `inr()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `TestConsumer()` --calls--> `useAuth()`  [EXTRACTED]
  src/tests/context/AuthContext.test.jsx → app/(app)/context/AuthContext.jsx
- `CategoryPage()` --calls--> `PageHead()`  [EXTRACTED]
  app/(site)/[category]/page.jsx → app/(site)/_components/PageHead.jsx
- `Become()` --calls--> `PageHead()`  [EXTRACTED]
  app/(site)/become-a-companion/page.jsx → app/(site)/_components/PageHead.jsx
- `Hyderabad()` --calls--> `PageHead()`  [EXTRACTED]
  app/(site)/hyderabad/page.jsx → app/(site)/_components/PageHead.jsx
- `SiteLayout()` --calls--> `JsonLd()`  [EXTRACTED]
  app/(site)/layout.jsx → app/(site)/_components/JsonLd.jsx

## Import Cycles
- None detected.

## Communities (24 total, 5 thin omitted)

### Community 0 - "next"
Cohesion: 0.08
Nodes (39): AdminLayout(), AdminOnboardingPage(), AdminPanel(), UserDetailsPage(), FellowProfile(), Chat(), Loading(), VerificationGuard() (+31 more)

### Community 1 - "content.js"
Cohesion: 0.06
Nodes (74): AI_AND_SEARCH, PRIVATE, Become(), metadata, STEPS, CategoryPage(), dynamicParams, generateMetadata() (+66 more)

### Community 2 - "companions/page.jsx"
Cohesion: 0.15
Nodes (16): allInterestTags, CompanionCard(), CompanionsContent(), CompanionsPage(), daysOfWeek, EmptyState(), FilterChip(), modeApiLabels (+8 more)

### Community 3 - "(app)/layout.jsx"
Cohesion: 0.19
Nodes (11): GlobalClickGuard(), EnvBanner(), Footer(), marketingLinks, NavBar(), NavBarInner(), AuthProvider(), AppLayout() (+3 more)

### Community 4 - "@sentry/nextjs"
Cohesion: 0.12
Nodes (10): dynamic, GET(), SentryExampleAPIError, Page(), SentryExampleFrontendError, onRouterTransitionStart, onRequestError, register() (+2 more)

### Community 5 - "login/page.jsx"
Cohesion: 0.15
Nodes (16): AuthInput(), getPasswordStrength(), IconEye(), IconEyeOff(), Login(), LoginContent(), trustItems, DEFAULT_PASSWORD_LENGTH (+8 more)

### Community 6 - "Reveal"
Cohesion: 0.08
Nodes (36): AboutUs(), values, Reveal(), SectionHeader(), FAQ(), faqs, FinalCTA(), HowItWorks() (+28 more)

### Community 7 - "reset-password/page.jsx"
Cohesion: 0.20
Nodes (18): AuthField(), AuthShell(), AuthSubmit(), EyeToggle(), IconEye(), IconEyeOff(), IconLock(), IconMail() (+10 more)

### Community 8 - "package.json"
Cohesion: 0.18
Nodes (10): tailwindcss@^4, @types/react-dom@^19, engines, node, name, packageManager, private, version (+2 more)

### Community 9 - "legal.jsx"
Cohesion: 0.17
Nodes (21): About(), metadata, OpenCategory(), FounderStory(), PageHead(), metadata, Page(), FOUNDER (+13 more)

### Community 10 - "(site)/layout.jsx"
Cohesion: 0.19
Nodes (10): Logo(), Footer(), Header(), graph, metadata, outfit, sameAs, SiteLayout() (+2 more)

### Community 11 - "LegalLayout.jsx"
Cohesion: 0.50
Nodes (12): CodeOfConduct(), LegalBody(), LegalHero(), LegalIntro(), LegalList(), legalNav, LegalNav(), LegalSection() (+4 more)

### Community 13 - "app/layout.jsx"
Cohesion: 0.40
Nodes (3): metadata, SITE_URL, viewport

### Community 15 - "devDependencies"
Cohesion: 0.18
Nodes (11): devDependencies, jsdom@^29.0.1, @tailwindcss/postcss@^4, @testing-library/user-event@^14.6.1, @types/node@20.19.30, @types/react@19.2.9, jsdom, @tailwindcss/postcss (+3 more)

### Community 16 - "allowBuilds"
Cohesion: 0.40
Nodes (4): allowBuilds, @sentry/cli, sharp, unrs-resolver

### Community 17 - "dependencies"
Cohesion: 0.22
Nodes (9): dependencies, axios@^1.13.2, next@16.1.4, react@19.2.3, react-dom@19.2.3, @sentry/nextjs@^10.44.0, socket.io-client@^4.8.3, react-dom (+1 more)

### Community 19 - "vitest"
Cohesion: 0.22
Nodes (6): @testing-library/react@^16.3.2, @vitejs/plugin-react@^6.0.1, vitest@^4.1.0, @testing-library/react, @vitejs/plugin-react, vitest

### Community 21 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.1.4, eslint, eslint-config-next

### Community 23 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, start, test

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `content.js`, `companions/page.jsx`, `(app)/layout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `Reveal`, `reset-password/page.jsx`, `package.json`, `legal.jsx`, `(site)/layout.jsx`, `LegalLayout.jsx`, `dependencies`?**
  _High betweenness centrality (0.477) - this node is a cross-community bridge._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.083089905874716 - nodes in this community are weakly interconnected._
- **Why does `react` connect `next` to `content.js`, `companions/page.jsx`, `(app)/layout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `Reveal`, `reset-password/page.jsx`, `package.json`, `LegalLayout.jsx`, `ProcessIllustrations.jsx`, `WhyChooseUs.jsx`, `dependencies`?**
  _High betweenness centrality (0.217) - this node is a cross-community bridge._
- **Should `content.js` be split into smaller, more focused modules?**
  _Cohesion score 0.05643564356435644 - nodes in this community are weakly interconnected._
- **Why does `@sentry/nextjs` connect `@sentry/nextjs` to `next`, `package.json`, `dependencies`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Should `companions/page.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14761904761904762 - nodes in this community are weakly interconnected._
- **Should `@sentry/nextjs` be split into smaller, more focused modules?**
  _Cohesion score 0.12380952380952381 - nodes in this community are weakly interconnected._