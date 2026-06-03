# Site 2 — Paste your HTML template here

Copy your purchased or custom HTML template into this folder **before** running `pnpm convert-template`.

## Expected layout

```
template-source/
├── html/              ← required: all .html pages
│   ├── index.html
│   ├── about.html
│   └── ...
├── css/               ← optional (copied to public/css/)
├── js/                ← optional (copied to public/js/)
├── images/            ← optional (copied to public/images/)
├── icons/             ← optional (copied to public/icons/)
└── routes.json        ← optional: custom URL paths (see below)
```

## Steps

1. Unzip your template and copy files into the folders above.
2. From `site-2-web/` run:
   ```bash
   pnpm convert-template
   pnpm dev
   ```
3. Open http://localhost:3001

## Custom routes (optional)

Create `routes.json` to map filenames to pretty URLs:

```json
{
  "property-detail-v1.html": "/property/detail/v1",
  "home02.html": "/home/02"
}
```

If omitted, routes are generated from filenames (`contact.html` → `/contact`, `index.html` → `/`).

## Notes

- Keep asset paths in HTML as `images/...`, `css/...`, `js/...` — the converter rewrites them to `/images/...`, etc.
- After adding or changing HTML, run `pnpm convert-template` again, then `pnpm build`.
