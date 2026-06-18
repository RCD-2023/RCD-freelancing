/* ═══════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════ */
export function initScrollReveal() {
  const targets = document.querySelectorAll(".section")
  if (!targets.length) return

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      entry.target.classList.add("is-visible")
      obs.unobserve(entry.target)
    })
  }, { threshold: 0.15 })

  targets.forEach(target => {
    target.classList.add("reveal")
    observer.observe(target)
  })
}
