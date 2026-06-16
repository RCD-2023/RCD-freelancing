# RCD-WebDev — Personal Freelance Landing Page

A bilingual (Romanian / English) single-page website for a freelance web developer targeting Romanian local businesses.

## Overview

This is a static landing page — no framework, no build tool, no dependencies. Pure HTML, CSS, and vanilla JavaScript served directly from the file system or any static host.

## Features

- Bilingual content (RO / EN) with live language switching
- Dark / Light theme toggle with `localStorage` persistence
- Sections: Hero, Services, Pricing, Portfolio (with category filter), Process, Benefits, Testimonials, FAQ, Contact
- Fully responsive — mobile-first design with hamburger menu
- All dynamic content rendered from JavaScript data arrays
- Contact form (frontend-only; shows success UI on submit)

## File Structure

```
index.html        — all page markup
style.css         — design tokens, components, responsive styles
script.js         — translations, data, render logic, interactivity
context/          — AI collaboration context files
.claude/          — AI skill files
```

## Sections

| Section      | Notes |
|--------------|-------|
| Navbar       | Sticky, blurred backdrop; desktop nav + mobile hamburger; language & theme switchers |
| Hero         | Title, subtitle, 2 CTAs, 4 metric cards |
| Services     | 6 cards — website creation, SEO, Google Business, Analytics, promotion, maintenance |
| Pricing      | Starter (1.490 lei / €299) and Business (2.990 lei / €599) |
| Portfolio    | 6 projects; filterable by category |
| Process      | 4-step client journey |
| Benefits     | 4 cards |
| Testimonials | 3 cards |
| FAQ          | 5 accordion items |
| Contact      | WhatsApp link + contact form |

## Pricing

| Package  | Price (RO) | Price (EN) |
|----------|------------|------------|
| Starter  | 1.490 lei  | €299       |
| Business | 2.990 lei  | €599       |

## Portfolio Categories

Saloane (Salons), Restaurante (Restaurants), Medical, Transport, Magazine (Shops), Servicii (Services).

## Design

- Primary color: `#4361EE`
- Font: Inter
- Max container width: 1152px
- Breakpoints: 640px, 768px, 1024px

## Contact

- WhatsApp: `https://wa.me/40700000000`
- Response time: within 24 hours

## License

See [LICENSE](LICENSE).
