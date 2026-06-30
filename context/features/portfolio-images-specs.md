# Add project images and Live Demo support to portfolio cards

## Overview

Update the portfolio cards in the section **Portfolio** so they use the correct project screenshots and show a **Live Demo** button only for projects that have a valid demo URL.

Keep the current card layout, filtering system, translations, and existing visual style unless a change is explicitly listed below.

## Files to update

- `js/data.js`
- `js/render.js` 
- `style.css`, only if needed for image display or hover polish
- `context/current-feature.md`, add a short note describing the completed changes

## Required data changes

In `data.js`, update the `portfolioProjects` array.

For each project object:

- Add or update the `image` property.
- Add a new `demoUrl` property.
- Use an empty string `""` when the project has no public demo.
- Do not render a Live Demo button for empty `demoUrl` values.
- Keep the existing category values used by the filters. If a new card is added for the same category, use the same category key as the existing card.

## Project assets

Use these values as the source of truth, but verify that each image path matches the actual folder/file structure in the project before finalizing the code.

### Fashion / E-commerce project

```js
image: "images/NextJs-Proj1/nextjs-pr1-img1.png",
demoUrl: "https://ecomm-bay-chi.vercel.app/"
```

### Electronics / MERN ProShop project

```js
image: "images/mern-proshop/img1-proshop.png",
demoUrl: ""
```

### Real Estate project 1 / Django project

```js
image: "images/django/img1-django.png",
demoUrl: ""
```
Do not render a Live Demo button.

### Real Estate project 2 / Next.js Property Pulse

```js
image: "images/NextJs-Proj2/nextjs-pr2-img1.png",
demoUrl: "https://rcd-prop-pulse.vercel.app/"
```

### Food Blog / Astro Culinary project

```js
image: "images/culinar-img/culinar_img1.png",
demoUrl: "https://astro-culinary-site.vercel.app/"
```

### Developer Tool / DevStash SaaS project

```js
image: "images/devstash/devstash-img1.png",
demoUrl: "https://rcd-devstash.vercel.app/"
```

### Data Management App / Forms App project

```js
image: "images/dataCollect-images/formsApp-img5.png",
demoUrl: ""
```
Do not render a Live Demo button.

### Health Portal project

```js
image: "",
demoUrl: ""
```

For the Health Portal project, keep the existing placeholder image behavior if no screenshot is available. Do not render a Live Demo button.

## Portfolio rendering requirements

Update the portfolio card rendering logic so that:

- Every card displays its `image` when the path is available.
- Existing placeholder/fallback behavior remains in place for missing or broken images.
- Image `alt` text uses the project title.
- A **Live Demo** button is rendered only when `demoUrl` is a non-empty string.
- The Live Demo link opens in a new tab.
- The Live Demo link includes:

```html
target="_blank" rel="noopener noreferrer"
```

- Projects without `demoUrl` must not show an empty button, disabled button, `#` link, or broken link.
- Keep the existing modal/details behavior unchanged unless the current code requires a small adjustment to fit the new button.

## Real Estate category requirement

There should be two separate cards in the Real Estate category:

1. Django Real Estate project
2. Next.js Property Pulse project

Both cards should use the same existing category key used by the Real Estate filter, so the filter shows both projects.

## Visual / UX requirements

- Keep the layout responsive and consistent with the current portfolio design.
- Make the hover effect smoother, for example with a subtle transition on the card/image/button.
- Do not introduce large layout shifts on hover.
- Do not change unrelated sections of the page.

## Text content

For now, keep the existing placeholder text / lorem ipsum where final copy is not ready. Do not rewrite project descriptions in this task.

## Acceptance criteria

- Portfolio cards use the correct project screenshots where screenshots are provided.
- The Food Blog image path is corrected to a real image file path if the provided value is only a folder.
- The Health Portal card keeps fallback/placeholder behavior because no image is provided.
- Live Demo buttons appear only for projects with a valid `demoUrl`.
- Live Demo links open in a new tab and include `rel="noopener noreferrer"`.
- The Real Estate filter displays both Real Estate cards.
- The portfolio layout remains responsive on desktop and mobile.
- Hover effects are smooth and do not break the card layout.
- `context/current-feature.md` is updated with a short implementation note.

## References

- `@context/project-overview.md`
- `@context/current-feature.md`
