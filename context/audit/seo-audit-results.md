# SEO Audit Results

Date: 2026-07-01
Spec: @context/features/seo-audit-specs.md

Audit only — no code changes were made.

## High priority

### 1. Core content is invisible in the raw HTML — everything relies on client-side JS rendering
- **Affected files:** `index.html`, `js/render.js`
- **Problem:** Services, pricing feature lists, portfolio cards, process steps, benefits, FAQ items, and footer services all render into empty containers (`<div id="services-grid">`, etc.) via `setLang()` after `DOMContentLoaded`. The raw HTML source contains none of this text.
- **Why it matters:** Googlebot generally executes JS but on a delayed second-wave render, which can slow indexing of this content. Other crawlers (Bing, LinkedIn/Facebook/Slack preview bots, some AI crawlers) often don't execute JS at all, so they see a page that's mostly empty below the hero. FAQ content in particular is a missed opportunity — it's exactly the kind of content that benefits from being indexable/quotable and is not.
- **Recommended fix:** Not something to fix within a no-build vanilla-JS constraint easily, but worth flagging as an architectural tradeoff. Lower-effort mitigation: ensure the most important sections (FAQ, services) have meaningful fallback text already in the HTML (some sections partly do this via `data-lang` spans, but the JS-rendered ones don't).

### 2. Meta description exceeds recommended length (175 characters)
- **Affected file:** `index.html:7,14,22`
- **Problem:** `meta[name="description"]`, `og:description`, and `twitter:description` all share the same 175-character string. Google typically truncates SERP snippets around ~155–160 characters.
- **Why it matters:** The sentence will likely get cut off mid-word in search results, weakening the click-through pitch.
- **Recommended fix:** Trim to ~155 chars, e.g. keep the first sentence and shorten the second: "Freelance web developer — construiesc site-uri moderne, magazine online și aplicații web rapide, optimizate SEO, pentru România și internațional."

## Medium priority

### 3. Favicon `type` attribute doesn't match the actual file format
- **Affected file:** `index.html:47`
- **Problem:** `<link rel="icon" type="image/png" href="images/logo/logo-v4.webp">` declares `image/png` but the file is `.webp`.
- **Why it matters:** Some browsers/crawlers trust the declared MIME type over the extension and may fail to load or index the favicon, which also appears in Google SERP results next to the title.
- **Recommended fix:** Change `type="image/png"` to `type="image/webp"`.

### 4. FAQ questions are not marked up as headings
- **Affected file:** `js/render.js:127-131` (`renderFaq`)
- **Problem:** Each FAQ question is a `<button class="faq-trigger">` with a `<span>` inside — no heading element wraps the question text.
- **Why it matters:** Search engines (and FAQPage rich-result eligibility, and accessibility/AT navigation) generally expect FAQ questions to be structured as headings or at least clearly marked semantic text. Right now they're just interactive button labels.
- **Recommended fix:** Wrap the question `<span>` in an `<h3>` inside the button, or add an `<h3>` sibling — matches the pattern already used elsewhere (`.service-card h3`, `.benefit-card h3`).

### 5. Missing FAQPage structured data
- **Affected file:** `index.html` (structured data block)
- **Problem:** Only `ProfessionalService` schema is present; the site has 6 real Q&A pairs in the FAQ section but no `FAQPage` JSON-LD.
- **Why it matters:** FAQPage structured data can earn expandable rich snippets directly in search results, which is high-value real estate for a small freelance site. (Note: this is easier to justify once finding #1/#4 above are addressed, since the content should ideally exist as real markup, not just JS-injected text.)
- **Recommended fix:** Add a `FAQPage` JSON-LD block listing the 6 FAQ question/answer pairs alongside the existing `ProfessionalService` schema.

### 6. Portfolio card with empty `image` src
- **Affected file:** `js/data.js:144-146` (Health Portal entry), `js/render.js:78`
- **Problem:** The "Health Portal" project has `image: ''`, so the rendered tag is `<img src="" alt="Health Portal" loading="lazy" ...>`. An empty `src` is invalid and in some browsers triggers a request to the current document URL.
- **Why it matters:** Wasted/incorrect network request, invalid markup, and a visibly broken card (mitigated only by the `onerror` hide, which doesn't reliably fire for empty `src` in every browser).
- **Recommended fix:** Either add a real image for this project or conditionally omit the `<img>`/use a placeholder graphic when `image` is falsy, same pattern already used for `demoUrl`.

## Low priority

### 7. Duplicate portfolio card titles
- **Affected file:** `js/data.js:96-98, 128-130`
- **Problem:** Two separate portfolio entries are both titled "Real Estate" (Next.js Property Pulse and the Django project), so their `alt` text and visible `<h3>` are identical.
- **Why it matters:** Minor — duplicate alt/title text is a small missed opportunity for descriptive, differentiated content per image, and could look repetitive to a user browsing the portfolio.
- **Recommended fix:** Give each a distinguishing title, e.g. "Real Estate (Next.js)" / "Real Estate (Django)".

### 8. `og:locale` is hardcoded to `ro_RO` regardless of language switch
- **Affected file:** `index.html:16`
- **Problem:** The page is a client-rendered SPA at a single URL; `og:locale` always reads `ro_RO` even though the JS can switch to English content.
- **Why it matters:** Low impact — this is expected behavior for how the site is built (no server-side locale routing), and matches what a crawler actually sees on first load. Only worth revisiting if the site ever gets separate `/en` URLs.
- **Recommended fix:** No action needed unless localized URLs are introduced later.

### 9. Footer `<h3>` headings with no parent `<h2>` in that landmark
- **Affected file:** `index.html:386, 397`
- **Problem:** `.footer-col-title` uses `<h3>` but the `<footer>` has no `<h2>` before it.
- **Why it matters:** Minor heading-hierarchy nitpick some automated auditors flag; negligible real-world SEO impact since footer is a distinct landmark and its content is navigational, not primary content.
- **Recommended fix:** Optional — could switch to `<h2>` for footer column titles, or leave as-is.

## What's already solid (verified, no action needed)
- Single `<h1>`, correct `h1→h2→h3` flow through the main content sections.
- `robots.txt` and `sitemap.xml` are present, valid, and correctly reference each other.
- Canonical tag, OG tags, Twitter Card tags all present and pointing at the production URL.
- `ProfessionalService` JSON-LD is valid and reasonably scoped (no schema bloat).
- All portfolio image paths resolve to real files (except the one flagged in #6); `loading="lazy"` and `decoding="async"` are applied consistently.
- Landmarks (`header`, `nav[aria-label]`, `main`, `footer`) all present.
- `document.documentElement.lang` is correctly updated on language switch (`js/render.js:167`).
- Portfolio images use a fixed `aspect-ratio: 4/3` wrapper in CSS, so no layout-shift risk despite missing explicit `width`/`height` attributes.
