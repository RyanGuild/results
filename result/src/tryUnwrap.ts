import { Result } from '@results/types'
import { isErr } from './isErr'

/**
 * Unwraps a result, throwing an error if it is an error
 */
export function tryUnwrap<T, E>(
    result: Result<T, E>
): T extends null ? never : T {
    if (isErr(result)) {
        throw result[1]
    }
    return result[0] as T extends null ? never : T
}
