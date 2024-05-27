import type { CssVars } from './types'

const toStyle = (cssVars: CssVars) => {
  return Object.entries(cssVars)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n')
}

export default toStyle
