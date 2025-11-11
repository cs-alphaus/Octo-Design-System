# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server with host binding
npm run dev

# Build for production (runs type-check and build-only in parallel)
npm run build

# Type checking only
npm run type-check

# Lint and auto-fix code
npm run lint

# Format code with Prettier
npm run format

# Preview production build
npm run preview
```

## Project Architecture

This is a **Vue 3 + Vuetify design system documentation site** that reverse-engineers components from the Octo UI project. The architecture follows these key patterns:

### Core Structure
- **Vue 3 Composition API** with TypeScript throughout
- **Vuetify 3** as the UI framework with Material Design 3 blueprint
- **Vue Router** for navigation between component documentation pages
- **Vite** for build tooling with `@` alias pointing to `src/`

### Design System Organization

**Design Tokens** (`src/tokens/`):
- `colors.ts` - Complete Octo color system with light/dark themes
- `spacing.ts` - 4px grid-based spacing system
- `index.ts` - Exports all tokens via functions like `getColor()`, `spacing[]`

**Components** (`src/components/`):
- Enhanced Vuetify components with additional props and behaviors
- Each major component has its own directory (Button/, Dialog/)
- Components export via `src/components/index.ts`
- All components use TypeScript `<script setup>` syntax

**Documentation Views** (`src/views/`):
- `foundations/` - Color, typography, spacing documentation
- `components/` - Interactive component documentation pages
- Views demonstrate components and provide usage examples

### Key Architectural Decisions

**Vuetify Integration**:
- Custom theme configuration in `main.ts` using Octo's exact colors
- Global component defaults set for consistent styling
- Material Design Icons (`@mdi/font`) for iconography

**Component Enhancement Pattern**:
- Components extend Vuetify base components with additional functionality
- Enhanced Button has responsive icon/text switching and tooltip integration
- Enhanced Dialog includes loading states and standardized action patterns

**Theme System**:
- Dual light/dark theme support via Vuetify's theme system
- Colors are sourced from design tokens, not hardcoded
- Theme toggle functionality in main navigation

**TypeScript Configuration**:
- Uses Vue-specific TypeScript config (`@vue/tsconfig`)
- Path mapping configured for `@/*` imports
- Composite project structure for optimal build performance

When working with this codebase, follow existing patterns of component enhancement rather than creating entirely new components. Use the design token system for colors and spacing rather than magic numbers.