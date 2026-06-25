/* ═══════════════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════════════ */
export function initContactForm() {
  const form = document.getElementById("contact-form")
  const success = document.getElementById("contact-success")
  if (!form || !success) return

  form.addEventListener("submit", e => {
    e.preventDefault()
    form.style.display = "none"
    success.style.display = "flex"
  })

  initMessageCounter()
}

function initMessageCounter() {
  const message = document.getElementById("message")
  const counter = document.getElementById("message-counter")
  if (!message || !counter) return

  const maxLength = message.maxLength

  const updateCounter = () => {
    counter.textContent = `${message.value.length} / ${maxLength}`
  }

  message.addEventListener("input", updateCounter)
  updateCounter()
}
