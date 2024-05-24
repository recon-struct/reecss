import type { CssVars } from './types'

/**
 * Converts a map of CSS variables to a string representation of a style attribute.
 * @param cssVars - The map of CSS variables.
 * @returns The string representation of the style attribute.
 */
const toStyleAttr = (cssVars: CssVars) => {
  return Object.entries(cssVars)
    .reduce((memo, [key, value]) => {
      memo.push(`${key}:${value};`)

      return memo
    }, [] as string[])
    .join('\n')
}

export default toStyleAttr
