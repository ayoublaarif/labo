/**
 * CSS Variable Generation
 * Generate CSS custom properties from token definitions
 */

import { primitives } from './primitives';
import { aliases } from './aliases';
import { semanticTokens } from './semantic';

/**
 * Generate CSS custom properties for primitives
 */
export function generatePrimitivesCSS(): string {
  const lines = Object.entries(primitives).map(
    ([name, value]) => `  ${name}: ${value};`
  );
  return `:root {\n${lines.join('\n')}\n}`;
}

/**
 * Generate CSS custom properties for aliases
 */
export function generateAliasesCSS(): string {
  const lines = Object.entries(aliases).map(
    ([name, value]) => `  ${name}: ${value};`
  );
  return `:root {\n${lines.join('\n')}\n}`;
}

/**
 * Generate CSS custom properties for semantic tokens
 */
export function generateSemanticCSS(): string {
  const lines = Object.entries(semanticTokens).map(
    ([name, value]) => `  ${name}: ${value};`
  );
  return `:root {\n${lines.join('\n')}\n}`;
}

/**
 * Generate complete CSS with all tokens
 */
export function generateAllCSS(): string {
  return [
    '/* PRIMITIVES */',
    generatePrimitivesCSS(),
    '',
    '/* ALIASES */',
    generateAliasesCSS(),
    '',
    '/* SEMANTIC TOKENS */',
    generateSemanticCSS(),
  ].join('\n');
}

