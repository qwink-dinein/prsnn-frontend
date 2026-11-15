# Deploying the prsnn website (Cloudflare)

The website is a static Next.js export (`out/`) served by **Cloudflare Workers static assets**, the same
setup as Hyderabad Rishta. Cloudflare builds it from GitHub on every push. Free plan is enough.

What's in the repo: `wrangler.jsonc` (serves `out/`, 404 page, trailing slashes), `public/_headers`
(security headers), `public/_redirects` (old addresses → current pages). Checked locally with
`wrangler dev`: every page, redirects, headers and the 404 page.

## 1. Create the project (Cloudflare dashboard)

1. Cloudflare → **Workers & Pages** → **Create** → **Import a repository** → GitHub → `qwink-dinein/prsnn-frontend`.
2. **Production branch:** `claude/adoring-euler-w8jj3h` (set 2026-11-15). Not `main`: it still holds the old
   9 November import, which fails to build ("Expected a non-empty string" from an empty image host).
3. **Build command:** `pnpm run build`
4. **Deploy command:** `npx wrangler deploy`
5. **Root directory:** `/` (leave empty)
6. **Build variables** (Settings → Build → Variables and secrets):

| Name | Value | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://prsnn.com` | Your real domain, no trailing slash. Used in canonical links, sitemap, structured data |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | your support address | Shown as the support and Grievance Officer contact (kept out of the repo) |
| `NEXT_PUBLIC_PLAY_STORE_URL` | later | Turns the Google Play badge from "Coming soon" into a link |
| `NEXT_PUBLIC_APP_STORE_URL` | later | Same for the App Store badge |
| `SENTRY_AUTH_TOKEN` | optional | Only to upload source maps to Sentry |

Changing a variable needs a redeploy (Deployments → Retry / or push a commit).

The first deploy gives you a `*.workers.dev` address to check before the domain is connected.

## 2. Connect the domain (Namecheap → Cloudflare)

1. Cloudflare → **Add a domain** → enter the domain → Free plan. Cloudflare shows two nameservers.
2. Namecheap → **Domain List** → the domain → **Manage** → **Nameservers** → **Custom DNS** → paste the two
   Cloudflare nameservers → ✓. Takes from minutes to a few hours.
3. When Cloudflare says the domain is active: Workers & Pages → `prsnn-frontend` → **Settings → Domains & Routes**
   → **Add → Custom domain** → `prsnn.com`, then again for `www.prsnn.com`.
4. Redirect `www` to the bare domain: Rules → **Redirect Rules** → template "Redirect from WWW to root".
5. SSL/TLS → mode **Full**; turn on **Always Use HTTPS**.

If the domain has email set up at Namecheap (MX records), copy those records into Cloudflare DNS before
switching nameservers so mail keeps working.

## 3. Check

- `https://prsnn.com/` loads; `https://prsnn.com/terms-of-service` redirects to `/terms`; a made-up address shows the prsnn 404 page.
- `https://prsnn.com/sitemap.xml`, `/robots.txt` and `/llms.txt` show the real domain.
- Leave a test number in "Count me in"; it appears in the app under Admin → Interested. Delete it after.
- Google Search Console: add the domain (DNS TXT record in Cloudflare), submit `https://prsnn.com/sitemap.xml`.

## Local commands

```
pnpm run build                       # static export into out/
npx wrangler dev                     # serve out/ exactly as Cloudflare will (headers, redirects, 404)
```

The earlier Express-era web app (login, bookings, admin) is in `legacy/web-app/` and is not deployed: its API
is retired and the app and admin run on Supabase in prsnn-mobile.
