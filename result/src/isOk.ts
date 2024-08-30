import { Result } from '@results/types'

/**
 * Type-Guard. Returns true if the result is ok.
 */
export function isOk<T, E>(result: Result<T, E>): result is Result<T, never> {
    return result[1] === null
}
