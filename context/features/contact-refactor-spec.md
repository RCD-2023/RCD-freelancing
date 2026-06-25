# Contact Section Refactor

## Overview

- Refactor the Contact section by simplifying the contact form and updating the contact information and text.


## Requirements

- In the left column, add a button next to the WhatsApp button displaying the phone number **+40 733 154 058**. The button should use a `tel:` link so users can call directly on supported devices.

- Replace:
  > Spune-mi câteva detalii despre afacerea ta și primești o ofertă personalizată în maxim 24 de ore.

  with:

  > Spune-mi câteva detalii despre afacerea ta și primești o ofertă personalizată.

  Update both the Romanian and English translations.

- Replace:

  > Ofertă gratuită, fără obligații

  with:

  > Oferta este gratuită.

  Update both the Romanian and English translations.

- Remove the following form group:

```html
<div class="form-group">
    <label for="business" data-i18n="contact.business">Tipul afacerii</label>
     <select id="business" name="business" required>
         <option value="" disabled selected data-lang="ro">Alege...</option>
    </select>
</div>
```

- Remove any JavaScript, translation keys, data structures, validation logic, or other code that becomes unused after removing the business type field.

## Acceptance Criteria

- The Contact section displays both the WhatsApp button and the phone button.
- All updated texts appears correctly in both Romanian and English.
- The business type field is completely removed.
- No unused translation keys, data objects, JavaScript, or CSS related to the removed field remain.


## References
- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction.md
- @context/current-feature.md


