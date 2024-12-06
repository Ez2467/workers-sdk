---
"wrangler": minor
---

feat: allow mounting Workers Assets on wildcard paths not just the root - e.g. `example.com/blog/*` can now serve assets.
These assets will be served matching the assets dir, so `example.com/blog/*` will serve assets from the `blog` dir within your assets output folder.
