# Basic SEO implementation

## Overview

Implement a complete basic SEO setup for the website using current best practices. The goal is to improve search engine indexing, accessibility, and social media sharing without changing the site's design or functionality.

## Requirements

### Meta tags

- Review and optimize the `<title>` of `index.html`.
- Review and improve the meta description.


### Heading structure

- Verify that the page contains a single `<h1>`.
- Ensure heading levels follow a logical hierarchy (`h1` → `h2` → `h3`).

### Images

- Review all images.
- Ensure every content image has a meaningful `alt` attribute.
- Keep decorative images with empty `alt=""` where appropriate.
- Verify that portfolio images use native lazy loading.

### Technical SEO

- Create a canonical URL configuration in `index.html`.
- Create a `robots.txt` file in the project root.
- Create a `sitemap.xml` file in the project root.
- Use the production domain as the canonical site URL. 
- Production URL: `https://myfreelancing.netlify.app/`
- Make sure `robots.txt` references the sitemap.
- Ensure the site is crawlable by search engines.

### Structured data

- Review the existing structured data.
- Improve it where appropriate following Schema.org best practices.
- Do not introduce unnecessary schema types.

### Social sharing

- Verify Open Graph metadata.
- Verify Twitter Card metadata.
- Ensure social previews display the correct title, description, and image.

### Performance

- Review image loading.
- Identify obvious render-blocking resources.
- Recommend simple improvements if applicable.
- Do not perform large performance refactors.

### Accessibility related to SEO

- Review semantic HTML.
- Verify landmark elements (`main`, `header`, `nav`, `footer`).
- Ensure links and buttons have accessible labels where needed.

### Scope

- Do not redesign the website.
- Do not modify the visual appearance unless required for SEO or accessibility but make recommendations first.
- Keep all existing functionality intact.
- Follow current SEO best practices.

## Acceptance criteria

- Basic SEO best practices are implemented.
- Pages contain optimized metadata.
- Images have appropriate alt text.
- Heading hierarchy is valid.
- Canonical, robots.txt, and sitemap are correctly configured.
- Structured data is valid.
- Social sharing metadata is complete.
- No existing functionality is broken.

## References

@context/project-overview.md
@context/current-feature.md