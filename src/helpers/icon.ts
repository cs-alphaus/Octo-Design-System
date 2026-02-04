/**
 * Icon helper utilities
 * Provides consistent icon naming and fallbacks
 */

/**
 * Gets the full icon name with mdi prefix if needed
 * @param iconName - The icon name (with or without mdi- prefix)
 * @returns The full icon name with mdi- prefix
 */
export function getIconName(iconName: string): string {
  if (!iconName) return 'mdi-help-circle'

  // If it already has mdi- prefix, return as-is
  if (iconName.startsWith('mdi-')) {
    return iconName
  }

  // Add mdi- prefix
  return `mdi-${iconName}`
}

/**
 * Icon mappings for common use cases
 */
export const iconMappings = {
  // Generic icons
  box_open: 'mdi-package-variant',
  account: 'mdi-account',
  group: 'mdi-account-group',

  // Provider icons
  aws: 'mdi-aws',
  azure: 'mdi-microsoft-azure',
  gcp: 'mdi-google-cloud',

  // Actions
  edit: 'mdi-pencil',
  delete: 'mdi-delete',
  view: 'mdi-eye',
  menu: 'mdi-dots-vertical'
}