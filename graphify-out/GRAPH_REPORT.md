# Graph Report - prsnn-frontend  (2026-11-15)

## Corpus Check
- 125 files · ~64,690 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .css 2, .jsonld 1)

## Summary
- 475 nodes · 1294 edges · 18 communities (14 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5a11ad32`
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
- allowBuilds
- compilerOptions
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `next` - 68 edges
2. `useAuth()` - 60 edges
3. `react` - 56 edges
4. `Reveal()` - 37 edges
5. `Loading()` - 36 edges
6. `PageHead()` - 24 edges
7. `axios` - 23 edges
8. `SectionHeader()` - 20 edges
9. `StoreButtons()` - 15 edges
10. `inr()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `TestConsumer()` --calls--> `useAuth()`  [EXTRACTED]
  src/tests/context/AuthContext.test.jsx → app/(app)/context/AuthContext.jsx
- `CompanionsContent()` --calls--> `useAuth()`  [EXTRACTED]
  app/(app)/companions/page.jsx → app/(app)/context/AuthContext.jsx
- `NotificationProvider()` --calls--> `Notification()`  [EXTRACTED]
  app/(app)/context/NotificationContext.jsx → app/(app)/components/common/Alert.jsx
- `LegalHero()` --calls--> `Reveal()`  [EXTRACTED]
  app/(app)/components/common/LegalLayout.jsx → app/(app)/components/common/Reveal.jsx
- `LegalSection()` --calls--> `Reveal()`  [EXTRACTED]
  app/(app)/components/common/LegalLayout.jsx → app/(app)/components/common/Reveal.jsx

## Import Cycles
- None detected.

## Communities (18 total, 4 thin omitted)

### Community 0 - "next"
Cohesion: 0.09
Nodes (38): AdminLayout(), AdminOnboardingPage(), AdminPanel(), UserDetailsPage(), FellowProfile(), Chat(), Notification(), Loading() (+30 more)

### Community 1 - "content.js"
Cohesion: 0.07
Nodes (74): About(), metadata, Become(), metadata, STEPS, CategoryPage(), dynamicParams, generateMetadata() (+66 more)

### Community 2 - "companions/page.jsx"
Cohesion: 0.12
Nodes (21): allInterestTags, CompanionCard(), CompanionsContent(), CompanionsPage(), daysOfWeek, EmptyState(), FilterChip(), modeApiLabels (+13 more)

### Community 3 - "(app)/layout.jsx"
Cohesion: 0.12
Nodes (17): GlobalClickGuard(), EnvBanner(), Footer(), marketingLinks, NavBar(), NavBarInner(), AuthProvider(), NotificationProvider() (+9 more)

### Community 4 - "@sentry/nextjs"
Cohesion: 0.12
Nodes (10): dynamic, GET(), SentryExampleAPIError, Page(), SentryExampleFrontendError, onRouterTransitionStart, onRequestError, register() (+2 more)

### Community 5 - "login/page.jsx"
Cohesion: 0.15
Nodes (16): AuthInput(), getPasswordStrength(), IconEye(), IconEyeOff(), Login(), LoginContent(), trustItems, DEFAULT_PASSWORD_LENGTH (+8 more)

### Community 6 - "Reveal"
Cohesion: 0.09
Nodes (33): AboutUs(), values, Reveal(), SectionHeader(), BecomeCompanion(), benefits, FAQ(), faqs (+25 more)

### Community 7 - "reset-password/page.jsx"
Cohesion: 0.26
Nodes (15): AuthField(), AuthShell(), AuthSubmit(), EyeToggle(), IconEye(), IconEyeOff(), IconLock(), IconMail() (+7 more)

### Community 8 - "package.json"
Cohesion: 0.05
Nodes (45): eslintConfig, dependencies, axios@^1.13.2, next@16.1.4, react@19.2.3, react-dom@19.2.3, @sentry/nextjs@^10.44.0, socket.io-client@^4.8.3 (+37 more)

### Community 9 - "legal.jsx"
Cohesion: 0.21
Nodes (15): metadata, Page(), Contact(), Email(), Guidelines(), Privacy(), Refunds(), Terms() (+7 more)

### Community 10 - "(site)/layout.jsx"
Cohesion: 0.16
Nodes (12): AI_AND_SEARCH, PRIVATE, Logo(), Footer(), Header(), graph, metadata, outfit (+4 more)

### Community 11 - "LegalLayout.jsx"
Cohesion: 0.50
Nodes (12): CodeOfConduct(), LegalBody(), LegalHero(), LegalIntro(), LegalList(), legalNav, LegalNav(), LegalSection() (+4 more)

### Community 13 - "app/layout.jsx"
Cohesion: 0.40
Nodes (3): metadata, SITE_URL, viewport

### Community 16 - "allowBuilds"
Cohesion: 0.40
Nodes (4): allowBuilds, @sentry/cli, sharp, unrs-resolver

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `content.js`, `companions/page.jsx`, `(app)/layout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `Reveal`, `reset-password/page.jsx`, `package.json`, `legal.jsx`, `(site)/layout.jsx`, `LegalLayout.jsx`?**
  _High betweenness centrality (0.473) - this node is a cross-community bridge._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.08658008658008658 - nodes in this community are weakly interconnected._
- **Why does `react` connect `next` to `content.js`, `companions/page.jsx`, `(app)/layout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `Reveal`, `reset-password/page.jsx`, `package.json`, `LegalLayout.jsx`, `ProcessIllustrations.jsx`, `WhyChooseUs.jsx`?**
  _High betweenness centrality (0.217) - this node is a cross-community bridge._
- **Should `content.js` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._
- **Why does `@sentry/nextjs` connect `@sentry/nextjs` to `next`, `package.json`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Should `companions/page.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12169312169312169 - nodes in this community are weakly interconnected._
- **Should `(app)/layout.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1168091168091168 - nodes in this community are weakly interconnected._