# Coding Standards

## Project Structure

* `index.html` – page markup
* `style.css` – all styles
* `main.js` – JavaScript functionality

---

## HTML

* Use semantic elements whenever possible (`header`, `nav`, `main`, `section`, `footer`).
* Maintain proper heading hierarchy (`h1` → `h2` → `h3`).
* Use meaningful class names.
* Include `alt` attributes for images.
* Use lowercase for tags and attributes.
* Indent with 2 spaces.

Example:

```html
<section class="services">
  <h2>Services</h2>
</section>
```

---

## CSS

* Follow a mobile-first approach.
* Use classes instead of IDs for styling.
* Keep selectors simple and avoid excessive nesting.
* Group related styles together.
* Use CSS variables for reusable values.

Example:

```css
:root {
  --primary-color: #2563eb;
  --max-width: 1200px;
}
```

---

## JavaScript

* Use `const` by default and `let` when reassignment is required.
* Avoid global variables.
* Prefer descriptive function and variable names.
* Keep functions focused on a single responsibility.
* Use early returns to reduce nesting.
* Add brief comments only when the intent is not obvious.

Example:

```javascript
function toggleMenu() {
  mobileMenu.classList.toggle('open');
}
```

---

## Naming Conventions

| Type        | Convention       |
| ----------- | ---------------- |
| CSS Classes | kebab-case       |
| Variables   | camelCase        |
| Functions   | camelCase        |
| Constants   | UPPER_SNAKE_CASE |

Examples:

```javascript
const MAX_ITEMS = 10;
const menuButton = document.querySelector('.menu-button');

function openModal() {}
```

---

## Code Quality

* Remove unused code before committing. Let me know what code want to remove first.
* Keep files organized and readable.
* Test functionality on desktop and mobile.
* Avoid duplicate code when possible.
* Format code consistently throughout the project. Respect a unitary code pattern throughout the project.

---

## General Rule

Prioritize readability and simplicity over clever or complex solutions.
