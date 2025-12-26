/**
 * Font Aliases
 * Font family and weight values
 */

export const fontAliases = {
  '--fox-font-family-main': 'Avenir',
  '--fox-font-weight-100': '400',
  '--fox-font-weight-200': '800',
} as const;

export type FontAlias = keyof typeof fontAliases;
export type FontAliasValue = typeof fontAliases[FontAlias];

