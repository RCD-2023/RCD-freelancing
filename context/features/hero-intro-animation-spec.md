# Hero intro animation + title accent color

## Overview

Add a staggered fade-in + slide-up entrance animation to the hero section on page load, and color part of the hero title text using the brand primary color.

## Requirements

### Entrance animation

- Shared keyframe: fade from `opacity: 0` + `translateY(12px)` to `opacity: 1` + `translateY(0)`.
- Animate in this order, each using a 600ms duration:
  1. `.hero-title` — 150ms delay.
  2. `.hero-subtitle`, `.hero-ctas`, `.hero-checks` — 350ms delay (200ms after the title).
  3. `.badge` — 550ms delay (200ms after the subtitle/CTAs/checks group), so the badge appears last.
- Use `animation-fill-mode: both` so elements stay hidden until their delay elapses and stay visible after.
- Respect `prefers-reduced-motion: reduce`: disable the animation (no opacity/transform change, content visible immediately) for all elements listed above.

### Title accent color

- In the hero title, color the action phrase using `var(--primary)` (same token used for pricing card numbers):
  - RO: "Site-uri web care **aduc clienți afacerii tale**"
  - EN: "Websites that **bring customers to your business**"
- Since `data-i18n` elements are re-rendered with `textContent` on language switch (see `setLang` in `js/render.js`), the title must be split into two separate `data-i18n` spans rather than one span nested inside the heading — otherwise the inner markup would be wiped out on every language toggle:
  - `hero.titleStart` — plain text, no color.
  - `hero.titleHighlight` — wrapped in a `.hero-title-accent` span, colored with `var(--primary)`.
- Add both keys to `js/translations.js` for `ro` and `en`, replacing the single `hero.title` key.

## References
- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction.md
- @context/current-feature.md
- @context/recent-changes-nonClaude.md
