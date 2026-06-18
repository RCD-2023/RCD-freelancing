import { setLang } from "./js/render.js"
import { initThemeToggle } from "./js/theme.js"
import { initMobileMenu } from "./js/menu.js"
import { initContactForm } from "./js/contact.js"
import { initScrollReveal } from "./js/reveal.js"

/* ═══════════════════════════════════════════════
   LANG SWITCHER BINDING 
═══════════════════════════════════════════════ */
function initLangSwitcher() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang))
    
  })
}


/* ═══════════════════════════════════════════════
   FOOTER YEAR
═══════════════════════════════════════════════ */
function setFooterYear() {
  const el = document.getElementById("footer-year")
  if (el) el.textContent = new Date().getFullYear()
}

/* ═══════════════════════════════════════════════
   APP INITIALIZATION
═══════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  setFooterYear()
  initLangSwitcher()
  initMobileMenu()
  initContactForm()
  initThemeToggle()
  setLang("ro")  // initial render — triggers all renderers
  initScrollReveal()
})
