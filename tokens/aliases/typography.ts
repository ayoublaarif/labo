/**
 * Typography Aliases
 * References to scale primitives for typography values
 */

export const typographyAliases = {
  '--fox-font-size-50': 'var(--fox-scale-300)',
  '--fox-font-size-100': 'var(--fox-scale-350)',
  '--fox-font-size-200': 'var(--fox-scale-550)', // 22px
  '--fox-font-size-500': 'var(--fox-scale-550)',
  '--fox-line-height-100': 'var(--fox-scale-400)',
  '--fox-line-height-200': 'var(--fox-scale-600)',
  '--fox-letter-spacing-low': 'var(--fox-scale-25)',
  '--fox-letter-spacing-medium': '1.5px',
  '--fox-letter-spacing-high': 'var(--fox-scale-50)',
} as const;

export type TypographyAlias = keyof typeof typographyAliases;
export type TypographyAliasValue = typeof typographyAliases[TypographyAlias];

