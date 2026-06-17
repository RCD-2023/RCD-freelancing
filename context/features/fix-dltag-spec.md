# Fix semantic misuse of `<dl>` tag

## Overview

Two sections of the page use `<dl>` (description list) incorrectly:

- **Hero metrics** (`index.html`, `.hero-metrics`): each `<div class="metric-card">` wraps a single `<dd>` with no matching `<dt>`. A description list with only descriptions and no terms is not valid description-list semantics.
- **Contact checks** (`index.html`, `.contact-checks`): the `<dl>` wraps `<div class="contact-check">` elements directly — no `<dt>` or `<dd>` at all. This is just a list of checkmark items, not a description list.

Both should become plain unordered lists, since each is a set of similar, unordered items.

## Requirements

- `hero-metrics`: change `<dl class="hero-metrics">` to `<ul class="hero-metrics">`. Collapse each `<div class="metric-card"><dd>...</dd></div>` into a single `<li class="metric-card">...</li>` (drop the now-redundant `<dd>` wrapper).
- `contact-checks`: change `<dl class="contact-checks">` to `<ul class="contact-checks">`. Change each `<div class="contact-check">` to `<li class="contact-check">`.
- No `dl`/`dt`/`dd` element selectors exist in `style.css` and no `dl`/`dt`/`dd` references exist in `script.js` (verified) — only class selectors (`.hero-metrics`, `.metric-card`, `.contact-checks`, `.contact-check`) are used, so no CSS/JS changes are required.
- The existing global reset already covers the new elements (`ul, ol { list-style: none; }` and the `margin: 0; padding: 0;` reset), so no extra list-style/margin overrides are needed.
- Keep markup minimal — don't add wrapper elements beyond the `li` itself.

## References

- @context/project-overview.md
- @context/coding-standards.md
