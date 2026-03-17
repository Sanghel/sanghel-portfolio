export interface Project {
  slug: string;
  title: string;
  description: { en: string; es: string };
  tags: string[];
  image: string;
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  /** Mark as private to hide the code button and show a lock badge instead */
  isPrivate?: boolean;
}

// Using Unsplash for placeholder images — replace with your own screenshots when ready
export const projects: Project[] = [
  {
    slug: 'fintrack-dashboard',
    title: 'FinTrack Dashboard',
    description: {
      en: 'A real-time financial analytics dashboard with interactive charts, budget tracking, and AI-powered spending insights. Built with React, D3.js, and a Node.js backend.',
      es: 'Dashboard de analíticas financieras en tiempo real con gráficos interactivos, seguimiento de presupuesto e insights de gastos con IA. Construido con React, D3.js y Node.js.',
    },
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop&q=80',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/sanghelgonzalez',
    featured: true,
  },
  {
    slug: 'designsync',
    title: 'DesignSync — Component Library',
    description: {
      en: 'An enterprise-grade design system with 60+ components, full documentation, Storybook integration, and automated accessibility testing. Used across 3 products.',
      es: 'Sistema de diseño empresarial con +60 componentes, documentación completa, Storybook y pruebas de accesibilidad automatizadas. Usado en 3 productos.',
    },
    tags: ['React', 'TypeScript', 'Storybook', 'Radix UI', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=340&fit=crop&q=80',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/sanghelgonzalez',
    featured: true,
  },
  {
    slug: 'storefront',
    title: 'Storefront — Headless E-commerce',
    description: {
      en: 'A blazing-fast headless storefront with Next.js and Shopify API. Achieved a 98 Lighthouse score and a 40% improvement in conversion rate vs. the legacy platform.',
      es: 'Tienda headless ultrarrápida con Next.js y Shopify API. Score 98 en Lighthouse y mejora del 40% en conversión respecto a la plataforma anterior.',
    },
    tags: ['Next.js', 'Shopify', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=340&fit=crop&q=80',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/sanghelgonzalez',
    featured: true,
  },
  {
    slug: 'pulse-monitoring',
    title: 'Pulse — Server Monitoring',
    description: {
      en: 'Real-time server monitoring with live dashboards, custom alerts, and a CLI. Handles 50k+ events/sec via WebSocket. Stack: Vue.js, Node.js, InfluxDB.',
      es: 'Monitoreo de servidores en tiempo real con dashboards en vivo, alertas personalizadas y CLI. Procesa +50k eventos/seg vía WebSocket. Stack: Vue.js, Node.js, InfluxDB.',
    },
    tags: ['Vue.js', 'WebSockets', 'Node.js', 'InfluxDB'],
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=340&fit=crop&q=80',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/sanghelgonzalez',
  },
  {
    slug: 'taskflow-pwa',
    title: 'TaskFlow — PWA',
    description: {
      en: 'Mobile-first progressive web app for collaborative task management with offline sync, push notifications, and a native-like UX on iOS and Android.',
      es: 'App web progresiva mobile-first para gestión de tareas colaborativa, con sincronización offline, notificaciones push y UX nativa en iOS y Android.',
    },
    tags: ['Astro', 'React', 'PWA', 'IndexedDB', 'Workbox'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=340&fit=crop&q=80',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/sanghelgonzalez',
  },
];

export const skillCategories = [
  {
    key: 'frontend',
    skills: [
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'Next.js', icon: 'devicon-nextjs-plain' },
      { name: 'Astro', icon: 'devicon-astro-plain' },
      { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    ],
  },
  {
    key: 'styling',
    skills: [
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
      { name: 'CSS3', icon: 'devicon-css3-plain' },
      { name: 'Sass', icon: 'devicon-sass-plain' },
      { name: 'Figma', icon: 'devicon-figma-plain' },
    ],
  },
  {
    key: 'tooling',
    skills: [
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'Vite', icon: 'devicon-vitejs-plain' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
    ],
  },
  {
    key: 'other',
    skills: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      { name: 'GraphQL', icon: 'devicon-graphql-plain' },
      { name: 'Jest', icon: 'devicon-jest-plain' },
      { name: 'Linux', icon: 'devicon-linux-plain' },
    ],
  },
];

export interface ExperienceItem {
  company: string;
  role: { en: string; es: string };
  period: string;
  bullets: { en: string[]; es: string[] };
  tags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Acme Corp',
    role: { en: 'Senior Frontend Developer', es: 'Frontend Developer Senior' },
    period: '2023 – Present',
    bullets: {
      en: [
        'Led the redesign of the core product UI, increasing user satisfaction from 3.2 to 4.6/5.',
        'Built a shared component library now used by 4 engineering teams across the organization.',
        'Reduced initial bundle size by 42% through code splitting, lazy loading, and tree shaking.',
        'Mentored 3 junior developers and established frontend code review standards.',
      ],
      es: [
        'Lideré el rediseño de la UI principal, aumentando la satisfacción de usuarios de 3.2 a 4.6/5.',
        'Construí una librería de componentes compartida usada por 4 equipos de ingeniería.',
        'Reduje el bundle inicial en un 42% mediante code splitting, lazy loading y tree shaking.',
        'Mentoreé a 3 desarrolladores junior y establecí estándares de code review para frontend.',
      ],
    },
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Storybook'],
  },
  {
    company: 'TechStartup S.A.',
    role: { en: 'Frontend Developer', es: 'Frontend Developer' },
    period: '2021 – 2023',
    bullets: {
      en: [
        'Developed 4 client-facing applications serving 200k+ monthly active users.',
        'Migrated the main app from Angular to React, reducing codebase complexity by 30%.',
        'Integrated REST and GraphQL APIs with optimistic UI, reducing perceived latency significantly.',
        'Collaborated with designers to implement pixel-perfect, accessible, responsive layouts.',
      ],
      es: [
        'Desarrollé 4 aplicaciones para usuarios con +200k usuarios activos al mes.',
        'Migré la app principal de Angular a React, reduciendo la complejidad del código en un 30%.',
        'Integré APIs REST y GraphQL con UI optimista, reduciendo significativamente la latencia percibida.',
        'Colaboré con diseñadores para implementar layouts responsivos, accesibles y pixel-perfect.',
      ],
    },
    tags: ['React', 'JavaScript', 'GraphQL', 'Sass', 'Angular'],
  },
  {
    company: 'Freelance',
    role: { en: 'Freelance Frontend Developer', es: 'Frontend Developer Freelance' },
    period: '2020 – 2021',
    bullets: {
      en: [
        'Delivered 8+ websites and web apps for SMBs and startups across Latin America.',
        'Specialized in high-performance landing pages with animations and strong Core Web Vitals.',
        'Managed full project lifecycle: discovery, design, development, deployment, and support.',
      ],
      es: [
        'Entregué +8 sitios web y aplicaciones para PyMEs y startups en América Latina.',
        'Especializado en landing pages de alto rendimiento con animaciones y Core Web Vitals sólidos.',
        'Gestioné el ciclo de vida completo del proyecto: descubrimiento, diseño, desarrollo y soporte.',
      ],
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'GSAP'],
  },
];
