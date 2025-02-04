/**
 * A tuple of the shape `[null, E]` representing an error result.
 * Although the `ErrorResult<E>` type parameter E is not constrained to `Error`,
 * other modules in the @results namespace may assume that the error value is an instance of `Error`.
 */
export type ErrorResult<E = Error> = [null, E]
