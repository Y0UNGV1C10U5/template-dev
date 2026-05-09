# Executive Portfolio Template — Andrew Hawkins

A premium dark-themed personal CV / executive portfolio website with a dedicated consulting sales page. Built with React 19, TypeScript, Vite, Tailwind CSS, and GSAP animations.

---

## Quick Start

### Local development on Windows / Mac / Linux

You need **Node.js 18+** installed. If you don't have it, download from [nodejs.org](https://nodejs.org/).

```bash
# Install dependencies (one-time, takes 1-3 minutes)
npm install

# Start the dev server (opens on http://localhost:3000)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview
```

### Netlify deployment

The project is ready to deploy to Netlify with these settings:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18 or higher

Connect this repo to Netlify and it auto-deploys on every push to `main`.

---

## Project Structure

```
.
├── index.html                # HTML shell with SEO meta and JSON-LD
├── package.json              # Dependencies and build scripts
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Design tokens (colors, fonts)
├── postcss.config.js         # PostCSS for Tailwind
├── tsconfig.*.json           # TypeScript configs
│
├── public/                   # Static assets (videos, images, logos)
│   ├── videos/               # Career timeline videos (mp4)
│   ├── images/               # Press thumbnails, hero bg
│   └── logos/                # Network/partner logos
│
└── src/
    ├── App.tsx               # Routes: /, /consulting, /press
    ├── main.tsx              # Entry: HashRouter + HelmetProvider
    ├── index.css             # Global styles, Tailwind theme, font imports
    │
    ├── pages/
    │   ├── HomePage.tsx       # Full CV — all sections
    │   ├── ConsultingPage.tsx # Sales page — services, case studies, booking
    │   └── PressPage.tsx      # Press archive listing
    │
    ├── sections/             # 14 reusable section components
    │   ├── Hero.tsx           # 3-line name + character animation
    │   ├── Profile.tsx        # Word-by-word scroll reveal
    │   ├── CareerTimeline.tsx # 6 career roles with portrait media
    │   ├── Highlights.tsx     # Achievement stat cards
    │   ├── NetworksPartners.tsx
    │   ├── FeaturedQuote.tsx
    │   ├── Recommendations.tsx
    │   ├── Skills.tsx
    │   ├── Contact.tsx
    │   ├── ResultsStrip.tsx
    │   ├── BookingForm.tsx
    │   ├── Navigation.tsx
    │   ├── Press.tsx
    │   ├── PressQuotes.tsx
    │   └── Consulting.tsx
    │
    ├── hooks/
    │   └── usePinnedHeader.ts
    │
    ├── components/ui/        # shadcn/ui primitives (40+ components)
    ├── lib/                  # utility helpers
    └── types/                # TypeScript types
```

---

## Design System

### Colors (configured in `tailwind.config.js`)

```
midnight (background)         #0c0e12
midnight-surface              #111318
midnight-elevated             #161a21
midnight-border               #1e222b
parchment (primary text)      #e8e0d6
parchment-muted               #9a9186
parchment-dim                 #6b6358
gold (accent)                 #c4a77d
gold-muted                    #8a7355
```

### Fonts

- **Headlines:** Cormorant Garamond (serif, editorial)
- **Body:** Jost (sans-serif, clean)
- Tailwind classes: `font-headline`, `font-body`

---

## Tech Stack

| Tech | Purpose |
|------|---------|
| React 19 + TypeScript | UI framework |
| Vite 7 | Build tool & dev server |
| Tailwind CSS 3.4 | Styling |
| GSAP 3 + ScrollTrigger | Scroll-triggered animations |
| shadcn/ui (Radix) | Pre-built UI components |
| react-helmet-async | Per-page SEO meta tags |
| react-router 7 (HashRouter) | SPA routing for static hosting |

---

## Important Architectural Decisions

1. **HashRouter, not BrowserRouter.** Required for static hosting (Netlify) — BrowserRouter will 404 on refresh of subroutes.
2. **Two-page architecture.** Home (CV) and Consulting are separate pages. Do not merge.
3. **`base: './'` in vite.config.** Allows the site to be served from any path.

---

## Required Assets

The site references these files in `public/` — you'll need to add them or change the references:

**Videos** (referenced in `src/sections/CareerTimeline.tsx`):
- `public/videos/young-vicious.mp4`
- `public/videos/mushroom-group.mp4`
- `public/videos/h2coco-video.mp4`
- `public/videos/king-kyle.mp4`
- `public/videos/radio-studio.mp4`
- `public/videos/music-studio.mp4`
- `public/videos/jive-records.mp4`
- `public/videos/arena-video.mp4`
- `public/videos/tropical-lifestyle.mp4`

**Images:**
- `public/images/hero-bg.jpg`
- Various press thumbnails in `public/images/`

**Logos:**
- Network/partner logos in `public/logos/processed/`

If assets are missing, the site will still render but with broken image/video placeholders.

---

## Customising for Other Clients

See `KIMI_HANDOFF.md` for the full template-resale guide. Key files to edit:

- `index.html` — meta tags, JSON-LD structured data, page title
- `src/sections/Hero.tsx` — name, cities
- `src/sections/Profile.tsx` — bio paragraph
- `src/sections/CareerTimeline.tsx` — career data array
- `src/sections/Highlights.tsx` — stats array
- `src/sections/Skills.tsx` — skills array
- `src/sections/Recommendations.tsx` — testimonials array
- `src/sections/Contact.tsx` — email, social links
- `tailwind.config.js` — change color palette to suit client

---

## Development Notes

- **Stripe is NOT integrated.** The booking form uses `mailto:` for now. To add real payments, create a Stripe Payment Link and replace the mailto reference in `src/sections/BookingForm.tsx`.
- **Videos are large.** The original asset payload is ~47MB. For production, consider hosting videos on Cloudflare Stream, Mux, or YouTube unlisted, and embedding rather than self-hosting.
- **HashRouter URLs have `/#/` prefix** — required for static hosting, looks slightly less clean. To remove, switch to BrowserRouter and add Netlify redirect rules (`_redirects` file with `/* /index.html 200`).

---

## License

This is a private template. See `KIMI_HANDOFF.md` for resale terms.
