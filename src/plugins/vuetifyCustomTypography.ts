// Custom typography scale based on Tailwind CSS
// Framework-agnostic, won't break with Vuetify version updates

export const typographyScale = {
  xs: {
    fontSize: '0.75rem',      // 12px
    lineHeight: '1rem'         // 16px
  },
  sm: {
    fontSize: '0.875rem',     // 14px
    lineHeight: '1.25rem'      // 20px
  },
  base: {
    fontSize: '1rem',         // 16px - Default body text
    lineHeight: '1.5rem'       // 24px
  },
  lg: {
    fontSize: '1.125rem',     // 18px
    lineHeight: '1.75rem'      // 28px
  },
  xl: {
    fontSize: '1.25rem',      // 20px
    lineHeight: '1.75rem'      // 28px
  },
  '2xl': {
    fontSize: '1.5rem',       // 24px
    lineHeight: '2rem'         // 32px
  },
  '3xl': {
    fontSize: '1.875rem',     // 30px
    lineHeight: '2.25rem'      // 36px
  },
  '4xl': {
    fontSize: '2.25rem',      // 36px
    lineHeight: '2.5rem'       // 40px
  },
  '5xl': {
    fontSize: '3rem',         // 48px
    lineHeight: '1'
  },
  '6xl': {
    fontSize: '3.75rem',      // 60px
    lineHeight: '1'
  },
  '7xl': {
    fontSize: '4.5rem',       // 72px
    lineHeight: '1'
  },
  '8xl': {
    fontSize: '6rem',         // 96px
    lineHeight: '1'
  },
  '9xl': {
    fontSize: '8rem',         // 128px
    lineHeight: '1'
  }
} as const

// Type helper for accessing typography sizes
export type TypographySize = keyof typeof typographyScale

// Generate CSS stylesheet string from typography scale
export function generateTypographyCSS(): string {
  let css = `
/**
 * Custom Typography Utilities
 * Auto-generated from vuetifyCustomTypography.ts
 * Based on Tailwind CSS typography scale
 */

/* Text Size Utilities */
/* Using !important to override Vuetify's internal component styles */

`

  Object.entries(typographyScale).forEach(([key, { fontSize, lineHeight }]) => {
    css += `
.text-${key} {
  font-size: ${fontSize} !important;
  line-height: ${lineHeight} !important;
}
`
  })

  css += `
/*
 * Note: Font weight utilities are provided by Vuetify
 * Use these existing classes:
 * - font-weight-thin (100)
 * - font-weight-light (300)
 * - font-weight-regular (400)
 * - font-weight-medium (500)
 * - font-weight-semibold (600)
 * - font-weight-bold (700)
 * - font-weight-black (900)
 */
`

  return css
}

// Inject typography CSS into document head
export function injectTypographyStyles(): void {
  if (typeof document === 'undefined') return // SSR guard

  // Check if already injected
  const existingStyle = document.getElementById('custom-typography-styles')
  if (existingStyle) return

  // Create and inject style tag
  const styleTag = document.createElement('style')
  styleTag.id = 'custom-typography-styles'
  styleTag.textContent = generateTypographyCSS()
  document.head.appendChild(styleTag)
}

// Note: Font weights are handled by Vuetify's existing utility classes:
// font-weight-thin (100), font-weight-light (300), font-weight-regular (400),
// font-weight-medium (500), font-weight-semibold (600), font-weight-bold (700),
// font-weight-black (900)
