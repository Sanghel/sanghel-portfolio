import portfolioImg from "../assets/projects/portfolio.webp";
import warrantyPhoneImg from "../assets/projects/warranty_phone.webp";
import ticketsImg from "../assets/projects/tickets.webp";
import singleSignOnImg from "../assets/projects/single-sign-on.webp";
import projectsImg from "../assets/projects/projects.webp";
import cotizadorFlotillasImg from "../assets/projects/cotizador_flotillas.webp";
import dashboardTicketsImg from "../assets/projects/dashboard_tickets.webp";
import formbuilderImg from "../assets/projects/formbuilder.webp";
import solarSystemImg from "../assets/projects/solar_system.webp";
import expenseManagerImg from "../assets/projects/expense_manager.webp";

export interface Project {
  slug: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  tags: string[];
  image: string | ImageMetadata;
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  /** Mark as private to hide the code button and show a lock badge instead */
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    slug: "expense-manager",
    title: {
      en: "Expense Manager",
      es: "Gestor de Gastos",
    },
    description: {
      en: "AI-powered personal finance management app with natural language expense logging, multi-currency support (COP, USD, VES), real-time analytics dashboards, budget tracking, recurring transactions, and Google OAuth authentication. Built with Next.js 16 and PostgreSQL via InsForge.",
      es: "App de gestión financiera personal con IA, registro de gastos por lenguaje natural, soporte multi-divisa (COP, USD, VES), dashboards analíticos en tiempo real, seguimiento de presupuesto, transacciones recurrentes y autenticación con Google OAuth. Construida con Next.js 16 y PostgreSQL vía InsForge.",
    },
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Google OAuth", "Claude AI"],
    image: expenseManagerImg,
    liveUrl: "https://expense-manager.sanghel.dev/login",
    codeUrl: "https://github.com/Sanghel/expense-manager",
    featured: true,
  },
  {
    slug: "solar-system-3d",
    title: {
      en: "Solar System 3D",
      es: "Sistema Solar 3D",
    },
    description: {
      en: "Interactive 3D visualization of the Solar System with clickable planets, realistic textures, orbital simulation, and time controls.",
      es: "Visualización 3D interactiva del Sistema Solar con planetas clicables, texturas realistas, simulación orbital y controles de tiempo.",
    },
    tags: ["Three.js", "React Three Fiber", "React", "TypeScript"],
    image: solarSystemImg,
    liveUrl: "https://solar-system-3d.sanghel.dev",
    codeUrl: "https://github.com/Sanghel/solar-system-3d",
  },
  {
    slug: "portfolio",
    title: { en: "Portfolio", es: "Portafolio Personal" },
    description: {
      en: "Personal portfolio built with Astro and React — fast, accessible, and fully responsive.",
      es: "Portafolio personal construido con Astro y React — rápido, accesible y completamente responsivo.",
    },
    tags: ["Astro", "React", "TypeScript", "Tailwind CSS"],
    image: portfolioImg,
    codeUrl: "https://github.com/Sanghel/sanghel-portfolio",
  },
  {
    slug: "warranty-phone",
    title: { en: "Warranty Phone", es: "Garantías de Teléfono" },
    description: {
      en: "Phone warranty management system for handling equipment replacements and repairs.",
      es: "Sistema de gestión de garantía de teléfonos para cambio de equipo y reparaciones.",
    },
    tags: ["Next.js", "Ant Design", "TanStack Query", "NextAuth"],
    image: warrantyPhoneImg,
    isPrivate: true,
  },
  {
    slug: "tickets",
    title: { en: "Tickets", es: "Sistema de Tickets" },
    description: {
      en: "Enterprise ticket management system for tracking incidents, reports, and service needs with full follow-up.",
      es: "Sistema de gestión de tickets para empresas, con seguimiento de incidentes, reportes y necesidades.",
    },
    tags: ["Next.js", "React", "Material UI", "NextAuth"],
    image: ticketsImg,
    isPrivate: true,
  },
  {
    slug: "single-sign-on",
    title: { en: "Single Sign On", es: "Inicio de Sesión Único" },
    description: {
      en: "Centralized authentication portal that issues session tokens to multiple internal applications, similar to Google's SSO.",
      es: "Portal centralizado de inicio de sesión que entrega tokens de sesión a otros portales internos.",
    },
    tags: ["Next.js", "NextAuth"],
    image: singleSignOnImg,
    isPrivate: true,
  },
  {
    slug: "projects",
    title: { en: "Projects", es: "Gestión de Proyectos" },
    description: {
      en: "Project management board similar to Jira, tracking requirements from creation through approval.",
      es: "Tablero de gestión de proyectos estilo Jira, desde el levantamiento del requerimiento hasta su aprobación.",
    },
    tags: ["Next.js", "Material UI", "TanStack Query", "Redux"],
    image: projectsImg,
    isPrivate: true,
  },
  {
    slug: "cotizador-flotillas",
    title: { en: "Fleet Quoter", es: "Cotizador de Flotillas" },
    description: {
      en: "Vehicle fleet quotation tool for managing and pricing fleet configurations.",
      es: "Cotizador de flotillas de vehículos para gestionar y presupuestar configuraciones de flota.",
    },
    tags: ["Next.js", "Redux", "Prismic", "Form.io"],
    image: cotizadorFlotillasImg,
    isPrivate: true,
  },
  {
    slug: "dashboard-tickets",
    title: { en: "Tickets Dashboard", es: "Dashboard de Tickets" },
    description: {
      en: "Metrics dashboard for visualizing and analyzing ticket management performance.",
      es: "Dashboard de métricas para visualizar y analizar la gestión de tickets.",
    },
    tags: ["Next.js", "Material UI", "TanStack Query"],
    image: dashboardTicketsImg,
    isPrivate: true,
  },
  {
    slug: "formbuilder",
    title: { en: "Form Builder", es: "Constructor de Formularios" },
    description: {
      en: "Dynamic form builder that generates frontend forms from JSON field definitions, powered by Form.io.",
      es: "Constructor de formularios dinámicos en el frontend a partir de definiciones JSON de campos, basado en Form.io.",
    },
    tags: ["React", "Material UI", "Ant Design", "Form.io"],
    image: formbuilderImg,
    isPrivate: true,
  },
];

export const skillCategories = [
  {
    key: "frontend",
    skills: [
      { name: "React", icon: "devicon-react-original" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Astro", icon: "devicon-astro-plain" },
      { name: "Vue.js", icon: "devicon-vuejs-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
    ],
  },
  {
    key: "styling",
    skills: [
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
      { name: "Sass", icon: "devicon-sass-plain" },
      { name: "Figma", icon: "devicon-figma-plain" },
    ],
  },
  {
    key: "tooling",
    skills: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "Vite", icon: "devicon-vitejs-plain" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
    ],
  },
  {
    key: "other",
    skills: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "GraphQL", icon: "devicon-graphql-plain" },
      { name: "Jest", icon: "devicon-jest-plain" },
      { name: "Linux", icon: "devicon-linux-plain" },
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
    company: "Nelumbo Consultores",
    role: {
      en: "Frontend Developer & Tech Lead",
      es: "Frontend Developer & Tech Lead",
    },
    period: "Feb 2024 – Present",
    bullets: {
      en: [
        "Led frontend development of internal enterprise systems including warranty management, ticket tracking, project management, and SSO platforms.",
        "Built reusable component libraries and development patterns that improved team DX and reduced feature delivery time.",
        "Acted as Tech Lead: conducted code reviews, mentored teammates, and made critical architectural decisions.",
        "Worked directly with stakeholders to translate business requirements into scalable technical solutions.",
      ],
      es: [
        "Lideré el desarrollo frontend de sistemas empresariales internos: gestión de garantías, tickets, proyectos y SSO.",
        "Construí librerías de componentes reutilizables y patrones de desarrollo que mejoraron la DX del equipo.",
        "Actué como Tech Lead: revisiones de código, mentoría al equipo y decisiones arquitectónicas críticas.",
        "Trabajé directamente con stakeholders para traducir requerimientos de negocio en soluciones técnicas escalables.",
      ],
    },
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Material UI",
      "TanStack Query",
      "NextAuth",
    ],
  },
  {
    company: "Wealth Accelerators Global LLC",
    role: { en: "Frontend Developer", es: "Frontend Developer" },
    period: "Sep 2022 – Dec 2023",
    bullets: {
      en: [
        "Developed visually appealing, fully responsive interfaces adaptable to all screen sizes.",
        "Integrated RESTful APIs to connect frontend with backend services.",
        "Conducted code reviews and resolved bugs to maintain code quality.",
        "Managed version control using Git and GitHub in a collaborative team environment.",
      ],
      es: [
        "Desarrollé interfaces visualmente atractivas y completamente responsivas para cualquier tamaño de pantalla.",
        "Integré APIs RESTful para conectar el frontend con los servicios del backend.",
        "Realicé revisiones de código y resolución de bugs para mantener la calidad del proyecto.",
        "Gestioné el control de versiones con Git y GitHub en un entorno de equipo colaborativo.",
      ],
    },
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "styled-components",
    ],
  },
  {
    company: "Freelance",
    role: { en: "Frontend Developer", es: "Frontend Developer" },
    period: "Dec 2021 – Jul 2022",
    bullets: {
      en: [
        "Built HTML, CSS, and JavaScript websites and landing pages for small businesses and clients.",
        "Focused on clean, semantic markup and responsive layouts for all screen sizes.",
        "Handled full project delivery from initial requirements to deployment.",
      ],
      es: [
        "Desarrollé sitios web y landing pages con HTML, CSS y JavaScript para pequeñas empresas y clientes.",
        "Me enfoqué en markup semántico, limpio y layouts responsivos para cualquier dispositivo.",
        "Gestioné la entrega completa del proyecto desde los requerimientos iniciales hasta el despliegue.",
      ],
    },
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
];

export interface Achievement {
  id: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  issuer: string;
  year: number;
  icon: "genius" | "champion" | "teamplayer";
}

export const achievements: Achievement[] = [
  {
    id: "genius-frontend-2025",
    title: { en: "Nelumbo Genius Frontend", es: "Nelumbo Genius Frontend" },
    description: {
      en: "Awarded to the brightest mind in architecture, code quality, and critical technical decisions.",
      es: "Premio a la mente más brillante en arquitectura, calidad de código y decisiones técnicas críticas.",
    },
    issuer: "Nelumbo Consultores",
    year: 2025,
    icon: "genius",
  },
  {
    id: "grand-champions-2025",
    title: { en: "Nelumbo Grand Champions", es: "Nelumbo Grand Champions" },
    description: {
      en: "Recognizes the person with the best overall performance: technical excellence, attitude, collaboration, and results.",
      es: "Reconoce a la persona con mejor desempeño global: excelencia técnica, actitud, colaboración y resultados.",
    },
    issuer: "Nelumbo Consultores",
    year: 2025,
    icon: "champion",
  },
  {
    id: "team-player-2025",
    title: { en: "Nelumbo Team Player", es: "Nelumbo Team Player" },
    description: {
      en: "Awarded to the person the team most enjoys working with, who goes the extra mile to move everyone forward.",
      es: "Premio a la persona con quien el equipo más disfruta trabajar y da la cara para sacar al equipo adelante.",
    },
    issuer: "Nelumbo Consultores",
    year: 2025,
    icon: "teamplayer",
  },
];
