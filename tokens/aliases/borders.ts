/**
 * Border Aliases
 * References to scale primitives for border values
 */

export const borderAliases = {
  '--fox-border-radius-sm': 'var(--fox-scale-100)',
  '--fox-border-radius-md': 'var(--fox-scale-200)',
  '--fox-border-radius-lg': 'var(--fox-scale-400)',
  '--fox-border-radius-full': 'var(--fox-scale-4000)',
  '--fox-border-width-none': 'var(--fox-scale-0)',
  '--fox-border-width-sm': 'var(--fox-scale-25)',
  '--fox-border-width-md': 'var(--fox-scale-50)',
  '--fox-border-width-lg': 'var(--fox-scale-100)',
} as const;

export type BorderAlias = keyof typeof borderAliases;
export type BorderAliasValue = typeof borderAliases[BorderAlias];

