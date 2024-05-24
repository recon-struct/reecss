import { describe, expect, it } from 'bun:test'
import toStyleAttr from './to-style-attr'

describe('toStyleAttr', () => {
  it('should convert a map of CSS variables to a string representation of a style attribute', () => {
    const cssVars = {
      '--colors-primary': 'blue',
      '--colors-secondary': 'green',
    } as const

    const styleAttr = toStyleAttr(cssVars)

    expect(styleAttr).toBe('--colors-primary:blue;--colors-secondary:green;')
  })

  it('should handle empty maps', () => {
    const cssVars = {}
    const styleAttr = toStyleAttr(cssVars)

    expect(styleAttr).toBe('')
  })

  it('should handle numeric values', () => {
    const cssVars = {
      '--spacing-small': 4,
      '--spacing-medium': 8,
    }
    const styleAttr = toStyleAttr(cssVars)

    expect(styleAttr).toBe('--spacing-small:4;--spacing-medium:8;')
  })
})
