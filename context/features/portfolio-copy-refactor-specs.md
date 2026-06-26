# Refactor Portfolio Section

## Overview
- Replace the section title "Proiecte recente" with "Proiecte selectate". Add both Romanian and English translations.
- Replace the section subtitle "Câteva dintre site-urile create pentru afaceri locale." with "O selecție de proiecte web dezvoltate." Add both Romanian and English translations.
- Update the i18n dictionaries accordingly.

## Requirements
- Update the Romanian and English translation dictionaries.
- Keep the existing translation key names if possible to avoid unnecessary refactoring.
- Do not change the layout, styling, spacing, or animations.
- Do not modify any portfolio cards or their content.
- Ensure the new texts are used everywhere the portfolio section is rendered.

## Acceptance criteria
- The portfolio section title displays:
  - RO: "Proiecte selectate"
  - EN: "Selected Projects"
- The portfolio section subtitle displays:
  - RO: "O selecție de proiecte web dezvoltate."
  - EN: "A selection of web projects I have developed."
- Both languages switch correctly using the existing language selector.
- No visual regressions are introduced.
- No console errors are generated.

## References

@context/project-overview.md