# AnimePedia-web

GitHub Pages site for AnimePedia. Hosted at `https://animepedia.jdevsappstudio.com/` (custom
domain via the `CNAME` file — was previously `jdevsappstudio-github.github.io/animepedia/`, kept
live there as a redirect target, not deleted).

## Structure

```
/
├── index.html             ← Landing page
├── privacy-policy.html    ← Privacy policy (linked from Play Console)
├── terms-of-service.html  ← Terms of service
├── app-ads.txt             ← Authorized ad-sellers list (Unity, AppLovin, etc.)
├── sitemap.xml
└── CNAME                  ← animepedia.jdevsappstudio.com
```

## Live URLs

| Page | URL |
|---|---|
| Landing page | `https://animepedia.jdevsappstudio.com/` |
| Privacy policy | `https://animepedia.jdevsappstudio.com/privacy-policy.html` |
| Terms of service | `https://animepedia.jdevsappstudio.com/terms-of-service.html` |

## How to update

1. Edit the file(s)
2. Commit and push to `master`

```bash
git add .
git commit -m "update: <what you changed>"
git push
```

GitHub Pages rebuilds automatically — changes go live within a few minutes.

## Notes

- If you add/change ads, billing, or data collection, update `privacy-policy.html` and bump its
  "Last updated" date. Keep it in sync with the copy also mirrored to
  `jdevsappstudio-github.github.io/animepedia/privacy-policy.html` if that copy is still live.
- `app-ads.txt` must stay in sync with whatever's actually authorized in the Unity/AppLovin
  dashboards — it was carried over as-is from this repo's previous life as the Bootstrap-template
  marketing site (see git history), not regenerated fresh.
- Play Store link uses the real package ID (`com.jdevsappstudio.animepedia`).
- A `/blog/` directory is reserved for future SEO posts — GitHub Pages runs Jekyll natively with
  zero build config, so a `_posts/` collection can be dropped in later without migrating anything.
