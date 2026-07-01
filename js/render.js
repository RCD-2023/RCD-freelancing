import { translations } from "./translations.js"
import { ICONS } from "./icons.js"
import { 
  services,
  pricingFeatures,
  portfolioProjects,
  categoryLabels,
  processSteps,
  benefits,
  faqs,
  footerServicesList,
} from "./data.js"
import { currentLang, activeCategory, setCurrentLang, setActiveCategory } from "./state.js"

/* ═══════════════════════════════════════════════
   RENDER HELPERS
═══════════════════════════════════════════════ */
function featureItem(text) {
  return `<li class="pricing-feature"><span class="feat-icon">${ICONS.check}</span><span>${text}</span></li>`
}

function renderServices() {
  const grid = document.getElementById("services-grid")
  if (!grid) return
  grid.innerHTML = services.map(s => `
    <div class="service-card"> 
      <div class="service-icon">${ICONS[s.icon]}</div>
      <h3>${currentLang === "ro" ? s.ro : s.en}</h3>
      <p>${currentLang === "ro" ? s.roD : s.enD}</p>
    </div>
  `).join("")
}

function renderPricing() {
  const feats = pricingFeatures[currentLang]
  const sf = document.getElementById("starter-features")
  const bf = document.getElementById("business-features")
  const cf = document.getElementById("custom-features")
  if (sf) sf.innerHTML = feats.starter.map(featureItem).join("")
  if (bf) bf.innerHTML = feats.business.map(featureItem).join("")
  if (cf) cf.innerHTML = feats.custom.map(featureItem).join("")
}

function renderPortfolioFilters() {
  const container = document.getElementById("portfolio-filters")
  if (!container) return
  const categories = Object.keys(categoryLabels)
  const allLabel = translations[currentLang]["portfolio.all"]

  container.innerHTML = `
    <button type="button" class="filter-btn ${activeCategory === "all" ? "active" : ""}" data-cat="all" aria-pressed="${activeCategory === "all"}">${allLabel}</button>
    ${categories.map(c => `
      <button type="button" class="filter-btn ${activeCategory === c ? "active" : ""}" data-cat="${c}" aria-pressed="${activeCategory === c}">
        ${categoryLabels[c][currentLang]}
      </button>
    `).join("")}
  `

  container.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setActiveCategory(btn.dataset.cat)
      renderPortfolioFilters()
      renderPortfolioGrid()
    })
  })
}

function renderPortfolioGrid() {
  const grid = document.getElementById("portfolio-grid")
  if (!grid) return
  const filtered = activeCategory === "all"
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory)

  grid.innerHTML = filtered.map(p => `
    <article class="portfolio-card">
      <div class="portfolio-img-wrap">
        <img src="${p.image}" alt="${p.title}" loading="lazy" decoding="async" onerror="this.style.display='none'">
        ${p.demoUrl ? `
          <a class="portfolio-demo-link" href="${p.demoUrl}" target="_blank" rel="noopener noreferrer">
            ${translations[currentLang]["portfolio.demo"]}
            ${ICONS.external}
          </a>
        ` : ""}
      </div>
      <div class="portfolio-body">
        <h3 class="portfolio-title">${p.title}</h3>
        <p class="portfolio-desc">${currentLang === "ro" ? p.ro : p.en}</p>
      </div>
    </article>
  `).join("")
}

function renderProcess() {
  const list = document.getElementById("process-grid")
  if (!list) return
  list.innerHTML = processSteps.map((s, i) => `
    <li class="process-step">
      <span class="process-number" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
      <div class="process-icon">${ICONS[s.icon]}</div>
      <h3>${currentLang === "ro" ? s.ro : s.en}</h3>
      <p>${currentLang === "ro" ? s.roD : s.enD}</p>
    </li>
  `).join("")
}

function renderBenefits() {
  const grid = document.getElementById("benefits-grid")
  if (!grid) return
  grid.innerHTML = benefits.map(b => `
    <div class="benefit-card">
      <div class="benefit-icon">${ICONS[b.icon]}</div>
      <div>
        <h3>${currentLang === "ro" ? b.ro : b.en}</h3>
        <p>${currentLang === "ro" ? b.roD : b.enD}</p>
      </div>
    </div>
  `).join("")
}

function renderFaq() {
  const list = document.getElementById("faq-list")
  if (!list) return
  list.innerHTML = faqs.map((f, i) => {
    const item = f[currentLang]
    return `
      <div class="faq-item" role="listitem">
        <button type="button" class="faq-trigger" aria-expanded="false" aria-controls="faq-body-${i}" id="faq-trigger-${i}">
          <span>${item.q}</span>
          ${ICONS.chevron}
        </button>
        <div class="faq-body" id="faq-body-${i}" role="region" aria-labelledby="faq-trigger-${i}">
          <div class="faq-body-inner">${item.a}</div>
        </div>
      </div>
    `
  }).join("")

  list.querySelectorAll(".faq-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".faq-item")
      const isOpen = item.classList.contains("open")
      // close all
      list.querySelectorAll(".faq-item.open").forEach(el => {
        el.classList.remove("open")
        el.querySelector(".faq-trigger").setAttribute("aria-expanded", "false")
      })
      if (!isOpen) {
        item.classList.add("open")
        trigger.setAttribute("aria-expanded", "true")
      }
    })
  })
}

function renderFooterServices() {
  const ul = document.getElementById("footer-services")
  if (!ul) return
  ul.innerHTML = footerServicesList[currentLang].map(s => `<li>${s}</li>`).join("")
}

/* ═══════════════════════════════════════════════
   LANGUAGE SYSTEM
═══════════════════════════════════════════════ */
export function setLang(lang) {
  setCurrentLang(lang)
  document.documentElement.lang = lang

  // Update data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n
    const val = translations[lang][key]
    if (val) el.textContent = val
  })

  // Update data-i18n-placeholder elements
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder
    const val = translations[lang][key]
    if (val) el.placeholder = val
  })

  // Update data-lang visibility (inline bilingual spans)
  document.querySelectorAll("[data-lang]").forEach(el => {
    el.classList.toggle("active", el.dataset.lang === lang)
  })

  // Update lang switcher buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    const isActive = btn.dataset.lang === lang
    btn.classList.toggle("active", isActive)
    btn.setAttribute("aria-pressed", String(isActive))
  })

  // Re-render all JS-driven sections
  renderServices()
  renderPricing()
  renderPortfolioFilters()
  renderPortfolioGrid()
  renderProcess()
  renderBenefits()
  renderFaq()
  renderFooterServices()
}
