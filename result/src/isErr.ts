import { Result } from '@results/types'

/**
 * Type-Guard. Returns true if the result is an error.
 */
export function isErr<T, E>(result: Result<T, E>): result is Result<never, E> {
    return result[0] === null
}
