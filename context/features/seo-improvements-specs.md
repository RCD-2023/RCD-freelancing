# SEO improvements 
<!-- Feature title -->

## Overview

- Implement the approved SEO improvements identified in the latest SEO audit. Keep the existing UI and behaviour unchanged unless explicitly required below.


## Requirements

### HTML fallback for SEO

- Add meaningful HTML fallback content for the FAQ and Services sections.
- Add a FAQPage JSON-LD block
- Preserve the current JavaScript behaviour (language switching and FAQ accordion).
- Do not render duplicate visible content after JavaScript initializes.
- The fallback should be available to crawlers and users with JavaScript disabled.
- Keep accessibility unchanged or improved.

### Meta description

- Shorten the meta description to approximately 155 characters.
- Preserve the current SEO intent and bilingual support.

### Favicon

- Update the favicon MIME type to match the actual WebP asset.

- When a portfolio item has no image, render an appropriate placeholder instead of an empty img element.
- Avoid rendering img elements with an empty src attribute.


## Acceptance criteria

- FAQ and Services contain meaningful HTML fallback content.
- No duplicate visible content after JavaScript initialization.
- FAQPage JSON-LD matches the visible FAQ exactly.
- Meta description is approximately 155 characters.
- Favicon MIME type matches the WebP asset.
- Portfolio cards never render an empty img src.
- Existing layout, translations, animations, filtering, and responsiveness remain unchanged.
- No console errors or broken markup are introduced.

- Re-run the SEO audit and report whether any implemented issues remain unresolved.

## References

@context/audit/seo-audit-results.md

