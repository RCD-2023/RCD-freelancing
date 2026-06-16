# My-Landingpage Project Overview

## What This Is

A personal freelance landing page for a web developer (brand name: **RCD-WebDev** ) who builds websites for Romanian local businesses. The page is bilingual (Romanian / English) and is a single-page site with no framework or build tool — pure HTML, CSS, and vanilla JavaScript.

## File Structure

```
index.html    — all page markup
style.css     — all styles (design tokens, components, responsive)
script.js     — translations, data, render logic, interactivity
context/      — AI collaboration context files
.claude/      - AI skills files
```

No build step, no dependencies, no package.json. Static files served directly.

## Page Sections (in order)

| Section       | ID            | Notes |
|---------------|---------------|-------|
| Navbar        | `#navbar`     | Sticky, blurred backdrop; desktop nav + mobile hamburger; language switcher |
| Hero          | —             | Title, subtitle, 2 CTAs, 4 bullet checks, 4 metric cards |
| Services      | `#services`   | 6 cards rendered by JS |
| Pricing       | `#pricing`    | 2 packages: Starter (1.490 lei / €299) and Business (2.990 lei / €599) |
| Portfolio     | `#portfolio`  | 6 projects with category filter, rendered by JS |
| Process       | `#process`    | 4 steps rendered by JS |
| Benefits      | —             | 4 cards rendered by JS |
| Testimonials  | —             | 3 cards rendered by JS |
| FAQ           | `#faq`        | 5 accordion items rendered by JS |
| Contact       | `#contact`    | Two-column: WhatsApp + contact form (no backend, shows success UI on submit) |
| Footer        | —             | Brand, nav links, services list |

## Bilingual System

- Default language: **Romanian** (`ro`); can switch to **English** (`en`)
- Two mechanisms run in parallel:
  1. `data-i18n="key"` attributes — text replaced from `translations` object on lang change
  2. `[data-lang="ro"]` / `[data-lang="en"]` sibling spans — toggled via `.active` class
- All dynamic sections (services, pricing, portfolio, process, benefits, testimonials, FAQ, footer services, contact select) are re-rendered by `setLang()` on every language switch

## JavaScript Architecture

All data lives in top-level `const` arrays/objects in `script.js`:
- `translations` — all UI strings for both languages
- `ICONS` — SVG strings keyed by name
- `services`, `pricingFeatures`, `portfolioProjects`, `categoryLabels`
- `processSteps`, `benefits`, `testimonials`, `faqs`
- `footerServicesList`, `businessTypes`

State variables: `currentLang` (default `"ro"`) and `activeCategory` (default `"all"`).

Init sequence on `DOMContentLoaded`: `setFooterYear → initLangSwitcher → initMobileMenu → initContactForm → setLang("ro")`.

## Design Tokens (CSS Variables)

Primary color: `#4361EE` (blue). Font: Inter. Max container width: 1152px. Responsive breakpoints: 640px, 768px, 1024px. Mobile-first approach with hamburger menu below 1024px.

## Services Offered

Website creation, Google Business & Maps setup, Basic SEO, Analytics & Search Console, Optional promotion (Google/social), Maintenance.

## Pricing

| Package  | RO Price   | EN Price |
|----------|------------|----------|
| Starter  | 1.490 lei  | €299     |
| Business | 2.990 lei  | €599     |

## Portfolio Categories

Saloane (Salons), Restaurante (Restaurants), Medical, Transport, Magazine (Shops), Servicii (Services).

## Contact

- Contact form (frontend-only, no backend wired yet — submit shows success message)
- WhatsApp link: `https://wa.me/40700000000` (placeholder number)
- Response promise: within 24 hours

## Key Constraints

- No framework, no build tool — keep it plain HTML/CSS/JS
- All content data lives in `script.js` arrays; HTML sections are mostly empty shells rendered by JS
- No backend currently — contact form is UI-only
- Portfolio images reference `../public/portfolio/*.png` paths (not yet present in repo)
