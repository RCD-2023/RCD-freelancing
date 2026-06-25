import { translations } from "./translations.js"
import { currentLang } from "./state.js"

/* ═══════════════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════════════ */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clearEmailError(emailInput, emailError) {
  emailInput.classList.remove("input-invalid")
  emailError.textContent = ""
}

function showEmailError(emailInput, emailError) {
  emailInput.classList.add("input-invalid")
  emailError.textContent = translations[currentLang]["contact.emailError"]
}

export function initContactForm() {
  const form = document.getElementById("contact-form")
  const success = document.getElementById("contact-success")
  const emailInput = document.getElementById("email")
  const emailError = document.getElementById("email-error")
  if (!form || !success || !emailInput || !emailError) return

  emailInput.addEventListener("input", () => clearEmailError(emailInput, emailError))

  form.addEventListener("submit", e => {
    e.preventDefault()

    if (!EMAIL_PATTERN.test(emailInput.value.trim())) {
      showEmailError(emailInput, emailError)
      emailInput.focus()
      return
    }

    form.style.display = "none"
    success.style.display = "flex"
  })
}
