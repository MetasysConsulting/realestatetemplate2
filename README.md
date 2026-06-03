# Site 2 — HTML template → Next.js

Second website in the Hawai Guy Project. **Separate from** `../proty-web` (Site 1).

## Paste your template

1. Put files in `template-source/`:

```
template-source/
├── html/       ← all .html pages
├── css/
├── js/
├── images/
├── icons/
└── routes.json   ← optional custom URLs
```

2. Convert and run:

```bash
pnpm convert-template
pnpm dev
```

Open **http://localhost:3001** (Site 1 uses port 3000).

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm convert-template` | Import HTML from `template-source/` |
| `pnpm dev` | Dev server on port 3001 |
| `pnpm build` | Production build |
| `pnpm start` | Run production build |

## Custom routes

Optional `template-source/routes.json`:

```json
{
  "about-us.html": "/about",
  "home02.html": "/home/02"
}
```

## Site 1

Proty real estate site: `../proty-web` → [MetasysConsulting/realestatetemplate](https://github.com/MetasysConsulting/realestatetemplate)
