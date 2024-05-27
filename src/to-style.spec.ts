import { describe, expect, it } from 'bun:test'
import toStyle from './to-style'

describe('toStyle', () => {
  it('should convert cssVars to a CSS string', () => {
    const cssVars = {
      '--color-primary': 'red',
      '--typography-size': '16px',
    }
    const result = toStyle(cssVars)
    expect(result).toBe('--color-primary: red;\n--typography-size: 16px;')
  })
})
