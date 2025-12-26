/**
 * Color Aliases
 * References to color primitives with semantic meaning
 */

export const colorAliases = {
  '--fox-neutral-0': 'var(--fox-color-grey-0)',
  '--fox-neutral-100': 'var(--fox-color-grey-100)',
  '--fox-neutral-200': 'var(--fox-color-grey-200)',
  '--fox-neutral-300': 'var(--fox-color-grey-300)',
  '--fox-neutral-400': 'var(--fox-color-grey-400)',
  '--fox-neutral-500': 'var(--fox-color-grey-500)',
  '--fox-neutral-600': 'var(--fox-color-grey-600)',
  '--fox-neutral-700': 'var(--fox-color-grey-700)',
  '--fox-neutral-800': 'var(--fox-color-grey-800)',
  '--fox-neutral-900': 'var(--fox-color-grey-900)',
  '--fox-neutral-1000': 'var(--fox-color-grey-1000)',
} as const;

export type ColorAlias = keyof typeof colorAliases;
export type ColorAliasValue = typeof colorAliases[ColorAlias];

