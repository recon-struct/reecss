import type { GetPathValue } from '@recon-struct/utility-types/dist/object/get-path-value'
import type { GetPaths } from '@recon-struct/utility-types/dist/object/get-paths'
import type { Split } from '@recon-struct/utility-types/dist/string/split'
import type { Join } from '@recon-struct/utility-types/dist/tuple/join'

/**
 * Represents a CSS manifest object.
 */
export interface CssManifest {
  [key: PropertyKey]: CssManifest | string | number
}

/**
 * Represents the separator used in a manifest. This is the default separator
 * used to join keys in a manifest.
 */
export type ManifestSeparator = '-'

/**
 * Returns a string that represents the keys of the given `CssManifest` type,
 * joined by the specified separator.
 *
 * @typeParam A - The `CssManifest` type.
 * @typeParam B - The separator type (defaults to `ManifestSeparator`).
 */
export type GetKeys<
  A extends CssManifest,
  B extends string = ManifestSeparator,
> = Join<GetPaths<A>, B>

/**
 * Retrieves the value from a CssManifest based on the provided key.
 *
 * @typeParam A - The type of the CssManifest.
 * @typeParam B - The type of the key to retrieve the value for.
 * @typeParam C - The type of the separator used in the key (default is
 * ManifestSeparator).
 */
export type GetValue<
  A extends CssManifest,
  B extends string,
  C extends string = ManifestSeparator,
> = GetPathValue<A, Split<B, C>>

/**
 * Represents a CSS variable.
 * @typeParam A The type of the CSS variable.
 */
export type CssVar<A extends string = string> = `--${A}`

/**
 * Represents a mapping of CSS variable names to their corresponding values.
 */
export type CssVars = Record<CssVar, string | number>
