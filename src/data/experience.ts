import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'qualibar',
    company: 'Qualibar Pvt Ltd',
    role: 'Senior Software Engineer',
    location: 'Hyderabad, India',
    startDate: '2024-05',
    endDate: 'Present',
    responsibilities: [
      'Lead frontend development for a multi-tenant React application using React 18, Hooks, Redux Toolkit, and reusable component architectures.',
      'Design and build reusable enterprise UI component libraries (VUI) with React, TypeScript, and Tailwind CSS, reducing development cycles.',
      'Contribute to a scalable multi-repository architecture spanning 3+ applications, promoting independent micro-frontend developments.',
      'Develop public-facing enrollment portals supporting multiple onboarding models: G2C (Group to Consumer), A2C (Agent to Consumer), and D2C (Direct to Consumer).',
      'Implement JWT token-based authentication including access/refresh tokens and role-based access control (RBAC) across multiple roles.',
      'Implement Progressive Web App (PWA) support to enable offline availability and mobile-friendly app-like capabilities.',
      'Integrated user-scheduled notification systems for timely web and mobile app alerts.'
    ],
    achievements: [
      'Built a standard reusable React shell and enrollment flow package for enterprise-wide utilization.',
      'Created a standalone UI validation app to compile and verify system components for HIPAA/PCI compliance.',
      'Established high performance and maintainable UI patterns across multiple modules.'
    ],
    techStack: ['React 18', 'Angular', 'TypeScript', 'Redux Toolkit', 'PrimeReact', 'Tailwind CSS', 'Vite', 'PWA', 'REST APIs']
  },
  {
    id: 'sticsoft',
    company: 'Stic Soft E-Solutions Pvt Ltd',
    role: 'Software Engineer',
    location: 'Hyderabad, India',
    startDate: '2020-09',
    endDate: '2024-04',
    responsibilities: [
      'Developed and maintained customer-facing features for Pizza Hut web application (Yum! Brands) supporting global e-commerce workflows.',
      'Programmed responsive frontend modules using Angular, TypeScript, and RxJS reactive streams to improve usability and maintainability.',
      'Supported region-specific UI adaptations and Right-to-Left (RTL) layout rendering for Middle Eastern markets.',
      'Integrated REST APIs for customer transactions, order processing, and real-time frontend rendering.',
      'Participated in code reviews, bug fixes, and environment releases across Dev, QA, UAT, and Production.'
    ],
    achievements: [
      'Awarded "Star of the Quarter" in 2022 by Stic Soft for outstanding contributions and reliable project deliveries.',
      'Successfully executed Angular framework migrations from v4 to v13, reducing technical debt and modernization bottlenecks.',
      'Boosted Lighthouse performance and initial load times through bundle size optimization, tree-shaking, and lazy loading.'
    ],
    techStack: ['Angular', 'TypeScript', 'RxJS', 'PrimeNG', 'Bootstrap', 'REST APIs', 'Git']
  },
  {
    id: 'letsgettin',
    company: 'LetsGettin Private Limited',
    role: 'Associate Software Engineer',
    location: 'Hyderabad, India',
    startDate: '2019-09',
    endDate: '2020-09',
    responsibilities: [
      'Started frontend engineering with HTML5, CSS3, Bootstrap, and JavaScript, building responsive layouts and web views.',
      'Gained core expertise in Angular fundamentals including component hierarchies, routing guards, directives, and forms.',
      'Supported senior developers in debugging, UI tweaks, and incremental feature updates during agile iterations.'
    ],
    achievements: [
      'Recognized as a "Quick Learner" for rapidly picking up framework concepts and active involvement in team deliverables.'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Angular']
  }
];