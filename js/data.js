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
  { title: "Fashion",                 category: "fashion",     image: "images/NextJs-Proj1/nextjs-pr1-img1.png",        demoUrl: "https://ecomm-bay-chi.vercel.app/",     ro: "Lorem ipsum dolor sit amet consectetur.", en: "Lorem ipsum dolor sit amet consectetur." },
  { title: "Real Estate",             category: "realestate",  image: "images/NextJs-Proj2/nextjs-pr2-img1.png",        demoUrl: "https://rcd-prop-pulse.vercel.app/",     ro: "Lorem ipsum dolor sit amet consectetur.", en: "Lorem ipsum dolor sit amet consectetur." },
  { title: "Food Blog",               category: "foodblog",    image: "images/culinar-img/culinar_img1.png",            demoUrl: "https://astro-culinary-site.vercel.app/", ro: "Lorem ipsum dolor sit amet consectetur.", en: "Lorem ipsum dolor sit amet consectetur." },
  { title: "Developer Tool (SaaS)",   category: "saas",        image: "images/devstash/devstash-img1.png",              demoUrl: "https://rcd-devstash.vercel.app/",       ro: "Lorem ipsum dolor sit amet consectetur.", en: "Lorem ipsum dolor sit amet consectetur." },
  { title: "Electronics",             category: "electronics", image: "images/mern-proshop/img1-proshop.png",           demoUrl: "",                                       ro: "Lorem ipsum dolor sit amet consectetur.", en: "Lorem ipsum dolor sit amet consectetur." },
  { title: "Real Estate",             category: "realestate",  image: "images/django/img1-django.png",                  demoUrl: "",                                       ro: "Lorem ipsum dolor sit amet consectetur.", en: "Lorem ipsum dolor sit amet consectetur." },
  { title: "Data Management App",     category: "dataapp",     image: "images/dataCollect-images/formsApp-img5.png",    demoUrl: "",                                       ro: "Lorem ipsum dolor sit amet consectetur.", en: "Lorem ipsum dolor sit amet consectetur." },
  { title: "Health Portal",           category: "healthportal", image: "",                                              demoUrl: "",                                       ro: "Lorem ipsum dolor sit amet consectetur.", en: "Lorem ipsum dolor sit amet consectetur." },
]

export const categoryLabels = {
  fashion:      { ro: "Îmbrăcăminte",              en: "Fashion" },
  electronics:  { ro: "Electronice",               en: "Electronics" },
  realestate:   { ro: "Imobiliare",                en: "Real Estate" },
  foodblog:     { ro: "Blog culinar",              en: "Food Blog" },
  saas:         { ro: "Developer Tool (SaaS)",     en: "Developer Tool (SaaS)" },
  dataapp:      { ro: "Aplicație management date", en: "Data Management App" },
  healthportal: { ro: "Portal medical",            en: "Health Portal" },
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
    ro: { q: "Prețurile afișate sunt fixe?",                          a: "Pachetele afișate acoperă cele mai comune tipuri de proiecte cu o structură relativ standard. Dacă ai nevoie de funcționalități diferite față de cele incluse în pachetele afișate sau de o soluție personalizată, îți pot oferi o estimare adaptată cerințelor tale." },
    en: { q: "Are the listed prices fixed?",                          a: "The listed packages cover the most common types of projects with a relatively standard structure. If you need features that are different from the listed packages or a custom solution, I can provide an estimate tailored to your requirements." },
  },
  {
    ro: { q: "Se asigură găzduirea în prețul creării site-ului?",     a: "Nu. Găzduirea (hostingul) și domeniul sunt servicii separate, plătite direct către furnizorul ales. Pot realiza configurarea acestora ca parte a pachetului ales, însă proprietatea și controlul rămân în totalitate ale tale." },
    en: { q: "Is hosting included in the website development price?", a: "No. Hosting and domain registration are separate services paid directly to the provider of your choice. I can set up and configure these services as part of the project, while ownership and full control of the accounts and website remain entirely yours." },
  },
  {
    ro: { q: "Pot adăuga funcționalități noi mai târziu?",            a: "Da, în multe cazuri site-ul poate fi extins ulterior cu funcționalități noi. Pentru modificări simple, cum ar fi secțiuni noi, formulare sau ajustări de conținut, intervențiile sunt de obicei rapide. Pentru funcționalități care necesită backend, bază de date, autentificare sau panou de administrare, proiectul devine mai complex și va necesita o estimare separată." },
    en: { q: "Can I add new features later?",                        a: "Yes, in many cases the website can be extended later with new features. Simple changes such as new sections, forms, or content updates are usually straightforward. Features that require a backend, database, authentication, or an admin panel are more complex and would need a separate estimate." },
  },
  {
    ro: { q: "Cât durează realizarea unui site?",                    a: "În general, realizarea unui site durează aproximativ 2–3 săptămâni din momentul în care aprobăm macheta și primesc toate materialele necesare. Durata poate varia în funcție de complexitatea proiectului și de eventualele cerințe suplimentare." },
    en: { q: "How long does it take to build a website?",            a: "In general, a website takes around 2–3 weeks to complete from the moment the design mockup is approved and all required materials have been provided. The timeline may vary depending on the project's complexity and any additional requirements." },
  },
  {
    ro: { q: "Oferi suport gratuit după lansare?",                   a: "Da. Pachetul Starter include 30 de zile de suport după lansare pentru remedierea eventualelor probleme și ajustări minore. Pentru proiectele care necesită asistență continuă, sunt disponibile servicii de mentenanță și dezvoltare suplimentară la cerere." },
    en: { q: "Do you offer free post-launch support?",               a: "Yes. All projects include a post-launch support period to address any issues and minor adjustments after the website goes live. The exact duration depends on the selected package. Ongoing maintenance and additional development services are available upon request after the support period ends." },
  },
  {
    ro: { q: "Cum se realizează plata?",                             a: "Plata se realizează pe baza unei facturi emise după livrarea proiectului și aprobarea acestuia de către client. Pentru proiectele mai mari, plata poate fi împărțită în etape, stabilite de comun acord înainte de începerea lucrului." },
    en: { q: "How does payment work?",                               a: "Payment is made based on an invoice issued after the project is delivered and approved by the client. For larger projects, the payment can be split into agreed milestones established before work begins." },
  },
]

export const footerServicesList = {
  ro: ["Creare site web", "Google Maps", "SEO de bază", "Analytics", "Mentenanță"],
  en: ["Website creation", "Google Maps", "Basic SEO", "Analytics", "Maintenance"],
}
