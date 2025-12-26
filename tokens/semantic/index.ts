/**
 * Semantic Tokens Index
 * Exports all semantic tokens
 */

export * from './colors';
export * from './textStyles';

import { colorSemanticTokens } from './colors';
import { textStyleDefinitions } from './textStyles';

export const semanticTokens = {
  ...colorSemanticTokens,
} as const;

export const textStyles = {
  ...textStyleDefinitions,
} as const;

export type SemanticToken = keyof typeof semanticTokens;
export type SemanticTokenValue = typeof semanticTokens[SemanticToken];
export type TextStyle = keyof typeof textStyles;

