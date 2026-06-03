# Site 2 — ForeclosureIQ (Next.js)

**ForeclosureIQ** distressed property intelligence prototype, ported from standalone HTML.

| Route | Source file |
|-------|-------------|
| `/` | `foreclosure-prototype.html` |
| `/prototype-1` | `foreclosure-prototype_1.html` |

Repo: [MetasysConsulting/realestatetemplate2](https://github.com/MetasysConsulting/realestatetemplate2)

## Commands

```bash
pnpm convert-template   # Re-import HTML from template-source/
pnpm dev                # http://localhost:3001
pnpm build
```

## Add more pages

Put `.html` in `template-source/html/` and optional paths in `template-source/routes.json`, then run `pnpm convert-template`.

Site 1 (Proty): `../proty-web` on port 3000.
