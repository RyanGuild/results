/**
 * A module for working with [Data, Error] tuples.
 * Mores specifically, this module provides a type `Result<T, E>` which is a union of `[T, null]` and `[null, E]`.
 * This allows for explicit error handling and propagation in a type-safe manner.
 * Other utilities are provided to work with `Result<T, E>` values in the @results namespace.
 *
 * @example
 * ```typescript
 * import { Result, ValueResult, ErrorResult } from '@results/types'
 *
 * const unFailableFunction = () => [1, null] as ValueResult<number>
 *
 * const failableFunction = (): Result<number, Error> =>
 *      Math.random() > 0.5
 *          ? unfailableFunction()
 *          : [null, new Error('Random error')]
 *
 * const result = failableFunction()
 * // Without any utility functions the two values act as a type-guard for each other
 * if (result[1] === null) {
 *    // No type error here
 *    console.log(Math.sqrt(result[0]))
 *    // logs: 1
 * } else {
 *    // No type error here either as the ErrorResult<E> defaults to Error type
 *    throw result[1]
 * }
 * ```
 * @module
 */
export * from './Value.ts'
export * from './Error.ts'
export * from './Result.ts'
