/**
 * Design Token Utilities
 * Helper functions for working with design tokens
 */

import { primitives } from './primitives';
import { aliases } from './aliases';
import { semanticTokens } from './semantic';
import type { TokenName } from './types';

/**
 * Get a primitive token value
 */
export function getPrimitive(token: keyof typeof primitives): string {
  return primitives[token];
}

/**
 * Get an alias token value
 */
export function getAlias(token: keyof typeof aliases): string {
  return aliases[token];
}

/**
 * Get a semantic token value
 */
export function getSemantic(token: keyof typeof semanticTokens): string {
  return semanticTokens[token];
}

/**
 * Get any token value
 */
export function getToken(token: TokenName): string {
  if (token in primitives) {
    return getPrimitive(token as keyof typeof primitives);
  }
  if (token in aliases) {
    return getAlias(token as keyof typeof aliases);
  }
  if (token in semanticTokens) {
    return getSemantic(token as keyof typeof semanticTokens);
  }
  throw new Error(`Token "${token}" not found`);
}

/**
 * Check if a token is a primitive
 */
export function isPrimitive(token: TokenName): boolean {
  return token in primitives;
}

/**
 * Check if a token is an alias
 */
export function isAlias(token: TokenName): boolean {
  return token in aliases;
}

/**
 * Check if a token is semantic
 */
export function isSemantic(token: TokenName): boolean {
  return token in semanticTokens;
}

/**
 * Trace a token chain from semantic → alias → primitive
 */
export function traceToken(token: TokenName): string[] {
  const chain: string[] = [token];

  if (isSemantic(token)) {
    const semanticValue = getSemantic(token as keyof typeof semanticTokens);
    // Extract the referenced alias from var(--alias-name)
    const aliasMatch = semanticValue.match(/var\(([^)]+)\)/);
    if (aliasMatch) {
      const aliasName = aliasMatch[1] as TokenName;
      chain.push(aliasName);
      // Continue tracing if it's an alias
      if (isAlias(aliasName)) {
        const aliasValue = getAlias(aliasName as keyof typeof aliases);
        const primitiveMatch = aliasValue.match(/var\(([^)]+)\)/);
        if (primitiveMatch) {
          const primitiveName = primitiveMatch[1] as TokenName;
          chain.push(primitiveName);
        }
      }
    }
  } else if (isAlias(token)) {
    const aliasValue = getAlias(token as keyof typeof aliases);
    const primitiveMatch = aliasValue.match(/var\(([^)]+)\)/);
    if (primitiveMatch) {
      const primitiveName = primitiveMatch[1] as TokenName;
      chain.push(primitiveName);
    }
  }

  return chain;
}

