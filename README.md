# Octo Design System

A design system documentation site based on components from the Octo UI project. This reverse-engineers existing components to create a comprehensive design system.

## Project Structure

```
src/
├── components/          # Documented components from Octo
│   ├── Button/         # Enhanced Vuetify button with responsive behavior
│   └── Dialog/         # Standardized dialog with loading states
├── tokens/             # Design tokens (colors, spacing, etc.)
│   ├── colors.ts       # Color system based on Vuetify themes
│   └── spacing.ts      # Spacing system following 4px grid
├── docs/               # Component documentation pages
└── playground/         # Interactive component playground
```

## Components

### Button
Enhanced Vuetify button with:
- Responsive icon/text switching based on breakpoints
- Integrated tooltip support
- TypeScript prop definitions

### Dialog
Standardized dialog component with:
- Loading overlay states
- Submit/cancel action patterns
- Configurable toolbar and actions
- Scrollable content support

### Tables
Comprehensive data table standards with:
- Column alignment rules (numerical/actions/text)
- Column width strategy (hugging vs. filling)
- 4 action button patterns (clickable name, text button, icon buttons, menu)
- Percentage change pattern with icon + colored text
- Provider/vendor icon pattern with theme-aware colors
- Status chips sizing and variants
- Formatting standards (2 decimal places for percentages)

## Design Tokens

### Colors
Based on Vuetify's theme system with light/dark mode support:
- Primary, secondary, accent colors
- Semantic colors (error, warning, success, info)
- Surface and background colors
- Contrast-aware text colors

### Spacing
Following 4px base unit system:
- Consistent spacing scale (4px, 8px, 16px, etc.)
- Common spacing patterns for components
- Utility functions for formatting

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

## Usage

```typescript
import { Button, Dialog } from '@/components'
import { getColor, spacing } from '@/tokens'

// Use design tokens
const primaryColor = getColor('primary', 'light')
const cardPadding = spacing[4] // 16px
```

This design system is built to document and organize the excellent component work already done in the Octo UI project.