/* ═══════════════════════════════════════════════
   THEME TOGGLE
═══════════════════════════════════════════════ */
function applyTheme(dark) {
  document.documentElement.classList.add("theme-transitioning")
  setTimeout(() => document.documentElement.classList.remove("theme-transitioning"), 300)

  document.body.classList.toggle("dark-theme", dark)

  document.querySelectorAll(".theme-toggle").forEach(btn => {
    btn.setAttribute("aria-pressed", String(dark))
    btn.setAttribute("aria-label", dark ? "Activează modul luminos" : "Activează modul întunecat")
    const icon = btn.querySelector("i")
    if (icon) icon.className = dark ? "fa-solid fa-sun" : "fa-solid fa-moon"
  })
}

export function initThemeToggle() { 
  const stored = localStorage.getItem("theme")
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  const isDark = stored ? stored === "dark" : prefersDark
  applyTheme(isDark)

  document.querySelectorAll(".theme-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const dark = !document.body.classList.contains("dark-theme")
      applyTheme(dark)
      localStorage.setItem("theme", dark ? "dark" : "light")
    })
  })
}
