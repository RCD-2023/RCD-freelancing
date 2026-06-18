# Recent Changes

Date: 2026-06-18

## JavaScript module cleanup

- Audited all exported functions in `js/render.js` and checked their usage across the project.
- Removed `export` from internal rendering functions in `js/render.js`: `renderServices`, `renderPricing`, `renderPortfolioFilters`, `renderPortfolioGrid`, `renderProcess`, `renderBenefits`, `renderTestimonials`, `renderFaq`, `renderFooterServices`, and `renderContactSelect`.
- Kept `setLang` exported because `main.js` imports and uses it.
- Confirmed that `featureItem` is internal to `js/render.js` and does not need to be exported.
- Audited exports across all JavaScript files and found that `applyTheme` was only used inside `js/theme.js`.
- Removed `export` from `applyTheme` while keeping `initThemeToggle` exported for use by `main.js`.
- Verified the updated JavaScript files with `node --check`.

## Documentation

- Created `script-explanation.md` in the project root.
- Added explanations of the initialization flow in `main.js` and the rendering and language-switching logic in `js/render.js`.
- Updated the documentation to clarify that `setLang` is the only public function exported by `js/render.js`.
