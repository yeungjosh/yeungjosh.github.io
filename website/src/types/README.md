# Type Safety System

This directory contains TypeScript type definitions and validation schemas for the portfolio website.

## Files

- **`index.ts`** - Centralized TypeScript interfaces and types
- **`validation.ts`** - Zod schemas for runtime data validation
- **`vanta.d.ts`** - Type declarations for third-party libraries

## Usage

### Importing Types

```typescript
import { Place, Project, WorkExperience } from '@/types';
```

### Validating Data

```typescript
import placesData from '@/data/places.json';
import { validateData, PlacesArraySchema } from '@/types/validation';

// Validate and get type-safe data
const places = validateData(PlacesArraySchema, placesData, 'places.json');
```

### Using the Data Loader

```typescript
import placesData from '@/data/places.json';
import { loadPlacesData } from '@/lib/data-loader';

const places = loadPlacesData(placesData);
```

## Type System

### Place
Represents a geographic location with coordinates for the travel globe.

```typescript
interface Place {
  name: string;
  coords: [number, number]; // [latitude, longitude]
  notes?: string;
  photos?: string[];
}
```

### Project
Represents a portfolio project with details and optional modal content.

### WorkExperience
Represents a work experience entry with achievements and technologies.

### Education
Represents an education entry with school details.

### SkillCategory
Represents a category of skills/technologies.

### Hobby
Represents a hobby or interest.

### BlogPost
Represents blog post metadata.

## Benefits

1. **Type Safety** - Compile-time type checking with TypeScript
2. **Runtime Validation** - Zod schemas ensure data integrity at runtime
3. **Centralized Types** - Single source of truth for all data structures
4. **Better DX** - IntelliSense and autocomplete in your IDE
5. **Catch Errors Early** - Invalid data is caught during development

## Adding New Types

1. Add the interface to `index.ts`
2. Create a Zod schema in `validation.ts`
3. Add a loader function in `lib/data-loader.ts` if needed
4. Update components to use the new types

## Examples

### Validating Custom Data

```typescript
import { z } from 'zod';
import { validateData } from '@/types/validation';

const CustomSchema = z.object({
  id: z.string(),
  value: z.number()
});

const data = validateData(CustomSchema, rawData, 'custom data');
```

### Safe Validation (No Throw)

```typescript
import { validateDataSafe } from '@/types/validation';

const result = validateDataSafe(PlacesArraySchema, data);

if (result.success) {
  // Use result.data
  console.log(result.data);
} else {
  // Handle result.errors
  console.error(result.errors);
}
```
