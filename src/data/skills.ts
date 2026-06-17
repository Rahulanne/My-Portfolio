import { Skill, SkillCategory } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 'expert', category: 'frontend' },
  { name: 'Angular', level: 'advanced', category: 'frontend' },
  { name: 'TypeScript', level: 'expert', category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 'expert', category: 'frontend' },
  { name: 'HTML5', level: 'expert', category: 'frontend' },
  { name: 'CSS3', level: 'expert', category: 'frontend' },
  { name: 'Tailwind CSS', level: 'expert', category: 'frontend' },
  { name: 'SCSS/Sass', level: 'advanced', category: 'frontend' },
  { name: 'Redux / NgRx', level: 'advanced', category: 'frontend' },
  { name: 'React Query / TanStack Query', level: 'advanced', category: 'frontend' },
  { name: 'Zustand', level: 'advanced', category: 'frontend' },
  { name: 'RxJS', level: 'intermediate', category: 'frontend' },
  { name: 'Next.js', level: 'advanced', category: 'frontend' },
  { name: 'Vite', level: 'expert', category: 'frontend' },
  { name: 'Framer Motion', level: 'intermediate', category: 'frontend' },

  // Tools
  { name: 'Git', level: 'expert', category: 'tools' },
  { name: 'GitHub / GitLab', level: 'expert', category: 'tools' },
  { name: 'VS Code', level: 'expert', category: 'tools' },
  { name: 'Postman', level: 'advanced', category: 'tools' },
  { name: 'Docker', level: 'intermediate', category: 'tools' },
  { name: 'CI/CD (GitHub Actions, GitLab CI)', level: 'advanced', category: 'tools' },
  { name: 'Jest / Vitest', level: 'advanced', category: 'tools' },
  { name: 'Cypress / Playwright', level: 'advanced', category: 'tools' },
  { name: 'Storybook', level: 'intermediate', category: 'tools' },
  { name: 'ESLint / Prettier', level: 'expert', category: 'tools' },
  { name: 'Webpack / Vite', level: 'advanced', category: 'tools' },
  { name: 'npm / pnpm / yarn', level: 'expert', category: 'tools' },

  // Backend Knowledge
  { name: 'PHP', level: 'intermediate', category: 'backend' },
  { name: 'REST APIs', level: 'advanced', category: 'backend' },
  { name: 'GraphQL', level: 'intermediate', category: 'backend' },
  { name: 'Node.js', level: 'intermediate', category: 'backend' },
  { name: 'Express.js', level: 'intermediate', category: 'backend' },
  { name: 'Firebase / Supabase', level: 'advanced', category: 'backend' },
  { name: 'SQL (PostgreSQL, MySQL)', level: 'intermediate', category: 'backend' },
  { name: 'MongoDB', level: 'beginner', category: 'backend' },
  { name: 'Authentication (Auth0, Clerk, NextAuth)', level: 'advanced', category: 'backend' },

  // Other
  { name: 'Responsive Design', level: 'expert', category: 'other' },
  { name: 'Web Accessibility (WCAG 2.1)', level: 'advanced', category: 'other' },
  { name: 'Performance Optimization', level: 'advanced', category: 'other' },
  { name: 'SEO Optimization', level: 'advanced', category: 'other' },
  { name: 'Agile / Scrum', level: 'advanced', category: 'other' },
  { name: 'Technical Writing', level: 'intermediate', category: 'other' },
  { name: 'Mentoring & Code Reviews', level: 'advanced', category: 'other' },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: skills.filter(s => s.category === 'frontend'),
  },
  {
    category: 'Tools & DevOps',
    skills: skills.filter(s => s.category === 'tools'),
  },
  {
    category: 'Backend Knowledge',
    skills: skills.filter(s => s.category === 'backend'),
  },
  {
    category: 'Other Skills',
    skills: skills.filter(s => s.category === 'other'),
  },
];