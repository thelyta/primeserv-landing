# PrimeServ — Sales Landing Page

A high-converting sales landing page for a website creation service targeting service-based business owners. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4.

## Design Philosophy

- **Dark, premium, high-contrast** aesthetic (Bloomberg Terminal meets high-end digital agency)
- Every section engineered to move visitors toward one action: **booking a discovery call**
- Follows the Sabri Suby "Sell Like Crazy" conversion framework
- Restrained animations — scroll-triggered fade-ups, number counters, and a pulsing CTA glow only

## Tech Stack

| Technology | Version |
|------------|---------|
| Next.js | 15.2+ |
| React | 19.0+ |
| TypeScript | 5.7+ |
| Tailwind CSS | 4.0+ |

## Color Palette

| Role | Hex |
|------|-----|
| Background | `#0A0A0F` |
| Surface | `#111118` |
| Border | `#1E1E2E` |
| Accent — Electric Cyan | `#00E5FF` |
| Accent — Warm Gold | `#FFB800` |
| Body Text | `#C8C8D4` |
| Heading Text | `#F0F0F8` |
| Muted | `#5A5A72` |

## Typography

- **Display/Hero:** Syne (Google Fonts) — Bold 700–800
- **Section headlines & body:** Inter (Google Fonts)
- **Data callouts:** Syne Mono (Google Fonts)

## Page Structure

1. **Nav** — Fixed, blur backdrop, mobile hamburger
2. **Hero** — Full viewport, thesis headline, single CTA
3. **Problem Agitation** — 4 pain-point cards
4. **Dead Website Visual** — SVG analytics dashboard (signature element)
5. **Paradigm Shift** — Why websites CAN work
6. **The Solution** — 6 feature list items
7. **Results / Social Proof** — Animated counters + testimonials
8. **Who This Is For** — Yes/No qualification
9. **How It Works** — 4-stage process
10. **FAQ** — Accordion
11. **Final CTA** — High-contrast closing section
12. **Footer**

## Animations

- **Scroll-triggered fade-up** on all sections (Intersection Observer, no heavy libraries)
- **Number counters** animate on scroll into view (Results section)
- **CTA button** has a slow pulse glow on the cyan border
- **Dead Website Visual** — SVG line draws on scroll with staggered reveals

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The static export will be generated in the `out/` directory.

## Booking CTA

All CTA buttons link to `#` as a placeholder. Replace with your Calendly or booking URL before launch.

## Placeholder Content

Before going live, replace:
- [ ] Real testimonials (name, photo, business type, location)
- [ ] Calendly or booking link
- [ ] Company logo file (SVG preferred)
- [ ] Any case study results with permission to use numbers
- [ ] Photo of founder (optional)

## Performance

- Google Fonts preloaded for Syne and Inter
- No carousels, auto-playing videos, or pop-ups
- Static export for fast CDN deployment
- Target page load: under 2 seconds

---

*Document prepared for PrimeServ Agency*
*Based on: Sabri Suby "Sell Like Crazy" conversion framework*
