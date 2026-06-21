/* ═══════════════════════════════════════════════
   NAVBAR SCROLLSPY
═══════════════════════════════════════════════ */
export function initScrollSpy() {
  const links = Array.from(document.querySelectorAll(".nav-link, .mobile-nav-link"))
  if (!links.length) return

  const sections = []
  links.forEach(link => {
    const id = link.getAttribute("href")
    if (!id || !id.startsWith("#")) return
    const section = document.querySelector(id)
    if (section && !sections.includes(section)) sections.push(section)
  })
  if (!sections.length) return

  const visible = new Set()

  function setActive(id) {
    links.forEach(link => link.classList.toggle("active", id !== null && link.getAttribute("href") === id))
  }

  function updateActive() {
    const current = sections.find(section => visible.has(`#${section.id}`))
    setActive(current ? `#${current.id}` : null)
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = `#${entry.target.id}`
      if (entry.isIntersecting) visible.add(id)
      else visible.delete(id)
    })
    updateActive()
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 })

  sections.forEach(section => observer.observe(section))
}
