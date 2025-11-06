/**
 * Centralized TypeScript type definitions for the portfolio website
 * This file provides type safety across all data structures
 */

// ============================================================================
// Place Types
// ============================================================================

/**
 * Represents a geographic location with coordinates
 * Used for the interactive travel globe component
 */
export interface Place {
  /** Full name of the location (e.g., "Seattle, WA") */
  name: string;

  /** Geographic coordinates as [latitude, longitude] tuple */
  coords: [number, number];

  /** Optional descriptive notes about the location */
  notes?: string;

  /** Optional array of photo URLs */
  photos?: string[];
}

// ============================================================================
// Project Types
// ============================================================================

/**
 * Link with a label and URL
 */
export interface ProjectLink {
  /** Display text for the link */
  label: string;

  /** URL destination */
  url: string;

  /** Optional icon or emoji */
  icon?: string;
}

/**
 * Detailed content for project modals
 */
export interface ProjectModalContent {
  /** Overview description of the project */
  overview: string;

  /** List of key features */
  keyFeatures: string[];

  /** Optional technical implementation details */
  technicalHighlights?: string[];

  /** Optional validation study information */
  validationStudy?: string;

  /** Optional additional sections */
  additionalSections?: {
    title: string;
    content: string;
  }[];
}

/**
 * Represents a portfolio project
 */
export interface Project {
  /** Unique identifier for the project */
  id: string;

  /** Project title */
  title: string;

  /** Brief description */
  description: string;

  /** Path to project image or emoji */
  image: string;

  /** Type of image: 'url' for image path, 'emoji' for emoji display */
  imageType: 'url' | 'emoji';

  /** Technology/skill tags */
  tags: string[];

  /** Optional list of key features */
  features?: string[];

  /** Optional external links (demos, repos, etc.) */
  links?: ProjectLink[];

  /** Optional detailed modal content */
  modalContent?: ProjectModalContent;

  /** Whether this project spans full width in grid */
  featured?: boolean;
}

// ============================================================================
// Work Experience Types
// ============================================================================

/**
 * Represents a work experience entry
 */
export interface WorkExperience {
  /** Unique identifier */
  id: string;

  /** Company name */
  company: string;

  /** Job position/title */
  position: string;

  /** Date range (e.g., "2021 - Present") */
  date: string;

  /** Work location */
  location: string;

  /** List of achievements or responsibilities */
  achievements: string[];

  /** Technologies used in this role */
  technologies?: string[];

  /** Optional company logo path */
  logo?: string;
}

// ============================================================================
// Education Types
// ============================================================================

/**
 * Represents an education entry
 */
export interface Education {
  /** Unique identifier */
  id: string;

  /** School/university name */
  school: string;

  /** Degree earned */
  degree: string;

  /** GPA (0-4.0 scale) */
  gpa?: number;

  /** Years attended (e.g., "2017-2021") */
  years: string;

  /** Activities, clubs, or honors */
  activities?: string[];

  /** Optional school logo path */
  logo?: string;
}

// ============================================================================
// Skills Types
// ============================================================================

/**
 * Category types for skills
 */
export type SkillCategoryType =
  | 'frontend'
  | 'backend'
  | 'mobile'
  | 'cloud'
  | 'core'
  | 'tools'
  | 'other';

/**
 * Represents a category of skills/technologies
 */
export interface SkillCategory {
  /** Display name of the category */
  name: string;

  /** Category type for grouping */
  category: SkillCategoryType;

  /** Icon (emoji or icon name) */
  icon?: string;

  /** List of technologies/skills in this category */
  items: string[];
}

// ============================================================================
// Hobbies Types
// ============================================================================

/**
 * Represents a hobby or interest
 */
export interface Hobby {
  /** Unique identifier */
  id: string;

  /** Emoji representation */
  emoji: string;

  /** Hobby title */
  title: string;

  /** Brief description */
  description: string;

  /** Optional detailed information */
  details?: string;

  /** Optional related links */
  links?: ProjectLink[];
}

// ============================================================================
// Blog Types
// ============================================================================

/**
 * Represents a blog post metadata
 */
export interface BlogPost {
  /** Unique slug for the blog post */
  slug: string;

  /** Post title */
  title: string;

  /** Brief description/excerpt */
  description: string;

  /** Publication date */
  date: string;

  /** Tags/categories */
  tags: string[];

  /** Optional featured image */
  image?: string;

  /** Reading time estimate in minutes */
  readingTime?: number;
}

// ============================================================================
// Theme Types (for consistency)
// ============================================================================

/**
 * Available theme options
 */
export type Theme = 'light' | 'dark' | 'system';

// ============================================================================
// Component Prop Types
// ============================================================================

/**
 * Props for components that accept className
 */
export interface WithClassName {
  className?: string;
}

/**
 * Props for components that accept children
 */
export interface WithChildren {
  children: React.ReactNode;
}

/**
 * Combined common props
 */
export interface CommonProps extends WithClassName, WithChildren {}
