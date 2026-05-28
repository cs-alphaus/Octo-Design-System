// Base color palettes from Figma design system
// These match the Tailwind-style naming (50-950/1000)
export const colorPalettes = {
  neutral: {
    50: '#FCFCFC',
    100: '#F7F7F7',
    200: '#F2F2F2',
    300: '#E8E8E8',
    400: '#C9C9C9',
    500: '#9E9D9F',
    600: '#6B696D',
    700: '#55535A',
    800: '#3E3D42',
    900: '#2F2F32',
    950: '#232225',
    1000: '#121115'
  },
  red: {
    50: '#FFDAD7',
    100: '#FFC7C3',
    200: '#FFB3AE',
    300: '#FF8982',
    400: '#EC4746',
    500: '#B82025',
    600: '#930012',
    700: '#7E000D',
    800: '#540006',
    900: '#2D1513'
  },
  green: {
    50: '#CBFFB6',
    100: '#8CEB74',
    200: '#7DDB67',
    300: '#63C04F',
    400: '#39962B',
    500: '#056F00',
    600: '#035300',
    700: '#014600',
    800: '#012D00',
    900: '#001600'
  },
  yellow: {
    50: '#FFDEAB',
    100: '#FFCD73',
    200: '#FFBA23',
    300: '#E09F00',
    400: '#AE7A00',
    500: '#735C00',
    600: '#574500',
    700: '#493A00',
    800: '#2F2400',
    900: '#171000'
  },
  blue: {
    50: '#D3E4FF',
    100: '#BAD7FF',
    200: '#A0C9FF',
    300: '#69AEFF',
    400: '#0086E7',
    500: '#0060A7',
    600: '#004881',
    700: '#003D6D',
    800: '#002648',
    900: '#001226'
  },
  purple: {
    50: '#E5DFFF',
    100: '#D6CFFF',
    200: '#C8C0FF',
    300: '#ABA0FB',
    400: '#8479D0',
    500: '#5E53A7',
    600: '#453A8E',
    700: '#3A2E82',
    800: '#23136B',
    900: '#190262',
    950: '#0F0047'
  },
  purpleDark: {
    50: '#E5DFF9',
    100: '#D7D1EA',
    200: '#C9C3DC',
    300: '#ADA8C0',
    400: '#858198',
    500: '#5F5C71',
    600: '#474459',
    700: '#3C394D',
    800: '#262336',
    900: '#1C192C',
    950: '#110E21'
  }
}

export const lightThemeColors = {
  background: colorPalettes.neutral[50],
  'on-background': colorPalettes.neutral[950],
  surface: colorPalettes.neutral[100],
  'on-surface': colorPalettes.neutral[950],
  primary: colorPalettes.purple[500],
  'on-primary': colorPalettes.purple[50],
  secondary: colorPalettes.purpleDark[500],
  'on-secondary': colorPalettes.purpleDark[50],
  success: colorPalettes.green[400],
  error: colorPalettes.red[400],
  warning: colorPalettes.yellow[400],
  info: colorPalettes.blue[400],
  mute: colorPalettes.neutral[600], // #6B696D (was #6C6A6F)
  'surface-variant': colorPalettes.neutral[900],
  'on-surface-variant': colorPalettes.neutral[100],
  'surface-light': colorPalettes.neutral[300],
  'surface-bright': colorPalettes.neutral[400]
}

export const darkThemeColors = {
  background: colorPalettes.neutral[1000],
  'on-background': colorPalettes.neutral[100],
  surface: colorPalettes.neutral[950],
  'on-surface': colorPalettes.neutral[100],
  primary: colorPalettes.purple[300],
  'on-primary': colorPalettes.purple[800],
  secondary: colorPalettes.purpleDark[300],
  'on-secondary': colorPalettes.purpleDark[800],
  success: colorPalettes.green[200],
  error: colorPalettes.red[200],
  warning: colorPalettes.yellow[200],
  info: colorPalettes.blue[200],
  mute: colorPalettes.purpleDark[400], // #ADA8C0 (was #ADAAB0 - close to secondary)
  'surface-variant': colorPalettes.neutral[100],
  'on-surface-variant': colorPalettes.neutral[950],
  'surface-light': colorPalettes.neutral[900],
  'surface-bright': colorPalettes.neutral[800]
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

// Flatten color palettes for direct access (e.g., 'neutral-50', 'purple-300')
const flattenedPalettes = Object.entries(colorPalettes).reduce((acc, [name, shades]) => {
  Object.entries(shades).forEach(([shade, hex]) => {
    acc[`${name}-${shade}`] = hex
  })
  return acc
}, {} as Record<string, string>)

export const allColors = {
  light: {
    ...lightThemeColors,
    ...extraColors.light,
    ...vendorColors.light,
    ...flattenedPalettes
  },
  dark: {
    ...darkThemeColors,
    ...extraColors.dark,
    ...vendorColors.dark,
    ...flattenedPalettes
  }
}
