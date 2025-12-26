/**
 * Scale Primitives
 * Raw px values - the foundation for all numeric design values
 */

export const scalePrimitives = {
  '--fox-scale-0': '0px',
  '--fox-scale-25': '1px',
  '--fox-scale-50': '2px',
  '--fox-scale-100': '4px',
  '--fox-scale-150': '6px',
  '--fox-scale-200': '8px',
  '--fox-scale-300': '12px',
  '--fox-scale-350': '14px',
  '--fox-scale-400': '16px',
  '--fox-scale-450': '18px',
  '--fox-scale-500': '20px',
  '--fox-scale-550': '22px',
  '--fox-scale-650': '22px',
  '--fox-scale-600': '24px',
  '--fox-scale-700': '28px',
  '--fox-scale-800': '32px',
  '--fox-scale-900': '36px',
  '--fox-scale-1000': '40px',
  '--fox-scale-1100': '48px',
  '--fox-scale-1200': '56px',
  '--fox-scale-1300': '64px',
  '--fox-scale-1400': '72px',
  '--fox-scale-1500': '80px',
  '--fox-scale-1600': '88px',
  '--fox-scale-1700': '96px',
  '--fox-scale-1800': '104px',
  '--fox-scale-1900': '112px',
  '--fox-scale-2000': '120px',
  '--fox-scale-2100': '128px',
  '--fox-scale-2200': '136px',
  '--fox-scale-2300': '144px',
  '--fox-scale-2400': '152px',
  '--fox-scale-2500': '160px',
  '--fox-scale-2600': '168px',
  '--fox-scale-2700': '176px',
  '--fox-scale-2800': '184px',
  '--fox-scale-2900': '192px',
  '--fox-scale-3000': '200px',
  '--fox-scale-4000': '999px',
} as const;

export type ScalePrimitive = keyof typeof scalePrimitives;
export type ScalePrimitiveValue = typeof scalePrimitives[ScalePrimitive];

