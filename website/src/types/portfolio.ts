// Portfolio data type definitions

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  initials: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // lucide-react icon name or emoji
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  team?: string;
  location: string;
  startDate: string;
  endDate: string; // "Present" for current
  bullets: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  emoji?: string;
  thumbnail?: string;
  tags: string[];
  links?: {
    github?: string;
    live?: string;
    article?: string;
    demo?: string;
  };
  modal: {
    fullDescription: string;
    problem?: string;
    solution?: string;
    impact?: string;
    technicalDetails?: string;
    features?: string[];
    learnings?: string[];
    technologies: string[];
    images?: string[];
    researchContext?: {
      institution: string;
      institutionUrl: string;
      advisors: { name: string; url: string }[];
    };
  };
}

export interface SkillCategory {
  id: string;
  name: string;
  emoji: string;
  skills: string[];
}

export interface Hobby {
  id: string;
  title: string;
  emoji: string;
  description: string;
  details?: string[];
}

export interface Place {
  name: string;
  coords: [number, number];
  notes?: string;
  photos?: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  socialLinks: SocialLink[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  contact: ContactInfo;
  navigation: NavLink[];
  workExperience: WorkExperience[];
  education: Education[];
  projects: Project[];
  skills: SkillCategory[];
  hobbies: Hobby[];
  places: Place[];
}
