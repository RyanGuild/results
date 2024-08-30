import { Result } from '@results/types'
import { ok } from './ok'
import { err } from './err'

/**
 * Not to be confused with `unwrap`, this function is used to wrap a function that may throw an error in a Result.
 * Specify an error type an Error, and pass in the function type e.g. `wrap<FileSystemError, typeof myFunction>(myFunction)`
 * to specify the errors that can be thrown by this code.
 */
export function wrap<E extends Error, FN extends (...args: any[]) => any>(
    wrapFn: FN
): (...args: Parameters<FN>) => Result<ReturnType<FN>, E> {
    return (...args: Parameters<FN>): Result<ReturnType<FN>, E> => {
        try {
            return ok<ReturnType<FN>>(wrapFn(...args))
        } catch (e) {
            return err(e as E)
        }
    }
}
