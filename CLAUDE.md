# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository, and serves as a comprehensive design system blueprint for the Octo UI project.

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

## Project Overview

This is a **Vue 3 + Vuetify Material Design application** that serves as both a working application and design system reference. The architecture follows modern Vue 3 patterns with TypeScript throughout and can be used as a blueprint for creating new projects with the same design system setup.

## 🎨 UI Framework & Design System

### Core UI Library
- **Vuetify 3.9.2** - Material Design 3 Vue.js component framework
- **Material Design 3 Blueprint** - Using `md3` blueprint for modern Material Design
- **Material Design Icons (MDI)** - Icon set with custom aliases and extensions

### Theme Configuration
```typescript
// Light and dark theme support with custom color schemes
themes: {
  light: { colors: allColors.light },
  dark: { dark: true, colors: allColors.dark }
}

// Component defaults for consistent styling
VBtn: {
  color: 'secondary',
  variant: 'tonal',
  elevation: 0,
  class: 'text-none'
}
VTextField: { color: 'primary', variant: 'outlined' }
VSelect: { variant: 'outlined', density: 'comfortable', hideDetails: true }
```

### Custom Icon System
- **Provider Icons**: AWS, Azure, GCP, Terraform, etc.
- **Avatar Icons**: Themed octopus avatars (Christmas, Halloween, Engineer, etc.)
- **Flag Icons**: Internationalization support (JP, US)
- **Custom Figma Icons**: Imported from design system
- Icon helper function: `getIconName()` for consistent icon usage

## 🏗️ Technical Stack

### Frontend Framework
- **Vue 3.5.17** with Composition API
- **TypeScript 5.8.3** for type safety
- **Vite 7.0.5** for fast development and building
- **Pinia 3.0.3** for state management

### Development Tools
- **Vue DevTools** - Development debugging
- **ESLint + Prettier** - Code quality and formatting
- **Vitest** - Unit testing
- **Cypress** - E2E testing
- **SASS** - CSS preprocessing
- **Vite** with `@` alias pointing to `src/` for clean imports

### Additional Libraries
- **VueUse** - Vue composition utilities
- **Vue Router 4.5.1** - Client-side routing
- **Vue i18n** - Internationalization (EN/JA support)
- **Auth0** - Authentication
- **Vee-validate + Yup** - Form validation
- **Day.js** - Date manipulation
- **ECharts** - Data visualization
- **GridStack** - Dashboard layouts
- **Axios** - HTTP client

### Monitoring & Analytics
- **Sentry** - Error tracking
- **Mixpanel** - User analytics
- **Intercom** - Customer support

## 🧩 Component Architecture

### Component Organization
```
src/
├── components/
│   ├── customs/           # Reusable UI components
│   ├── icons/            # SVG icon components
│   └── CostGroupKit/     # Domain-specific components
├── views/
│   └── App/              # Layout components
├── plugins/              # Framework configurations
├── helpers/              # Utility functions
├── tokens/               # Design tokens (if applicable)
└── assets/              # Global styles
```

### Key Architectural Patterns

**Vuetify Integration**:
- Custom theme configuration using Octo's exact color system
- Global component defaults set for consistent styling
- Material Design Icons (`@mdi/font`) for iconography
- Enhanced Vuetify components with additional props and behaviors

**Component Enhancement Pattern**:
- Components extend Vuetify base components with additional functionality
- Enhanced components maintain Vuetify's API while adding custom features
- All components use TypeScript `<script setup>` syntax for better type safety

**Design Token System** (when applicable):
- `colors.ts` - Complete color system with light/dark theme support
- `spacing.ts` - 4px grid-based spacing system
- Token exports via helper functions like `getColor()`, `spacing[]`

### Custom Component Patterns

#### Configuration-Based Components
The project follows a **configuration-driven approach** for complex components:

```typescript
// UnifiedListItem - Single configurable component for all list patterns
interface ListItemConfig {
  // Avatar/Icon Configuration
  showAvatar?: boolean
  avatarType?: 'provider' | 'user' | 'icon'
  avatarSrc?: string
  avatarText?: string
  avatarIcon?: string
  avatarColor?: string

  // Content Configuration
  title: string
  subtitle?: string
  showMetadata?: boolean
  metadataItems?: [string?, string?, string?]

  // Status & Actions
  showTitleChips?: boolean
  titleChipConfig?: ChipConfig | ChipConfig[]
  showStatusChip?: boolean
  chipConfig?: ChipConfig | ChipConfig[]
  showActionMenu?: boolean
  menuActions?: MenuAction[]

  // Behavior Controls
  enableLazyLoading?: boolean
  showDivider?: boolean
  clickable?: boolean
  active?: boolean
}
```

#### Component Naming Convention
- **Custom** prefix for reusable components (`CustomAvatar`, `CustomButton`)
- **Unified** prefix for consolidated pattern components
- **Icon** prefix for SVG components
- **Layout** prefix for page layouts

#### Key Custom Components
- **CustomAvatar** - Multi-variant avatar (provider logos, user initials, icons)
- **CustomMenu** - Action menus with icons and callbacks
- **UnifiedListItem** - Configurable list item supporting all listing patterns
- **CustomButton** - Standardized button with consistent styling
- **Custom Form Components** - Validated form inputs with consistent styling

## 🎯 Styling Approach

### CSS Strategy
- **Vuetify's built-in theming** as primary styling system
- **Custom CSS utilities** in `main.css` for typography and animations
- **CSS Custom Properties** for theme-aware styling
- **Minimal custom CSS** - leverage Vuetify's design tokens

### Typography Scale
```css
.text-xxs { font-size: 0.5rem; }   /* 8px */
.text-xs  { font-size: 0.65rem; }  /* 10.4px */
.text-sm  { font-size: 0.85rem; }  /* 13.6px */
.text-md  { font-size: 1rem; }     /* 16px */
.text-lg  { font-size: 1.2rem; }   /* 19.2px */
.text-xl  { font-size: 1.5rem; }   /* 24px */
.text-xxl { font-size: 1.85rem; }  /* 29.6px */
```

### Animation System
- **Built-in Vuetify transitions** for components
- **Custom animations** via CSS keyframes (`scale-in` animation)
- **Lazy loading transitions** for performance

## 🔧 Configuration Files

### Vite Configuration
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  }
})
```

### TypeScript Setup
- **Composite project structure** with separate configs for app/node/vitest
- **Uses Vue-specific TypeScript config** (`@vue/tsconfig`)
- **Path mapping** with `@/*` alias for clean imports
- **ES2022 + DOM** target for modern features
- **Strict type checking** enabled for optimal development experience

### Build Scripts
```json
{
  "dev": "vite --host",
  "build": "run-p type-check build-only",
  "type-check": "vue-tsc --noEmit",
  "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix",
  "test:unit": "vitest",
  "test:e2e": "cypress run --e2e"
}
```

## 🌍 Internationalization

### i18n Setup
- **Vue i18n** for translation management
- **Multiple locale support** (English/Japanese)
- **Vuetify locale integration** for component translations
- **Browser language detection**

## 🔐 Authentication & Security

### Auth0 Integration
```typescript
app.use(createAuth0({
  domain: process.env.VITE_AUTH0_DOMAIN,
  clientId: process.env.VITE_AUTH0_CLIENT_ID
}))
```

## 📊 Data Visualization

### Charts & Dashboards
- **ECharts 5.6.0** for interactive charts
- **GridStack** for draggable dashboard layouts
- **Custom chart toolbar** components for user interactions

## 🎭 Performance Optimizations

### Lazy Loading
- **v-lazy** component for large lists
- **Dynamic imports** for route-based code splitting
- **Lazy-loaded components** with intersection observer

### Bundle Optimization
- **Vite's tree shaking** for minimal bundle size
- **Dynamic component registration**
- **Optimized asset loading**

## 🛠️ Development Workflow

### Working with This Codebase

**Key Principles**:
- Follow existing patterns of component enhancement rather than creating entirely new components
- Use the design token system for colors and spacing rather than magic numbers
- Maintain Vuetify's API compatibility when enhancing components
- Use TypeScript `<script setup>` syntax throughout

### Code Quality Tools
1. **ESLint** for code consistency
2. **Prettier** for formatting
3. **TypeScript** for type safety
4. **Vue DevTools** for debugging
5. **Vitest** for unit testing
6. **Cypress** for E2E testing

### Deployment Modes
- `dev` - Development with hot reload
- `dev-build` - Development build
- `next-build` - Staging environment
- `prod-build` - Production build
- `my-prod-build` - Custom production build

## 📝 Implementation Guide

### Setting Up a New Project

1. **Initialize Vue 3 + TypeScript project**
2. **Install Vuetify 3 with MD3 blueprint**
3. **Configure custom theme colors**
4. **Set up component defaults**
5. **Add custom icon system**
6. **Configure path aliases**
7. **Set up Pinia for state management**
8. **Add authentication (Auth0)**
9. **Configure i18n**
10. **Set up testing tools**

### Component Development Best Practices

1. **Use configuration-based patterns** for complex components
2. **Leverage Vuetify's theming system** instead of custom CSS
3. **Follow consistent naming conventions**
4. **Implement proper TypeScript interfaces**
5. **Use composition API** for better code organization
6. **Add lazy loading** for performance-critical lists
7. **Follow accessibility guidelines**

This design system provides a solid foundation for building consistent, maintainable Vue.js applications with modern Material Design aesthetics and robust development tooling.