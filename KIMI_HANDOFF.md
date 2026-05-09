# Andrew Hawkins CV — Template Handoff for Kimi

## ⚠️ IMPORTANT: READ THIS FIRST

This is a **completed, production-grade website** that should be sold as a template. The other Kimi should NOT rebuild from scratch — she should **clone the structure, swap content, and sell it**. Everything is already built. The design system, animations, SEO, and all 3 pages are done.

---

## WHAT THIS IS

A premium dark-themed personal CV / executive portfolio website with a dedicated consulting sales page. Built for Andrew Hawkins (entertainment executive) but designed as a reusable template.

**3 pages:**
1. **Home (`/`)** — Full CV with career timeline, stats, press, skills, contact
2. **Consulting (`/#/consulting`)** — Dedicated sales page with booking form
3. **Press Archive (`/#/press`)** — All media mentions and coverage

---

## TECH STACK

| Tech | Purpose |
|------|---------|
| React 19 + TypeScript | UI framework |
| Vite 7 | Build tool |
| Tailwind CSS 3.4 | Styling |
| GSAP 3 + ScrollTrigger | Animations |
| shadcn/ui | 40+ pre-installed components |
| react-helmet-async | Per-page SEO meta tags |
| react-router (HashRouter) | SPA routing for static hosting |

---

## DESIGN SYSTEM

### Colors
```
midnight:    #0c0e12 (background)
surface:     #111318
elevated:    #161a21  
border:      #1e222b
hover:       #1a1f28
gold:        #C9A96E (accent)
parchment:   #F0E6D3 (primary text)
parchment-muted:  #8A8075
parchment-dim:    #5A5248
```

### Fonts
- **Headlines**: Cormorant Garamond (serif, elegant editorial)
- **Body**: Jost (sans-serif, clean)
- Tailwind classes: `font-headline`, `font-body`

### Background
- Fixed zig-zag watermark pattern (gold on midnight)
- CSS `repeating-linear-gradient` — see `src/index.css`

---

## FILE STRUCTURE

```
src/
├── App.tsx              # Routes: /, /consulting, /press
├── main.tsx             # Entry: HashRouter + HelmetProvider
├── index.css            # Global styles, Tailwind theme, font imports
│
├── pages/
│   ├── HomePage.tsx      # Full CV — all sections
│   ├── ConsultingPage.tsx # Sales page — services, case studies, booking
│   └── PressPage.tsx     # Press archive listing
│
├── sections/
│   ├── Hero.tsx           # 3-line name + 3D character animation
│   ├── Profile.tsx        # Word-by-word scroll reveal paragraph
│   ├── CareerTimeline.tsx  # 6 career roles with portrait videos
│   ├── Highlights.tsx     # Achievement stat cards
│   ├── NetworksPartners.tsx # 30+ company partner grid (colored bars)
│   ├── FeaturedQuote.tsx  # Large pull quote (on CV page only)
│   ├── Recommendations.tsx # Testimonial cards
│   ├── Skills.tsx         # Tag cloud
│   ├── Contact.tsx        # Contact cards + social links
│   ├── ResultsStrip.tsx   # Animated counter strip
│   ├── BookingForm.tsx    # Consulting booking form (5-step + email)
│   └── Navigation.tsx     # Fixed nav with scroll links
│
├── hooks/
│   └── usePinnedHeader.ts # GSAP pin + fade for section headers
│
└── components/ui/         # shadcn/ui components (pre-installed)
```

---

## KEY ARCHITECTURAL DECISIONS (DO NOT CHANGE)

1. **HashRouter** — Required for static hosting. BrowserRouter will 404 on refresh.
2. **Two-page architecture** — Home (CV) and Consulting are SEPARATE pages. Do not merge.
3. **Career timeline uses flowing paragraphs** — NOT "Problem/Move/Result" format. That's only on Consulting page.
4. **Case studies are card boxes** — With colored category tags on Consulting page only.
5. **3-line hero** — ANDREW / JAMES / HAWKINS with GSAP character stagger animation.
6. **Pinned headers** — Section titles pin near top, content scrolls over with fade.

---

## CONTENT TO SWAP FOR TEMPLATE

Replace Andrew's specifics with `[YOUR NAME]` / `[YOUR CITY]` placeholders:

### Hero
- Line 1: `[FIRST NAME]`
- Line 2: `[MIDDLE NAME]` (optional)
- Line 3: `[LAST NAME]`
- Subtitle: "[City] / [City] / [City]" — change to client's cities

### Profile
- Swap the paragraph text with client's bio
- Keep the word-by-word scroll reveal animation

### Career Timeline (6 roles)
- Replace all 6 career entries with client's roles
- Keep: company name, role, industry, period, location, description[], highlights[], video
- Media can be images OR videos — both supported

### Networks & Partners
- Swap the 30+ company names for client's partners/networks
- Keep the colored accent bar system

### Case Studies (Consulting page)
- Replace 3 case studies with client's proof points
- Keep: Problem / Move / Result structure in card boxes

### Booking Form
- Swap email address, LinkedIn URL
- Adjust pricing if needed
- Keep the 5-step process flow

### Press Page
- Replace all press mentions with client's coverage
- Keep the archive format

### SEO
- Swap all meta titles, descriptions, structured data
- Keep JSON-LD schemas (Person, WebSite, ProfessionalService)

---

## BUILD INSTRUCTIONS

```bash
npm install
npm run build
# Upload dist/ folder to any static host (Netlify, Vercel, S3, etc.)
```

---

## WHAT'S ALREADY DONE (DON'T REDO)

✅ Full responsive design (mobile hamburger menu, desktop nav)
✅ GSAP animations on every section (scroll-triggered reveals, counters, pinned headers)
✅ SEO: meta tags, Open Graph, Twitter Cards, JSON-LD structured data
✅ robots.txt and sitemap.xml
✅ 3-page routing with HashRouter
✅ Booking form with email workflow
✅ Social media links (LinkedIn, X, Instagram, YouTube, Facebook)
✅ Press archive page
✅ All hover states, transitions, glass panels
✅ zig-zag watermark background pattern

---

## KNOWN LIMITATIONS

1. **Stripe is NOT integrated** — Booking form opens email client (mailto:). To add Stripe: create Payment Link in Stripe Dashboard, replace mailto: with link.
2. **Videos are ~47MB total** — Large asset payload. For template use, replace with generated placeholders or remove videos.
3. **HashRouter URLs** have `/#/` prefix — this is required for static hosting.

---

## HOW TO SELL AS TEMPLATE

1. Replace all Andrew-specific content with `[YOUR NAME]` placeholders
2. Replace images/videos with stock/generics or AI-generated placeholders
3. Keep ALL animations, design system, and page structure intact
4. Provide a simple `config.ts` or instructions for content swapping
5. Sell on Gumroad, Creative Market, or personal site
6. Price point suggestion: $49-149 for the template

---

## SOURCE CODE LOCATION

The complete source code is in this package under `src/`.
Build from root with `npm install && npm run build`.
Deploy the `dist/` folder to any static host.
