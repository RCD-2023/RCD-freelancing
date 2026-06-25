# Review and refactor the Contact form validation.

## Requirements:

- Remove the custom JavaScript regex validation for the Email field.
- Use native browser validation for Email:
  - `type="email"`
  - `required`

- Validate the Name field using native HTML validation:
  - `required`
  - `minlength="2"`
  - `maxlength="100"`

- Validate the Message field using native HTML validation:
  - `required`
  - `minlength="20"`
  - `maxlength="2000"`

- Do not use regex validation for Name, Email, or Message.
- Keep any existing localized validation messages only if they use the browser validation API, such as `setCustomValidity()`.
- Make sure the form cannot be submitted if Name, Email, or Message are invalid or empty.
- Remove any unused JavaScript code, translation keys, or helper functions created for the previous custom email regex validation.

Acceptance criteria:
- Empty Name field is blocked by the browser.
- Invalid Email format is blocked by the browser.
- Empty Message field is blocked by the browser.
- Message shorter than 20 characters is blocked by the browser.
- No custom email regex remains in the code.
- Romanian and English UI behavior remains functional.