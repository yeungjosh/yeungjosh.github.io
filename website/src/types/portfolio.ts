// TypeScript interfaces for portfolio data

export interface NavigationLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  team?: string;
  period: string;
  location: string;
  description: string[];
  tags?: string[];
}

export interface Education {
  institution: string;
  abbreviation: string;
  degree: string;
  gpa?: string;
  years: string;
  activities?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  variant?: "default" | "outline";
}

export interface ProjectDetails {
  overview?: string;
  features?: string[];
  projectsIncluded?: string[];
  realWorldApplications?: string;
  techStack?: string[];
  additionalInfo?: string;
  links?: ProjectLink[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  emoji?: string;
  tags: string[];
  featured?: boolean;
  hasModal?: boolean;
  links?: ProjectLink[];
  details?: ProjectDetails;
  blogUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  emoji: string;
  skills: string[];
}

export interface HobbyLink {
  label: string;
  url: string;
}

export interface Hobby {
  emoji: string;
  title: string;
  description: string;
  additionalInfo?: string;
  rating?: string;
  links?: HobbyLink[];
}

export interface Place {
  name: string;
  coords: [number, number];
  notes?: string;
  photos?: string[];
}
