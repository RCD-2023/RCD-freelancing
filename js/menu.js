/* ═══════════════════════════════════════════════
   MOBILE MENU
═══════════════════════════════════════════════ */
export function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle")
  const menu = document.getElementById("mobile-menu")
  if (!toggle || !menu) return

  const iconMenu = toggle.querySelector(".icon-menu")
  const iconClose = toggle.querySelector(".icon-close")

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("open")
    menu.classList.toggle("open", !isOpen)
    menu.setAttribute("aria-hidden", String(isOpen))
    toggle.setAttribute("aria-expanded", String(!isOpen))
    toggle.setAttribute("aria-label", !isOpen ? "Închide meniu" : "Deschide meniu")
    if (iconMenu) iconMenu.style.display = isOpen ? "block" : "none"
    if (iconClose) iconClose.style.display = isOpen ? "none" : "block"
  })

  // Close menu when a link is clicked
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open")
      menu.setAttribute("aria-hidden", "true")
      toggle.setAttribute("aria-expanded", "false")
      toggle.setAttribute("aria-label", "Deschide meniu")
      if (iconMenu) iconMenu.style.display = "block"
      if (iconClose) iconClose.style.display = "none"
    })
  })
}
