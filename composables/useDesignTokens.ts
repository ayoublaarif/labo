/**
 * Design Tokens Composable
 * Nuxt composable for accessing design tokens
 */

import {
  getPrimitive,
  getAlias,
  getSemantic,
  getToken,
  isPrimitive,
  isAlias,
  isSemantic,
  traceToken,
} from '~/tokens/utils';
import type { TokenName } from '~/tokens/types';

export const useDesignTokens = () => {
  /**
   * Get a primitive token value
   */
  const getPrimitiveToken = (name: string) => {
    return getPrimitive(name as any);
  };

  /**
   * Get an alias token value
   */
  const getAliasToken = (name: string) => {
    return getAlias(name as any);
  };

  /**
   * Get a semantic token value
   */
  const getSemanticToken = (name: string) => {
    return getSemantic(name as any);
  };

  /**
   * Get any token value
   */
  const getTokenValue = (name: TokenName) => {
    return getToken(name);
  };

  /**
   * Check if a token is a primitive
   */
  const checkIsPrimitive = (name: TokenName) => {
    return isPrimitive(name);
  };

  /**
   * Check if a token is an alias
   */
  const checkIsAlias = (name: TokenName) => {
    return isAlias(name);
  };

  /**
   * Check if a token is semantic
   */
  const checkIsSemantic = (name: TokenName) => {
    return isSemantic(name);
  };

  /**
   * Trace token chain from semantic → alias → primitive
   */
  const traceTokenChain = (name: TokenName) => {
    return traceToken(name);
  };

  return {
    getPrimitiveToken,
    getAliasToken,
    getSemanticToken,
    getTokenValue,
    checkIsPrimitive,
    checkIsAlias,
    checkIsSemantic,
    traceTokenChain,
  };
};

