import { Result, ValueResult, ErrorResult } from '@results/result'

/**
 * A promise that resolves to a result.
 */
export type ResultPromise<T, E> = Promise<Result<T, E>>
/**
 * A promise that resolves to a value result.
 */
export type ValueResultPromise<T> = Promise<ValueResult<T>>
/**
 * A promise that resolves to an error result.
 */
export type ErrorResultPromise<E> = Promise<ErrorResult<E>>
