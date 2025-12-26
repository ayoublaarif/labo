/**
 * Aliases Index
 * Exports all alias tokens
 */

export * from './colors';
export * from './spacing';
export * from './typography';
export * from './borders';
export * from './fonts';

import { colorAliases } from './colors';
import { spacingAliases } from './spacing';
import { typographyAliases } from './typography';
import { borderAliases } from './borders';
import { fontAliases } from './fonts';

export const aliases = {
  ...colorAliases,
  ...spacingAliases,
  ...typographyAliases,
  ...borderAliases,
  ...fontAliases,
} as const;

export type Alias = keyof typeof aliases;
export type AliasValue = typeof aliases[Alias];

