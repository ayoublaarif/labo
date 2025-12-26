/**
 * Color Semantic Tokens
 * Context-aware tokens that reference aliases for specific use cases
 */

export const colorSemanticTokens = {
  '--fox-text-highlight': 'var(--fox-neutral-100)',
  '--fox-text-lowlight': 'var(--fox-neutral-400)',
  '--fox-text-midlight': 'var(--fox-neutral-200)',
  '--fox-background-base': 'var(--fox-neutral-0)',
} as const;

export type ColorSemanticToken = keyof typeof colorSemanticTokens;
export type ColorSemanticTokenValue = typeof colorSemanticTokens[ColorSemanticToken];

