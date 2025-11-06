/**
 * Data loader utilities with runtime validation
 *
 * This module provides type-safe data loading with Zod validation.
 * Use these utilities when importing JSON data to ensure type safety.
 */

import { Place } from '@/types';
import { PlacesArraySchema, validateData } from '@/types/validation';

/**
 * Loads and validates places data
 * @param data - Raw JSON data
 * @returns Validated array of Place objects
 * @throws Error if validation fails
 */
export function loadPlacesData(data: unknown): Place[] {
  return validateData(PlacesArraySchema, data, 'places data');
}

/**
 * Example of how to use the data loader:
 *
 * ```typescript
 * import placesData from '@/data/places.json';
 * import { loadPlacesData } from '@/lib/data-loader';
 *
 * const places = loadPlacesData(placesData);
 * ```
 */
