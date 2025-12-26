/**
 * Color Primitives
 * Raw hex color values - the foundation of the color system
 */

export const colorPrimitives = {
  '--fox-color-grey-0': '#2c2c2e',
  '--fox-color-grey-100': '#f5f5f5',
  '--fox-color-grey-200': '#f5f5f5b8',
  '--fox-color-grey-300': '#f5f5f57a',
  '--fox-color-grey-400': '#f5f5f552',
  '--fox-color-grey-500': '#f5f5f514',
  '--fox-color-grey-600': '#14141429',
  '--fox-color-grey-700': '#1414143d',
  '--fox-color-grey-800': '#14141466',
  '--fox-color-grey-900': '#141414b8',
  '--fox-color-grey-1000': '#141414',
} as const;

export type ColorPrimitive = keyof typeof colorPrimitives;
export type ColorPrimitiveValue = typeof colorPrimitives[ColorPrimitive];

