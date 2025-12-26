# Adults Playground - Portfolio

A Nuxt 3 portfolio project with a design system built from Figma variables.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── assets/
│   └── css/
│       └── tokens.css          # Generated CSS variables
├── components/
│   └── ModalHeader.vue         # Modal Header component
├── composables/
│   └── useDesignTokens.ts      # Design tokens composable
├── pages/
│   └── index.vue               # Component test page
├── tokens/                     # Design token system
│   ├── primitives/             # Foundation tokens
│   ├── aliases/                # Abstraction layer
│   └── semantic/               # Application layer
└── nuxt.config.ts              # Nuxt configuration
```

## Design Tokens

The design system uses a three-tier token architecture:

- **Primitives**: Raw values (`--fox-color-grey-*`, `--fox-scale-*`)
- **Aliases**: References to primitives (`--fox-neutral-*`, `--fox-spacing-*`, etc.)
- **Semantic**: Context-aware tokens (`--fox-text-*`, `--fox-background-base`)

See `tokens/README.md` for detailed documentation.

## Components

### ModalHeader

A header component for modals with:
- Close button (optional)
- Title text
- Action button (optional)

**Usage:**
```vue
<ModalHeader
  title="Modal Title"
  :show-close-button="true"
  :show-action-button="false"
  @close="handleClose"
  @action="handleAction"
/>
```

**Props:**
- `title` (string, required) - The header title
- `showCloseButton` (boolean, default: true) - Show/hide close button
- `showActionButton` (boolean, default: false) - Show/hide action button
- `nodeId` (string, optional) - Figma node ID for tracking

**Events:**
- `@close` - Emitted when close button is clicked
- `@action` - Emitted when action button is clicked

**Slots:**
- `action` - Custom action button content

## Testing Components

Visit `/` to see the component test page with all variants of the ModalHeader component.

## Next Steps

1. Import more components from Figma
2. Replace placeholder SVG icons with actual Figma assets
3. Add more semantic tokens as needed
4. Build out additional design system components

