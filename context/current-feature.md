# Current Feature

Add theme button (Dark/Light)

## Status

In Progress

## Goals

- Theme toggle button in the navbar using a `<button>` element
- Font Awesome icons: moon for dark mode, sun for light mode
- Toggle `dark-theme` class on `<body>`
- Persist preference in `localStorage`
- Respect system preference (`prefers-color-scheme`) on first visit
- `aria-pressed` updated on toggle
- Smooth color transitions
- Dark mode colors: background `#121212`, surface `#1e1e1e`, text `#e5e5e5`, border `#333333`
- All JS in `main.js`, no new dependencies beyond Font Awesome

## Notes

- Font Awesome is already referenced or needs to be added to `index.html`
- Light mode is the existing design — dark mode adds overrides via `body.dark-theme`
- Plain HTML/CSS/JS — no framework, no build step

## History

<!-- Keep this updated. Earliest to latest -->

