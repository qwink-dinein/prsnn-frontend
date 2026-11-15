# Graph Report - prsnn-frontend  (2026-11-15)

## Corpus Check
- 145 files · ~77,979 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 2, .css 2, .jsonld 1)

## Summary
- 549 nodes · 1459 edges · 31 communities (26 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `443b29d2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- next
- Reveal
- companions/page.jsx
- LegalLayout.jsx
- @sentry/nextjs
- login/page.jsx
- reset-password/page.jsx
- PageHead.jsx
- devDependencies
- legal.jsx
- package.json
- ProcessIllustrations.jsx
- WhyChooseUs.jsx
- app/layout.jsx
- PricePicker.jsx
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
- support/page.jsx
- robots.js

## God Nodes (most connected - your core abstractions)
1. `next` - 72 edges
2. `useAuth()` - 60 edges
3. `react` - 58 edges
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
- `Home()` --calls--> `HeroStack()`  [EXTRACTED]
  app/(site)/page.jsx → app/(site)/_components/HeroStack.jsx
- `VerificationGuard()` --calls--> `useAuth()`  [EXTRACTED]
  legacy/web-app/app/(app)/components/common/VerificationGuard.jsx → legacy/web-app/app/(app)/context/AuthContext.jsx
- `BecomeCompanion()` --calls--> `useAuth()`  [EXTRACTED]
  legacy/web-app/app/(app)/components/home/BecomeCompanion.jsx → legacy/web-app/app/(app)/context/AuthContext.jsx

## Import Cycles
- None detected.

## Communities (31 total, 5 thin omitted)

### Community 0 - "next"
Cohesion: 0.06
Nodes (52): AdminLayout(), AdminOnboardingPage(), AdminPanel(), UserDetailsPage(), FellowProfile(), GlobalClickGuard(), Chat(), Notification() (+44 more)

### Community 1 - "Reveal"
Cohesion: 0.08
Nodes (37): AboutUs(), values, Reveal(), SectionHeader(), BecomeCompanion(), benefits, FAQ(), faqs (+29 more)

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
Cohesion: 0.15
Nodes (16): AuthInput(), getPasswordStrength(), IconEye(), IconEyeOff(), Login(), LoginContent(), trustItems, DEFAULT_PASSWORD_LENGTH (+8 more)

### Community 6 - "reset-password/page.jsx"
Cohesion: 0.26
Nodes (15): AuthField(), AuthShell(), AuthSubmit(), EyeToggle(), IconEye(), IconEyeOff(), IconLock(), IconMail() (+7 more)

### Community 7 - "PageHead.jsx"
Cohesion: 0.14
Nodes (21): CategoryPage(), dynamicParams, generateMetadata(), SHARED_FAQ, Faq(), Apple(), Play(), JsonLd() (+13 more)

### Community 8 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, jsdom@^29.0.1, tailwindcss@^4, @tailwindcss/postcss@^4, @testing-library/react@^16.3.2, @testing-library/user-event@^14.6.1, @types/react@19.2.9, jsdom (+5 more)

### Community 9 - "legal.jsx"
Cohesion: 0.12
Nodes (35): metadata, Page(), metadata, Page(), LEGAL_PAGES, LegalLinks(), metadata, Page() (+27 more)

### Community 10 - "package.json"
Cohesion: 0.18
Nodes (10): @types/node@20.19.30, @types/react-dom@^19, engines, node, name, packageManager, private, version (+2 more)

### Community 13 - "app/layout.jsx"
Cohesion: 0.40
Nodes (3): metadata, SITE_URL, viewport

### Community 14 - "PricePicker.jsx"
Cohesion: 0.33
Nodes (10): Guilloche(), Mark(), CHOICES, MAT, PricePicker(), hoursLabel(), inr(), savingFor() (+2 more)

### Community 15 - "[slug]/page.jsx"
Cohesion: 0.12
Nodes (17): list, metadata, Cta(), dynamicParams, generateMetadata(), Guide(), PAGES, CITY_GUIDES (+9 more)

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
Cohesion: 0.19
Nodes (11): About(), metadata, CommunityBanner(), FounderStory(), COMMUNITY_IMG, COUNTRY, FOUNDER, HOME_FAQ (+3 more)

### Community 25 - "(site)/layout.jsx"
Cohesion: 0.15
Nodes (15): metadata, NotFound(), outfit, urbanist, Logo(), Footer(), Header(), graph (+7 more)

### Community 26 - "(site)/page.jsx"
Cohesion: 0.22
Nodes (16): Arrow(), base, Check(), Chevron(), Clock(), Cross(), I(), Pin() (+8 more)

### Community 27 - "InterestForm.jsx"
Cohesion: 0.24
Nodes (10): Become(), metadata, STEPS, CHOICES, InterestForm(), companionShare(), HOURS, COUNTRY_CODES (+2 more)

### Community 28 - "CategoryContext.jsx"
Cohesion: 0.27
Nodes (10): CategoryProvider(), Ctx, OpenCategory(), useCategory(), HeroStack(), wrap(), ICONS, PhotoCard() (+2 more)

### Community 29 - "support/page.jsx"
Cohesion: 0.39
Nodes (5): Mail(), RevealEmail(), encodedSupportEmail(), metadata, Page()

### Community 30 - "robots.js"
Cohesion: 0.40
Nodes (3): AI_AND_SEARCH, dynamic, PRIVATE

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `next` to `Reveal`, `companions/page.jsx`, `LegalLayout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `reset-password/page.jsx`, `PageHead.jsx`, `legal.jsx`, `package.json`, `PricePicker.jsx`, `[slug]/page.jsx`, `dependencies`, `content.js`, `(site)/layout.jsx`, `(site)/page.jsx`, `InterestForm.jsx`, `CategoryContext.jsx`, `support/page.jsx`?**
  _High betweenness centrality (0.513) - this node is a cross-community bridge._
- **Should `next` be split into smaller, more focused modules?**
  _Cohesion score 0.06257425742574257 - nodes in this community are weakly interconnected._
- **Why does `react` connect `next` to `Reveal`, `companions/page.jsx`, `LegalLayout.jsx`, `@sentry/nextjs`, `login/page.jsx`, `reset-password/page.jsx`, `package.json`, `ProcessIllustrations.jsx`, `WhyChooseUs.jsx`, `PricePicker.jsx`, `dependencies`, `(site)/page.jsx`, `InterestForm.jsx`, `CategoryContext.jsx`, `support/page.jsx`?**
  _High betweenness centrality (0.184) - this node is a cross-community bridge._
- **Should `Reveal` be split into smaller, more focused modules?**
  _Cohesion score 0.08106219426974144 - nodes in this community are weakly interconnected._
- **Why does `@sentry/nextjs` connect `@sentry/nextjs` to `next`, `dependencies`, `package.json`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Should `companions/page.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14761904761904762 - nodes in this community are weakly interconnected._
- **Should `@sentry/nextjs` be split into smaller, more focused modules?**
  _Cohesion score 0.12380952380952381 - nodes in this community are weakly interconnected._