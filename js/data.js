/* ═══════════════════════════════════════════════
   DATA ARRAYS
═══════════════════════════════════════════════ */
export const services = [
  { icon: "globe",      ro: "Creare site web",            en: "Website creation",          roD: "Site modern, rapid și responsive, construit pe măsura afacerii tale.",             enD: "A modern, fast, responsive website built for your business." },
  { icon: "mappin",     ro: "Google Business & Maps",     en: "Google Business & Maps",    roD: "Configurare profil Google ca să apari pe hartă și în căutări locale.",             enD: "Google profile setup so you appear on the map and in local search." },
  { icon: "search",     ro: "SEO de bază",                en: "Basic SEO",                 roD: "Optimizare pentru cuvinte cheie locale, ca să fii găsit de clienți.",              enD: "Optimization for local keywords so customers can find you." },
  { icon: "barchart",   ro: "Analytics & Search Console", en: "Analytics & Search Console",roD: "Configurare instrumente ca să vezi clar câți vizitatori ai.",                      enD: "Tools set up so you clearly see how many visitors you get." },
  { icon: "megaphone",  ro: "Promovare opțională",        en: "Optional promotion",        roD: "Campanii Google și social media pentru mai mulți clienți.",                        enD: "Google and social media campaigns for more customers." },
  { icon: "wrench",     ro: "Mentenanță",                 en: "Maintenance",               roD: "Actualizări, backup și suport ca site-ul să meargă perfect.",                     enD: "Updates, backups and support so the site runs perfectly." },
]

export const pricingFeatures = {
  ro: {
    starter: [
      "Site de prezentare (1 pagină)",
      "Design complet responsive (Mobile-First)",
      "Formular de contact",
      "Configurare Google Search Console",
      "Configurare profil Google Business",
      "Integrare Google Maps",
      "Optimizare pentru căutări pe Google",
      "Lansare și configurare găzduire site",
      "30 de zile suport post-lansare",
    ],
    business: [
      "Website până la 5 pagini",
      "Funcționalități dinamice",
      "Formular avansat de cerere ofertă",
      "Soluții de rezervare online",
      "Panou de administrare",
      "Optimizare avansată pentru căutări pe Google",
      "Optimizarea profilului Google Business",
      "Înregistrarea afacerii în directoarele online",
      "Analiza performanței site-ului după 30 de zile",
    ],
    custom: [
      "Arhitectură personalizată a site-ului",
      "Număr de pagini adaptat proiectului tău",
      "Portal clienți & panou de administrare",
      "Sistem de rezervări și programări online",
      "Integrare cu aplicații și servicii externe",
      "Formulare personalizate pentru afacerea ta",
      "Site rapid și optimizat pentru utilizatori",
      "Pregătire pentru o vizibilitate mai bună în Google",
      "Suport și mentenanță disponibile după lansare",
    ],
  },
  en: {
    starter: [
      "1-page website",
      "Fully responsive (Mobile First)",
      "Contact form",
      "Google Search Console setup",
      "Google Business Profile setup",
      "Google Maps integration",
      "Website optimized for Google search (SEO)",
      "Deployment and hosting configuration",
      "1 month support post-launch",
    ],
    business: [
      "Multiple pages (up to 5)",
      "Custom features for your business",
      "Advanced quote request form",
      "Online booking solutions",
      "Admin dashboard",
      "Advanced Google optimization (SEO)",
      "Google Business Profile optimization",
      "Business listing in online directories",
      "Website performance analysis after 30 days",
    ],
    custom: [
      "Custom website architecture",
      "Number of pages tailored to your project",
      "Client Portal & Admin Dashboard",
      "Custom booking solutions",
      "Integration with external services",
      "Custom forms tailored to your business",
      "Fast-loading and optimized website",
      "Built with SEO best practices",
      "Maintenance plans available (includes bug fixes and launch stabilization)",
    ],
  },
}

export const portfolioProjects = [
  { title: "Bella Hair Studio",    category: "salon",     image: "../public/portfolio/salon.png",     ro: "Site cu sistem de rezervări online.",          en: "Site with online booking system." },
  { title: "Trattoria Verde",      category: "horeca",    image: "../public/portfolio/restaurant.png", ro: "Meniu digital și rezervări de masă.",          en: "Digital menu and table reservations." },
  { title: "DentClinic Plus",      category: "medical",   image: "../public/portfolio/clinic.png",     ro: "Programări online și prezentare servicii.",    en: "Online appointments and service overview." },
  { title: "RapidTrans Logistic",  category: "transport", image: "../public/portfolio/transport.png",  ro: "Cereri de ofertă și urmărire comenzi.",        en: "Quote requests and order tracking." },
  { title: "Casa Verde Shop",      category: "shop",      image: "../public/portfolio/shop.png",       ro: "Magazin online cu plată securizată.",          en: "Online shop with secure checkout." },
  { title: "CleanPro Services",    category: "services",  image: "../public/portfolio/services.png",   ro: "Prezentare servicii și formular rapid.",       en: "Service overview and quick contact form." },
]

export const categoryLabels = {
  salon:     { ro: "Saloane",     en: "Salons" },
  horeca:    { ro: "Restaurante", en: "Restaurants" },
  medical:   { ro: "Medical",     en: "Medical" },
  transport: { ro: "Transport",   en: "Transport" },
  shop:      { ro: "Magazine",    en: "Shops" },
  services:  { ro: "Servicii",    en: "Services" },
}

export const processSteps = [
  { icon: "message",     ro: "Discuție inițială",  en: "Initial talk",       roD: "Îmi spui despre afacerea ta și ce vrei să obții. Stabilim împreună obiectivele.",                        enD: "You tell me about your business and goals. We set objectives together." },
  { icon: "pencilruler", ro: "Design & structură", en: "Design & structure", roD: "Creez designul și structura paginilor, pe care le aprobi înainte de implementare.",                      enD: "I create the design and page structure, which you approve before build." },
  { icon: "code",        ro: "Dezvoltare",         en: "Development",        roD: "Construiesc site-ul rapid, optimizat și gata de mobil, cu tot conținutul.",                              enD: "I build the site fast, optimized and mobile-ready, with all content." },
  { icon: "rocket",      ro: "Lansare & predare",  en: "Launch & handover",  roD: "Publicăm site-ul, îl conectăm la Google și îți predau tot ce ai nevoie.",                               enD: "We launch, connect it to Google and hand over everything you need." },
]

export const benefits = [
  { icon: "dollar",    ro: "Preț fix, fără surprize",  en: "Fixed price, no surprises",   roD: "Știi exact cât plătești de la început. Fără costuri ascunse sau facturi neașteptate.", enD: "You know exactly what you pay from the start. No hidden costs." },
  { icon: "zap",       ro: "Termene predictibile",     en: "Clear timeline",              roD: "Știi de la început etapele proiectului și termenul estimat de livrare.",               enD: "You know the project stages and estimated delivery timeline from the start." },
  { icon: "handshake", ro: "Comunicare directă",       en: "Direct communication",        roD: "Discuți direct cu persoana care dezvoltă proiectul, fără intermediari.",               enD: "You work directly with the person developing your project." },
  { icon: "shield",    ro: "Construit să dureze",      en: "Built to last",               roD: "Tehnologii moderne, securitate și performanță, ca site-ul să funcționeze ani de zile.", enD: "Modern tech, security and performance so the site runs for years." },
]

export const faqs = [
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

export const footerServicesList = {
  ro: ["Creare site web", "Google Maps", "SEO de bază", "Analytics", "Mentenanță"],
  en: ["Website creation", "Google Maps", "Basic SEO", "Analytics", "Maintenance"],
}

export const businessTypes = {
  ro: ["Salon / Beauty", "Restaurant / Cafenea", "Cabinet medical", "Transport / Logistică", "Magazin online", "Alt tip de serviciu"],
  en: ["Salon / Beauty", "Restaurant / Cafe", "Medical office", "Transport / Logistics", "Online shop", "Other service"],
}
