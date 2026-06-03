# Placeholders & Open Items

Everything you need to provide before going live. Grouped by priority.

---

## P0 — Must Fix Before Launch

### Contact Information

| Item | Current Placeholder | Where to Update |
|------|-------------------|-----------------|
| Phone number | `+1 (234) 567-890` | `src/layouts/BaseLayout.astro` (JSON-LD), `src/components/Footer.astro`, `src/pages/contact.astro` |
| WhatsApp number | `1234567890` | `src/components/WhatsAppButton.astro`, `src/pages/contact.astro`, `src/pages/get-a-quote.astro`, `src/pages/gifted.astro` |
| Business email | `info@niksconsulting.com` | `src/layouts/BaseLayout.astro` (JSON-LD), `src/components/Footer.astro`, `src/pages/contact.astro` |
| Business address | `Your City, Country` | `src/components/Footer.astro`, `src/layouts/BaseLayout.astro` (JSON-LD) |

### OG Image (Social Sharing)

| Item | Specs | Location |
|------|-------|----------|
| `og-image.jpg` | 1200×630px, PNG or JPG | `public/og-image.jpg` |

Shows when someone shares your site on LinkedIn, Twitter, Facebook, WhatsApp.

### Form Backends

All 4 forms currently show `alert()` on submit. No data is captured.

| Form | Page | What to Integrate |
|------|------|-------------------|
| Contact form | `/contact` | Freshsales CRM embed or alternative |
| Quote request | `/get-a-quote` | Freshsales lead capture embed |
| Training inquiry | `/training` | Freshsales or email notification |
| Gifted application | `/gifted` | Freshsales or Google Forms |

### Scheduling Widget

| Item | Status | Location |
|------|--------|----------|
| OnceHub embed | Link only (not embedded) | `src/pages/contact.astro`, `src/pages/get-a-quote.astro` |

Your OnceHub link is configured: `go.oncehub.com/nik4u`. To embed the widget, you need the embed code from OnceHub.

---

## P1 — Important for Credibility

### Team Photos

| Person | File Needed | Size |
|--------|-------------|------|
| Nikhil Tiwari | `team-nikhil.jpg` | 400×400px |
| Pierre Lisboa de Carvalho | `team-pierre.jpg` | 400×400px |
| Ebele Egbuna | `team-ebele.jpg` | 400×400px |
| Bintang Wijaya | `team-bintang.jpg` | 400×400px |

Place in `public/images/`. Paths already configured in `src/data/images.ts`.

### Team LinkedIn URLs

| Person | Current | Update In |
|--------|---------|-----------|
| Nikhil Tiwari | `linkedin.com/in/ntiwari1` (correct) | — |
| Pierre | `#` | `src/data/team.ts` |
| Ebele | `#` | `src/data/team.ts` |
| Bintang | `#` | `src/data/team.ts` |

### Case Study Screenshots

| Case Study | File Needed | Size |
|------------|-------------|------|
| Yoda Pizza Vietnam | `case-pizza.jpg` | 800×600px |
| OzynicDress USA | `case-fashion.jpg` | 800×600px |
| Dona Gi Bolos Brazil | `case-bakery.jpg` | 800×600px |
| MediConnect Japan | `case-study-4.jpg` | 800×600px |
| ModaExpress Brazil | `case-study-5.jpg` | 800×600px |
| DataFlow Analytics USA | `case-study-6.jpg` | 800×600px |

Place in `public/images/`. Paths already configured in `src/data/images.ts`.

### Social Media Links

| Platform | Current | Where to Update |
|----------|---------|-----------------|
| LinkedIn | `linkedin.com/in/ntiwari1` (correct) | — |
| Facebook | `#` | `src/components/Footer.astro` |
| YouTube | `#` | `src/components/Footer.astro` |
| X (Twitter) | `x.com/niksconsulting` (correct) | — |

### Testimonial Photos

| Person | File Needed | Size |
|--------|-------------|------|
| Sarah Johnson | `avatar-1.jpg` | 200×200px |
| Minh Nguyen | `avatar-2.jpg` | 200×200px |
| Giuliana Costa | `avatar-3.jpg` | 200×200px |

Place in `public/images/`. Paths already configured in `src/data/images.ts`.

---

## P2 — Gifted Program Specific

### Graduate Photos

| Person | File Needed | Size | Where Used |
|--------|-------------|------|------------|
| Ebele Egbuna | `graduate-ebele.jpg` | 400×400px | `/gifted` success story |
| Pierre Lisboa de Carvalho | `graduate-pierre.jpg` | 400×400px | `/gifted` success story |

### Video Testimonials

4 placeholder video cards on `/gifted`. For each, provide:

| Slot | What to Provide |
|------|-----------------|
| Video 1 | YouTube embed URL, graduate name, country, year |
| Video 2 | YouTube embed URL, graduate name, country, year |
| Video 3 | YouTube embed URL, graduate name, country, year |
| Video 4 | YouTube embed URL, graduate name, country, year |

Replace the placeholder `<div>` with `<iframe>` in `src/pages/gifted.astro` (around line 315).

### Cohort Date

| Item | Current | Location |
|------|---------|----------|
| Next cohort start date | `[Month Year]` placeholder | `src/pages/gifted.astro` (around line 536) |

---

## P3 — Nice to Have

### Freshdesk Support Widget

| Item | Status | Location |
|------|--------|----------|
| Freshdesk widget script | Commented out | `src/layouts/BaseLayout.astro` (line 56) |

Add the `<script>` tag from Freshdesk to enable live chat support.

### Hero Illustrations

SVG hero illustrations exist for all pages. Optional upgrades:

| Page | Current | Optional Upgrade |
|------|---------|-----------------|
| Training | Uses `hero-services.svg` | Create dedicated `hero-training.svg` |
| Gifted | Uses `hero-gifted.svg` | Already exists |

### Additional Banners

| Banner | File | Size | Status |
|--------|------|------|--------|
| Training hero | `banner-training.jpg` | 1920×600px | Optional |
| Internship hero | `banner-internship.jpg` | 1920×600px | Optional |

### Favicon

| Item | Status | Notes |
|------|--------|-------|
| `favicon.svg` | Exists | Works in modern browsers |
| `favicon.ico` | Missing | Add for older browser compatibility |

---

## Quick Checklist

- [ ] Phone number → BaseLayout, Footer, Contact, WhatsApp
- [ ] WhatsApp number → WhatsAppButton, Contact, Get-a-quote, Gifted
- [ ] Email → BaseLayout, Footer, Contact
- [ ] Address → Footer, BaseLayout
- [ ] OG image (1200×630) → `public/og-image.jpg`
- [ ] Team photos (4) → `public/images/`
- [ ] Team LinkedIn URLs (3) → `team.ts`
- [ ] Case study screenshots (6) → `public/images/`
- [ ] Social links (Facebook, YouTube) → Footer
- [ ] Testimonial photos (3) → `public/images/`
- [ ] Graduate photos (2) → `public/images/`
- [ ] Video testimonial YouTube URLs (4) → `gifted.astro`
- [ ] Cohort start date → `gifted.astro`
- [ ] Form backend integration (4 forms)
- [ ] OnceHub embed code → Contact, Get-a-quote
- [ ] Freshdesk widget script → BaseLayout

---

*Last updated: 2026-06-03*
