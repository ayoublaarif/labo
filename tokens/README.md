# Design Tokens

This directory contains the design token system for the Adults Playground portfolio, structured to match the Figma variable architecture.

## Structure

```
tokens/
├── primitives/          # Foundation layer - raw values
│   ├── colors.ts       # Color primitives (--fox-color-grey-*)
│   ├── scales.ts       # Scale primitives (--fox-scale-*)
│   └── index.ts        # Primitives export
├── aliases/            # Abstraction layer - references to primitives
│   ├── colors.ts       # Color aliases (--fox-neutral-*)
│   ├── spacing.ts      # Spacing aliases (--fox-spacing-*)
│   ├── typography.ts   # Typography aliases (--fox-font-size-*, etc.)
│   ├── borders.ts      # Border aliases (--fox-border-radius-*, etc.)
│   ├── fonts.ts        # Font string aliases (--fox-font-family-main, etc.)
│   └── index.ts        # Aliases export
├── semantic/           # Application layer - context-aware tokens
│   ├── colors.ts       # Color semantic tokens (--fox-text-*)
│   └── index.ts        # Semantic tokens export
├── types.ts            # TypeScript type definitions
├── utils.ts            # Utility functions
├── css.ts              # CSS generation utilities
└── index.ts            # Main entry point
```

## Usage

### In TypeScript/JavaScript

```typescript
import { getToken, traceToken } from '~/tokens/utils';
import type { TokenName } from '~/tokens/types';

// Get a token value
const textColor = getToken('--fox-text');

// Trace token chain
const chain = traceToken('--fox-text');
// Returns: ['--fox-text', '--fox-neutral-200', '--fox-color-grey-200']
```

### In Nuxt Composables

```typescript
const { getTokenValue, traceTokenChain } = useDesignTokens();

// Get token value
const spacing = getTokenValue('--fox-spacing-200');

// Trace chain
const chain = traceTokenChain('--fox-text-highlight');
```

### In CSS

The tokens are automatically available as CSS custom properties when you import the CSS file:

```css
/* Import in nuxt.config.ts or app.vue */
@import '~/assets/css/tokens.css';

/* Use in components */
.my-component {
  color: var(--fox-text);
  padding: var(--fox-spacing-200);
  border-radius: var(--fox-border-radius-lg);
}
```

### In Vue Components

```vue
<template>
  <div class="text-content">
    <p>Default text</p>
    <p class="highlight">Highlighted text</p>
  </div>
</template>

<style scoped>
.text-content {
  color: var(--fox-text);
}

.highlight {
  color: var(--fox-text-highlight);
}
</style>
```

## Token Architecture

The design system follows a three-tier architecture:

1. **Primitives** → Raw values (colors, scales)
2. **Aliases** → References to primitives with semantic meaning
3. **Semantic Tokens** → Context-aware tokens for specific use cases

All tokens use the `--fox-` prefix to avoid naming conflicts.

## Type Safety

All tokens are fully typed with TypeScript:

```typescript
import type { TokenName, PrimitiveToken, AliasToken, SemanticToken } from '~/tokens/types';

// Type-safe token names
const color: PrimitiveToken = '--fox-color-grey-100';
const spacing: AliasToken = '--fox-spacing-200';
const text: SemanticToken = '--fox-text';
```

## Adding New Tokens

1. Add the token to the appropriate file (primitives, aliases, or semantic)
2. Export it from the index file
3. The types will be automatically updated
4. Regenerate CSS if needed using `generateAllCSS()` from `tokens/css.ts`

