# Graph Report - prsnn-frontend  (2026-11-15)

## Corpus Check
- 137 files · ~68,233 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 2, .css 2, .jsonld 1)

## Summary
- 520 nodes · 1402 edges · 24 communities (18 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `99416a76`
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
- content.js
- package.json
- legal.jsx
- robots.js
- ProcessIllustrations.jsx
- WhyChooseUs.jsx
- app/layout.jsx
- allowBuilds
- dependencies
- compilerOptions
- vitest
- postcss.config.mjs
- eslint.config.mjs
- setup.jsx
- scripts
- (site)/layout.jsx
- @vitejs/plugin-react

## God Nodes (most connected - your core abstractions)
1. `next` - 70 edges
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
  src/tests/context/AuthContext.test.jsx → legacy/web-app/app/(app)/context/AuthContext.jsx
- `CompanionsContent()` --calls--> `useAuth()`  [EXTRACTED]
  legacy/web-app/app/(app)/companions/page.jsx → legacy/web-app/app/(app)/context/AuthContext.jsx
- `NotificationProvider()` --calls--> `Notification()`  [EXTRACTED]
  legacy/web-app/app/(app)/context/NotificationContext.jsx → legacy/web-app/app/(app)/components/common/Alert.jsx
- `UsersList()` --calls--> `Notification()`  [EXTRACTED]
  legacy/web-app/app/(app)/super-admin/users/page.jsx → legacy/web-app/app/(app)/components/common/Alert.jsx
- `LegalHero()` --calls--> `Reveal()`  [EXTRACTED]
  legacy/web-app/app/(app)/components/common/LegalLayout.jsx → legacy/web-app/app/(app)/components/common/Reveal.jsx

## Import Cycles
- None detected.

## Communities (24 total, 6 thin omitted)

### Community 0 - "next"
Cohesion: 0.09
Nodes (37): AdminLayout(), AdminOnboardingPage(), AdminPanel(), UserDetailsPage(), FellowProfile(), Chat(), Loading(), VerificationGuard() (+29 more)

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
Cohesion: 0.10
Nodes (32): AuthField(), AuthShell(), AuthSubmit(), EyeToggle(), IconEye(), IconEyeOff(), IconLock(), IconMail() (+24 more)

### Community 6 - "(app)/layout.jsx"
Cohesion: 0.20
Nodes (10): GlobalClickGuard(), EnvBanner(), marketingLinks, NavBar(), NavBarInner(), NotificationProvider(), AppLayout(), dmSans (+2 more)

### Community 7 - "content.js"
Cohesion: 0.05
Nodes (83): About(), metadata, Become(), metadata, STEPS, CategoryPage(), dynamicParams, generateMetadata() (+75 more)

### Community 8 - "package.json"
Cohesion: 0.12
Nodes (21): devDependencies, jsdom@^29.0.1, tailwindcss@^4, @tailwindcss/postcss@^4, @testing-library/user-event@^14.6.1, @types/node@20.19.30, @types/react@19.2.9, @types/react-dom@^19 (+13 more)

### Community 9 - "legal.jsx"
Cohesion: 0.12
Nodes (35): metadata, Page(), metadata, Page(), LEGAL_PAGES, LegalLinks(), metadata, Page() (+27 more)

### Community 10 - "robots.js"
Cohesion: 0.40
Nodes (3): AI_AND_SEARCH, dynamic, PRIVATE

### Community 13 - "app/layout.jsx"
Cohesion: 0.40
Nodes (3): metadata, SITE_URL, viewport

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

### Community 25 - "(site)/layout.jsx"
Cohesion: 0.16
Nodes (13): metadata, NotFound(), outfit, urbanist, Logo(), Footer(), Header(), graph (+5 more)

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `Reveal`, `companions/page.jsx`, `LegalLayout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `(app)/layout.jsx`, `content.js`, `package.json`, `legal.jsx`, `dependencies`, `(site)/layout.jsx`?**
  _High betweenness centrality (0.509) - this node is a cross-community bridge._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.0887719298245614 - nodes in this community are weakly interconnected._
- **Why does `react` connect `next` to `Reveal`, `companions/page.jsx`, `LegalLayout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `(app)/layout.jsx`, `content.js`, `package.json`, `ProcessIllustrations.jsx`, `WhyChooseUs.jsx`, `dependencies`?**
  _High betweenness centrality (0.189) - this node is a cross-community bridge._
- **Should `Reveal` be split into smaller, more focused modules?**
  _Cohesion score 0.07792207792207792 - nodes in this community are weakly interconnected._
- **Why does `@sentry/nextjs` connect `@sentry/nextjs` to `next`, `package.json`, `dependencies`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Should `companions/page.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14761904761904762 - nodes in this community are weakly interconnected._
- **Should `@sentry/nextjs` be split into smaller, more focused modules?**
  _Cohesion score 0.12380952380952381 - nodes in this community are weakly interconnected._