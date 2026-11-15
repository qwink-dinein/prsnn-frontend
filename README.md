# prsnn website

The public website for prsnn (approved "Wallet" design; see the design canvas). It sells the app,
answers what prsnn is for, and collects interest (mobile number + member / companion / both).
Nobody signs up on the web: booking happens in the app.

## Structure

- `app/(site)/`: the website. Home, five category pages (`/new-in-town` …), `/hyderabad`,
  `/pricing`, `/safety`, `/become-a-companion`, `/rent-a-friend`, `/about`, and the legal pages
  (`/terms`, `/privacy`, `/refunds`, `/guidelines`). All content comes from
  `app/(site)/_lib/content.js` and `_lib/legal.jsx`.
- `app/robots.js`, `app/sitemap.js`, `app/llms.txt/route.js`: for search engines and AI
  assistants (see `seo/README.md` for the full SEO/GEO plan and off-site checklist).
- `app/(app)/`: the earlier web app (Express API era), unchanged and not linked from the site.
  Old policy URLs redirect to the new pages (`next.config.mjs`).

The interest form calls the database function `submit_enquiry` (validated, throttled, one row
per number). Staff read the list with `admin_enquiries`.

## Settings (set where the site is deployed, e.g. Vercel → Environment Variables)

| Variable | What |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | The live domain, e.g. `https://…` (canonical links, sitemap, llms.txt). Set before building. |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Support address shown on the site and in structured data. Kept out of the repo. |
| `NEXT_PUBLIC_APP_STORE_URL`, `NEXT_PUBLIC_PLAY_STORE_URL` | Store links. Until set, the buttons say "Coming soon" and lead to the interest form. |
| `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Optional; default to the prsnn project's public (publishable) values. |

## Commands

```
pnpm install
pnpm dev          # http://localhost:3000
pnpm build && pnpm start
pnpm test && pnpm lint
```

---


# prsnn. Frontend

This directory contains the Next.js frontend application for prsnn. It consumes the REST API provided by the backend and offers a responsive, interactive user interface.

## Tech Stack

-   **Framework**: Next.js 14 (App Router)
-   **Styling**: TailwindCSS (Custom configuration for Neo-Brutalism theme)
-   **State Management**: React Context (`AuthContext`, `NotificationContext`)
-   **HTTP Client**: Axios
-   **Real-time Communication**: Socket.io-client
-   **Payments**: Razorpay Checkout

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root of the `frontend` directory and add the following variables:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://prssn-backend.onrender.com/api
NEXT_PUBLIC_SOCKET_URL=https://prssn-backend.onrender.com

# Razorpay Configuration
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_razorpay_key_id
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `app/`: Contains the application routes and layouts (Next.js App Router).
-   `components/`: Reusable UI components (Buttons, Cards, Modals, etc.).
-   `context/`: Context providers for managing global state like authentication and notifications.
-   `public/`: Static assets such as images and icons.
-   `utils/`: Helper functions and constants.

## Styling

This project uses a custom Neo-Brutalism design system. Key styling tokens (colors, shadows, borders) are defined in `globals.css` and `tailwind.config.js`. Avoid hardcoding hex values; use the defined utility classes.
