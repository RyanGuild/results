import { Result } from '@results/types'
import { ok } from './ok'

/**
 * Unwraps the error from a result, returning it if it is an error or undefined if it is not
 * `E` if the result is a `ErrorResult<E>`, otherwise `undefined`
 */
export function unwrapError<T, E>(
    result: Result<T, E>
): E extends null ? undefined : E {
    if (ok(result)) {
        return undefined as E extends null ? undefined : E
    }
    return result[1] as E extends null ? undefined : E
}
