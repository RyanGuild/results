import { Result } from '@results/types'
import { isErr } from './isErr'

/**
 * Unwraps a result, returning the value if it is not an error or undefined if it is
 */
export function unwrap<T, E>(
    result: Result<T, E>
): T extends null ? undefined : T {
    if (isErr(result)) {
        return undefined as T extends null ? undefined : T
    }
    return result[0] as T extends null ? undefined : T
}
