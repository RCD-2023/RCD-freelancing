/* ═══════════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════════ */
const translations = {
  ro: {
    "nav.services":           "Servicii",
    "nav.pricing":            "Prețuri",
    "nav.portfolio":          "Portofoliu",
    "nav.process":            "Proces",
    "nav.faq":                "Întrebări",
    "nav.cta":                "Cere ofertă",
    "hero.badge":             "Disponibil pentru proiecte noi",
    "hero.title":             "Site-uri web care aduc clienți afacerii tale locale",
    "hero.subtitle":          "Construiesc site-uri rapide, moderne și optimizate pentru saloane, restaurante, cabinete și firme de servicii. Preț fix, fără surprize, livrare în 7–14 zile.",
    "hero.cta1":              "Cere o ofertă gratuită",
    "hero.cta2":              "Vezi pachetele",
    "hero.metric1":           "proiecte livrate",
    "hero.metric2":           "clienți mulțumiți",
    "hero.metric3":           "zile livrare medie",
    "hero.metric4":           "ani experiență",
    "pricing.title":          "Pachete cu preț fix, transparent",
    "pricing.subtitle":       "Alegi pachetul, eu mă ocup de tot. Fără costuri ascunse.",
    "pricing.popular":        "Cel mai ales",
    "pricing.starter.name":   "Starter",
    "pricing.starter.desc":   "Pentru afaceri la început de drum care vor o prezență online curată.",
    "pricing.starter.price":  "1.490 lei",
    "pricing.business.name":  "Business",
    "pricing.business.desc":  "Pentru afaceri care vor să fie găsite și să convertească vizitatori în clienți.",
    "pricing.business.price": "2.990 lei",
    "pricing.cta":            "Cere pachetul",
    "portfolio.title":        "Proiecte recente",
    "portfolio.subtitle":     "Câteva dintre site-urile create pentru afaceri locale.",
    "portfolio.all":          "Toate",
    "process.title":          "Cum lucrăm împreună",
    "process.subtitle":       "Un proces simplu, în 4 pași, de la idee la lansare.",
    "benefits.title":         "De ce să lucrezi cu mine",
    "benefits.subtitle":      "Nu o agenție mare, ci un partener dedicat afacerii tale.",
    "testimonials.title":     "Ce spun clienții",
    "testimonials.subtitle":  "Afaceri reale, rezultate reale.",
    "faq.title":              "Întrebări frecvente",
    "faq.subtitle":           "Tot ce trebuie să știi înainte să începem.",
    "contact.title":          "Hai să-ți construim site-ul",
    "contact.subtitle":       "Spune-mi câteva detalii despre afacerea ta și primești o ofertă personalizată în maxim 24 de ore.",
    "contact.whatsapp":       "Scrie pe WhatsApp",
    "contact.name":           "Nume",
    "contact.email":          "Email",
    "contact.business":       "Tipul afacerii",
    "contact.message":        "Mesaj",
    "contact.send":           "Trimite cererea",
    "contact.success":        "Mulțumesc! Revin cu un răspuns în maxim 24 de ore.",
    "footer.tagline":         "Site-uri web pentru afaceri locale care vor să crească.",
    "footer.links":           "Navigare",
    "footer.services":        "Servicii",
    "footer.rights":          "Toate drepturile rezervate.",
  },
  en: {
    "nav.services":           "Services",
    "nav.pricing":            "Pricing",
    "nav.portfolio":          "Portfolio",
    "nav.process":            "Process",
    "nav.faq":                "FAQ",
    "nav.cta":                "Get a quote",
    "hero.badge":             "Available for new projects",
    "hero.title":             "Websites that bring customers to your local business",
    "hero.subtitle":          "I build fast, modern, optimized websites for salons, restaurants, clinics and service businesses. Fixed price, no surprises, delivered in 7–14 days.",
    "hero.cta1":              "Get a free quote",
    "hero.cta2":              "See packages",
    "hero.metric1":           "projects delivered",
    "hero.metric2":           "happy clients",
    "hero.metric3":           "days avg. delivery",
    "hero.metric4":           "years experience",
    "pricing.title":          "Fixed, transparent pricing",
    "pricing.subtitle":       "Pick a package and I handle everything. No hidden costs.",
    "pricing.popular":        "Most popular",
    "pricing.starter.name":   "Starter",
    "pricing.starter.desc":   "For early-stage businesses that want a clean online presence.",
    "pricing.starter.price":  "€299",
    "pricing.business.name":  "Business",
    "pricing.business.desc":  "For businesses that want to be found and turn visitors into customers.",
    "pricing.business.price": "€599",
    "pricing.cta":            "Choose package",
    "portfolio.title":        "Recent projects",
    "portfolio.subtitle":     "A few of the websites built for local businesses.",
    "portfolio.all":          "All",
    "process.title":          "How we work together",
    "process.subtitle":       "A simple 4-step process, from idea to launch.",
    "benefits.title":         "Why work with me",
    "benefits.subtitle":      "Not a big agency — a partner dedicated to your business.",
    "testimonials.title":     "What clients say",
    "testimonials.subtitle":  "Real businesses, real results.",
    "faq.title":              "Frequently asked questions",
    "faq.subtitle":           "Everything you need to know before we start.",
    "contact.title":          "Let's build your website",
    "contact.subtitle":       "Tell me a few details about your business and get a personalized quote within 24 hours.",
    "contact.whatsapp":       "Message on WhatsApp",
    "contact.name":           "Name",
    "contact.email":          "Email",
    "contact.business":       "Business type",
    "contact.message":        "Message",
    "contact.send":           "Send request",
    "contact.success":        "Thank you! I'll get back to you within 24 hours.",
    "footer.tagline":         "Websites for local businesses that want to grow.",
    "footer.links":           "Navigation",
    "footer.services":        "Services",
    "footer.rights":          "All rights reserved.",
  }
}

/* ═══════════════════════════════════════════════
   DATA ARRAYS
═══════════════════════════════════════════════ */
const ICONS = {
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  mappin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  barchart: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>`,
  megaphone: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 11 19-9-9 19-2-8-8-2z"/></svg>`,
  wrench: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`,
  message: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  pencilruler: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 5 4 4"/><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m2 22 5.5-1.5L21 7a2.12 2.12 0 0 0-3-3L4.5 17.5Z"/></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  rocket: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
  zap: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  dollar: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  handshake: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  chevron: `<svg class="faq-chevron" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`,
}

const services = [
  { icon: "globe",      ro: "Creare site web",            en: "Website creation",          roD: "Site modern, rapid și responsive, construit pe măsura afacerii tale.",             enD: "A modern, fast, responsive website built for your business." },
  { icon: "mappin",     ro: "Google Business & Maps",     en: "Google Business & Maps",    roD: "Configurare profil Google ca să apari pe hartă și în căutări locale.",             enD: "Google profile setup so you appear on the map and in local search." },
  { icon: "search",     ro: "SEO de bază",                en: "Basic SEO",                 roD: "Optimizare pentru cuvinte cheie locale, ca să fii găsit de clienți.",              enD: "Optimization for local keywords so customers can find you." },
  { icon: "barchart",   ro: "Analytics & Search Console", en: "Analytics & Search Console",roD: "Configurare instrumente ca să vezi clar câți vizitatori ai.",                      enD: "Tools set up so you clearly see how many visitors you get." },
  { icon: "megaphone",  ro: "Promovare opțională",        en: "Optional promotion",        roD: "Campanii Google și social media pentru mai mulți clienți.",                        enD: "Google and social media campaigns for more customers." },
  { icon: "wrench",     ro: "Mentenanță",                 en: "Maintenance",               roD: "Actualizări, backup și suport ca site-ul să meargă perfect.",                     enD: "Updates, backups and support so the site runs perfectly." },
]

const pricingFeatures = {
  ro: {
    starter: [
      "Site de prezentare (până la 5 pagini)",
      "Design responsive mobil & desktop", 
      "Formular de contact",
      "Configurare Google Maps",
      "SEO de bază",
      "Livrare în 7 zile",
    ],
    business: [
      "Site complet (până la 12 pagini)",
      "Design premium personalizat",
      "Profil Google Business optimizat",
      "SEO avansat pentru căutări locale",
      "Analytics & Search Console",
      "Integrare WhatsApp & rezervări",
      "1 lună mentenanță inclusă",
    ],
  },
  en: {
    starter: [
      "Presentation site (up to 5 pages)",
      "Responsive mobile & desktop design",
      "Contact form",
      "Google Maps setup",
      "Basic SEO",
      "Delivered in 7 days",
    ],
    business: [
      "Full website (up to 12 pages)",
      "Custom premium design",
      "Optimized Google Business profile",
      "Advanced SEO for local search",
      "Analytics & Search Console",
      "WhatsApp & booking integration",
      "1 month maintenance included",
    ],
  },
}

const portfolioProjects = [
  { title: "Bella Hair Studio",    category: "salon",     image: "../public/portfolio/salon.png",     ro: "Site cu sistem de rezervări online.",          en: "Site with online booking system." },
  { title: "Trattoria Verde",      category: "horeca",    image: "../public/portfolio/restaurant.png", ro: "Meniu digital și rezervări de masă.",          en: "Digital menu and table reservations." },
  { title: "DentClinic Plus",      category: "medical",   image: "../public/portfolio/clinic.png",     ro: "Programări online și prezentare servicii.",    en: "Online appointments and service overview." },
  { title: "RapidTrans Logistic",  category: "transport", image: "../public/portfolio/transport.png",  ro: "Cereri de ofertă și urmărire comenzi.",        en: "Quote requests and order tracking." },
  { title: "Casa Verde Shop",      category: "shop",      image: "../public/portfolio/shop.png",       ro: "Magazin online cu plată securizată.",          en: "Online shop with secure checkout." },
  { title: "CleanPro Services",    category: "services",  image: "../public/portfolio/services.png",   ro: "Prezentare servicii și formular rapid.",       en: "Service overview and quick contact form." },
]

const categoryLabels = {
  salon:     { ro: "Saloane",     en: "Salons" },
  horeca:    { ro: "Restaurante", en: "Restaurants" },
  medical:   { ro: "Medical",     en: "Medical" },
  transport: { ro: "Transport",   en: "Transport" },
  shop:      { ro: "Magazine",    en: "Shops" },
  services:  { ro: "Servicii",    en: "Services" },
}

const processSteps = [
  { icon: "message",     ro: "Discuție inițială",  en: "Initial talk",       roD: "Îmi spui despre afacerea ta și ce vrei să obții. Stabilim împreună obiectivele.",                        enD: "You tell me about your business and goals. We set objectives together." },
  { icon: "pencilruler", ro: "Design & structură", en: "Design & structure", roD: "Creez designul și structura paginilor, pe care le aprobi înainte de implementare.",                      enD: "I create the design and page structure, which you approve before build." },
  { icon: "code",        ro: "Dezvoltare",         en: "Development",        roD: "Construiesc site-ul rapid, optimizat și gata de mobil, cu tot conținutul.",                              enD: "I build the site fast, optimized and mobile-ready, with all content." },
  { icon: "rocket",      ro: "Lansare & predare",  en: "Launch & handover",  roD: "Publicăm site-ul, îl conectăm la Google și îți predau tot ce ai nevoie.",                               enD: "We launch, connect it to Google and hand over everything you need." },
]

const benefits = [
  { icon: "dollar",    ro: "Preț fix, fără surprize",  en: "Fixed price, no surprises",   roD: "Știi exact cât plătești de la început. Fără costuri ascunse sau facturi neașteptate.", enD: "You know exactly what you pay from the start. No hidden costs." },
  { icon: "zap",       ro: "Livrare rapidă",           en: "Fast delivery",               roD: "Site-ul tău este gata în 7–14 zile, nu în luni de zile.",                              enD: "Your site is ready in 7–14 days, not months." },
  { icon: "handshake", ro: "Comunicare directă",       en: "Direct communication",        roD: "Lucrezi direct cu mine, nu cu un call center. Răspuns rapid pe WhatsApp.",            enD: "You work directly with me, not a call center. Fast replies on WhatsApp." },
  { icon: "shield",    ro: "Construit să dureze",      en: "Built to last",               roD: "Tehnologii moderne, securitate și performanță, ca site-ul să meargă ani de zile.",     enD: "Modern tech, security and performance so the site runs for years." },
]

const testimonials = [
  {
    name: "Andreea M.",
    role: { ro: "Proprietar salon",   en: "Salon owner" },
    ro: "De când am site cu rezervări online, am mult mai puține apeluri și clienții se programează singuri. Merită fiecare leu.",
    en: "Since I have a site with online booking, I get far fewer calls and clients book themselves. Worth every penny.",
  },
  {
    name: "Mihai R.",
    role: { ro: "Manager restaurant", en: "Restaurant manager" },
    ro: "Apărem acum primii pe Google Maps în zona noastră. Numărul de rezervări a crescut vizibil în prima lună.",
    en: "We now show up first on Google Maps in our area. Reservations grew visibly in the first month.",
  },
  {
    name: "Dr. Elena P.",
    role: { ro: "Medic stomatolog",   en: "Dentist" },
    ro: "Comunicare excelentă și un site curat, profesional. Pacienții îmi spun mereu cât de ușor e să facă o programare.",
    en: "Excellent communication and a clean, professional site. Patients always tell me how easy it is to book.",
  },
]

const faqs = [
  {
    ro: { q: "Cât durează să fie gata site-ul?",        a: "În general între 7 și 14 zile lucrătoare, în funcție de pachet și de cât de repede primesc conținutul (texte și poze) de la tine." },
    en: { q: "How long does the website take?",         a: "Usually between 7 and 14 working days, depending on the package and how quickly I receive your content (text and photos)." },
  },
  {
    ro: { q: "Ce trebuie să-mi pregătesc?",             a: "Ideal e să ai un logo, câteva poze și o idee despre textele pe care le vrei. Dacă nu ai, te pot ajuta să le creezi." },
    en: { q: "What do I need to prepare?",              a: "Ideally a logo, a few photos and an idea of the texts you want. If you don't have them, I can help you create them." },
  },
  {
    ro: { q: "Site-ul va apărea pe Google?",            a: "Da. Toate pachetele includ SEO de bază și configurare Google, iar pachetul Business include optimizare avansată pentru căutări locale." },
    en: { q: "Will the site appear on Google?",         a: "Yes. All packages include basic SEO and Google setup, and the Business package includes advanced optimization for local search." },
  },
  {
    ro: { q: "Pot să modific singur site-ul după?",     a: "Da, îți predau un site ușor de administrat și îți arăt cum să faci modificări simple. Pentru schimbări mai mari, ofer și mentenanță." },
    en: { q: "Can I edit the site myself afterwards?",  a: "Yes, I hand over an easy-to-manage site and show you how to make simple changes. For bigger changes I also offer maintenance." },
  },
  {
    ro: { q: "Cum se face plata?",                      a: "De obicei 50% avans la început și 50% la livrare. Putem discuta și alte variante în funcție de proiect." },
    en: { q: "How does payment work?",                  a: "Usually 50% upfront and 50% on delivery. We can discuss other options depending on the project." },
  },
]

const footerServicesList = {
  ro: ["Creare site web", "Google Maps", "SEO de bază", "Analytics", "Mentenanță"],
  en: ["Website creation", "Google Maps", "Basic SEO", "Analytics", "Maintenance"],
}

const businessTypes = {
  ro: ["Salon / Beauty", "Restaurant / Cafenea", "Cabinet medical", "Transport / Logistică", "Magazin online", "Alt tip de serviciu"],
  en: ["Salon / Beauty", "Restaurant / Cafe", "Medical office", "Transport / Logistics", "Online shop", "Other service"],
}

/* ═══════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
let currentLang = "ro"
let activeCategory = "all"

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
  if (sf) sf.innerHTML = feats.starter.map(featureItem).join("")
  if (bf) bf.innerHTML = feats.business.map(featureItem).join("")
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
      activeCategory = btn.dataset.cat
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
        <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.style.display='none'">
      </div>
      <div class="portfolio-body">
        <div class="portfolio-body-top">
          <h3 class="portfolio-title">${p.title}</h3>
          <span class="portfolio-cat-badge">${categoryLabels[p.category][currentLang]}</span>
        </div>
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

function renderTestimonials() {
  const grid = document.getElementById("testimonials-grid")
  if (!grid) return
  const starsHtml = Array.from({ length: 5 }, () => ICONS.star).join("")
  grid.innerHTML = testimonials.map(t => `
    <figure class="testimonial-card">
      <div class="stars" aria-label="5 stele din 5">${starsHtml}</div>
      <blockquote class="testimonial-quote">${currentLang === "ro" ? t.ro : t.en}</blockquote>
      <figcaption class="testimonial-author">
        <div class="testimonial-avatar" aria-hidden="true">${t.name.charAt(0)}</div>
        <div>
          <span class="testimonial-name">${t.name}</span>
          <span class="testimonial-role">${t.role[currentLang]}</span>
        </div>
      </figcaption>
    </figure>
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

function renderContactSelect() {
  const sel = document.getElementById("business")
  if (!sel) return
  const placeholder = currentLang === "ro" ? "Alege..." : "Choose..."
  sel.innerHTML = `<option value="" disabled selected>${placeholder}</option>` +
    businessTypes[currentLang].map(b => `<option value="${b}">${b}</option>`).join("")
}

/* ═══════════════════════════════════════════════
   LANGUAGE SYSTEM
═══════════════════════════════════════════════ */
function setLang(lang) {
  currentLang = lang
  document.documentElement.lang = lang

  // Update data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n
    const val = translations[lang][key]
    if (val) el.textContent = val
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
  renderTestimonials()
  renderFaq()
  renderFooterServices()
  renderContactSelect()
}

/* ═══════════════════════════════════════════════
   MOBILE MENU
═══════════════════════════════════════════════ */
function initMobileMenu() {
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

/* ═══════════════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById("contact-form")
  const success = document.getElementById("contact-success")
  if (!form || !success) return

  form.addEventListener("submit", e => {
    e.preventDefault()
    form.style.display = "none"
    success.style.display = "flex"
  })
}

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
   INIT
═══════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  setFooterYear()
  initLangSwitcher()
  initMobileMenu()
  initContactForm()
  setLang("ro")  // initial render — triggers all renderers
})
