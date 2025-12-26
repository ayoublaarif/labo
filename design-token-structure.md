# Design Token Structure Analysis
## Adults Playground - Figma Design System

### Overview
This document analyzes the design token architecture in the Figma file, focusing on the three-tier variable system: **Primitives**, **Aliases**, and **Semantic Tokens**, plus **Text Styles** (composite styles), and how they connect to form a scalable design system.

---

## Variable Collection Architecture

The design system follows a three-tier token architecture plus composite text styles:

```
┌─────────────────────────────────────────┐
│         Text Styles                     │  ← Composite Layer
│  (--fox-headline-bold-small,           │
│   --fox-label-bold-large,              │
│   --fox-body-regular-large,            │
│   --fox-body-large-bold,               │
│   --fox-label-medium-regular)          │
└──────────────┬──────────────────────────┘
               │ combines
               ▼
┌─────────────────────────────────────────┐
│         Semantic Tokens                 │  ← Application Layer
│  (--fox-text-highlight,                │
│   --fox-text-lowlight,                  │
│   --fox-text-midlight,                  │
│   --fox-background-base)                │
└──────────────┬──────────────────────────┘
               │ references
               ▼
┌─────────────────────────────────────────┐
│            Aliases                      │  ← Abstraction Layer
│  (--fox-neutral-*, --fox-border-radius-*, │
│   --fox-font-size-*, --fox-spacing-*,     │
│   --fox-font-family-main, --fox-font-weight-*) │
└──────────────┬──────────────────────────┘
               │ references
               ▼
┌─────────────────────────────────────────┐
│          Primitives                     │  ← Foundation Layer
│  (--fox-color-grey-*, --fox-scale-*)  │
└─────────────────────────────────────────┘
```

---

## 1. Primitives (Foundation Layer)

**Purpose**: Raw, atomic design values that serve as the foundation of the design system. These are the only true primitives - all other tokens reference these.

**Naming Convention**: 
- Color primitives: `--fox-color-grey-{value}` pattern (e.g., `--fox-color-grey-100`, `--fox-color-grey-200`)
- Scale primitives: `--fox-scale-{value}` pattern (e.g., `--fox-scale-0`, `--fox-scale-25`, `--fox-scale-400`)

### Color Primitives

| Token Name | Value | Type | Description |
|------------|-------|------|-------------|
| `--fox-color-grey-100` | `#f5f5f5` | Color | Lightest grey (opaque) |
| `--fox-color-grey-200` | `#f5f5f5b8` | Color | Light grey (72% opacity) |
| `--fox-color-grey-300` | `#f5f5f57a` | Color | Light grey (48% opacity) |
| `--fox-color-grey-400` | `#f5f5f552` | Color | Light grey (32% opacity) |
| `--fox-color-grey-500` | `#f5f5f514` | Color | Light grey (8% opacity) |
| `--fox-color-grey-600` | `#14141429` | Color | Dark grey (16% opacity) |
| `--fox-color-grey-700` | `#1414143d` | Color | Dark grey (24% opacity) |
| `--fox-color-grey-800` | `#14141466` | Color | Dark grey (40% opacity) |
| `--fox-color-grey-900` | `#141414b8` | Color | Dark grey (72% opacity) |
| `--fox-color-grey-1000` | `#141414` | Color | Darkest grey (opaque) |

**Characteristics**:
- Direct hex color values (some with alpha channel)
- Range from lightest (100) to darkest (1000)
- No semantic meaning - pure color values

### Scale Primitives

| Token Name | Value | Type | Description |
|------------|-------|------|-------------|
| `--fox-scale-0` | `0rem` | Number | Zero spacing/size |
| `--fox-scale-25` | `0.0625rem` | Number | 1px equivalent |
| `--fox-scale-50` | `0.125rem` | Number | 2px equivalent |
| `--fox-scale-100` | `0.25rem` | Number | 4px equivalent |
| `--fox-scale-150` | `0.375rem` | Number | 6px equivalent |
| `--fox-scale-200` | `0.5rem` | Number | 8px equivalent |
| `--fox-scale-300-(12)` | `0.75rem` | Number | 12px equivalent |
| `--fox-scale-350` | `0.875rem` | Number | 14px equivalent |
| `--fox-scale-400-(16)` | `1rem` | Number | 16px equivalent |
| `--fox-scale-450` | `1.125rem` | Number | 18px equivalent |
| `--fox-scale-500-(20)` | `1.25rem` | Number | 20px equivalent |
| `--fox-scale-550` | `1.375rem` | Number | 22px equivalent |
| `--fox-scale-600-(24)` | `1.5rem` | Number | 24px equivalent |
| `--fox-scale-700-(28)` | `1.75rem` | Number | 28px equivalent |
| `--fox-scale-800-(32)` | `2rem` | Number | 32px equivalent |
| `--fox-scale-900-(36)` | `2.25rem` | Number | 36px equivalent |
| `--fox-scale-1000-(40)` | `2.5rem` | Number | 40px equivalent |
| `--fox-scale-1100-(48)` | `3rem` | Number | 48px equivalent |
| `--fox-scale-1200-(56)` | `3.5rem` | Number | 56px equivalent |
| `--fox-scale-1300-(64)` | `4rem` | Number | 64px equivalent |
| `--fox-scale-1400-(72)` | `4.5rem` | Number | 72px equivalent |
| `--fox-scale-1500-(80)` | `5rem` | Number | 80px equivalent |
| `--fox-scale-1600-(88)` | `5.5rem` | Number | 88px equivalent |
| `--fox-scale-1700-(96)` | `6rem` | Number | 96px equivalent |
| `--fox-scale-1800-(104)` | `6.5rem` | Number | 104px equivalent |
| `--fox-scale-1900-(112)` | `7rem` | Number | 112px equivalent |
| `--fox-scale-2000-(120)` | `7.5rem` | Number | 120px equivalent |
| `--fox-scale-2100-(128)` | `8rem` | Number | 128px equivalent |
| `--fox-scale-2200-(136)` | `8.5rem` | Number | 136px equivalent |
| `--fox-scale-2300-(144)` | `9rem` | Number | 144px equivalent |
| `--fox-scale-2400-(152)` | `9.5rem` | Number | 152px equivalent |
| `--fox-scale-2500-(160)` | `10rem` | Number | 160px equivalent |
| `--fox-scale-2600-(168)` | `10.5rem` | Number | 168px equivalent |
| `--fox-scale-2700-(176)` | `11rem` | Number | 176px equivalent |
| `--fox-scale-2800-(184)` | `11.5rem` | Number | 184px equivalent |
| `--fox-scale-2900-(192)` | `12rem` | Number | 192px equivalent |
| `--fox-scale-3000-(200)` | `12.5rem` | Number | 200px equivalent |
| `--fox-scale-4000-(999)` | `62.4375rem` | Number | 999px equivalent |

**Characteristics**:
- Direct rem values
- Some tokens include pixel equivalents in name (e.g., `--fox-scale-400-(16)`)
- Used for spacing, sizing, border-radius, font-size, line-height, etc.
- Foundation for all numeric design values

---

## 2. Aliases (Abstraction Layer)

**Purpose**: Named references to primitives that provide abstraction and enable easier maintenance and theming. These tokens reference primitives and give them contextual meaning.

**Naming Convention**: 
- Color aliases: `--fox-neutral-{value}` (references `--fox-color-grey-*`)
- Border aliases: `--fox-border-radius-{size}`, `--fox-border-width-{size}`
- Typography aliases: `--fox-font-size-{value}`, `--fox-line-height-{value}`, `--fox-letter-spacing-{level}`
- Spacing aliases: `--fox-spacing-{value}`
- Font aliases: `--fox-font-family-main`, `--fox-font-weight-{value}`

### Color Aliases

| Token Name | References Primitive | Description |
|------------|---------------------|-------------|
| `--fox-neutral-100` | `var(--fox-color-grey-100)` | Lightest neutral color |
| `--fox-neutral-200` | `var(--fox-color-grey-200)` | Light neutral color |
| `--fox-neutral-300` | `var(--fox-color-grey-300)` | Light neutral color (reduced opacity) |
| `--fox-neutral-400` | `var(--fox-color-grey-400)` | Light neutral color (more reduced opacity) |
| `--fox-neutral-500` | `var(--fox-color-grey-500)` | Light neutral color (minimal opacity) |
| `--fox-neutral-600` | `var(--fox-color-grey-600)` | Dark neutral color (minimal opacity) |
| `--fox-neutral-700` | `var(--fox-color-grey-700)` | Dark neutral color |
| `--fox-neutral-800` | `var(--fox-color-grey-800)` | Dark neutral color (increased opacity) |
| `--fox-neutral-900` | `var(--fox-color-grey-900)` | Dark neutral color (high opacity) |
| `--fox-neutral-1000` | `var(--fox-color-grey-1000)` | Darkest neutral color |

### Border Aliases

| Token Name | References Primitive | Description |
|------------|---------------------|-------------|
| `--fox-border-radius-sm` | `var(--fox-scale-100-(4))` | Small border radius (4px) |
| `--fox-border-radius-md` | `var(--fox-scale-200-(8))` | Medium border radius (8px) |
| `--fox-border-radius-lg` | `var(--fox-scale-400-(16))` | Large border radius (16px) |
| `--fox-border-radius-full` | `var(--fox-scale-4000-(999))` | Full border radius (999px) |
| `--fox-border-width-none` | `var(--fox-scale-0)` | No border width |
| `--fox-border-width-sm` | `var(--fox-scale-25-(1))` | Small border width (1px) |
| `--fox-border-width-md` | `var(--fox-scale-50-(2))` | Medium border width (2px) |
| `--fox-border-width-lg` | `var(--fox-scale-100-(4))` | Large border width (4px) |

### Typography Aliases

| Token Name | References Primitive | Description |
|------------|---------------------|-------------|
| `--fox-font-size-50` | `var(--fox-scale-300-(12))` | Small font size (12px) |
| `--fox-font-size-100` | `var(--fox-scale-350)` | Base font size (14px) |
| `--fox-font-size-200` | `var(--fox-scale-400-(16))` | Standard font size (16px) |
| `--fox-line-height-100` | `var(--fox-scale-400-(16))` | Base line height (16px) |
| `--fox-letter-spacing-low` | `var(--fox-scale-25-(1))` | Low letter spacing (1px) |
| `--fox-letter-spacing-medium` | `0.0938rem` | Medium letter spacing (1.5px) |
| `--fox-letter-spacing-high` | `var(--fox-scale-50-(2))` | High letter spacing (2px) |

### Spacing Aliases

| Token Name | References Primitive | Description |
|------------|---------------------|-------------|
| `--fox-spacing-50` | `var(--fox-scale-100-(4))` | Small spacing (4px) |
| `--fox-spacing-100` | `var(--fox-scale-200-(8))` | Base spacing (8px) |
| `--fox-spacing-200` | `var(--fox-scale-400-(16))` | Standard spacing (16px) |
| `--fox-spacing-300` | `var(--fox-scale-600-(24))` | Medium spacing (24px) |
| `--fox-spacing-400` | `var(--fox-scale-800-(32))` | Large spacing (32px) |
| `--fox-spacing-500` | `var(--fox-scale-1000-(40))` | Extra large spacing (40px) |
| `--fox-spacing-600` | `var(--fox-scale-1100-(48))` | Spacing (48px) |
| `--fox-spacing-700` | `var(--fox-scale-1200-(56))` | Spacing (56px) |
| `--fox-spacing-800` | `var(--fox-scale-1300-(64))` | Spacing (64px) |
| `--fox-spacing-900` | `var(--fox-scale-1400-(72))` | Spacing (72px) |
| `--fox-spacing-1000` | `var(--fox-scale-1500-(80))` | Spacing (80px) |
| `--fox-spacing-1100` | `var(--fox-scale-1600-(88))` | Spacing (88px) |
| `--fox-spacing-1200` | `var(--fox-scale-1700-(96))` | Spacing (96px) |
| `--fox-spacing-1300` | `var(--fox-scale-1800-(104))` | Spacing (104px) |
| `--fox-spacing-1400` | `var(--fox-scale-1900-(112))` | Spacing (112px) |
| `--fox-spacing-1500` | `var(--fox-scale-2000-(120))` | Spacing (120px) |
| `--fox-spacing-2000` | `var(--fox-scale-2500-(160))` | Spacing (160px) |

### Font String Aliases

| Token Name | Value | Type | Description |
|------------|-------|------|-------------|
| `--fox-font-family-main` | `Avenir` | String | Primary typeface family |
| `--fox-font-weight-500` | `Medium` | String | Medium font weight |
| `--fox-font-weight-700` | `Heavy` | String | Heavy/bold font weight |

**Characteristics**:
- All aliases reference primitives using `var()` except string values
- Provide semantic meaning to raw primitive values
- Enable single source of truth updates
- Support theming and mode switching
- Bridge between primitives and semantic tokens

**Connection Pattern**:
```
Primitive (--fox-color-grey-*, --fox-scale-*)
    ↓
Alias (--fox-neutral-*, --fox-spacing-*, --fox-font-size-*, etc.)
    ↓
Semantic Token (--fox-text-*, etc.)
```

---

## 3. Semantic Tokens (Application Layer)

**Purpose**: Context-aware tokens that combine aliases to represent design decisions and UI patterns. These tokens are used directly in components.

**Naming Convention**: 
- Format: `--fox-{context}-{variant}` (e.g., `--fox-text`, `--fox-text-highlight`, `--fox-text-lowlight`)

### Color Semantic Tokens

| Token Name | References Alias | Description |
|------------|------------------|-------------|
| `--fox-text` | `var(--fox-neutral-200)` | Default text color |
| `--fox-text-highlight` | `var(--fox-neutral-100)` | Highlighted/emphasized text color |
| `--fox-text-lowlight` | `var(--fox-neutral-400)` | De-emphasized/secondary text color |

**Characteristics**:
- Represent complete design decisions
- Reference aliases (never primitives directly)
- Context-specific (e.g., "text" indicates usage)
- Ready-to-use in components
- Enable design system consistency

---

## 4. Text Styles (Composite Styles)

**Purpose**: Pre-defined text style combinations that combine multiple typography tokens into reusable style definitions. These are composite styles that bundle font family, weight, size, line height, and letter spacing together.

**Naming Convention**: 
- Format: `--fox-{style-type}-{weight}-{size}` (e.g., `--fox-headline-bold-small`, `--fox-label-bold-large`, `--fox-body-regular-large`)

### Text Style Definitions

| Style Name | Font Family | Font Weight | Font Size | Line Height | Letter Spacing | Weight Value | Description |
|------------|-------------|-------------|-----------|-------------|----------------|--------------|-------------|
| `--fox-headline-bold-small` | `var(--fox-font-family-main)` | `var(--fox-font-weight-700)` | `var(--fox-font-size-200)` | `var(--fox-line-height-100)` | `0` | `800` | Small bold headline style (22px font size, 16px line height) |
| `--fox-label-bold-large` | `var(--fox-font-family-main)` | `var(--fox-font-weight-700)` | `font size/25` | `var(--fox-line-height-100)` | `0` | `800` | Large bold label style (16px font size, 16px line height) |
| `--fox-body-regular-large` | `var(--fox-font-family-main)` | `var(--fox-font-weight-500)` | `font size/25` | `var(--fox-line-height-100)` | `0` | `400` | Large regular body text style (16px font size, 16px line height) |
| `--fox-body-large-bold` | `var(--fox-font-family-main)` | `var(--fox-font-weight-700)` | `var(--fox-font-size-100)` | `var(--fox-line-height-100)` | `0` | `800` | Large bold body style (14px font size, 16px line height) |
| `--fox-label-medium-regular` | `var(--fox-font-family-main)` | `var(--fox-font-weight-500)` | `var(--fox-font-size-100)` | `var(--fox-line-height-100)` | `0` | `400` | Medium regular label style (14px font size, 16px line height) |

**Style Breakdown**:

#### `--fox-headline-bold-small`
- **Family**: Avenir (via `--fox-font-family-main`)
- **Weight**: Heavy (via `--fox-font-weight-700`, actual weight: 800)
- **Size**: 22px (via `--fox-font-size-200`)
- **Line Height**: 16px (via `--fox-line-height-100`)
- **Letter Spacing**: 0
- **Usage**: Small headlines, section titles
- **Token Chain**: `--fox-font-size-200` → `--fox-scale-550` (22px)

#### `--fox-label-bold-large`
- **Family**: Avenir (via `--fox-font-family-main`)
- **Weight**: Heavy (via `--fox-font-weight-700`, actual weight: 800)
- **Size**: 16px (via `font size/25` - Figma internal token)
- **Line Height**: 16px (via `--fox-line-height-100`)
- **Letter Spacing**: 0
- **Usage**: Large labels, prominent text elements
- **Note**: Uses `font size/25` which is a Figma-specific token (16px). In implementation, this maps to `--fox-scale-400` (16px).

#### `--fox-body-regular-large`
- **Family**: Avenir (via `--fox-font-family-main`)
- **Weight**: Roman (via `--fox-font-weight-500`, actual weight: 400)
- **Size**: 16px (via `font size/25` - Figma internal token)
- **Line Height**: 16px (via `--fox-line-height-100`)
- **Letter Spacing**: 0
- **Usage**: Large body text, readable content
- **Note**: Uses `font size/25` which is a Figma-specific token (16px). In implementation, this maps to `--fox-scale-400` (16px).

#### `--fox-body-large-bold`
- **Family**: Avenir (via `--fox-font-family-main`)
- **Weight**: Heavy (via `--fox-font-weight-700`, actual weight: 800)
- **Size**: 14px (via `--fox-font-size-100`)
- **Line Height**: 16px (via `--fox-line-height-100`)
- **Letter Spacing**: 0
- **Usage**: Large bold body text, emphasized content
- **Token Chain**: `--fox-font-size-100` → `--fox-scale-350` (14px)

#### `--fox-label-medium-regular`
- **Family**: Avenir (via `--fox-font-family-main`)
- **Weight**: Roman (via `--fox-font-weight-500`, actual weight: 400)
- **Size**: 14px (via `--fox-font-size-100`)
- **Line Height**: 16px (via `--fox-line-height-100`)
- **Letter Spacing**: 0
- **Usage**: Medium regular labels, secondary text
- **Token Chain**: `--fox-font-size-100` → `--fox-scale-350` (14px)

**Characteristics**:
- Composite styles that combine multiple typography tokens
- Provide complete text styling in a single reference
- Enable consistent typography across the design system
- Reference aliases and semantic tokens, not primitives directly
- Can be used in CSS or component styling

**Note**: The actual pixel values shown in Figma may differ from the rem-based token values due to browser rendering or Figma's internal calculations. The token references are the source of truth.

---

## Connection Points Between Collections

### Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    PRIMITIVES                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ --fox-     │  │ --fox-     │  │ --fox-      │     │
│  │ color-      │  │ color-      │  │ scale-*     │     │
│  │ grey-100    │  │ grey-200    │  │ (0, 25, 50, │     │
│  │ #f5f5f5     │  │ #f5f5f5b8   │  │  100, 200,  │     │
│  └──────────────┘  └──────────────┘  │  ...)       │     │
│  ┌──────────────┐  ┌──────────────┐  └──────────────┘     │
│  │ --fox-     │  │ ...          │                      │
│  │ color-      │  │               │                      │
│  │ grey-1000   │  │               │                      │
│  │ #141414     │  │               │                      │
│  └──────────────┘  └──────────────┘                      │
└─────────────────────────────────────────────────────────────┘
                        │
                        │ referenced by
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                      ALIASES                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │ --fox-     │  │ --fox-     │  │ --fox-      │    │
│  │ neutral-*   │  │ spacing-*   │  │ font-size-*  │    │
│  │ → color-    │  │ → scale-*   │  │ → scale-*   │    │
│  │   grey-*    │  │             │  │             │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │ --fox-     │  │ --fox-     │  │ --fox-      │    │
│  │ border-     │  │ line-       │  │ font-        │    │
│  │ radius-*    │  │ height-*    │  │ family-main  │    │
│  │ → scale-*   │  │ → scale-*   │  │ (direct)     │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
└─────────────────────────────────────────────────────────────┘
                        │
                        │ referenced by
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                 SEMANTIC TOKENS                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ --fox-text                                           │  │
│  │ → var(--fox-neutral-200)                            │  │
│  │   → var(--fox-color-grey-200)                       │  │
│  │                                                       │  │
│  │ --fox-text-highlight                                 │  │
│  │ → var(--fox-neutral-100)                            │  │
│  │   → var(--fox-color-grey-100)                       │  │
│  │                                                       │  │
│  │ --fox-text-lowlight                                  │  │
│  │ → var(--fox-neutral-400)                            │  │
│  │   → var(--fox-color-grey-400)                       │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Connection Rules

1. **Primitives → Aliases**
   - Aliases reference primitives using `var(--primitive-name)`
   - Example: `--fox-neutral-100` references `var(--fox-color-grey-100)`
   - Example: `--fox-spacing-200` references `var(--fox-scale-400-(16))`
   - Some aliases are direct string values (e.g., `--fox-font-family-main: Avenir`)

2. **Aliases → Semantic Tokens**
   - Semantic tokens reference aliases (never primitives directly)
   - Example: `--fox-text-highlight` references `var(--fox-neutral-100)`
   - Example: `--fox-text` references `var(--fox-neutral-200)`

3. **No Direct Primitive → Semantic**
   - Semantic tokens do NOT directly reference primitives
   - All primitive access goes through aliases first

4. **String Values in Aliases**
   - Some aliases contain direct string values (not references)
   - Examples: `--fox-font-family-main: Avenir`, `--fox-font-weight-700: Heavy`
   - These are still considered aliases as they provide semantic meaning

---

## Naming Convention Patterns

### Primitives
- **Colors**: `--fox-color-grey-{value}` (e.g., `--fox-color-grey-100`, `--fox-color-grey-1000`)
- **Scales**: `--fox-scale-{value}` or `--fox-scale-{value}-({px})` (e.g., `--fox-scale-400-(16)`)

### Aliases
- **Colors**: `--fox-neutral-{value}` (references `--fox-color-grey-*`)
- **Spacing**: `--fox-spacing-{value}` (references `--fox-scale-*`)
- **Typography**: `--fox-font-size-{value}`, `--fox-line-height-{value}`, `--fox-letter-spacing-{level}` (references `--fox-scale-*`)
- **Borders**: `--fox-border-radius-{size}`, `--fox-border-width-{size}` (references `--fox-scale-*`)
- **Fonts**: `--fox-font-family-main`, `--fox-font-weight-{value}` (direct string values)

### Semantic Tokens
- **Format**: `--fox-{context}-{variant}` (e.g., `--fox-text`, `--fox-text-highlight`, `--fox-text-lowlight`)

---

## Implementation in Code

### CSS Variable Structure

```css
/* PRIMITIVES */
:root {
  /* Color Primitives */
  --fox-color-grey-100: #f5f5f5;
  --fox-color-grey-200: #f5f5f5b8;
  --fox-color-grey-300: #f5f5f57a;
  --fox-color-grey-400: #f5f5f552;
  --fox-color-grey-500: #f5f5f514;
  --fox-color-grey-600: #14141429;
  --fox-color-grey-700: #1414143d;
  --fox-color-grey-800: #14141466;
  --fox-color-grey-900: #141414b8;
  --fox-color-grey-1000: #141414;

  /* Scale Primitives */
  --fox-scale-0: 0rem;
  --fox-scale-25: 0.0625rem;
  --fox-scale-50: 0.125rem;
  --fox-scale-100: 0.25rem;
  --fox-scale-200: 0.5rem;
  --fox-scale-400-(16): 1rem;
  --fox-scale-600-(24): 1.5rem;
  /* ... more scales ... */
}

/* ALIASES */
:root {
  /* Color Aliases */
  --fox-neutral-100: var(--fox-color-grey-100);
  --fox-neutral-200: var(--fox-color-grey-200);
  --fox-neutral-300: var(--fox-color-grey-300);
  /* ... more neutrals ... */

  /* Spacing Aliases */
  --fox-spacing-50: var(--fox-scale-100-(4));
  --fox-spacing-100: var(--fox-scale-200-(8));
  --fox-spacing-200: var(--fox-scale-400-(16));
  /* ... more spacing ... */

  /* Typography Aliases */
  --fox-font-size-50: var(--fox-scale-300-(12));
  --fox-font-size-100: var(--fox-scale-350);
  --fox-font-size-200: var(--fox-scale-400-(16));
  --fox-line-height-100: var(--fox-scale-400-(16));
  --fox-letter-spacing-low: var(--fox-scale-25-(1));

  /* Border Aliases */
  --fox-border-radius-sm: var(--fox-scale-100-(4));
  --fox-border-radius-md: var(--fox-scale-200-(8));
  --fox-border-width-sm: var(--fox-scale-25-(1));

  /* Font String Aliases */
  --fox-font-family-main: Avenir;
  --fox-font-weight-500: Medium;
  --fox-font-weight-700: Heavy;
}

/* SEMANTIC TOKENS */
:root {
  --fox-text: var(--fox-neutral-200);
  --fox-text-highlight: var(--fox-neutral-100);
  --fox-text-lowlight: var(--fox-neutral-400);
}
```

### Usage in Components

```html
<p class="text-content">
  Default text
</p>
<p class="text-emphasis">
  Highlighted text
</p>
<p class="text-muted">
  Muted text
</p>
```

```css
.text-content {
  color: var(--fox-text);
  /* Uses: --fox-text → --fox-neutral-200 → --fox-color-grey-200 */
}

.text-emphasis {
  color: var(--fox-text-highlight);
  /* Uses: --fox-text-highlight → --fox-neutral-100 → --fox-color-grey-100 */
}

.text-muted {
  color: var(--fox-text-lowlight);
  /* Uses: --fox-text-lowlight → --fox-neutral-400 → --fox-color-grey-400 */
}
```

---

## Benefits of This Architecture

### 1. **Maintainability**
- Change a primitive value → automatically updates all dependent tokens
- Single source of truth for design values
- Example: Update `--fox-color-grey-100` → all `--fox-neutral-100` and `--fox-text-highlight` update automatically

### 2. **Scalability**
- Easy to add new tokens at any layer
- Clear separation of concerns
- Scales can be reused across different contexts

### 3. **Theming Support**
- Aliases can be swapped for different themes
- Primitives remain stable across themes
- Mode switching (light/dark) can be implemented at the alias or semantic level

### 4. **Designer-Developer Alignment**
- Clear naming conventions
- Semantic tokens match design intent
- Aliases provide meaningful intermediate abstractions

### 5. **Type Safety**
- Hierarchical structure enables type checking
- Prevents invalid token combinations
- Clear dependency chain: Primitives → Aliases → Semantic

---

## Recommendations for Nuxt Implementation

### 1. Token File Structure
```
tokens/
├── primitives/
│   ├── colors.ts
│   └── scales.ts
├── aliases/
│   ├── colors.ts
│   ├── spacing.ts
│   ├── typography.ts
│   ├── borders.ts
│   └── fonts.ts
└── semantic/
    └── colors.ts
```

### 2. TypeScript Types
```typescript
// Primitives
type ColorPrimitive = `--fox-color-grey-${number}`;
type ScalePrimitive = `--fox-scale-${number}` | `--fox-scale-${number}-(${number})`;

// Aliases
type NeutralAlias = `--fox-neutral-${number}`;
type SpacingAlias = `--fox-spacing-${number}`;
type FontSizeAlias = `--fox-font-size-${number}`;
type SemanticToken = `--fox-text` | `--fox-text-highlight` | `--fox-text-lowlight`;
```

### 3. CSS Variable Generation
- Generate CSS custom properties from token files
- Maintain the three-tier structure
- Support fallback values
- Ensure proper `var()` references

### 4. Composable Functions
```typescript
// composables/useDesignTokens.ts
export const useDesignTokens = () => {
  const getPrimitive = (name: string) => { ... }
  const getAlias = (name: string) => { ... }
  const getSemantic = (name: string) => { ... }
  
  // Helper to trace token chain
  const traceToken = (semanticToken: string) => {
    // Returns: semantic → alias → primitive chain
  }
}
```

---

## Summary

The design system uses a **three-tier token architecture** plus **composite text styles**:

1. **Primitives**: Only `--fox-color-grey-*` variables and `--fox-scale-*` values - the absolute foundation with raw hex colors and rem values

2. **Aliases**: References to primitives using `var()` (e.g., `--fox-neutral-*`, `--fox-spacing-*`, `--fox-font-size-*`) plus direct string values (e.g., `--fox-font-family-main`, `--fox-font-weight-*`)

3. **Semantic Tokens**: Context-aware tokens that reference aliases (e.g., `--fox-text-highlight`, `--fox-text-lowlight`, `--fox-text-midlight`, `--fox-background-base`)

4. **Text Styles**: Composite styles that combine multiple typography tokens into reusable style definitions (e.g., `--fox-headline-bold-small`, `--fox-label-bold-large`, `--fox-body-regular-large`, `--fox-body-large-bold`, `--fox-label-medium-regular`)

**Key Connection Points**:
- **Primitives → Aliases**: All aliases reference primitives using `var(--primitive-name)` or are direct string values
- **Aliases → Semantic Tokens**: Semantic tokens reference aliases, never primitives directly
- **No Primitives → Semantic**: Semantic tokens do not directly access primitives
- **Text Styles**: Composite styles that combine multiple typography tokens for complete text styling

**Important Distinctions**:
- Primitives contain only raw values: hex colors (`--fox-color-grey-*`) and rem scales (`--fox-scale-*`)
- Aliases provide semantic meaning: `--fox-neutral-*` (colors), `--fox-spacing-*` (spacing), `--fox-font-size-*` (typography)
- Semantic tokens represent usage: `--fox-text-*` (text colors), `--fox-background-base` (background colors)
- Text styles combine typography tokens: `--fox-headline-*`, `--fox-label-*`, `--fox-body-*` (complete text styling)

This structure enables maintainability, scalability, and theming while keeping the design system organized and developer-friendly. Changes to primitives cascade through aliases to semantic tokens automatically. Text styles provide ready-to-use typography combinations for consistent design implementation.
