# Site 2 — REOVANA Admin Dashboard (Next.js)

Admin panel for the **REOVANA** distressed property marketplace. Frontend-only with mock data aligned to the public site.

Repo: [MetasysConsulting/realestatetemplate2](https://github.com/MetasysConsulting/realestatetemplate2)

Public site (REOVANA): `../proty-web` on port 3000.

## Routes

| Route | Page |
|-------|------|
| `/login` | Admin sign-in — **Continue without login** for demo |
| `/dashboard` | Overview: listings, unlocks, revenue, markets |
| `/listings` | Mock listing table with search & categories |
| `/data-sources` | Scraper feed registry (HUD, VA REO, etc.) |
| `/content-tools` | Listing tools — prompts Admin AI |
| `/chatbot` | REOVANA Admin AI |
| `/analytics` | Traffic, revenue, scraper health |
| `/subscription` | Public pricing preview ($9 unlock / $49 Pro) |
| `/settings` | Site settings, alerts, pricing display |

## Commands

```bash
pnpm dev      # http://localhost:3001
pnpm build
pnpm start
```
