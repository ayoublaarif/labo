/**
 * Primitives Index
 * Exports all primitive tokens
 */

export * from './colors';
export * from './scales';

import { colorPrimitives } from './colors';
import { scalePrimitives } from './scales';

export const primitives = {
  ...colorPrimitives,
  ...scalePrimitives,
} as const;

export type Primitive = keyof typeof primitives;
export type PrimitiveValue = typeof primitives[Primitive];

