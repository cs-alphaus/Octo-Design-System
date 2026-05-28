import { getColorHex } from '@/helpers/colors.getColorHex'
import { useTheme } from 'vuetify'

type Options = {
  theme?: string
}
/**
 * Retrieves the hexadecimal color code based on the given color name and options.
 * If the color name is not provided or is undefined, undefined will be returned.
 * If the color name starts with '#' (indicating a hexadecimal color code), the color name itself will be returned.
 * If the 'theme' option is specified, the color will be retrieved based on the given theme.
 * If the 'theme' option is not specified, the color will be retrieved based on the current app theme.
 *
 * @param color - Color name or hexadecimal color code.
 * @param options - Optional options object with 'theme' value.
 * @returns The hexadecimal color code or undefined.
 */
export const getColor = (
  color: string | undefined,
  options: Options = {}
): string | undefined => {
  if (color === undefined) return undefined

  if (color.indexOf('#') !== -1) return color

  const vuetifyTheme = useTheme()

  let theme = ''

  if ('theme' in options) {
    theme = options.theme ? options.theme : 'light'
  } else {
    theme = vuetifyTheme.global.current.value.dark ? 'dark' : 'light'
  }

  return getColorHex(color, theme)
}

/**
 * =============================================================================
 * Hex to rgb
 * =============================================================================
 */
export const hexToRgb = (hex: string | undefined, alpha?: number): string => {
  if (!hex) return ''
  hex = hex.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
}
