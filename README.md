# Sanghel González — Portfolio

[![Astro](https://img.shields.io/badge/Astro-6-BC52EE?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com)

Personal portfolio built with Astro — fast, bilingual, and animated.

---

## Preview

![Portfolio preview](src/assets/projects/portfolio.webp)

---

## Features

- **Bilingual** (EN / ES) via Astro i18n routing
- **7 sections:** Hero, About, Projects, Skills, Experience, Achievements, Contact
- **Smooth scroll animations** powered by GSAP and Framer Motion
- **Optimized images** using WebP format and Astro's image pipeline
- **Fully responsive** across all screen sizes
- **Deployed on Vercel** with zero-config CI/CD

---

## Tech Stack

| Category   | Tools                        |
| ---------- | ---------------------------- |
| Framework  | Astro 6, React 19            |
| Styling    | Tailwind CSS 4               |
| Animation  | GSAP 3, Framer Motion 12     |
| Language   | TypeScript                   |
| Deployment | Vercel                       |

---

## Getting Started

> **Prerequisites:** Node.js `>=22.12.0`

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

---

## Project Structure

```
src/
├── components/
│   ├── layout/     # Navbar, Footer
│   └── sections/   # Hero, About, Projects, Skills, Timeline, Achievements, Contact
├── content/        # projects.ts — data layer (projects, skills, experience, achievements)
├── i18n/           # en.json, es.json + translation utility
├── pages/          # index.astro (en), es/index.astro
└── assets/         # Project screenshots (WebP)
```

---

## Author

Crafted by **Sanghel González** — [GitHub](https://github.com/sanghelgonzalez) · [LinkedIn](https://www.linkedin.com/in/sanghelgonzalez)
