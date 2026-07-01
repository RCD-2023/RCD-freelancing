# Image Assets Optimization
<!-- Replace oversized PNG assets with optimized WebP images -->

## Overview

Optimize all website image assets to improve initial page load performance.

The logo has already been recreated as an optimized WebP image. Portfolio screenshots have also been optimized (800px width, WebP format). Update the project to use the new assets while preserving the existing design and functionality.

## Requirements

### Notes: 
- Logo and culinar already done. 

### Logo 

- Replace every reference to the old PNG logo with the new optimized WebP version.
- Keep the same visual size in the navbar, footer, and any other location where the logo appears.
- Update any image paths if necessary.

### Portfolio screenshots

- Replace all portfolio card PNG screenshots with their corresponding optimized WebP versions.
- Update the `portfolioProjects` image paths in `js/data.js`.
- Update any other references to these images throughout the project.

### Image loading

- Keep lazy loading for images outside the initial viewport.
- Use eager loading only for images that are immediately visible on first page load (if applicable).
- Add explicit `width` and `height` attributes where appropriate to reduce layout shift.
- Add decoding="async" to non-critical images if necessary.

### Preserve existing functionality

Do not modify:

- portfolio filtering
- card layout
- hover effects
- demo URLs
- translations
- animations
- responsive behaviour

Only update image assets and any code required to reference them correctly.

### Cleanup

- Remove obsolete PNG references from the code after confirming the new images work correctly.
- Do not delete the original image files in the images folder

## Acceptance criteria

- All logo instances use the optimized WebP asset.
- All portfolio cards display the optimized WebP screenshots.
- No broken image paths.
- Visual appearance remains unchanged.
- Initial page load is lighter than before.
- Browser console contains no image-related errors.

## References

@context/project-overview.md
@context/current-feature.md