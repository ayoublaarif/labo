/**
 * Spacing Aliases
 * References to scale primitives for spacing values
 */

export const spacingAliases = {
  '--fox-spacing-50': 'var(--fox-scale-100)',
  '--fox-spacing-100': 'var(--fox-scale-200)',
  '--fox-spacing-200': 'var(--fox-scale-400)',
  '--fox-spacing-300': 'var(--fox-scale-600)',
  '--fox-spacing-400': 'var(--fox-scale-800)',
  '--fox-spacing-500': 'var(--fox-scale-1000)',
  '--fox-spacing-600': 'var(--fox-scale-1100)',
  '--fox-spacing-700': 'var(--fox-scale-1200)',
  '--fox-spacing-800': 'var(--fox-scale-1300)',
  '--fox-spacing-900': 'var(--fox-scale-1400)',
  '--fox-spacing-1000': 'var(--fox-scale-1500)',
  '--fox-spacing-1100': 'var(--fox-scale-1600)',
  '--fox-spacing-1200': 'var(--fox-scale-1700)',
  '--fox-spacing-1300': 'var(--fox-scale-1800)',
  '--fox-spacing-1400': 'var(--fox-scale-1900)',
  '--fox-spacing-1500': 'var(--fox-scale-2000)',
  '--fox-spacing-2000': 'var(--fox-scale-2500)',
} as const;

export type SpacingAlias = keyof typeof spacingAliases;
export type SpacingAliasValue = typeof spacingAliases[SpacingAlias];

