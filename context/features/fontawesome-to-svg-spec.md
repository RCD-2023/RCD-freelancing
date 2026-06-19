# Replace Font Awesome with inline SVG icons

## Overview

Drop the Font Awesome CDN dependency entirely. It is currently loaded site-wide just to render two icons (`fa-moon` / `fa-sun`) for the dark/light theme toggle — every other icon in the project (services, process, benefits, pricing checks, testimonials, FAQ chevron, menu/close) is already an inline SVG defined in `js/icons.js`. Bring the theme toggle in line with that pattern, and additionally add small flag icons to the RO/ENG language switcher.

## Requirements

### Remove Font Awesome
- Remove the `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">` tag from `index.html`.
- No other file references Font Awesome — confirmed only the two `<i class="fa-solid fa-moon">` elements (desktop + mobile theme toggle) use it.

### Theme toggle icons
- Add `moon` and `sun` entries to the `ICONS` object in `js/icons.js`, matching the existing style of the other icons (`xmlns`, `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `stroke-width="2"`, `stroke-linecap/linejoin="round"`, `aria-hidden="true"`).
- Replace `<i class="fa-solid fa-moon" aria-hidden="true"></i>` in both theme-toggle buttons (`#theme-toggle-desktop`, `#theme-toggle-mobile`) with a wrapper element that can hold the inline SVG (e.g. `<span class="theme-icon" aria-hidden="true"></span>`).
- Update `applyTheme()` in `js/theme.js`: instead of swapping `icon.className` between `fa-solid fa-sun` / `fa-solid fa-moon`, set `icon.innerHTML` to `ICONS.sun` / `ICONS.moon`.
- Keep existing behavior unchanged: `aria-pressed`, `aria-label`, `localStorage` persistence, `prefers-color-scheme` detection, smooth transitions.

### Language switcher flags
- Add `flagRo` and `flagEn` entries to `ICONS` — small flag SVGs (Romania tricolor / UK or US flag), sized consistently as a small rectangle (e.g. ~16-20px wide) so they don't disrupt the existing button layout.
- Update both `.lang-switcher` blocks (desktop + mobile) in `index.html`: prepend the matching flag SVG inside each `.lang-btn`, before the existing "RO" / "ENG" text.
- Flags are decorative — mark them `aria-hidden="true"`; the visible text remains the accessible name for each button (no change to existing `aria-pressed` / `data-lang` attributes).

### General
- No new dependencies, no build step — plain inline SVG strings only, consistent with the rest of `js/icons.js`.
- No visual regression: toggle and language buttons should keep their current size/alignment in both light and dark theme, desktop and mobile.
- Verify in the browser: theme toggle swap (light/dark, desktop/mobile), language switch (RO/ENG, desktop/mobile), no console errors, no leftover Font Awesome network request.

## References

- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction.md
- @context/features/color-theme-spec.md — original spec that introduced Font Awesome, now superseded for the icon part
