// Simplified icon helper for Design System
export const getIconName = (name: string | undefined) => {
  if (name === '' || !name) return undefined

  if (name.startsWith('$')) {
    return name
  } else {
    return `$${name}`
  }
}
