<!-- markdownlint-disable-next-line MD041 -->
<a id="top"></a>

<div align="center">

<img width="100%" alt="Portfolio banner: the SG logo, the name Sanghel González and the Dev Engine diagram turning inputs into shipped products" src="docs/assets/banner.svg" />

<h1>Sanghel González — Portfolio</h1>

<p><strong>Software Developer — from idea to shipped product. Fast, bilingual and animated, built with Astro.</strong></p>

<p>
<a href="https://sanghel-portfolio.vercel.app"><img src="https://img.shields.io/badge/live-site-B8BAFF?style=for-the-badge&labelColor=0C0C16&logo=vercel&logoColor=white" alt="Live site"></a>
<img src="https://img.shields.io/badge/Astro-6-B8BAFF?style=for-the-badge&labelColor=0C0C16&logo=astro&logoColor=white" alt="Astro 6">
<img src="https://img.shields.io/badge/Tailwind-4-B9F0D7?style=for-the-badge&labelColor=0C0C16&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4">
<img src="https://img.shields.io/badge/i18n-EN%20%C2%B7%20ES-B9F0D7?style=for-the-badge&labelColor=0C0C16" alt="English and Spanish">
<img src="https://img.shields.io/badge/projects-12-C9E8FF?style=for-the-badge&labelColor=0C0C16" alt="12 projects">
</p>

<p>
<a href="https://sanghel-portfolio.vercel.app"><strong>Live site</strong></a> &bull;
<a href="https://sanghel-portfolio.vercel.app/es/"><strong>Versión en español</strong></a> &bull;
<a href="https://www.linkedin.com/in/sanghelgonzalez"><strong>LinkedIn</strong></a> &bull;
<a href="public/sanghel_cv.pdf"><strong>CV</strong></a>
</p>

<br/>

<p>
A single page that tells who I am, what I've built and how to reach me — with a
<strong>Dev Engine</strong> diagram under the hero that turns technologies, ideas and dreams into shipped products.
</p>

<br/>

<img width="100%" alt="Portfolio hero: the name in the center of the Dev Engine, with inputs on the left, shipped outputs on the right and the AI tools strip below" src="docs/assets/screenshot-hero.webp" />

<br/><br/>

<sub><strong>BUILT WITH</strong></sub>

<br/>

<img src="https://skillicons.dev/icons?i=astro,react,ts,tailwind,vercel&theme=dark" alt="Astro, React, TypeScript, Tailwind CSS, Vercel" />

<br/><br/>

</div>

<div align="center"><img src="public/favicon.svg" width="28" alt="" /></div>

## Features

<table>
<tr>
<td width="50%" valign="top">

### 🌐 Bilingual
English and Spanish through Astro's i18n routing (`/` and `/es/`), with a language toggle and JSON
dictionaries.

</td>
<td width="50%" valign="top">

### ⚙️ Dev Engine
An animated diagram below the hero: inputs stream in, get processed by the core and leave as shipped
products, platforms and APIs — decorative, with an accessible text description.

</td>
</tr>
<tr>
<td valign="top">

### 🧩 Seven sections
Hero, About, Projects, Skills, Experience, Achievements and Contact, all driven by a typed content layer.

</td>
<td valign="top">

### ✨ Motion
Scroll animations with GSAP and Framer Motion.

</td>
</tr>
<tr>
<td valign="top">

### 🖼️ Optimized images
WebP screenshots through Astro's image pipeline.

</td>
<td valign="top">

### 🚀 Zero-config deploys
Static build on Vercel, deployed on every push.

</td>
</tr>
</table>

<div align="center"><img src="public/favicon.svg" width="28" alt="" /></div>

## Tech stack

| Category | Tools |
|---|---|
| Framework | ![Astro](https://img.shields.io/badge/Astro_6-BC52EE?style=flat-square&logo=astro&logoColor=white) ![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB) |
| Styling | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) |
| Animation | ![GSAP](https://img.shields.io/badge/GSAP_3-0AE448?style=flat-square&logo=greensock&logoColor=black) ![Framer Motion](https://img.shields.io/badge/Framer_Motion_12-0055FF?style=flat-square&logo=framer&logoColor=white) |
| Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| Hosting | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) |

<div align="center"><img src="public/favicon.svg" width="28" alt="" /></div>

## Quick start

> **Prerequisites:** Node.js `>=22.12.0`

```bash
git clone https://github.com/Sanghel/sanghel-portfolio.git
cd sanghel-portfolio
npm install
npm run dev      # http://localhost:4321
```

| Command | Description |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build |

<details>
<summary><strong>Project structure</strong></summary>

```
src/
├── components/
│   ├── layout/     # Navbar, Footer
│   ├── sections/   # Hero, About, Projects, Skills, Timeline, Achievements, Contact
│   └── ui/         # LangToggle
├── content/        # projects.ts (projects, skills, experience, achievements) · engine.ts (Dev Engine data)
├── i18n/           # en.json, es.json + translation utility
├── layouts/        # Base layout
├── pages/          # index.astro (en), es/index.astro
├── styles/         # Design tokens (Tailwind @theme)
└── assets/         # Project screenshots (WebP)
```

</details>

<div align="center"><img src="public/favicon.svg" width="28" alt="" /></div>

<div align="center">

<sub>Crafted by <a href="https://github.com/Sanghel"><strong>Sanghel González</strong></a> · <a href="https://www.linkedin.com/in/sanghelgonzalez">LinkedIn</a></sub>

<br/>

<a href="#top">↑ Back to top</a>

</div>
