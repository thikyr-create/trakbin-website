# Trakbin — Corporate Marketing Website

Static marketing site. No auth, no database, no app logic. Next.js + Tailwind v4.

## Setup
1. `npm install`
2. Place assets (see below)
3. `npm run dev`

## Assets
- public/screenshots/operator-console.png  → waste company dashboard screenshot
- public/screenshots/customer-dashboard.png → customer dashboard screenshot
- public/photos/{crew,fleet,bins,tools}.jpg → field imagery
- public/og/home.png → OG image (reuse hero frame)

## Content
All copy lives in /content. Pages are thin compositions of /components/shared primitives.
Replace contact placeholders in content/site.ts before launch.