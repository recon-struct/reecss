import { describe, expect, it } from 'bun:test'
import reecss from './reecss'

describe('reecss', () => {
  it('should construct a CSS variable name for every value in a deeply nested object', () => {
    const ref = {
      colors: {
        primary: 'blue',
        secondary: 'green',
      },
      spacing: {
        small: '0.5rem',
        medium: '1rem',
      },
    } as const
    const cssVariables = reecss(ref)

    expect(cssVariables).toEqual({
      '--colors-primary': 'blue',
      '--colors-secondary': 'green',
      '--spacing-small': '0.5rem',
      '--spacing-medium': '1rem',
    })
  })

  it('should allow numeric values', () => {
    const ref = {
      spacing: {
        small: 4,
        medium: 8,
      },
    }
    const cssVariables = reecss(ref)

    expect(cssVariables).toEqual({
      '--spacing-small': 4,
      '--spacing-medium': 8,
    })
  })
})
