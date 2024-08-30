import { Result } from '@results/types'
import { isErr } from './isErr'

/**
 * Unwraps a `result`, returning a default value if it is an error
 * `defaultValue` a value to return if the result is an error
 * `T` where `Result<T, E>` is the type of the result
 */
export function unwrapOr<T, E>(
    result: Result<T, E>,
    defaultValue: NoInfer<T>
): T {
    if (isErr(result)) {
        return defaultValue
    }
    return result[0] as T
}
