# Graph Report - prsnn-frontend  (2026-11-09)

## Corpus Check
- 93 files · ~53,117 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 2, .css 1)

## Summary
- 338 nodes · 887 edges · 21 communities (15 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c01cf4fe`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useAuth
- Reveal
- companions/page.jsx
- app/layout.jsx
- @sentry/nextjs
- login/page.jsx
- reset-password/page.jsx
- LegalLayout.jsx
- package.json
- devDependencies
- dependencies
- eslint.config.mjs
- setup.jsx
- vitest
- scripts
- ProcessIllustrations.jsx
- allowBuilds
- WhyChooseUs.jsx
- compilerOptions
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `useAuth()` - 63 edges
2. `react` - 53 edges
3. `next` - 47 edges
4. `Reveal()` - 37 edges
5. `Loading()` - 36 edges
6. `axios` - 25 edges
7. `SectionHeader()` - 20 edges
8. `Home()` - 14 edges
9. `LegalHero()` - 10 edges
10. `@sentry/nextjs` - 10 edges

## Surprising Connections (you probably didn't know these)
- `TestConsumer()` --calls--> `useAuth()`  [EXTRACTED]
  src/tests/context/AuthContext.test.jsx → app/context/AuthContext.jsx
- `AboutPage()` --calls--> `AboutUs()`  [EXTRACTED]
  app/about/page.jsx → app/components/about/AboutUs.jsx
- `CompanionsContent()` --calls--> `useAuth()`  [EXTRACTED]
  app/companions/page.jsx → app/context/AuthContext.jsx
- `AboutUs()` --calls--> `Reveal()`  [EXTRACTED]
  app/components/about/AboutUs.jsx → app/components/common/Reveal.jsx
- `NotificationProvider()` --calls--> `Notification()`  [EXTRACTED]
  app/context/NotificationContext.jsx → app/components/common/Alert.jsx

## Import Cycles
- None detected.

## Communities (21 total, 6 thin omitted)

### Community 0 - "useAuth"
Cohesion: 0.10
Nodes (36): AdminLayout(), AdminOnboardingPage(), AdminPanel(), UserDetailsPage(), FellowProfile(), Chat(), Loading(), VerificationGuard() (+28 more)

### Community 1 - "Reveal"
Cohesion: 0.11
Nodes (32): Reveal(), SectionHeader(), BecomeCompanion(), benefits, FAQ(), faqs, FinalCTA(), Hero() (+24 more)

### Community 2 - "companions/page.jsx"
Cohesion: 0.10
Nodes (25): AboutPage(), allInterestTags, CompanionCard(), CompanionsContent(), CompanionsPage(), daysOfWeek, EmptyState(), FilterChip() (+17 more)

### Community 3 - "app/layout.jsx"
Cohesion: 0.13
Nodes (16): GlobalClickGuard(), EnvBanner(), Footer(), marketingLinks, NavBar(), NavBarInner(), AuthProvider(), NotificationProvider() (+8 more)

### Community 4 - "@sentry/nextjs"
Cohesion: 0.11
Nodes (10): dynamic, GET(), SentryExampleAPIError, Page(), SentryExampleFrontendError, onRouterTransitionStart, onRequestError, register() (+2 more)

### Community 5 - "login/page.jsx"
Cohesion: 0.15
Nodes (16): AuthInput(), getPasswordStrength(), IconEye(), IconEyeOff(), Login(), LoginContent(), trustItems, DEFAULT_PASSWORD_LENGTH (+8 more)

### Community 6 - "reset-password/page.jsx"
Cohesion: 0.24
Nodes (16): AuthField(), AuthShell(), AuthSubmit(), EyeToggle(), IconEye(), IconEyeOff(), IconLock(), IconMail() (+8 more)

### Community 7 - "LegalLayout.jsx"
Cohesion: 0.50
Nodes (12): CodeOfConduct(), LegalBody(), LegalHero(), LegalIntro(), LegalList(), legalNav, LegalNav(), LegalSection() (+4 more)

### Community 8 - "package.json"
Cohesion: 0.18
Nodes (10): @testing-library/user-event@^14.6.1, @types/node@20.19.30, engines, node, name, packageManager, private, version (+2 more)

### Community 9 - "devDependencies"
Cohesion: 0.18
Nodes (11): devDependencies, jsdom@^29.0.1, tailwindcss@^4, @tailwindcss/postcss@^4, @types/react@19.2.9, @types/react-dom@^19, jsdom, tailwindcss (+3 more)

### Community 10 - "dependencies"
Cohesion: 0.22
Nodes (9): dependencies, axios@^1.13.2, next@16.1.4, react@19.2.3, react-dom@19.2.3, @sentry/nextjs@^10.44.0, socket.io-client@^4.8.3, react-dom (+1 more)

### Community 11 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.1.4, eslint, eslint-config-next

### Community 13 - "vitest"
Cohesion: 0.33
Nodes (4): @vitejs/plugin-react@^6.0.1, vitest@^4.1.0, @vitejs/plugin-react, vitest

### Community 14 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, dev, lint, start, test

### Community 16 - "allowBuilds"
Cohesion: 0.40
Nodes (4): allowBuilds, @sentry/cli, sharp, unrs-resolver

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `useAuth` to `Reveal`, `companions/page.jsx`, `app/layout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `reset-password/page.jsx`, `LegalLayout.jsx`, `package.json`, `dependencies`, `ProcessIllustrations.jsx`, `WhyChooseUs.jsx`, `payment-terms/page.jsx`?**
  _High betweenness centrality (0.298) - this node is a cross-community bridge._
- **Should `useAuth` be split into smaller, more focused modules?**
  _Cohesion score 0.10020703933747412 - nodes in this community are weakly interconnected._
- **Why does `next` connect `useAuth` to `Reveal`, `companions/page.jsx`, `app/layout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `reset-password/page.jsx`, `LegalLayout.jsx`, `package.json`, `dependencies`?**
  _High betweenness centrality (0.252) - this node is a cross-community bridge._
- **Should `Reveal` be split into smaller, more focused modules?**
  _Cohesion score 0.11054421768707483 - nodes in this community are weakly interconnected._
- **Why does `useAuth()` connect `useAuth` to `Reveal`, `companions/page.jsx`, `app/layout.jsx`, `login/page.jsx`, `reset-password/page.jsx`?**
  _High betweenness centrality (0.113) - this node is a cross-community bridge._
- **Should `companions/page.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09982174688057041 - nodes in this community are weakly interconnected._
- **Should `app/layout.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._