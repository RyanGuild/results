import { Result } from '@results/types'

/**
 * A utility function to wrap a value in a result.
 * useful for functional programming results.
 */
export function ok<T = any>(value: T): Result<T, never> {
    return [value, null] as Result<T, never>
}
