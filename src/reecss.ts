import type {
  CssManifest,
  CssVar,
  GetKeys,
  GetValue,
  ManifestSeparator,
} from './types'

/**
 * Generate CSS variable names for every value in a deeply nested object.
 *
 * @param ref - The deeply nested object to generate CSS variables for.
 * @returns An object with CSS variable names as keys and their values.
 */
const reecss = <
  A extends CssManifest,
  B extends string = ManifestSeparator,
  C extends GetKeys<A, B> = GetKeys<A, B>,
  D extends { [key in CssVar<C>]: GetValue<A, C, B> } = {
    [key in CssVar<C>]: GetValue<A, C, B>
  },
>(
  ref: A,
) => {
  const constructRules = (
    ref: CssManifest,
    prefix: string = '',
    rules: D = {} as D,
  ) => {
    for (const key of Object.keys(ref)) {
      const value = ref[key]

      if (typeof value === 'object') {
        constructRules(value as CssManifest, `${prefix}${key}-`, rules)
      } else {
        rules[`--${prefix}${key}` as keyof D] = value as D[keyof D]
      }
    }

    return rules
  }

  return constructRules(ref) as D
}

export default reecss
