// Spacing tokens following Vuetify's spacing system
// Based on 4px base unit (0.25rem)

export const spacing = {
  0: '0px',
  1: '4px',    // 0.25rem
  2: '8px',    // 0.5rem
  3: '12px',   // 0.75rem
  4: '16px',   // 1rem
  5: '20px',   // 1.25rem
  6: '24px',   // 1.5rem
  7: '28px',   // 1.75rem
  8: '32px',   // 2rem
  9: '36px',   // 2.25rem
  10: '40px',  // 2.5rem
  11: '44px',  // 2.75rem
  12: '48px',  // 3rem
  16: '64px',  // 4rem
  20: '80px',  // 5rem
  24: '96px',  // 6rem
  32: '128px', // 8rem
  40: '160px', // 10rem
  48: '192px', // 12rem
  56: '224px', // 14rem
  64: '256px'  // 16rem
} as const

export type SpacingKey = keyof typeof spacing

// Helper function to format spacing values to pixels
export const formatToPx = (value: string | number | undefined): string => {
  if (value === undefined) return '0px'
  if (typeof value === 'number') return `${value}px`
  if (value.includes('px') || value.includes('rem') || value.includes('%')) {
    return value
  }
  return `${value}px`
}

// Common spacing patterns used in Octo components
export const spacingPatterns = {
  cardPadding: spacing[4], // 16px
  dialogPadding: spacing[4], // 16px
  buttonPadding: `${spacing[2]} ${spacing[4]}`, // 8px 16px
  listItemPadding: spacing[3], // 12px
  sectionSpacing: spacing[6], // 24px
  componentSpacing: spacing[4] // 16px
} as const