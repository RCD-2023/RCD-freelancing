# Current Feature

## Status

Not Started

## Goals

<!-- Goals & requirements -->

## Notes

<!-- Any extra notes -->

## History

<!-- Keep this updated. Earliest to latest -->

1. **Add theme button (Dark/Light)** — Dark/light toggle button added to desktop and mobile navbar using Font Awesome icons (moon/sun). Toggles `body.dark-theme`, persists to `localStorage`, respects `prefers-color-scheme` on first visit. CSS vars overridden on `body.dark-theme` with spec colors (`#121212` bg, `#1e1e1e` surface, `#e5e5e5` text, `#333333` border). Fixed inherited heading contrast bug by setting `color` on `body.dark-theme`. Smooth transitions via `.theme-transitioning` class.
2. **Fix `<dl>` semantic misuse** — Replaced `<dl class="hero-metrics">` and `<dl class="contact-checks">` with `<ul>`/`<li>`, since neither block used valid `<dt>`/`<dd>` pairs. Collapsed the redundant `<dd>` wrapper inside each `.metric-card`. No CSS/JS changes needed — only class selectors were targeted and the existing global list reset already applied. See @context/features/fix-dltag-spec.md.
3. **Split script.js into ES modules** — Replaced the single 590-line `script.js` (classic `<script>`) with `main.js` as the entry point (`<script type="module" src="main.js">`) importing focused modules under `js/`: `translations.js`, `icons.js`, `data.js`, `state.js` (owns mutable `currentLang`/`activeCategory` with setters, since imported `let` bindings are read-only outside their owning module), `render.js`, `theme.js`, `menu.js`, `contact.js`. Pure structural refactor, no behavior change; verified working in browser. See @context/features/split-jscode-spec.md.
4. **Add logo to navbar/footer** — Replaced the SVG placeholder icon in the navbar and footer with the brand logo image (`images/logo/logo-v4.png`, chosen after comparing v2/v3 for a lighter blue tone and bigger visible lettering; unused variants deleted). Kept "WebDev" text next to the logo in both navbar and footer (footer previously read "WebMeșter" — fixed for consistency, including the copyright line which now reads "RCD-WebDev"). Added a favicon link in `<head>` using the same logo. Changed page title to "Codreanu Daniel | Web Development". `.nav-logo-icon` grew from 2rem to 2.75rem so the lettering reads clearly; added `.nav-logo-img` with `object-fit: cover`. Also moved `<script type="module" src="main.js">` from end of `<body>` into `<head>` with `defer`. See @context/features/logo-spec.md.
5. **Add scroll reveal animation** — New `js/reveal.js` module exports `initScrollReveal()`, called from `main.js` after the initial `setLang("ro")` render. It selects all `.section` elements, adds a `.reveal` class, and uses an `IntersectionObserver` (threshold 0.15) to add `.is-visible` once each section enters the viewport, unobserving after the first reveal (one-time, not re-triggered on scroll-back). Hero is excluded since it's already in view on load. CSS in `style.css` defines `.reveal` (opacity 0, `translateY(24px)`, 0.6s transition) and `.reveal.is-visible` (opacity 1, no translate); a `prefers-reduced-motion: reduce` query disables the transform/transition entirely. See @context/features/animation-specs.md.
6. **Add hover micro-interactions to service & pricing cards** — Service cards (`.service-card`) and pricing cards (`.pricing-card`) now lift on hover (`translateY(-4px)`) and gain a deeper shadow (`--shadow-sm` → `--shadow-md`). Service cards transition a dedicated `border-top` (transparent at rest, 3px `--primary` on hover); pricing cards transition `border-color` on all sides to `--primary`. Reused the existing `--primary` token instead of adding the new accent variable proposed in the spec, since it's already theme-safe (untouched by `body.dark-theme`). Service card icons (`.service-icon`) also shift right on hover (`translateX(4px)`) as a secondary micro-interaction. All transforms are disabled under `prefers-reduced-motion: reduce`. See @context/features/cards-styling-specs.md.
