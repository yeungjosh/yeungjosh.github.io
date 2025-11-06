/**
 * Zod validation schemas for runtime data validation
 * These schemas ensure that imported data conforms to expected types
 */

import { z } from 'zod';

// ============================================================================
// Place Validation Schema
// ============================================================================

/**
 * Schema for validating Place objects
 * Ensures geographic coordinates are valid and required fields are present
 */
export const PlaceSchema = z.object({
  name: z.string().min(1, 'Place name is required'),
  coords: z.tuple([
    z.number().min(-90).max(90, 'Latitude must be between -90 and 90'),
    z.number().min(-180).max(180, 'Longitude must be between -180 and 180')
  ]),
  notes: z.string().optional(),
  photos: z.array(z.string().url('Photo must be a valid URL')).optional()
});

/**
 * Schema for validating arrays of Place objects
 */
export const PlacesArraySchema = z.array(PlaceSchema);

// ============================================================================
// Project Validation Schemas
// ============================================================================

export const ProjectLinkSchema = z.object({
  label: z.string().min(1, 'Link label is required'),
  url: z.string().url('Link must be a valid URL'),
  icon: z.string().optional()
});

export const ProjectModalContentSchema = z.object({
  overview: z.string().min(1, 'Overview is required'),
  keyFeatures: z.array(z.string()).min(1, 'At least one key feature is required'),
  technicalHighlights: z.array(z.string()).optional(),
  validationStudy: z.string().optional(),
  additionalSections: z.array(z.object({
    title: z.string(),
    content: z.string()
  })).optional()
});

export const ProjectSchema = z.object({
  id: z.string().min(1, 'Project ID is required'),
  title: z.string().min(1, 'Project title is required'),
  description: z.string().min(1, 'Project description is required'),
  image: z.string().min(1, 'Project image is required'),
  imageType: z.enum(['url', 'emoji']),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
  features: z.array(z.string()).optional(),
  links: z.array(ProjectLinkSchema).optional(),
  modalContent: ProjectModalContentSchema.optional(),
  featured: z.boolean().optional()
});

export const ProjectsArraySchema = z.array(ProjectSchema);

// ============================================================================
// Work Experience Validation Schema
// ============================================================================

export const WorkExperienceSchema = z.object({
  id: z.string().min(1, 'Work experience ID is required'),
  company: z.string().min(1, 'Company name is required'),
  position: z.string().min(1, 'Position is required'),
  date: z.string().min(1, 'Date is required'),
  location: z.string().min(1, 'Location is required'),
  achievements: z.array(z.string()).min(1, 'At least one achievement is required'),
  technologies: z.array(z.string()).optional(),
  logo: z.string().optional()
});

export const WorkExperiencesArraySchema = z.array(WorkExperienceSchema);

// ============================================================================
// Education Validation Schema
// ============================================================================

export const EducationSchema = z.object({
  id: z.string().min(1, 'Education ID is required'),
  school: z.string().min(1, 'School name is required'),
  degree: z.string().min(1, 'Degree is required'),
  gpa: z.number().min(0).max(4.0, 'GPA must be between 0 and 4.0').optional(),
  years: z.string().min(1, 'Years is required'),
  activities: z.array(z.string()).optional(),
  logo: z.string().optional()
});

export const EducationsArraySchema = z.array(EducationSchema);

// ============================================================================
// Skills Validation Schema
// ============================================================================

export const SkillCategorySchema = z.object({
  name: z.string().min(1, 'Category name is required'),
  category: z.enum(['frontend', 'backend', 'mobile', 'cloud', 'core', 'tools', 'other']),
  icon: z.string().optional(),
  items: z.array(z.string()).min(1, 'At least one skill item is required')
});

export const SkillCategoriesArraySchema = z.array(SkillCategorySchema);

// ============================================================================
// Hobbies Validation Schema
// ============================================================================

export const HobbySchema = z.object({
  id: z.string().min(1, 'Hobby ID is required'),
  emoji: z.string().min(1, 'Emoji is required'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  details: z.string().optional(),
  links: z.array(ProjectLinkSchema).optional()
});

export const HobbiesArraySchema = z.array(HobbySchema);

// ============================================================================
// Blog Validation Schema
// ============================================================================

export const BlogPostSchema = z.object({
  slug: z.string().min(1, 'Blog post slug is required'),
  title: z.string().min(1, 'Blog post title is required'),
  description: z.string().min(1, 'Blog post description is required'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
  image: z.string().optional(),
  readingTime: z.number().positive('Reading time must be positive').optional()
});

export const BlogPostsArraySchema = z.array(BlogPostSchema);

// ============================================================================
// Validation Helper Functions
// ============================================================================

/**
 * Validates data against a schema and throws detailed error messages
 * @param schema - Zod schema to validate against
 * @param data - Data to validate
 * @param dataName - Name of the data for error messages
 * @returns Validated data
 * @throws Error with detailed validation issues
 */
export function validateData<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
  dataName: string
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errorMessages = result.error.issues.map(
      (err: z.ZodIssue) => `  - ${err.path.map(p => (typeof p === 'number' ? `[${p}]` : p)).join('.').replace(/\.\[/g, '[')}: ${err.message}`
    ).join('\n');

    throw new Error(
      `Validation failed for ${dataName}:\n${errorMessages}`
    );
  }

  return result.data;
}

/**
 * Validates data against a schema and returns validation result
 * @param schema - Zod schema to validate against
 * @param data - Data to validate
 * @returns Object with success status and either data or errors
 */
export function validateDataSafe<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: string[] } {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.issues.map(
      (err: z.ZodIssue) => `${err.path.map(p => (typeof p === 'number' ? `[${p}]` : p)).join('.').replace(/\.\[/g, '[')}: ${err.message}`
    );
    return { success: false, errors };
  }

  return { success: true, data: result.data };
}
