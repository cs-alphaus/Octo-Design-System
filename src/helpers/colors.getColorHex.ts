import {
  darkThemeColors,
  extraColors,
  lightThemeColors,
  vendorColors
} from '../plugins/vuetifyCustomThemes'

type Colors = {
  [key: string]: string
}

export const getColorHex = (colorName: string, theme: string): string => {
  let colors: Colors

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

  if (theme === 'light') {
    colors = lightColors
  } else {
    colors = darkColors
  }

  if (colorName in colors) return colors[colorName]
  else return ''
}
