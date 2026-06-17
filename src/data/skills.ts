import { Skill, SkillCategory } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React 18', level: 'expert', category: 'frontend' },
  { name: 'Angular', level: 'expert', category: 'frontend' },
  { name: 'TypeScript', level: 'expert', category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 'expert', category: 'frontend' },
  { name: 'Redux Toolkit', level: 'expert', category: 'frontend' },
  { name: 'RxJS', level: 'expert', category: 'frontend' },
  { name: 'Context API', level: 'expert', category: 'frontend' },
  { name: 'PrimeReact', level: 'expert', category: 'frontend' },
  { name: 'PrimeNG', level: 'expert', category: 'frontend' },
  { name: 'HTML5', level: 'expert', category: 'frontend' },
  { name: 'CSS3', level: 'expert', category: 'frontend' },
  { name: 'SCSS', level: 'expert', category: 'frontend' },
  { name: 'Tailwind CSS', level: 'expert', category: 'frontend' },
  { name: 'Bootstrap', level: 'expert', category: 'frontend' },

  // Tools & Platforms
  { name: 'Git', level: 'expert', category: 'tools' },
  { name: 'Bitbucket', level: 'expert', category: 'tools' },
  { name: 'Jira', level: 'expert', category: 'tools' },
  { name: 'Azure', level: 'advanced', category: 'tools' },
  { name: 'Vite', level: 'expert', category: 'tools' },
  { name: 'Firebase', level: 'advanced', category: 'tools' },
  { name: 'Vercel', level: 'advanced', category: 'tools' },

  // Backend
  { name: 'REST APIs', level: 'expert', category: 'backend' },
  { name: 'PHP', level: 'advanced', category: 'backend' },
  { name: 'MySQL', level: 'advanced', category: 'backend' },

  // Architecture & Concepts (other)
  { name: 'Component-driven Architecture', level: 'expert', category: 'other' },
  { name: 'Micro Frontend Architecture', level: 'expert', category: 'other' },
  { name: 'Performance Optimization', level: 'expert', category: 'other' },
  { name: 'Token-based Auth (JWT)', level: 'expert', category: 'other' },
  { name: 'RBAC', level: 'expert', category: 'other' },
  { name: 'MSAL / CIAM', level: 'advanced', category: 'other' },
  { name: 'Jest (TDD)', level: 'advanced', category: 'other' },
  { name: 'PWA', level: 'advanced', category: 'other' }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Development',
    skills: skills.filter(s => s.category === 'frontend'),
  },
  {
    category: 'Architecture & Concepts',
    skills: skills.filter(s => s.category === 'other'),
  },
  {
    category: 'Tools & Platforms',
    skills: skills.filter(s => s.category === 'tools'),
  },
  {
    category: 'Backend Familiarity',
    skills: skills.filter(s => s.category === 'backend'),
  },
];