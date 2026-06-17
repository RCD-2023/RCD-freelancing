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
}
