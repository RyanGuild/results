/**
 * Check if a value is a `Result<T,E>` from `@results/types`.
 *
 * @example
 * ```typescript
 * import { Result, ResultsErrError, err, ok, isOk } from '@results/result'
 *
 * const unfailableFunction = () => ok('Hello, World!')
 *
 * // type signature below would be inferred
 * const failableFunction :Result<'Hello, World!', ResultsErrError> = () =>
 *      Math.random() > 0.5
 *          ? err('Something went wrong!')
 *          : unfailableFunction()
 * ```
 *
 * @example
 * ```typescript
 * import { isOk, ok, flatten } from '@results/result'
 * const stack = (a: string) => ok((b: string) => ok(a + b))
 *
 * const  hi = stack('Hello, ')
 * if (isOk(hi)) {
 *     // now that we are inside of the type guard, we can safely access the underlying array
 *    hi[0]('World!')
 * }
 *
 * // hi variable now contains the value [['Hello, World!', null], null]
 * // use the flatten function to access the value with its type inferred
 * const hi2 = flatten(hi)
 * ```
 *
 * I Prefer to use all of the helpers with the name Result
 * @example
 * ```typescript
 * import { Result } from '@results/types'
 * import * as Result from '@results/result'
 *
 * const aValue = Result.ok('Hello, World!')
 *
 * ```
 *
 *
 * @module
 */
export * from './isResult.ts'
export * from './isOk.ts'
export * from './isErr.ts'
export * from '@results/types'
export * from './unwrap.ts'
export * from './unwrapError.ts'
export * from './unwrapOr.ts'
export * from './tryUnwrap.ts'
export * from './flatten.ts'
export * from './wrap.ts'
export * from './err.ts'
export * from './ok.ts'
