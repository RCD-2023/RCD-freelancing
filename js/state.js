/* ═══════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
export let currentLang = "en"
export let activeCategory = "all"

export function setCurrentLang(lang) {
  currentLang = lang
}

export function setActiveCategory(category) {
  activeCategory = category
}
