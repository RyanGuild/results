/**
 * A set of utilities for working with results and promises.
 * Contains functions for wrapping promises in results and flattening results.
 * Contains types for promises that return results.
 *
 * @example
 * ```typescript
 * import { wrap } from '@results/promises'
 *
 * async function divide(a: number, b: number) {
 *    if (b === 0) {
 *       throw new Error('Cannot divide by zero')
 *   }
 *  return a / b
 * }
 *
 * const wrappedDivide = wrap(divide)
 *
 * const result = await wrappedDivide(10, 2)
 * // => [Ok: 5, null]
 *
 * const error = await wrappedDivide(10, 0)
 * // => [null, Err: Error('Cannot divide by zero')]
 *
 * ```
 *
 * @module
 */
export * from './flatten.ts'
export * from './wrap.ts'
export * from './ResultPromise.ts'
