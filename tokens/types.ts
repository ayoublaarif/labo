/**
 * Design Token Types
 * TypeScript types for design tokens
 */

import type { ColorPrimitive, ScalePrimitive } from './primitives';
import type {
  ColorAlias,
  SpacingAlias,
  TypographyAlias,
  BorderAlias,
  FontAlias,
} from './aliases';
import type { ColorSemanticToken } from './semantic';

/**
 * All primitive token names
 */
export type PrimitiveToken = ColorPrimitive | ScalePrimitive;

/**
 * All alias token names
 */
export type AliasToken =
  | ColorAlias
  | SpacingAlias
  | TypographyAlias
  | BorderAlias
  | FontAlias;

/**
 * All semantic token names
 */
export type SemanticToken = ColorSemanticToken;

/**
 * All token names
 */
export type TokenName = PrimitiveToken | AliasToken | SemanticToken;

/**
 * Token category
 */
export type TokenCategory = 'primitive' | 'alias' | 'semantic';

/**
 * Token type
 */
export type TokenType =
  | 'color'
  | 'scale'
  | 'spacing'
  | 'typography'
  | 'border'
  | 'font';

/**
 * Helper type to check if a token is a primitive
 */
export type IsPrimitive<T extends TokenName> = T extends PrimitiveToken
  ? true
  : false;

/**
 * Helper type to check if a token is an alias
 */
export type IsAlias<T extends TokenName> = T extends AliasToken ? true : false;

/**
 * Helper type to check if a token is semantic
 */
export type IsSemantic<T extends TokenName> = T extends SemanticToken
  ? true
  : false;

