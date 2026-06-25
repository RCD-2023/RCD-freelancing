/* ═══════════════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════════════ */
const SUCCESS_DISPLAY_MS = 6000

export function initContactForm() {
  const form = document.getElementById("contact-form")
  const success = document.getElementById("contact-success")
  const error = document.getElementById("contact-error")
  if (!form || !success || !error) return

  const updateMessageCounter = initMessageCharacterCounter()

  form.addEventListener("submit", async e => {
    e.preventDefault()
    error.style.display = "none"

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })

      if (!response.ok) {
        error.style.display = "block"
        return
      }

      form.style.display = "none"
      success.style.display = "flex"

      setTimeout(() => {
        form.reset()
        updateMessageCounter()
        success.style.display = "none"
        form.style.display = ""
      }, SUCCESS_DISPLAY_MS)
    } catch {
      error.style.display = "block"
    }
  })
}

function initMessageCharacterCounter() {
  const message = document.getElementById("message")
  const counter = document.getElementById("message-counter")
  if (!message || !counter) return () => {}

  const maxLength = message.maxLength

  const updateCounter = () => {
    counter.textContent = `${message.value.length} / ${maxLength}`
  }

  message.addEventListener("input", updateCounter)
  updateCounter()

  return updateCounter
}
