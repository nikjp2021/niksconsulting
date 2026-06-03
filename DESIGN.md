# Design System

## Theme

Dual theme: dark (default) and light. Switched via `.light` class on `<html>`. Persisted in localStorage.

Dark mode: deep near-black surfaces (#09090b to #1e1e24), high-contrast light text. Light mode: warm off-white (#fafaf9), strong dark text, visible card shadows for depth.

## Color Strategy

**Committed**: Teal/cyan brand (#14b8a6) carries 30-40% of accent weight. Violet (#8b5cf6) and amber (#f59e0b) as secondary accents. Each service section gets a unique color (violet, cyan, amber, emerald, pink, indigo).

### Palette

| Token | Dark Mode | Light Mode | Usage |
|---|---|---|---|
| surface-0 | #09090b | #fafaf9 | Page background |
| surface-1 | #0f0f13 | #f1f1ef | Alt section bg |
| surface-2 | #18181b | #ffffff | Card background |
| surface-3 | #1e1e24 | #ebebe9 | Hover states |
| surface-4 | #27272a | #d6d6d2 | Borders |
| surface-5 | #3f3f46 | #b6b6b2 | Strong borders |
| ink-100 | #fafafa | #0a0a0b | Headings |
| ink-200 | #e4e4e7 | #1c1c1e | Body text |
| ink-300 | #a1a1aa | #37373c | Secondary text |
| ink-400 | #71717a | #55555c | Tertiary text |
| brand-500 | #14b8a6 | #0d9488 | Primary accent |

### Accent Colors

- **Cyan**: #06b6d4 (primary gradient endpoint)
- **Violet**: #8b5cf6 (secondary accent, AI/tech feel)
- **Amber**: #f59e0b (warmth, success, Gifted program)
- **Fuchsia**: #d946ef (decorative)
- **Rose**: #f43f5e (decorative)

## Typography

### Fonts

- **Display**: Plus Jakarta Sans (extrabold 800) - headings, hero text
- **Body**: Inter (400-700) - all body copy
- **Mono**: JetBrains Mono (400-500) - code, step numbers

### Scale

| Element | Size | Weight | Line Height |
|---|---|---|---|
| H1 Hero | clamp(2.5rem, 5vw, 4.5rem) | 800 | 1.05 |
| H2 Section | clamp(1.875rem, 3vw, 3rem) | 800 | 1.1 |
| H3 Card | 1.5rem | 700 | 1.2 |
| Body Large | 1.125rem | 400 | 1.75 |
| Body | 1rem | 400 | 1.75 |
| Small | 0.875rem | 400 | 1.5 |
| Badge | 0.875rem | 500 | 1.5 |
| Button | 1rem | 600 | 1 |

## Components

### Glass Cards

Dark: `bg-surface-2/60 backdrop-blur-xl border border-surface-4/40 rounded-2xl`
Light: white with subtle shadow, visible border

Hover: border-brand-500/20, shadow-glow-sm, -translate-y-1

### Buttons

- **Primary**: bg-brand-500, white text, rounded-xl, hover glow
- **Primary Glow**: gradient (teal to cyan to violet), animated background shift
- **Outline**: border surface-5, hover border-brand-500/50
- **Outline Glow**: animated gradient border on hover

### Badges

`text-sm font-medium rounded-full px-3.5 py-1.5`
- Brand: bg-brand-500/10, text-brand-300, border-brand-500/20
- Surface: bg-surface-3, text-ink-300, border-surface-4

### Inputs

`bg-surface-1 border border-surface-4 rounded-xl text-ink-100`
Focus: cyan glow ring, transparent border

## Layout

- Max width: 1280px (max-w-6xl)
- Section padding: 80px vertical, 20px horizontal (mobile) to 48px (desktop)
- Card border radius: 16px (rounded-2xl)
- Button border radius: 12px (rounded-xl)

## Motion

- Scroll reveal: fade-up, scale-up, blur-in (600ms, cubic-bezier 0.16 1 0.3 1)
- Stagger: 100ms incremental delays on children
- Hover: 200-300ms transitions
- Parallax: subtle, desktop only
- Prefers-reduced-motion: all animations disabled

## Imagery

- 6 animated SVG hero illustrations (one per page theme)
- Team/graduate photos: 400x400px placeholders
- Case study screenshots: 800x600px placeholders
- OG image: 1200x630px placeholder

## Responsive

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | <640px | Single column, hamburger nav |
| Tablet | 640-1023px | 2-column grids |
| Desktop | 1024px+ | Full layout, dropdown nav |
