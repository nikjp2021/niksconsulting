# Product Requirements Document (PRD)
## niksconsulting.com — Website Redesign
**Version:** 1.0
**Date:** 2025-07-18
**Owner:** Nikhil "Nik" Tiwari, Founder — Niks Consulting

---

## Table of Contents
1. [Executive Summary](#1-executive-summary)
2. [Goals & Success Metrics](#2-goals--success-metrics)
3. [Tech Stack & Architecture](#3-tech-stack--architecture)
4. [Site Map & Pages](#4-site-map--pages)
5. [Design System](#5-design-system)
6. [Design Guidance — Detailed Specifications](#6-design-guidance--detailed-specifications)
7. [Page Wireframes & Mockups](#7-page-wireframes--mockups)
8. [Content Strategy](#8-content-strategy)
9. [Third-Party Integrations](#9-third-party-integrations)
10. [Placeholder Inventory (Action Required)](#10-placeholder-inventory-action-required)
11. [SEO & Structured Data](#11-seo--structured-data)
12. [Deployment Plan](#12-deployment-plan)
13. [DNS Configuration](#13-dns-configuration)
14. [WordPress Blog Subdomain](#14-wordpress-blog-subdomain)
15. [Post-Launch Checklist](#15-post-launch-checklist)
16. [File Structure Reference](#16-file-structure-reference)

---

## 1. Executive Summary

Redesign of niksconsulting.com as a modern, AI-first consulting website. The site positions Niks Consulting as pioneers in AI Solutions, Agentic AI, and Digital Transformation for startups and SMEs.

**Key Decisions:**
- **Main site:** Astro (static site generator) deployed on Vercel — fast, SEO-optimized, zero-maintenance
- **Blog subdomain:** WordPress on Hostinger (`blog.niksconsulting.com`) — easy content management
- **Design:** Dark theme with gradient accents, glassmorphism cards, modern typography
- **Positioning:** AI-first — all services, copy, and case studies lead with AI/Agentic capabilities

---

## 2. Goals & Success Metrics

| Goal | Metric |
|------|--------|
| Establish AI-first brand positioning | All hero/service copy leads with AI |
| Generate leads via contact forms | Freshsales CRM form integration |
| Enable scheduling | OnceHub booking widget on Contact & Get-a-Quote pages |
| Enable WhatsApp support | Click-to-chat floating button on every page |
| Fast page loads | < 2s load time (Astro SSG on Vercel CDN) |
| SEO-optimized | Structured data (JSON-LD), Open Graph, canonical URLs |
| Blog as separate module | `blog.niksconsulting.com` on WordPress/Hostinger |

---

## 3. Tech Stack & Architecture

### Frontend (Main Site)
| Technology | Version | Purpose |
|------------|---------|---------|
| Astro | ^5.8.0 | Static site generator |
| Tailwind CSS | ^3.4.17 | Utility-first CSS framework |
| @astrojs/tailwind | ^6.0.2 | Astro Tailwind integration |
| Lucide | ^0.511.0 | Icon library |
| TypeScript | (Astro built-in) | Type safety |

### Hosting & Deployment
| Service | Purpose |
|---------|---------|
| Vercel | Main site hosting (auto-deploy from GitHub) |
| Hostinger | WordPress blog hosting |
| GitHub | Source code repository |

### Third-Party Tools
| Tool | Purpose | Status |
|------|---------|--------|
| Freshsales CRM | Lead capture forms | **PLACEHOLDER — needs embed code** |
| Freshdesk | Support chat widget | **PLACEHOLDER — needs widget script** |
| OnceHub | Scheduling/booking | Configured: `go.oncehub.com/nik4u` |
| WhatsApp Business | Click-to-chat | **PLACEHOLDER — needs phone number** |

### Build Commands
```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build for production (dist/)
npm run preview  # Preview production build locally
```

---

## 4. Site Map & Pages

```
niksconsulting.com
├── / (Home)              — Hero, services grid, case studies, process, integrations, testimonials, CTA
├── /services             — Full service descriptions with features
├── /about                — Company story, "Meet Nik the Founder" section, team, certifications
├── /case-studies         — Portfolio of client work with results
├── /contact              — Contact form, phone, WhatsApp, scheduling widget
├── /get-a-quote          — Detailed quote request form with project details
└── blog.niksconsulting.com — WordPress blog (separate subdomain)
```

### Page Details

#### `/` — Home Page
- Hero: "We Build AI-Powered Solutions for Growing Businesses"
- Services grid (6 cards with icons)
- Featured case studies (3 cards)
- 4-step process section
- Integration partners logos (Slack, WhatsApp, Telegram, Discord, Freshsales, OnceHub, Zapier)
- Testimonials carousel
- Full-width CTA section

#### `/services` — Services Page
- Hero: "AI-Powered Services for the Modern Enterprise"
- 6 service sections, each with:
  - Icon, title, description
  - Feature list (6 features each)
  - Visual card with gradient accent
- Services: AI Solutions & Agentic AI, AI Automation, Digital Transformation, Website & App Development, AI-Powered Social Media, Agile Project Management

#### `/about` — About Page
- Hero: "Pioneering AI-First Digital Transformation"
- Company story (AI-focused narrative)
- Mission & Vision cards
- **"Meet Nik the Founder" featured section:**
  - Real bio from LinkedIn/PDF
  - Headline: "Agentic AI Builder | Fractional CPO | Xiaomi MiMo Grant Winner | PhD Candidate"
  - Skill tags: Agentic AI, Health Tech, Product Strategy, LLM Systems, Web3, PhD Research
  - LinkedIn button → `linkedin.com/in/ntiwari1`
  - Book a Call → `go.oncehub.com/nik4u`
- Team members: Pierre, Ebele, Bintang (below Nik's section)
- Certifications & Awards section

#### `/case-studies` — Case Studies Page
- Grid of case study cards
- Each card: title, client, location, challenge, solution, results, tags
- Studies: Yoda Pizza Vietnam, OzynicDress USA, Dona Gi Bolos Brazil

#### `/contact` — Contact Page
- Contact information sidebar (email, phone, WhatsApp, address)
- **Freshsales contact form** (PLACEHOLDER)
- **OnceHub scheduling widget** (PLACEHOLDER — embed code needed)
- Quick links sidebar

#### `/get-a-quote` — Get a Quote Page
- Detailed multi-section form (personal info, business info, project details)
- **Freshsales lead capture form** (PLACEHOLDER)
- Sidebar: "What Happens Next" steps + scheduling/WhatsApp quick links

---

## 5. Design System

### Color Palette
```css
Dark Background:  #0B0F1A (dark-900) → #1A1F2E (dark-800) → #2D3348 (dark-700)
Text:             #E2E8F0 (dark-200) → #94A3B8 (dark-400)
Primary Accent:   Cyan/Teal gradient (#06B6D4 → #0EA5E9)
Secondary Accent: Violet/Purple gradient (#8B5CF6 → #A855F7)
```

### Typography
- **Display/Headings:** `font-display` (bold, large)
- **Body:** System font stack via Tailwind

### Component Patterns
- **Glass cards:** `bg-dark-800/50 backdrop-blur-xl border border-dark-700/50 rounded-2xl`
- **Primary buttons:** Gradient cyan background, white text, hover glow
- **Outline buttons:** Border with gradient text, hover fill
- **Input fields:** Dark background, focus ring with primary color
- **Section headings:** Gradient text accent on key words

### Animations
- Fade-in on scroll (IntersectionObserver)
- Gradient text shimmer
- Floating elements with subtle movement

---

## 6. Design Guidance — Detailed Specifications

This section provides implementable design specifications for developers and designers working on the site.

### 6.1 Spacing System

Based on Tailwind's default 4px base unit:

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Icon padding, tight gaps |
| `space-2` | 8px | Inline element gaps |
| `space-3` | 12px | Small card padding |
| `space-4` | 16px | Standard card padding, form field gaps |
| `space-5` | 20px | Card internal spacing |
| `space-6` | 24px | Section sub-gaps |
| `space-8` | 32px | Grid column gaps |
| `space-10` | 40px | Section internal padding |
| `space-12` | 48px | Section gaps (mobile) |
| `space-16` | 64px | Section gaps (desktop) |
| `space-20` | 80px | Large section padding |
| `space-28` | 112px | Hero section padding |

**Container:**
```css
.container-custom {
  max-width: 1280px;    /* max-w-7xl */
  margin: 0 auto;
  padding-left: 24px;   /* px-6 */
  padding-right: 24px;
}
/* Tablet+ */ @media (min-width: 640px) { padding: 0 32px; }
/* Desktop+ */ @media (min-width: 1024px) { padding: 0 48px; }
```

**Section padding:**
```css
.section-padding {
  padding-top: 80px;    /* py-20 */
  padding-bottom: 80px;
}
/* Desktop+ */ @media (min-width: 1024px) {
  padding-top: 96px;    /* py-24 lg:py-32 */
  padding-bottom: 96px;
}
```

### 6.2 Typography Scale

| Element | Font | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|------|--------|-------------|----------------|-------|
| H1 (Hero) | Display | 48px / 60px (lg) | Bold (700) | 1.1 | -0.02em | `text-white` |
| H2 (Section) | Display | 36px / 48px (lg) | Bold (700) | 1.2 | -0.01em | `text-white` |
| H3 (Card) | Display | 24px | Semibold (600) | 1.3 | normal | `text-white` |
| H4 (Sub-card) | Display | 20px | Semibold (600) | 1.4 | normal | `text-white` |
| Body Large | System | 18px | Normal (400) | 1.75 | normal | `text-dark-300` |
| Body | System | 16px | Normal (400) | 1.75 | normal | `text-dark-400` |
| Body Small | System | 14px | Normal (400) | 1.5 | normal | `text-dark-400` |
| Caption | System | 12px | Medium (500) | 1.5 | 0.05em | `text-dark-500` |
| Button | System | 16px | Semibold (600) | 1 | normal | `text-white` |
| Nav Link | System | 16px | Medium (500) | 1 | normal | `text-dark-300` |

**Gradient text (accent on key words):**
```css
.gradient-text {
  background: linear-gradient(135deg, #06B6D4, #0EA5E9, #8B5CF6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### 6.3 Component Specifications

#### Navbar
```
┌─────────────────────────────────────────────────────────────────┐
│  Height: 64px (h-16)                                           │
│  Background: bg-dark-900/80 + backdrop-blur-xl                  │
│  Border: border-b border-dark-700/50                            │
│  Position: fixed top-0, z-50                                    │
│                                                                 │
│  [N Logo]  NiksConsulting          Services  About  Blog  CTA  │
│  36×36px   font-display bold       nav links    btn-primary    │
│            text-lg                  gap-8        py-2 px-5      │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile (< 768px):**
```
┌──────────────────────────┐
│  [N Logo]  NiksCon   [☰] │  ← hamburger icon
├──────────────────────────┤
│  Services                │  ← slide-down menu
│  About                   │     bg-dark-900/95
│  Case Studies            │     backdrop-blur-xl
│  Contact                 │     border-b
│  Blog (external)         │
│  ┌──────────────────────┐│
│  │   Get a Quote        ││  ← full-width btn-primary
│  └──────────────────────┘│
└──────────────────────────┘
```

#### Glass Card
```css
.glass-card {
  background: rgba(26, 31, 46, 0.5);    /* bg-dark-800/50 */
  backdrop-filter: blur(24px);            /* backdrop-blur-xl */
  border: 1px solid rgba(45, 51, 72, 0.5); /* border-dark-700/50 */
  border-radius: 16px;                    /* rounded-2xl */
  padding: 24px;                          /* p-6 to p-8 */
  transition: all 0.3s ease;
}
.glass-card:hover {
  border-color: rgba(6, 182, 212, 0.3);  /* primary-500/30 */
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(6, 182, 212, 0.1);
}
```

#### Buttons

**Primary Button:**
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;              /* py-3 px-6 */
  background: linear-gradient(135deg, #06B6D4, #0EA5E9);
  color: white;
  font-weight: 600;
  font-size: 16px;
  border-radius: 12px;             /* rounded-xl */
  transition: all 0.3s;
  box-shadow: 0 4px 14px rgba(6, 182, 212, 0.4);
}
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(6, 182, 212, 0.5);
}
```

**Outline Button:**
```css
.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: transparent;
  border: 1px solid rgba(6, 182, 212, 0.5);
  color: #06B6D4;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s;
}
.btn-outline:hover {
  background: rgba(6, 182, 212, 0.1);
  border-color: #06B6D4;
}
```

**Ghost Button:**
```css
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: transparent;
  color: #94A3B8;                   /* text-dark-400 */
  font-weight: 500;
  border-radius: 12px;
  transition: all 0.3s;
}
.btn-ghost:hover {
  color: white;
  background: rgba(255, 255, 255, 0.05);
}
```

#### Input Fields
```css
.input-field {
  width: 100%;
  padding: 12px 16px;              /* py-3 px-4 */
  background: rgba(11, 15, 26, 0.5); /* bg-dark-900/50 */
  border: 1px solid rgba(45, 51, 72, 0.5); /* border-dark-700/50 */
  border-radius: 12px;             /* rounded-xl */
  color: white;                    /* text-white */
  font-size: 16px;
  transition: all 0.3s;
}
.input-field::placeholder {
  color: #64748B;                  /* text-dark-500 */
}
.input-field:focus {
  outline: none;
  border-color: #06B6D4;           /* primary-500 */
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.15);
}
```

#### Service Card
```
┌────────────────────────────────────┐
│  ┌──────────┐                      │
│  │  🧠 Icon │  bg-gradient-to-br   │
│  │  48×48   │  from-{color}-500    │
│  │  rounded │  to-{color}-600      │
│  └──────────┘                      │
│                                    │
│  Service Title              →      │  font-display, text-white, text-lg
│  Short description text           │  text-dark-400, text-sm, 2 lines max
│  that spans two lines             │
│                                    │
│  [Learn more →]                    │  text-primary-400, text-sm
└────────────────────────────────────┘
  Glass card styling
  Hover: translateY(-4px), border glow
  Grid: 1 col mobile, 2 col tablet, 3 col desktop
```

#### Section Heading Pattern
```
┌──────────────────────────────────────────────┐
│              ┌─────────────────┐             │
│              │  ● Section Tag  │             │  ← pill badge: bg-primary-500/10
│              └─────────────────┘             │     text-primary-400, text-sm, font-semibold
│                                              │
│     Main Heading with Gradient Text          │  ← font-display, text-3xl/4xl/5xl
│                                              │     key word uses .gradient-text
│     Supporting description paragraph         │  ← text-dark-300, max-w-2xl, text-lg
│     that provides context for the section.   │     mx-auto, text-center
└──────────────────────────────────────────────┘
```

### 6.4 Responsive Breakpoints

| Breakpoint | Width | Layout Behavior |
|------------|-------|-----------------|
| Mobile | < 640px | Single column, stacked elements, hamburger nav |
| Tablet (sm) | 640px – 767px | 2-column grids, larger text, side-by-side cards |
| Desktop (md) | 768px – 1023px | Full navbar visible, 2-3 column grids |
| Large (lg) | 1024px+ | Full layout, all sidebars visible, max-width containers |

**Grid System:**
```
Services grid:     1 col → 2 col (sm) → 3 col (lg)
Case studies:      1 col → 2 col (sm) → 3 col (lg)
Contact page:      1 col → 2 col (lg): form + sidebar
Get-a-quote:       1 col → 2 col (lg): form + sidebar
About team:        1 col → 2 col (sm) → 4 col (lg)
Footer:            1 col → 2 col (md) → 4 col (lg)
Process steps:     1 col → 2 col (sm) → 4 col (lg)
```

### 6.5 Animation Specifications

**Fade-in on scroll (IntersectionObserver):**
```javascript
// Applied via class="animate-on-scroll" + data-delay="0|100|200|300"
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
```
```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-on-scroll.animate-visible {
  opacity: 1;
  transform: translateY(0);
}
/* Stagger delays */
[data-delay="100"] { transition-delay: 100ms; }
[data-delay="200"] { transition-delay: 200ms; }
[data-delay="300"] { transition-delay: 300ms; }
```

**Gradient shimmer (hero heading):**
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.gradient-text-animated {
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}
```

**Floating decoration (background orbs):**
```css
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(3deg); }
}
.animate-float { animation: float 6s ease-in-out infinite; }
.animate-float-slow { animation: float 8s ease-in-out infinite; }
.animate-float-slower { animation: float 10s ease-in-out infinite; }
```

**WhatsApp pulse (floating button):**
```css
@keyframes pulse-green {
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
  70% { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}
.whatsapp-pulse { animation: pulse-green 2s infinite; }
```

### 6.6 Hero Section Background Pattern

Used on every page hero:
```css
.bg-hero-gradient {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(6, 182, 212, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
    linear-gradient(to bottom, #0B0F1A, #0B0F1A);
}
```

Additional overlays per page:
- **Home:** `radial-gradient(ellipse_at_top, rgba(6,182,212,0.12), transparent_60%)`
- **Services:** `radial-gradient(ellipse_at_center, rgba(139,92,246,0.08), transparent_60%)`
- **About:** `radial-gradient(ellipse_at_top_right, rgba(6,182,212,0.1), transparent_60%)`
- **Contact:** `radial-gradient(ellipse_at_bottom_left, rgba(139,92,246,0.08), transparent_60%)`

### 6.7 Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| Color contrast | All text meets WCAG AA (4.5:1 minimum) against dark backgrounds |
| Focus indicators | Visible focus ring on all interactive elements: `focus:ring-2 focus:ring-primary-500/50` |
| Alt text | All images must have descriptive `alt` attributes |
| Semantic HTML | `<nav>`, `<main>`, `<footer>`, `<section>`, `<header>`, `<article>` |
| ARIA labels | All icon-only buttons must have `aria-label` |
| Keyboard navigation | All interactive elements reachable via Tab, activatable via Enter/Space |
| Reduced motion | Respect `prefers-reduced-motion: reduce` — disable animations |
| Screen reader | Form labels properly associated via `for`/`id` |

**Reduced motion override:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 6.8 Performance Budgets

| Metric | Target | Tool |
|--------|--------|------|
| First Contentful Paint | < 1.2s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Total Blocking Time | < 200ms | Lighthouse |
| Lighthouse Performance Score | ≥ 90 | PageSpeed Insights |
| Total page weight | < 500KB (initial load) | Network tab |
| Image format | WebP with fallback, max 200KB per image | Manual |
| Font loading | System fonts only (no web font requests) | N/A |

### 6.9 Icon System

Icons from Lucide (`lucide` npm package), used via inline SVG in `ServiceCard.astro`.

**Service icon mapping:**

| Service | Icon Name | Visual |
|---------|-----------|--------|
| AI Solutions & Agentic AI | `brain` | 🧠 Neural network / brain |
| AI Automation | `bot` | 🤖 Robot face |
| Digital Transformation | `zap` | ⚡ Lightning bolt |
| Website & App Development | `globe` | 🌐 Globe/world |
| AI-Powered Social Media | `share-2` | 📤 Share nodes |
| Agile Project Management | `kanban` | 📋 Kanban board |

**Icon sizing:**
- Service cards: 24×24px inside 48×48px gradient container
- Inline icons (buttons, links): 16×16px (w-4 h-4) or 20×20px (w-5 h-5)
- Social media icons (footer): 20×20px (w-5 h-5)
- WhatsApp floating: 28×28px (w-7 h-7)

### 6.10 Image Guidelines

| Image Type | Dimensions | Format | Max Size | Notes |
|------------|-----------|--------|----------|-------|
| OG / Social share | 1200 × 630px | JPG/PNG | 200KB | Logo + tagline on dark gradient |
| Team headshots | 400 × 400px | JPG/WebP | 80KB | Circular crop, neutral background |
| Testimonial avatars | 400 × 400px | JPG/WebP | 50KB | Can be AI-generated or placeholder |
| Case study screenshots | 800 × 500px | JPG/WebP | 150KB | Actual project screenshots or mockups |
| Favicon | 32 × 32px | SVG | 5KB | Already created (gradient "N") |
| Background decorations | N/A | SVG | < 5KB | Geometric shapes, blurred orbs |

**Image optimization pipeline:**
1. Source images at 2× target resolution
2. Compress with TinyPNG or Squoosh
3. Convert to WebP (with JPG fallback for OG images)
4. Place in `public/images/` directory
5. Reference with absolute paths: `/images/filename.webp`

---

## 7. Page Wireframes & Mockups

> All wireframes show **desktop layout**. Mobile layouts follow the responsive grid rules in Section 6.4.
> Dimensions are approximate — actual rendering uses Tailwind utility classes.
> `[PHOTO]` indicates a placeholder image needed. `[FORM]` indicates a Freshsales embed.

### 7.1 Shared Layout Shell (All Pages)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ NAVBAR (fixed, 64px, glass effect)                                         │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ [N] NiksConsulting          Services  About  Case Studies  Blog ↗  CTA │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  <slot /> — Page content goes here                                         │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                                      │
│ ┌──────────┬──────────┬──────────┬──────────────────────────────────────┐   │
│ │ Brand    │ Services │ Company  │ Get in Touch                         │   │
│ │          │          │          │                                      │   │
│ │ [N] Logo │ • AI Sol │ • About  │ ✉ info@niksconsulting.com           │   │
│ │          │ • AI Aut │ • Cases  │ 📞 +XX-XXX-XXXX                     │   │
│ │ Pioneers │ • DX     │ • Contact│ 📍 City, Country                    │   │
│ │ in AI... │ • Web    │ • Quote  │                                      │   │
│ │          │ • Social │ • Blog ↗ │ [in] [f] [yt] [x]                   │   │
│ └──────────┴──────────┴──────────┴──────────────────────────────────────┘   │
│ ─────────────────────────────────────────────────────────────────────────── │
│ © 2025 Niks Consulting. All rights reserved.    Built with passion by NC   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                              ┌─────────┐                    │
│                                              │ 💬 Chat │ ← WhatsApp FAB    │
│                                              │ (float) │   bottom-right     │
│                                              └─────────┘   pulse animation  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 7.2 Home Page (`/`) Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HERO SECTION (py-20 lg:py-28, radial gradient background)                  │
│                                                                             │
│                          🏷️ AI-First Digital Solutions                       │  ← pill badge
│                                                                             │
│              We Build AI-Powered                                            │  ← H1, white
│            Solutions for Growing                                            │  ← H1, white
│               <Businesses>                                                  │  ← gradient-text
│                                                                             │
│     Pioneers in AI Solutions & Innovation. We help startups                │  ← body, dark-300
│     and SMEs harness the power of AI, automation, and                       │  ← max-w-2xl, mx-auto
│     digital transformation to scale smarter and faster.                    │
│                                                                             │
│        [ Start Your AI Journey → ]    [ View Case Studies ]                │  ← btn-primary + btn-outline
│                                                                             │
│     ┌───┐  ┌───┐  ┌───┐  ┌───┐  ┌───┐                                    │
│     │10+│  │ 50+│  │ 3  │  │ 5K+│  │100│                                  │  ← floating stat badges
│     │Yrs│  │Proj│  │Ctry│  │User│  │ % │                                  │     animate-float
│     └───┘  └───┘  └───┘  └───┘  └───┘                                    │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ SERVICES SECTION                                                            │
│                                                                             │
│           🏷️ Our Services                                                  │
│     AI-Powered Solutions for                                             │
│         <Every Business Need>                                              │
│     From intelligent automation to digital transformation...               │
│                                                                             │
│  ┌────────────────────┐ ┌────────────────────┐ ┌────────────────────┐      │
│  │ 🧠                 │ │ 🤖                 │ │ ⚡                 │      │
│  │ AI Solutions &     │ │ AI Automation      │ │ Digital            │      │
│  │ Agentic AI         │ │                    │ │ Transformation     │      │
│  │                    │ │                    │ │                    │      │
│  │ AI-powered         │ │ Streamline ops     │ │ Strategic DX       │      │
│  │ solutions that...  │ │ with intelligent.. │ │ initiatives that.. │      │
│  │                    │ │                    │ │                    │      │
│  │ [Learn more →]     │ │ [Learn more →]     │ │ [Learn more →]     │      │
│  └────────────────────┘ └────────────────────┘ └────────────────────┘      │
│  ┌────────────────────┐ ┌────────────────────┐ ┌────────────────────┐      │
│  │ 🌐                 │ │ 📤                 │ │ 📋                 │      │
│  │ Website & App      │ │ AI-Powered Social  │ │ Agile Project      │      │
│  │ Development        │ │ Media              │ │ Management         │      │
│  │ ...                │ │ ...                │ │ ...                │      │
│  │ [Learn more →]     │ │ [Learn more →]     │ │ [Learn more →]     │      │
│  └────────────────────┘ └────────────────────┘ └────────────────────┘      │
│                                                                             │
│                    [ View All Services → ]                                  │  ← btn-outline
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ CASE STUDIES SECTION                                                        │
│                                                                             │
│           🏷️ Case Studies                                                  │
│        Real Results, <Real Growth>                                         │
│     See how we've helped businesses transform...                           │
│                                                                             │
│  ┌─────────────────────────┐ ┌─────────────────────────┐ ┌──────────────┐  │
│  │ ┌─────────────────────┐ │ │ ┌─────────────────────┐ │ │ ┌──────────┐ │  │
│  │ │    [PHOTO]          │ │ │ │    [PHOTO]          │ │ │ │ [PHOTO]  │ │  │
│  │ │    Yoda Pizza       │ │ │ │    OzynicDress      │ │ │ │ Dona Gi  │ │  │
│  │ │    Vietnam          │ │ │ │    USA              │ │ │ │ Brazil   │ │  │
│  │ └─────────────────────┘ │ │ └─────────────────────┘ │ │ └──────────┘ │  │
│  │                         │ │                         │ │              │  │
│  │ Yoda Pizza Vietnam:     │ │ OzynicDress: Building.. │ │ Dona Gi...   │  │
│  │ Dominating Online..     │ │                         │ │              │  │
│  │                         │ │                         │ │              │  │
│  │ 300% ↑ online orders    │ │ 200% ↑ online sales     │ │ 150% ↑ new.. │  │
│  │                         │ │                         │ │              │  │
│  │ [SEO] [DX] [AI]         │ │ [E-commerce] [Brand]    │ │ [SEO] [WA]   │  │
│  │                         │ │                         │ │              │  │
│  │ [View Case Study →]     │ │ [View Case Study →]     │ │ [View Case →]│  │
│  └─────────────────────────┘ └─────────────────────────┘ └──────────────┘  │
│                                                                             │
│                    [ View All Case Studies → ]                              │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ PROCESS SECTION                                                             │
│                                                                             │
│           🏷️ How We Work                                                   │
│        Our <Proven Process>                                                │
│                                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   01         │  │   02         │  │   03         │  │   04         │    │
│  │   🔍         │  │   🎯         │  │   ⚙️         │  │   🚀         │    │
│  │              │  │              │  │              │  │              │    │
│  │ AI-Powered   │  │ Strategic    │  │ Build &      │  │ Launch &     │    │
│  │ Analysis     │  │ Planning     │  │ Integration  │  │ Optimize     │    │
│  │              │  │              │  │              │  │              │    │
│  │ Deep dive    │  │ Custom       │  │ Deploy AI    │  │ Go live with │    │
│  │ into your... │  │ roadmap...   │  │ solutions... │  │ continuous.. │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│        │                 │                 │                 │              │
│        └───── connector line ───── connector line ───── connector ──┘      │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ INTEGRATIONS SECTION                                                        │
│                                                                             │
│           🏷️ Integrations                                                  │
│        Works With <Your Favorite Tools>                                    │
│                                                                             │
│   ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                              │
│   │ Slack  │ │  WA    │ │Telegram│ │Discord │                              │
│   └────────┘ └────────┘ └────────┘ └────────┘                              │
│   ┌────────┐ ┌────────┐ ┌────────┐                                         │
│   │Fresh-  │ │OnceHub │ │ Zapier │                                         │
│   │sales   │ │        │ │        │                                         │
│   └────────┘ └────────┘ └────────┘                                         │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ TESTIMONIALS SECTION                                                        │
│                                                                             │
│           🏷️ Testimonials                                                  │
│        What Our <Clients Say>                                              │
│                                                                             │
│  ┌─────────────────────────┐ ┌─────────────────────────┐ ┌──────────────┐  │
│  │ ★★★★★                   │ │ ★★★★★                   │ │ ★★★★★        │  │
│  │                         │ │                         │ │              │  │
│  │ "Niks Consulting        │ │ "The digital            │ │ "From zero   │  │
│  │  transformed our..."    │ │  transformation..."     │ │  digital..." │  │
│  │                         │ │                         │ │              │  │
│  │ ┌──┐ Sarah Johnson      │ │ ┌──┐ Minh Nguyen        │ │ ┌──┐Giuliana │  │
│  │ │[A]│ Founder           │ │ │[A]│ Ops Manager       │ │ │[A]│ Owner  │  │
│  │ └──┘ OzynicDress        │ │ └──┘ Yoda Pizza VN     │ │ └──┘Dona Gi │  │
│  └─────────────────────────┘ └─────────────────────────┘ └──────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ CTA SECTION (full-width, gradient background)                               │
│                                                                             │
│              Ready to Transform Your Business with AI?                      │
│                                                                             │
│     Let's discuss how AI-powered solutions can accelerate                   │
│     your growth. Book a free consultation today.                            │
│                                                                             │
│        [ Schedule a Free Consultation → ]                                  │  ← btn-primary (large)
│                                                                             │
│     ⚡ Free consultation  •  🤖 AI-first approach  •  🌍 Global reach      │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 7.3 Services Page (`/services`) Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HERO (py-20, radial gradient)                                               │
│                                                                             │
│           🏷️ Our Services                                                  │
│                                                                             │
│         AI-Powered Services for the                                        │
│           <Modern Enterprise>                                              │
│                                                                             │
│     Comprehensive AI solutions designed to transform your business         │
│     operations and accelerate growth.                                      │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ SERVICE 1: AI Solutions & Agentic AI (repeated pattern × 6)                │
│                                                                             │
│  ┌─────────────────────────────────────────┐  ┌─────────────────────────┐  │
│  │                                         │  │                         │  │
│  │  🧠                                      │  │  ┌───────────────────┐  │  │
│  │  AI Solutions & Agentic AI              │  │  │   AI              │  │  │
│  │                                         │  │  │   Solutions       │  │  │
│  │  We design and deploy intelligent AI    │  │  │   & Agentic       │  │  │
│  │  agents and agentic workflows that      │  │  │   AI              │  │  │
│  │  handle complex tasks autonomously...   │  │  │                   │  │  │
│  │                                         │  │  │   [gradient bg]   │  │  │
│  │  ✓ Custom AI agent development          │  │  └───────────────────┘  │  │
│  │  ✓ Agentic workflow automation          │  │                         │  │
│  │  ✓ AI-powered chatbots & assistants     │  │                         │  │
│  │  ✓ Intelligent document processing      │  │                         │  │
│  │  ✓ AI-driven analytics & insights       │  │                         │  │
│  │  ✓ LLM integration & fine-tuning        │  │                         │  │
│  │                                         │  │                         │  │
│  └─────────────────────────────────────────┘  └─────────────────────────┘  │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │  ← divider
│                                                                             │
│  SERVICE 2: AI Automation (same layout, icon: 🤖, reversed image side)     │
│  ...                                                                        │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  SERVICE 3-6: (alternating left/right layout)                              │
│  ...                                                                        │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ CTA (same as home)                                                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 7.4 About Page (`/about`) Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HERO                                                                        │
│                                                                             │
│           🏷️ About Us                                                      │
│                                                                             │
│       Pioneering AI-First                                                  │
│     <Digital Transformation>                                               │
│                                                                             │
│     A team of AI specialists, engineers, and strategists helping           │
│     businesses thrive in the age of intelligent automation.                │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ OUR STORY                                                                   │
│                                                                             │
│  ┌──────────────────────────────────┐  ┌──────────────────────────────────┐ │
│  │                                  │  │                                  │ │
│  │  🏷️ Our Story                    │  │  Founded with a vision to        │ │
│  │                                  │  │  democratize AI for businesses   │ │
│  │  From Vision to AI               │  │  of all sizes. We started as a   │ │
│  │  <Innovation>                    │  │  digital transformation firm and │ │
│  │                                  │  │  evolved into an AI-first        │ │
│  │  We're not just consultants —    │  │  consultancy as the technology   │ │
│  │  we're builders who create       │  │  landscape shifted.              │ │
│  │  working AI systems.            │  │                                  │ │
│  │                                  │  │  Today, we deploy agentic AI,    │ │
│  │                                  │  │  build intelligent automation,   │ │
│  │                                  │  │  and deliver digital solutions   │ │
│  │                                  │  │  across 3+ countries.            │ │
│  └──────────────────────────────────┘  └──────────────────────────────────┘ │
│                                                                             │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐        │
│  │ 🎯 Mission                   │  │ 🔭 Vision                    │        │
│  │                              │  │                              │        │
│  │ To empower startups and SMEs │  │ A world where every business │        │
│  │ with accessible, impactful   │  │ has access to enterprise-    │        │
│  │ AI solutions that drive...   │  │ grade AI solutions...        │        │
│  │                              │  │                              │        │
│  └──────────────────────────────┘  └──────────────────────────────┘        │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ MEET NIK — THE FOUNDER (Featured section, larger treatment)                │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  🏷️ Meet Nik — The Founder                                          │   │
│  │                                                                      │   │
│  │  ┌──────────────┐                                                    │   │
│  │  │              │   Nikhil Tiwari                                    │   │
│  │  │   [PHOTO]    │   "Nik"                                            │   │
│  │  │              │                                                    │   │
│  │  │   400×400    │   Agentic AI Builder | Fractional CPO |           │   │
│  │  │   circular   │   Xiaomi MiMo Grant Winner | PhD Candidate        │   │
│  │  │              │                                                    │   │
│  │  └──────────────┘   I build products with AI — not theory,           │   │
│  │                      working systems. 10+ years in product mgmt.     │   │
│  │                      PhD candidate at Shizuoka University, Japan.    │   │
│  │                      Previously at Expedia ($2M budget, 3K agents).  │   │
│  │                      Founder of MyTegami.win (5K users, NPS 72).     │   │
│  │                                                                      │   │
│  │                      ┌──────────┐ ┌──────────┐ ┌──────────┐         │   │
│  │                      │Agentic AI│ │Health Tech│ │Product   │         │   │
│  │                      └──────────┘ └──────────┘ └──────────┘         │   │
│  │                      ┌──────────┐ ┌──────────┐ ┌──────────┐         │   │
│  │                      │LLM Systms│ │  Web3    │ │PhD Rsrch │         │   │
│  │                      └──────────┘ └──────────┘ └──────────┘         │   │
│  │                                                                      │   │
│  │  [ View LinkedIn ↗ ]    [ 📅 Book a Call → ]                        │   │
│  │                                                                      │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ TEAM SECTION (below Nik)                                                    │
│                                                                             │
│           🏷️ The Team                                                      │
│        Builders, <Not Just Consultants>                                    │
│                                                                             │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐         │
│  │    [PHOTO]       │  │    [PHOTO]       │  │    [PHOTO]       │         │
│  │    Pierre        │  │    Ebele         │  │    Bintang       │         │
│  │                  │  │                  │  │                  │         │
│  │  DX Officer &   │  │  UI/UX Designer  │  │  Full Stack Dev  │         │
│  │  Automation Eng  │  │                  │  │                  │         │
│  │                  │  │  Creative UI/UX  │  │  Versatile full  │         │
│  │  Specialist in   │  │  designer...     │  │  stack developer │         │
│  │  digital...      │  │                  │  │  with expertise..│         │
│  │                  │  │                  │  │                  │         │
│  │  [LinkedIn ↗]   │  │  [LinkedIn ↗]   │  │  [LinkedIn ↗]   │         │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘         │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ CERTIFICATIONS & AWARDS                                                     │
│                                                                             │
│           🏷️ Certifications & Awards                                       │
│        Backed by <Industry Recognition>                                    │
│                                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │ 🏆           │ │ 🎓           │ │ 📜           │ │ 🎖️           │          │
│  │ Xiaomi MiMo │ │ Vanderbilt  │ │ Six Sigma   │ │ Pendo AI    │          │
│  │ Grant 2026  │ │ Prompt Eng  │ │ Certified   │ │ for Product │          │
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘          │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                           │
│  │ 📋           │ │ ⛓️           │ │ 🔍           │                           │
│  │ 5 PM        │ │ 3 Blockchain│ │ Google      │                           │
│  │ Certs       │ │ Certs       │ │ Foundations │                           │
│  └─────────────┘ └─────────────┘ └─────────────┘                           │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ CTA                                                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 7.5 Case Studies Page (`/case-studies`) Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HERO                                                                        │
│                                                                             │
│           🏷️ Case Studies                                                  │
│                                                                             │
│            Real Results,                                                    │
│          <Real Growth>                                                     │
│                                                                             │
│     See how we've helped businesses across the globe achieve               │
│     measurable growth through AI-powered digital transformation.           │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ CASE STUDIES GRID (repeated × 3, stacked vertically)                       │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  ┌────────────────────────┐                                          │   │
│  │  │                        │   Yoda Pizza Vietnam:                     │   │
│  │  │      [PHOTO]           │   Dominating Online Recommendations      │   │
│  │  │                        │                                          │   │
│  │  │    800×500             │   📍 Vietnam  ·  📂 Digital Transformation│   │
│  │  │                        │                                          │   │
│  │  │                        │   Challenge:                              │   │
│  │  │                        │   A growing pizza chain needed to...      │   │
│  │  │                        │                                          │   │
│  │  └────────────────────────┘   Results:                                │   │
│  │                                 • Top 3 Google ranking for local...   │   │
│  │                                 • 300% increase in online orders...   │   │
│  │                                 • AI-powered recommendations...       │   │
│  │                                                                      │   │
│  │                                 [SEO] [DX] [AI]                       │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  (OzynicDress — same layout, image on right side — alternating)      │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │  (Dona Gi Bolos — same layout, image on left)                        │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ CTA                                                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 7.6 Contact Page (`/contact`) Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HERO                                                                        │
│                                                                             │
│           🏷️ Contact Us                                                    │
│                                                                             │
│           Let's Build Something                                            │
│            <Amazing Together>                                              │
│                                                                             │
│     Ready to transform your business with AI? Let's start                 │
│     the conversation.                                                      │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ CONTACT CONTENT (2-column layout: form + sidebar)                           │
│                                                                             │
│  ┌─────────────────────────────────────┐  ┌────────────────────────────┐   │
│  │ FORM (Glass card)                   │  │ CONTACT INFO (Glass card)  │   │
│  │                                     │  │                            │   │
│  │  Send Us a Message                  │  │  Get in Touch              │   │
│  │                                     │  │                            │   │
│  │  ┌────────────┐ ┌────────────┐      │  │  ✉ info@niksconsulting.com│   │
│  │  │ First Name │ │ Last Name  │      │  │                            │   │
│  │  └────────────┘ └────────────┘      │  │  📞 +XX-XXX-XXXX          │   │
│  │  ┌──────────────────────────┐       │  │                            │   │
│  │  │ Email                    │       │  │  💬 WhatsApp: +XX-XXX-XXXX │   │
│  │  └──────────────────────────┘       │  │                            │   │
│  │  ┌──────────────────────────┐       │  │  📍 City, Country         │   │
│  │  │ Phone (optional)         │       │  │                            │   │
│  │  └──────────────────────────┘       │  ├────────────────────────────┤   │
│  │  ┌──────────────────────────┐       │  │ SCHEDULE A CALL (Glass)    │   │
│  │  │ Service ▼                │       │  │                            │   │
│  │  │  • AI Solutions          │       │  │  📅 Book a 30-min          │   │
│  │  │  • AI Automation         │       │  │  consultation directly     │   │
│  │  │  • DX                    │       │  │                            │   │
│  │  │  • Web Dev               │       │  │  ┌──────────────────────┐  │   │
│  │  │  • Social Media          │       │  │  │ [📅 Schedule a Call] │  │   │
│  │  │  • Agile PM              │       │  │  └──────────────────────┘  │   │
│  │  └──────────────────────────┘       │  │                            │   │
│  │  ┌──────────────────────────┐       │  │  ← OnceHub embed/link     │   │
│  │  │ Message                  │       │  │                            │   │
│  │  │                          │       │  ├────────────────────────────┤   │
│  │  │                          │       │  │ FOLLOW US                  │   │
│  │  │                          │       │  │                            │   │
│  │  └──────────────────────────┘       │  │  [in] [f] [yt] [x]        │   │
│  │                                     │  │                            │   │
│  │  ┌──────────────────────────┐       │  └────────────────────────────┘   │
│  │  │ [  Send Message  →  ]   │       │                                    │
│  │  └──────────────────────────┘       │                                    │
│  │                                     │                                    │
│  └─────────────────────────────────────┘                                    │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ ONCEHUB SCHEDULING WIDGET (optional embed, full-width)              │   │
│  │                                                                      │   │
│  │  ┌────────────────────────────────────────────────────────────────┐  │   │
│  │  │                                                                │  │   │
│  │  │              OnceHub calendar picker                           │  │   │
│  │  │              (embedded iframe or link to go.oncehub.com/nik4u)│  │   │
│  │  │                                                                │  │   │
│  │  └────────────────────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 7.7 Get a Quote Page (`/get-a-quote`) Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ HERO                                                                        │
│                                                                             │
│        Get a <Free Quote>                                                  │
│                                                                             │
│     Tell us about your project and we'll create a tailored                 │
│     AI-powered proposal with pricing within 24 hours.                      │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ QUOTE FORM (2-column: form + sidebar)                                       │
│                                                                             │
│  ┌──────────────────────────────────────────┐  ┌───────────────────────┐   │
│  │ FORM (Glass card, p-8)                   │  │ SIDEBAR               │   │
│  │                                          │  │                       │   │
│  │  ┌─ 1 ─┐ Your Information               │  │ ┌───────────────────┐ │   │
│  │  │     │                                 │  │ │ What Happens Next │ │   │
│  │  └─────┘                                 │  │ │                   │ │   │
│  │  ┌────────────┐ ┌────────────┐           │  │ │ 01 Review         │ │   │
│  │  │ First Name │ │ Last Name  │           │  │ │ We review within  │ │   │
│  │  └────────────┘ └────────────┘           │  │ │ 24 hours.         │ │   │
│  │  ┌────────────┐ ┌────────────┐           │  │ │                   │ │   │
│  │  │ Email      │ │ Phone      │           │  │ │ 02 Consultation   │ │   │
│  │  └────────────┘ └────────────┘           │  │ │ Free call to      │ │   │
│  │                                          │  │ │ discuss needs.    │ │   │
│  │  ┌─ 2 ─┐ Your Business                  │  │ │                   │ │   │
│  │  │     │                                 │  │ │ 03 Proposal       │ │   │
│  │  └─────┘                                 │  │ │ Detailed pricing. │ │   │
│  │  ┌────────────┐ ┌────────────┐           │  │ │                   │ │   │
│  │  │ Company    │ │ Website    │           │  │ │ 04 Kickoff        │ │   │
│  │  └────────────┘ └────────────┘           │  │ │ Begin immediately.│ │   │
│  │  ┌────────────┐ ┌────────────┐           │  │ └───────────────────┘ │   │
│  │  │ Industry   │ │ Location   │           │  │                       │   │
│  │  └────────────┘ └────────────┘           │  │ ┌───────────────────┐ │   │
│  │                                          │  │ │ Prefer to Talk?   │ │   │
│  │  ┌─ 3 ─┐ Project Details                │  │ │                   │ │   │
│  │  │     │                                 │  │ │ [📅 Schedule Call]│ │   │
│  │  └─────┘                                 │  │ │                   │ │   │
│  │  ┌──────────────────────────┐            │  │ │ [💬 WhatsApp]     │ │   │
│  │  │ Service ▼                │            │  │ └───────────────────┘ │   │
│  │  └──────────────────────────┘            │  │                       │   │
│  │  ┌──────────────────────────┐            │  └───────────────────────┘   │
│  │  │ Budget ▼                 │            │                              │
│  │  └──────────────────────────┘            │                              │
│  │  ┌──────────────────────────┐            │                              │
│  │  │ Timeline ▼               │            │                              │
│  │  └──────────────────────────┘            │                              │
│  │  ┌──────────────────────────┐            │                              │
│  │  │ Project Description      │            │                              │
│  │  │                          │            │                              │
│  │  └──────────────────────────┘            │                              │
│  │                                          │                              │
│  │  ┌──────────────────────────┐            │                              │
│  │  │ [  Submit Quote Request] │            │                              │
│  │  └──────────────────────────┘            │                              │
│  └──────────────────────────────────────────┘                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 7.8 Mobile Layout Variations

**Mobile Navbar (all pages):**
```
┌──────────────────────────┐
│ [N]  NiksCon         [☰] │
├──────────────────────────┤ ← slide-down overlay
│                          │
│  Services                │
│  ─────────────────────── │
│  About                   │
│  ─────────────────────── │
│  Case Studies            │
│  ─────────────────────── │
│  Contact                 │
│  ─────────────────────── │
│  Blog ↗                  │
│  ─────────────────────── │
│                          │
│  ┌──────────────────────┐│
│  │    Get a Quote       ││
│  └──────────────────────┘│
└──────────────────────────┘
```

**Mobile Home Hero:**
```
┌──────────────────────────┐
│                          │
│   🏷️ AI-First Solutions  │
│                          │
│   We Build               │
│   AI-Powered             │
│   Solutions for          │
│   <Growing               │
│   Businesses>            │
│                          │
│   Pioneers in AI         │
│   Solutions &            │
│   Innovation...          │
│                          │
│   ┌────────────────────┐ │
│   │ Start AI Journey → │ │
│   └────────────────────┘ │
│   ┌────────────────────┐ │
│   │  View Case Studies │ │
│   └────────────────────┘ │
│                          │
│   ┌───┐ ┌───┐ ┌───┐     │
│   │10+│ │50+│ │ 3 │     │
│   │Yrs│ │Prj│ │Ctr│     │
│   └───┘ └───┘ └───┘     │
│   ┌───┐ ┌───┐           │
│   │5K+│ │100│           │
│   │Usr│ │ % │           │
│   └───┘ └───┘           │
└──────────────────────────┘
```

**Mobile Services Grid (stacked):**
```
┌──────────────────────────┐
│ ┌──────────────────────┐ │
│ │ 🧠                   │ │
│ │ AI Solutions &       │ │
│ │ Agentic AI           │ │
│ │                      │ │
│ │ AI-powered solutions │ │
│ │ that automate...     │ │
│ │                      │ │
│ │ [Learn more →]       │ │
│ └──────────────────────┘ │
│                          │
│ ┌──────────────────────┐ │
│ │ 🤖                   │ │
│ │ AI Automation        │ │
│ │ ...                  │ │
│ └──────────────────────┘ │
│                          │
│ (one card per row)       │
└──────────────────────────┘
```

**Mobile Contact Page (stacked):**
```
┌──────────────────────────┐
│ Contact Info             │
│ ┌──────────────────────┐ │
│ │ ✉ info@niks...       │ │
│ │ 📞 +XX-XXX-XXXX      │ │
│ │ 💬 WhatsApp           │ │
│ │ 📍 City, Country     │ │
│ └──────────────────────┘ │
│                          │
│ ┌──────────────────────┐ │
│ │ 📅 Schedule a Call   │ │
│ │ [Book Now →]         │ │
│ └──────────────────────┘ │
│                          │
│ Send Us a Message        │
│ ┌──────────────────────┐ │
│ │ First Name           │ │
│ └──────────────────────┘ │
│ ┌──────────────────────┐ │
│ │ Last Name            │ │
│ └──────────────────────┘ │
│ ┌──────────────────────┐ │
│ │ Email                │ │
│ └──────────────────────┘ │
│ ... (form fields)        │
│ ┌──────────────────────┐ │
│ │ [  Send Message  → ] │ │
│ └──────────────────────┘ │
└──────────────────────────┘
```

### 7.9 Blog Subdomain (`blog.niksconsulting.com`) Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ BLOG HEADER (matches main site dark theme)                                  │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ [N] NiksConsulting Blog       ← Back to Main Site │ Categories │ Search│ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────────┐  ┌──────────────────────────┐ │
│  │ BLOG POST 1 (featured, large)           │  │ SIDEBAR                  │ │
│  │                                         │  │                          │ │
│  │ ┌─────────────────────────────────────┐ │  │ ┌──────────────────────┐ │ │
│  │ │                                     │ │  │ │ About Niks Consulting│ │ │
│  │ │         [FEATURED IMAGE]            │ │  │ │                      │ │ │
│  │ │                                     │ │  │ │ AI-first consulting  │ │ │
│  │ └─────────────────────────────────────┘ │  │ │ for growing biz...   │ │ │
│  │                                         │ │  │ │                      │ │ │
│  │ 📂 AI & Automation  ·  📅 Jul 18, 2025 │ │  │ │ [Visit Main Site →] │ │ │
│  │                                         │ │  │ └──────────────────────┘ │ │
│  │ How Agentic AI is Transforming          │ │  │                          │ │
│  │ Small Business Operations               │ │  │ ┌──────────────────────┐ │ │
│  │                                         │ │  │ │ 📅 Schedule a Call   │ │ │
│  │ Discover how AI agents are              │ │  │ │ [Book with Nik →]    │ │ │
│  │ revolutionizing the way small...        │ │  │ └──────────────────────┘ │ │
│  │                                         │ │  │                          │ │
│  │ [Read More →]                           │ │  │ ┌──────────────────────┐ │ │
│  └─────────────────────────────────────────┘ │  │ │ Categories           │ │ │
│                                               │  │ │ • AI & Automation    │ │ │
│  ┌─────────────────────┐ ┌─────────────────┐ │  │ │ • Digital Transform  │ │ │
│  │ BLOG POST 2         │ │ BLOG POST 3     │ │  │ │ • Case Studies       │ │ │
│  │                     │ │                 │ │  │ │ • Product Strategy   │ │ │
│  │ [IMAGE]             │ │ [IMAGE]         │ │  │ │ • Web Development    │ │ │
│  │                     │ │                 │ │  │ └──────────────────────┘ │ │
│  │ 📂 Digital Transform│ │ 📂 Case Studies │ │  │                          │ │
│  │                     │ │                 │ │  │ ┌──────────────────────┐ │ │
│  │ 5 Signs Your...     │ │ How We Helped..│ │  │ │ 💬 Chat on WhatsApp  │ │ │
│  │                     │ │                 │ │  │ └──────────────────────┘ │ │
│  │ [Read More →]       │ │ [Read More →]   │ │  │                          │ │
│  └─────────────────────┘ └─────────────────┘ │  └──────────────────────────┘ │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ CTA Banner                                                          │   │
│  │ Ready to Transform Your Business? → Visit niksconsulting.com        │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ BLOG FOOTER                                                                 │
│ © 2025 Niks Consulting · niksconsulting.com · LinkedIn · WhatsApp          │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 7.10 WhatsApp Floating Button Detail

```
Position: fixed, bottom-right (bottom: 24px, right: 24px)
Z-index: 50

┌───────────┐
│           │   Size: 56×56px (w-14 h-14)
│    💬     │   Background: #25D366 (WhatsApp green)
│   (white  │   Shape: Circle (rounded-full)
│    icon)  │   Shadow: 0 4px 12px rgba(37,211,102,0.4)
│           │   Animation: pulse-green (2s infinite)
└───────────┘   Hover: scale(1.1)

Tooltip (on hover):
┌─────────────────────────┐
│ Chat with us on WhatsApp│  bg-dark-800, text-white, text-sm
└─────────────────────────┘  rounded-lg, positioned above button
```

---

## 8. Content Strategy

### Positioning Statement
> "We Build AI-Powered Solutions for Growing Businesses — Pioneers in AI Solutions & Innovation"

### AI-First Messaging
All content leads with AI capabilities:
- Services framed as AI-powered solutions
- Case studies highlight AI-driven results
- Process section includes AI analysis steps
- Testimonials reference AI transformation

### Founder Bio (Nik)
Real credentials sourced from LinkedIn profile and PDF:
- Headline: Agentic AI Builder | Fractional CPO | Xiaomi MiMo Grant Winner | PhD Candidate
- Key experience: Expedia Group, SmartMegh/Ramco, Suzuki Motor Corp, MyTegami.win
- PhD candidate at Shizuoka University (AI Governance)
- Vanderbilt Prompt Engineering certification

---

## 9. Third-Party Integrations

### 9.1 Freshsales CRM (Lead Capture Forms)
**Status: PLACEHOLDER — Embed code needed**

**Where used:**
- `/contact` page — Contact form
- `/get-a-quote` page — Quote request form

**What to provide:**
- Freshsales web form embed code (HTML `<form>` or `<script>`)
- OR Freshsales form ID for API integration

**Current state:** Static HTML forms with placeholder submit handlers that show alert messages.

**How to integrate:**
1. Log in to Freshsales CRM
2. Go to Admin Settings → Web Forms
3. Create/select a lead capture form
4. Copy the embed code
5. Replace the `<form>` block in `contact.astro` and `get-a-quote.astro`

### 9.2 Freshdesk (Support Widget)
**Status: PLACEHOLDER — Widget script needed**

**Where used:** Global (all pages via `BaseLayout.astro`)

**What to provide:**
- Freshdesk widget JavaScript snippet

**Current state:** Comment placeholder in `<head>` of BaseLayout.astro (line ~48).

**How to integrate:**
1. Log in to Freshdesk
2. Go to Admin → Support Widget
3. Copy the widget script (looks like: `<script src="https://widget.freshworks.com/widgets/XXXXXXX.js" defer></script>`)
4. Paste into `src/layouts/BaseLayout.astro` in the `<!-- REPLACE: Freshdesk Widget Script -->` section

### 9.3 OnceHub (Scheduling)
**Status: CONFIGURED — `go.oncehub.com/nik4u`**

**Where used:**
- `/contact` page — Scheduling section
- `/get-a-quote` page — "Prefer to Talk?" sidebar
- `/about` page — "Book a Call" button in Nik's section

**Integration type:** Direct link (`https://go.oncehub.com/nik4u`)

**Optional upgrade:** Embed OnceHub widget directly on contact page for in-page scheduling.

### 9.4 WhatsApp Business (Click-to-Chat)
**Status: PLACEHOLDER — Phone number needed**

**Where used:**
- Global floating button (all pages via `WhatsAppButton.astro`)
- `/contact` page — WhatsApp link in contact info
- `/get-a-quote` page — "Chat on WhatsApp" sidebar button

**What to provide:**
- WhatsApp Business phone number (with country code, no `+` or spaces)

**Current state:** Uses placeholder `1234567890`

**How to update:**
1. Open `src/components/WhatsAppButton.astro`
2. Replace `1234567890` in the `wa.me` URL with your number
3. Also update in `src/pages/contact.astro` and `src/pages/get-a-quote.astro`

---

## 10. Placeholder Inventory (Action Required)

### 🔴 Critical (Site won't be complete without these)

| # | Placeholder | File(s) | What to Provide | Current Value |
|---|-------------|---------|-----------------|---------------|
| 1 | **WhatsApp phone number** | `WhatsAppButton.astro`, `contact.astro`, `get-a-quote.astro` | WhatsApp Business number with country code (e.g., `819012345678`) | `1234567890` |
| 2 | **Phone number** | `Footer.astro`, `contact.astro`, `BaseLayout.astro` (structured data) | Business phone with country code | `+1 (234) 567-890` |
| 3 | **Business address** | `Footer.astro`, `BaseLayout.astro` (structured data) | City, Country (e.g., `Shizuoka, Japan`) | `Your City, Country` |
| 4 | **Freshsales form embed** | `contact.astro`, `get-a-quote.astro` | Freshsales web form HTML embed code | Static HTML forms |
| 5 | **Freshdesk widget script** | `BaseLayout.astro` | Freshdesk widget `<script>` tag | Comment placeholder |

### 🟡 Important (Site works but looks incomplete without these)

| # | Placeholder | File(s) | What to Provide | Current Value |
|---|-------------|---------|-----------------|---------------|
| 6 | **Facebook URL** | `Footer.astro` | Facebook page URL | `#` |
| 7 | **YouTube URL** | `Footer.astro` | YouTube channel URL | `#` |
| 8 | **X (Twitter) URL** | `Footer.astro` | Confirm `https://x.com/niksconsulting` is correct | `https://x.com/niksconsulting` |
| 9 | **Pierre's LinkedIn** | `team.ts` | LinkedIn profile URL | `#` |
| 10 | **Ebele's LinkedIn** | `team.ts` | LinkedIn profile URL | `#` |
| 11 | **Bintang's LinkedIn** | `team.ts` | LinkedIn profile URL | `#` |
| 12 | **OG image** | `BaseLayout.astro`, `public/og-image.jpg` | 1200×630px banner image for social sharing | Missing file |

### 🟢 Nice to Have (Can launch without these)

| # | Placeholder | File(s) | What to Provide | Current Value |
|---|-------------|---------|-----------------|---------------|
| 13 | **Nik's photo** | `team.ts` → `/images/team-nikhil.jpg` | Professional headshot (400×400px recommended) | Missing |
| 14 | **Pierre's photo** | `team.ts` → `/images/team-pierre.jpg` | Headshot | Missing |
| 15 | **Ebele's photo** | `team.ts` → `/images/team-ebele.jpg` | Headshot | Missing |
| 16 | **Bintang's photo** | `team.ts` → `/images/team-bintang.jpg` | Headshot | Missing |
| 17 | **Testimonial avatar 1** | `testimonials.ts` → `/images/avatar-1.jpg` | Sarah Johnson photo | Missing |
| 18 | **Testimonial avatar 2** | `testimonials.ts` → `/images/avatar-2.jpg` | Minh Nguyen photo | Missing |
| 19 | **Testimonial avatar 3** | `testimonials.ts` → `/images/avatar-3.jpg` | Giuliana Costa photo | Missing |
| 20 | **Case study image 1** | `caseStudies.ts` → `/images/case-pizza.jpg` | Yoda Pizza project screenshot | Missing |
| 21 | **Case study image 2** | `caseStudies.ts` → `/images/case-fashion.jpg` | OzynicDress project screenshot | Missing |
| 22 | **Case study image 3** | `caseStudies.ts` → `/images/case-bakery.jpg` | Dona Gi Bolos project screenshot | Missing |
| 23 | **Testimonial content** | `testimonials.ts` | Confirm testimonials are real or replace with actual client quotes | Placeholder copy |
| 24 | **Case study details** | `caseStudies.ts` | Confirm case study results are accurate or update | Based on draft site |
| 25 | **Team bios** | `team.ts` (Pierre, Ebele, Bintang) | Confirm/update bios for accuracy | Generic descriptions |

---

## 11. SEO & Structured Data

### Already Implemented
- `<meta name="description">` on every page
- Canonical URLs (`<link rel="canonical">`)
- Open Graph tags (title, description, image, URL, site_name)
- Twitter Card tags (summary_large_image)
- JSON-LD `ProfessionalService` structured data in BaseLayout.astro
- Semantic HTML structure (header, main, footer, nav, section)
- Responsive design (mobile-first)

### JSON-LD Structured Data (in `BaseLayout.astro`)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Niks Consulting",
  "url": "https://niksconsulting.com",
  "serviceType": ["AI Solutions", "Agentic AI", "AI Automation", "Digital Transformation", "Web Development", "AI-Powered Social Media", "Agile Project Management"]
}
```
**Needs update:** Address and phone in structured data (see Placeholder #3, #4)

### Sitemap & Robots.txt
- **Not yet implemented** — add before launch:
  - `public/robots.txt`
  - Astro sitemap integration (`@astrojs/sitemap`)

---

## 12. Deployment Plan

### Step 1: GitHub Repository
```bash
cd C:\Users\user\niksconsulting
git init
git add .
git commit -m "Initial commit: Niks Consulting AI-first website"
git remote add origin https://github.com/YOUR_USERNAME/niksconsulting.git
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import the GitHub repository
4. Vercel auto-detects Astro — settings should be:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click "Deploy"

### Step 3: Custom Domain
1. In Vercel project settings → Domains
2. Add `niksconsulting.com`
3. Add `www.niksconsulting.com` (redirect to apex)
4. Vercel provides DNS records to configure

---

## 13. DNS Configuration

### For Vercel (Main Site)
In your domain registrar's DNS settings:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | `@` | `76.76.21.21` | 3600 |
| CNAME | `www` | `cname.vercel-dns.com` | 3600 |

### For Hostinger (Blog Subdomain)
| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | `blog` | `your-hostinger-server.com` | 3600 |

**Note:** Get the exact CNAME value from Hostinger after setting up WordPress. It will be something like `your-account.hostinger.com` or an IP address for an A record.

### DNS Propagation
- Allow 24-48 hours for full propagation
- Test with: `nslookup niksconsulting.com` and `nslookup blog.niksconsulting.com`

---

## 14. WordPress Blog Subdomain

### Setup Steps on Hostinger
1. Log in to Hostinger hPanel
2. Go to Website → Auto Installer → WordPress
3. Install WordPress on a new subdomain: `blog.niksconsulting.com`
4. Configure WordPress:
   - **Theme:** Choose a dark theme that matches the main site (e.g., Flavor flavor, flavor flavor, flavor flavor — or a simple dark theme like flavor flavor)
   - **Recommended plugins:**
     - Yoast SEO (SEO optimization)
     - WP Super Cache (performance)
     - UpdraftPlus (backups)
     - WPForms Lite (contact forms)
     - Insert Headers and Footers (for analytics/tracking codes)
   - **Permalink structure:** Settings → Permalinks → "Post name"
5. Update DNS (see Section 11)
6. Create a "Blog" or "Back to Main Site" link in WordPress nav pointing to `https://niksconsulting.com`

### Blog Design Matching
To keep visual consistency between main site and blog:
- Use the same color scheme: dark background (#0B0F1A), cyan/teal accents (#06B6D4)
- Match typography as closely as possible
- Add Niks Consulting logo and navigation links

---

## 15. Post-Launch Checklist

### Immediate (Day 1)
- [ ] Verify all pages load correctly on Vercel
- [ ] Test mobile responsiveness on real devices
- [ ] Verify all internal links work
- [ ] Test WhatsApp button (correct number, opens chat)
- [ ] Test OnceHub scheduling link
- [ ] Submit contact form (verify Freshsales receives lead)
- [ ] Check Freshdesk widget appears and works
- [ ] Verify OG image shows when sharing on social media

### Week 1
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics or Plausible Analytics
- [ ] Test page speed with Google PageSpeed Insights (target: 90+)
- [ ] Verify structured data with Google Rich Results Test
- [ ] Set up 301 redirects from old URLs (if any)
- [ ] Test blog.niksconsulting.com is accessible

### Month 1
- [ ] Monitor Google Search Console for indexing issues
- [ ] Publish first 3 blog posts on WordPress
- [ ] Set up social media profiles and link from footer
- [ ] Review and update testimonials with real client quotes
- [ ] Replace placeholder team photos with actual photos
- [ ] Set up form notifications in Freshsales (email alerts on new leads)

---

## 16. File Structure Reference

```
niksconsulting/
├── PRD.md                          ← This document
├── package.json                    ← Dependencies & scripts
├── astro.config.mjs                ← Astro configuration
├── tailwind.config.mjs             ← Tailwind theme (colors, animations)
├── tsconfig.json                   ← TypeScript config
├── public/
│   ├── favicon.svg                 ← "N" gradient logo
│   ├── og-image.jpg                ← [NEEDS CREATING] Social share image
│   └── images/                     ← [NEEDS CREATING] All images
│       ├── team-nikhil.jpg
│       ├── team-pierre.jpg
│       ├── team-ebele.jpg
│       ├── team-bintang.jpg
│       ├── avatar-1.jpg
│       ├── avatar-2.jpg
│       ├── avatar-3.jpg
│       ├── case-pizza.jpg
│       ├── case-fashion.jpg
│       └── case-bakery.jpg
├── src/
│   ├── styles/
│   │   └── global.css              ← Tailwind imports + custom utilities
│   ├── data/
│   │   ├── services.ts             ← 6 services (AI-focused)
│   │   ├── caseStudies.ts          ← 3 case studies
│   │   ├── testimonials.ts         ← 3 testimonials
│   │   └── team.ts                 ← 4 team members
│   ├── components/
│   │   ├── Navbar.astro            ← Responsive nav with mobile menu
│   │   ├── Footer.astro            ← [HAS PLACEHOLDERS] Social links, contact info
│   │   ├── WhatsAppButton.astro    ← [HAS PLACEHOLDER] Floating WhatsApp button
│   │   ├── SectionHeading.astro    ← Reusable section header
│   │   ├── ServiceCard.astro       ← Service card with icon
│   │   ├── CaseStudyCard.astro     ← Case study card
│   │   └── TestimonialCard.astro   ← Testimonial card
│   ├── layouts/
│   │   └── BaseLayout.astro        ← [HAS PLACEHOLDERS] HTML shell, SEO, Freshdesk
│   └── pages/
│       ├── index.astro             ← Home page
│       ├── services.astro          ← Services page
│       ├── about.astro             ← About page (with "Meet Nik" section)
│       ├── case-studies.astro      ← Case studies page
│       ├── contact.astro           ← [HAS PLACEHOLDERS] Contact form + scheduling
│       └── get-a-quote.astro       ← [HAS PLACEHOLDERS] Quote request form
└── dist/                           ← Build output (auto-generated)
```

---

## Appendix: How to Provide Placeholders

### Quick Reference — Where to Paste What

**WhatsApp Number** (e.g., `819012345678`):
- `src/components/WhatsAppButton.astro` — line with `wa.me/`
- `src/pages/contact.astro` — line with `wa.me/`
- `src/pages/get-a-quote.astro` — line with `wa.me/`

**Phone Number** (e.g., `+81-54-123-4567`):
- `src/components/Footer.astro` — phone `<a href="tel:...">` and display text
- `src/pages/contact.astro` — phone `<a href="tel:...">` and display text
- `src/layouts/BaseLayout.astro` — `"telephone"` in JSON-LD

**Business Address** (e.g., `Shizuoka, Japan`):
- `src/components/Footer.astro` — address `<span>`
- `src/layouts/BaseLayout.astro` — `"address"` in JSON-LD

**Freshsales Form Embed:**
- `src/pages/contact.astro` — replace the `<form id="contact-form">` block
- `src/pages/get-a-quote.astro` — replace the `<form id="quote-form">` block

**Freshdesk Widget:**
- `src/layouts/BaseLayout.astro` — paste `<script>` in `<head>` where indicated

**Social Media URLs:**
- `src/components/Footer.astro` — update `href="#"` on Facebook and YouTube icons

**Photos (place in `public/images/`):**
- Team: `team-nikhil.jpg`, `team-pierre.jpg`, `team-ebele.jpg`, `team-bintang.jpg`
- Testimonials: `avatar-1.jpg`, `avatar-2.jpg`, `avatar-3.jpg`
- Case studies: `case-pizza.jpg`, `case-fashion.jpg`, `case-bakery.jpg`
- OG image: `public/og-image.jpg` (1200×630px)

---

*Document generated during initial site build. Update as placeholders are filled.*
