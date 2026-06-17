# Split script.js into ES modules

## Overview

`script.js` (590 lines) currently holds all translations, data arrays, render functions, and feature init logic in one file, loaded via a classic `<script src="script.js">` tag. Split it into focused modules under a `js/` folder, imported by a `main.js` entry point using `<script type="module" src="main.js">`. No bundler or build step is introduced — browsers resolve ES module imports natively.

## Proposed File Layout

- `js/translations.js` — `translations` object
- `js/icons.js` — `ICONS` object
- `js/data.js` — `services`, `pricingFeatures`, `portfolioProjects`, `categoryLabels`, `processSteps`, `benefits`, `testimonials`, `faqs`, `footerServicesList`, `businessTypes`
- `js/state.js` — `currentLang`, `activeCategory` (as `export let`) plus their setters: `setCurrentLang(lang)`, `setActiveCategory(cat)`
- `js/render.js` — `featureItem()`, all `render*()` functions, `setLang()` (reads state from `state.js`, calls its setters to update)
- `js/theme.js` — `applyTheme()`, `initThemeToggle()`
- `js/menu.js` — `initMobileMenu()`
- `js/contact.js` — `initContactForm()`
- `main.js` (project root) — imports the above, defines `initLangSwitcher()` and `setFooterYear()`, and wires the `DOMContentLoaded` listener

## Requirements

- Use `export`/`import` syntax (ES modules) throughout; no default exports — named exports only, to match existing descriptive naming.
- `currentLang` and `activeCategory` live as mutable `export let` bindings in `state.js`, the single owner of shared state. ES module imported bindings are read-only outside their owning module, so any module that needs to change them (e.g. `render.js`'s `setLang()`, the portfolio filter click handler) must call `setCurrentLang()` / `setActiveCategory()` rather than assigning directly. Reading the values can still be done via plain import.
- `index.html` script tag changes from `<script src="script.js">` to `<script type="module" src="main.js">`.
- Delete `script.js` once `main.js` + `js/*` fully replace it.
- No behavior change — this is a structural refactor only. All rendering, language switching, theme toggle, mobile menu, and contact form behavior must work identically before and after.
- Preserve existing function/variable names and logic as-is; only move code, don't rewrite it.
- Keep one responsibility per file, consistent with coding-standards.md's "keep functions focused" and "keep files organized and readable" guidance.

## Caveats

- ES module scripts are blocked by CORS when the page is opened directly via a `file://` URL. The page must be served over a local server (e.g. VS Code Live Server, `python -m http.server`) during development and testing.

## References

- @context/project-overview.md
- @context/coding-standards.md
