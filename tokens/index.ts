/**
 * Design Tokens Index
 * Main entry point for all design tokens
 */

export * from './primitives';
export * from './aliases';
export * from './semantic';

import { primitives } from './primitives';
import { aliases } from './aliases';
import { semanticTokens } from './semantic';

export const tokens = {
  ...primitives,
  ...aliases,
  ...semanticTokens,
} as const;

export type Token = keyof typeof tokens;
export type TokenValue = typeof tokens[Token];

