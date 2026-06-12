# Site 2 — REOVANA Admin Dashboard (Next.js)

Admin panel for the **REOVANA** distressed property marketplace. Mock data mirrors the public site: HUD homes, VA REO, foreclosure categories, unlock revenue, and scraper feeds.

Repo: [MetasysConsulting/realestatetemplate2](https://github.com/MetasysConsulting/realestatetemplate2)

Public site (REOVANA): `../proty-web` on port 3000.

## Routes

| Route | Page |
|-------|------|
| `/login` | Admin auth — use **Continue without login** for demo |
| `/dashboard` | Listings, unlocks, revenue, top markets |
| `/analytics` | Traffic, scraper health, subscription growth |
| `/content-tools` | Listing tools, scrapers, exports |
| `/chatbot` | REOVANA Admin AI (mock responses) |
| `/subscription` | Free / Pro / per-unlock pricing |
| `/settings` | Account settings |

## Commands

```bash
pnpm dev      # http://localhost:3001
pnpm build
pnpm start
```
