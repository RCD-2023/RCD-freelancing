# Add text to portfolio cards

## Overview

Update the portfolio card descriptions in `data.js`.

This task is focused on portfolio project data only. Do not redesign the cards and do not change the portfolio rendering behavior unless a value in `data.js` needs to be updated.


### Required data changes

In `data.js`, update the `portfolioProjects` array with the data below:

Use single quotes (`'...'`) consistently for string values inside `portfolioProjects`.

```js
const portfolioProjects=[
 {
    title: 'Fashion',
    category: 'fashion',
    image: 'images/NextJs-Proj1/nextjs-pr1-img1.png',
    demoUrl: 'https://ecomm-bay-chi.vercel.app/',
    ro: 'Magazin online demo de haine, cu funcționalități de e-commerce: coș de cumpărături, autentificare, plăți online prin Stripe și PayPal și recenzii ale clienților.',
    en: 'Demo online clothing store with e-commerce functionality: shopping cart, authentication, online payments via Stripe and PayPal, and customer reviews.',
  },
  {
    title: 'Imobiliare',
    category: 'realestate',
    image: 'images/NextJs-Proj2/nextjs-pr2-img1.png',
    demoUrl: 'https://rcd-prop-pulse.vercel.app/',
    ro: 'Proiect demo de imobiliare cu funcționalități extinse: afișare pe hartă, autentificare cu cont Gmail, formular de contact pentru proprietar și formular pentru adăugarea proprietăților.',
    en: 'Real estate demo project with extended functionality: map display, Gmail account authentication, owner contact form, and property submission form.',
  },
  {
    title: 'Blog Culinar',
    category: 'foodblog',
    image: 'images/culinar-img/culinar_img1.png',
    demoUrl: 'https://astro-culinary-site.vercel.app/',
    ro: 'Aplicație simplă de tip blog culinar, construită pentru prezentarea unor rețete demo de conserve și siropuri pentru iarnă. Imaginile sunt placeholder, iar textele sunt fictive, nu rețete reale.',
    en: 'Simple culinary blog application built to present demo recipes for preserves and winter syrups. The images are placeholders, and the text is fictional, not real recipes.',
  },
  {
    title: 'Developer Tool (SaaS)',
    category: 'saas',
    image: 'images/devstash/devstash-img1.png',
    demoUrl: 'https://rcd-devstash.vercel.app/',
    ro: 'Aplicație SaaS demo pentru centralizarea resurselor folosite frecvent de programatori: snippet-uri, prompturi, comenzi, notițe, linkuri și fișiere.',
    en: 'Demo SaaS application for centralizing resources commonly used by developers: snippets, prompts, commands, notes, links, and files.',
  },
  {
    title: 'Electronics',
    category: 'electronics',
    image: 'images/mern-proshop/img1-proshop.png',
    demoUrl: '',
    ro: 'Magazin online demo pentru produse electronice. Momentan linkul demo este dezactivat.',
    en: 'Demo online store for electronic products. The demo link is currently disabled.',
  },
  {
    title: 'Imobiliare',
    category: 'realestate',
    image: 'images/django/img1-django.png',
    demoUrl: '',
    ro: 'Proiect demo de imobiliare construit cu Django. Momentan linkul demo este dezactivat.',
    en: 'Real estate demo project built with Django. The demo link is currently disabled.',
  },
  {
    title: 'Data Management App',
    category: 'dataapp',
    image: 'images/dataCollect-images/formsApp-img5.png',
    demoUrl: '',
    ro: 'Aplicație demo pentru colectarea și stocarea datelor prin formulare. Momentan linkul demo este dezactivat.',
    en: 'Demo application for collecting and storing data through forms. The demo link is currently disabled.',
  },
  {
    title: 'Health Portal',
    category: 'healthportal',
    image: '',
    demoUrl: '',
    ro: 'Portal medical informativ demo pentru medicina de călătorie. Toate informațiile sunt strict demonstrative și nu sunt validate științific.',
    en: 'Demo medical information portal for travel medicine. All information is strictly for demonstration purposes and is not scientifically validated.',
  },
  ];
```

## Requirements

- Update only the ro (check for diacritics) and en description fields for the specified projects.
- Keep the existing title, category, image, and demoUrl values remain unchanged unless they already differ from the values above.
- Do not change the card layout or filtering logic.
- Do not modify category labels.
- Keep the bilingual structure consistent with the existing project data.
- Review all portfolio descriptions and adjust their wording so the cards remain visually consistent.
- Aim for a maximum of **three lines** of description on desktop for each card.
- Keep the most important project features and remove less relevant details if necessary.

## Acceptance criteria

- The portfolio cards displays the updated Romanian and English descriptions.
- Language switching still displays the correct ro / en text.
- Portfolio filtering continues to work as before.
- Existing images and demo links remain unchanged.
- Cards are visually consistent (the same size)

## References

@context/project-overview.md
@context/current-feature.md