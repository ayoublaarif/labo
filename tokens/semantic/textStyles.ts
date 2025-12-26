/**
 * Text Style Semantic Tokens
 * Composite styles that combine multiple typography tokens
 * These represent complete text styling definitions from Figma
 */

/**
 * Text styles are composite definitions that combine:
 * - Font family
 * - Font weight
 * - Font size
 * - Line height
 * - Letter spacing
 * 
 * These are not CSS variables themselves, but rather style definitions
 * that should be applied as a set of CSS properties.
 */

export const textStyleDefinitions = {
  '--fox-headline-small-bold': {
    fontFamily: 'var(--fox-font-family-main)',
    fontWeight: 'var(--fox-font-weight-200)',
    fontSize: 'var(--fox-font-size-200)',
    lineHeight: 'var(--fox-line-height-200)',
    letterSpacing: '0',
    // Actual weight value for CSS
    fontWeightValue: '800',
  },
  '--fox-label-large-bold': {
    fontFamily: 'var(--fox-font-family-main)',
    fontWeight: 'var(--fox-font-weight-200)',
    // font size/25 in Figma = 16px, which maps to scale-400 (16px)
    fontSize: 'var(--fox-scale-400)', // 16px
    lineHeight: 'var(--fox-line-height-100)',
    letterSpacing: '0',
    fontWeightValue: '800',
  },
  '--fox-body-large-regular': {
    fontFamily: 'var(--fox-font-family-main)',
    fontWeight: 'var(--fox-font-weight-100)',
    // font size/25 in Figma = 16px, which maps to scale-400 (16px)
    fontSize: 'var(--fox-scale-400)', // 16px
    lineHeight: 'var(--fox-line-height-200)',
    letterSpacing: '0',
    fontWeightValue: '400',
  },
  '--fox-body-large-bold': {
    fontFamily: 'var(--fox-font-family-main)',
    fontWeight: 'var(--fox-font-weight-200)',
    fontSize: 'var(--fox-font-size-100)', // 14px
    lineHeight: 'var(--fox-line-height-200)',
    letterSpacing: '0',
    fontWeightValue: '800',
  },
  '--fox-label-medium-regular': {
    fontFamily: 'var(--fox-font-family-main)',
    fontWeight: 'var(--fox-font-weight-100)',
    fontSize: 'var(--fox-font-size-100)', // 14px
    lineHeight: 'var(--fox-line-height-100)',
    letterSpacing: '0',
    fontWeightValue: '400',
  },
} as const;

export type TextStyleName = keyof typeof textStyleDefinitions;
export type TextStyleDefinition = typeof textStyleDefinitions[TextStyleName];

