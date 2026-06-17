export interface Achievement {
  id: string;
  title: string;
  description: string;
  highlight: string;
}

export const achievements: Achievement[] = [
  {
    id: 'star-quarter',
    title: 'Star of the Quarter',
    description: 'Awarded by Stic Soft in 2022 for outstanding performance, project delivery execution, and significant positive team impact.',
    highlight: 'Awarded in 2022'
  },
  {
    id: 'angular-upgrades',
    title: 'Framework Modernization',
    description: 'Successfully led and executed major Angular upgrades from v4 to v13 across several large-scale projects, minimizing downtime and technical debt.',
    highlight: 'Angular v4 to v13'
  },
  {
    id: 'fortune-500',
    title: 'Fortune 500 E-Commerce',
    description: 'Developed and optimized global multi-region online ordering workflows for Pizza Hut under Yum! Brands, serving millions of users.',
    highlight: 'Yum! Brands'
  },
  {
    id: 'angular-to-react',
    title: 'Framework Transition',
    description: 'Seamlessly transitioned from Angular expertise to leading React 18 multi-tenant application design, modular packaging, and state management at Qualibar.',
    highlight: 'Qualibar Pvt Ltd'
  },
  {
    id: 'quick-learner',
    title: 'Quick Learner Award',
    description: 'Officially recognized at LetsGettin for rapid adoption of modern frontend technologies, engineering frameworks, and team guidelines.',
    highlight: 'LetsGettin Pvt Ltd'
  }
];
