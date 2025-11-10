// Design tokens extracted from Octo project
// Exact copy from src/plugins/vuetifyCustomThemes.ts

export const lightThemeColors = {
  // New
  background: '#FCFCFC',
  'on-background': '#232225',
  surface: '#F7F7F7',
  'on-surface': '#232225',
  primary: '#5E53A7',
  'on-primary': '#E5DFFF',
  secondary: '#5F5C71',
  'on-secondary': '#F7F7F7',
  success: '#39962B',
  error: '#EC4746',
  warning: '#AE7A00',
  info: '#0086E7',
  mute: '#6C6A6F',
  'surface-variant': '#2F2F32',
  'on-surface-variant': '#F7F7F7',
  'surface-light': '#E8E8E8', // surface high
  'surface-bright': '#C9C9C9' // surface highest
}

export const darkThemeColors = {
  // New
  background: '#121115',
  'on-background': '#F7F7F7',
  surface: '#232225',
  'on-surface': '#F7F7F7',
  primary: '#ABA0FB',
  'on-primary': '#23136B',
  secondary: '#ADA8C0',
  'on-secondary': '#262336',
  success: '#7DDB67',
  error: '#FFB3AE',
  warning: '#FFBA23',
  info: '#A0C9FF',
  mute: '#ADAAB0',
  'surface-variant': '#F7F7F7',
  'on-surface-variant': '#232225',
  'surface-light': '#2F2F32', // surface high
  'surface-bright': '#3E3D42' // surface highest
}

export const extraColors = {
  light: {
    red: '#F44336',
    pink: '#E91E63',
    purple: '#9C27B0',
    deep_purple: '#673AB7',
    indigo: '#3F51B5',
    blue: '#2196F3',
    light_blue: '#03A9F4',
    cyan: '#00BCD4',
    teal: '#009688',
    green: '#4CAF50',
    light_green: '#8BC34A',
    lime: '#CDDC39',
    yellow: '#FFEB3B',
    amber: '#FFC107',
    orange: '#FF9800',
    deep_orange: '#FF5722',
    brown: '#795548',
    grey: '#9E9E9E',
    blue_grey: '#607D8B',
    gold: '#C9B037',
    silver: '#B4B4B4',
    bronze: '#6A3805'
  },
  dark: {
    red: '#EF9A9A',
    pink: '#F48FB1',
    purple: '#CE93D8',
    deep_purple: '#B39DDB',
    indigo: '#9FA8DA',
    blue: '#90CAF9',
    light_blue: '#81D4FA',
    cyan: '#80DEEA',
    teal: '#80CBC4',
    green: '#A5D6A7',
    light_green: '#C5E1A5',
    lime: '#E6EE9C',
    yellow: '#FFF59D',
    amber: '#FFE082',
    orange: '#FFCC80',
    deep_orange: '#FFAB91',
    brown: '#BCAAA4',
    grey: '#EEEEEE',
    blue_grey: '#B0BEC5',
    gold: '#C9B037',
    silver: '#D7D7D7',
    bronze: '#AD8A56'
  }
}

export const vendorColors = {
  light: {
    aws: '#FF9900',
    azure: '#0089D6',
    azureea: '#0089D6',
    gcp: '#34A853'
  },
  dark: {
    aws: '#C48320',
    azure: '#4274B2',
    azureea: '#4274B2',
    gcp: '#34A853'
  }
}

export const allColors = {
  light: { ...lightThemeColors, ...extraColors.light, ...vendorColors.light },
  dark: { ...darkThemeColors, ...extraColors.dark, ...vendorColors.dark }
}

// Color utility function from Octo's getColorHex implementation
export const getColorHex = (colorName: string, theme: string): string => {
  const lightColors = {
    ...lightThemeColors,
    ...extraColors.light,
    ...vendorColors.light
  }

  const darkColors = {
    ...darkThemeColors,
    ...extraColors.dark,
    ...vendorColors.dark
  }

  const colors = theme === 'light' ? lightColors : darkColors

  if (colorName in colors) return colors[colorName]
  else return ''
}

// Simplified getColor function
export const getColor = (
  color: string | undefined,
  theme: 'light' | 'dark' = 'light'
): string | undefined => {
  if (color === undefined) return undefined
  if (color.indexOf('#') !== -1) return color
  return getColorHex(color, theme)
}

// Hex to RGBA conversion (from Octo's color helper)
export const hexToRgb = (hex: string, alpha?: number): string => {
  if (!hex) return ''
  hex = hex.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}