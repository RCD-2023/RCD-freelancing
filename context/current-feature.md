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
