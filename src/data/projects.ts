import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'healthcare-platform',
    title: 'Healthcare Management Platform',
    description: 'Multi-tenant enterprise healthcare platform supporting 50+ modules, public enrollment workflows, and role-based access control.',
    longDescription: 'Enterprise-scale healthcare platform supporting 50+ modules, 6+ user roles, and multiple client tenants. Built with React 18, Redux Toolkit, PrimeReact, and Tailwind CSS. Features admin-driven organizational management, secure public enrollment workflows (supporting G2C, A2C, and D2C models), PWA support, JWT token-based authentication, and offline capabilities.',
    techStack: ['React 18', 'Angular', 'TypeScript', 'Redux Toolkit', 'PrimeReact', 'Tailwind CSS', 'Microservices', 'PWA'],
    githubUrl: 'https://github.com/Rahulanne',
    liveDemoUrl: '', // Proprietary enterprise application
    imageUrl: '/assets/projects/healthcare.jpg',
    featured: true,
    category: 'Enterprise App',
    year: 2024,
  },
  {
    id: 'vui-component-library',
    title: 'VUI Component Library',
    description: 'Enterprise UI design system and reusable component library designed for HIPAA and PCI compliance.',
    longDescription: 'Designed and developed a reusable enterprise UI design system and component library using React, TypeScript, Vite, PrimeReact, and Tailwind CSS. Built standardized, accessible components (forms, tables, modals, layouts) conforming to WCAG, HIPAA, and PCI compliance requirements. Features standalone validation applications and efficient package linking across multiple systems.',
    techStack: ['React', 'TypeScript', 'Vite', 'PrimeReact', 'Tailwind CSS', 'WCAG', 'HIPAA/PCI'],
    githubUrl: 'https://github.com/Rahulanne',
    liveDemoUrl: '', // Internal design system
    imageUrl: '/assets/projects/ui-library.jpg',
    featured: true,
    category: 'Design System',
    year: 2024,
  },
  {
    id: 'venrollment-library',
    title: 'VEnrollment Micro Frontend Library',
    description: 'Reusable micro frontend library offering client-specific enrollment flows and dynamic forms.',
    longDescription: 'Developed a reusable micro frontend enrollment library integrated across multiple host applications. Created highly customizable onboarding and enrollment workflows with client-specific form configurations and dynamic page rendering. Designed to consume host APIs and load styles dynamically via package linking.',
    techStack: ['React', 'TypeScript', 'Vite', 'PrimeReact', 'Tailwind CSS', 'Micro Frontends'],
    githubUrl: 'https://github.com/Rahulanne',
    liveDemoUrl: '', // Proprietary library
    imageUrl: '/assets/projects/enrollment.jpg',
    featured: true,
    category: 'Micro Frontend',
    year: 2024,
  },
  {
    id: 'pizzahut-ecommerce',
    title: 'PizzaHut E-Commerce Platform',
    description: 'Large-scale customer-facing e-commerce platform supporting online ordering across 10+ international regions.',
    longDescription: 'Contributed to the development and maintenance of the global Pizza Hut web application for Yum! Brands. Implemented responsive frontend modules, region-specific UI adaptations (including Right-to-Left (RTL) layout support for Middle Eastern markets), and reactive programming patterns using RxJS. Optimized initial load times and bundle sizes to boost Lighthouse performance.',
    techStack: ['Angular', 'TypeScript', 'Bootstrap', 'PrimeNG', 'RxJS', 'REST APIs', 'RTL Layouts'],
    githubUrl: '', // Confidential source code
    liveDemoUrl: '', // Confidential public portal link removed
    imageUrl: '/assets/projects/pizzahut.jpg',
    featured: true,
    category: 'E-commerce',
    year: 2022,
  }
];