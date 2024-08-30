import { Result } from '@results/types'

/**
 * An Exhaustive check if a value is a Result.
 */
export const isResult = <T = any, E = any>(v: unknown): v is Result<T, E> =>
    Array.isArray(v) &&
    v.length === 2 &&
    ((v[0] !== null && v[1] === null) || (v[0] === null && v[1] !== null))
