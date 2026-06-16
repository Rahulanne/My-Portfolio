export interface Skill {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate' | 'beginner';
  category: 'frontend' | 'tools' | 'backend' | 'other';
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
  imageUrl: string;
  featured: boolean;
  category: string;
  year: number;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  achievements: string[];
  techStack: string[];
}
