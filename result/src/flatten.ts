import { Result, ValueOf, ErrorOf } from '@results/types'
import { isOk } from './isOk'
import { isResult } from './isResult'
import { ok } from './ok'
import { unwrap } from './unwrap'

/**
 * The result of flattening a `Result<T,E>`.
 * if any result in the chain is an error, the entire chain will be an error.
 * Otherwise, the chain will be an ok result.
 * if all results are `never`, the chain will be `never`.
 */
export type FlattenedResult<T, E> = Result<
    ValueOf<Result<T, E>>,
    ErrorOf<Result<T, E>>
>

/**
 * Flattens nested results of type `Result<T,E>` into `FlattenedResult<T,E>`.
 */
export function flatten<T, E>(result: Result<T, E>): FlattenedResult<T, E> {
    if (isOk(result)) {
        let value = unwrap(result)
        if (isResult(value)) {
            return flatten(value)
        }
        return ok(value) as FlattenedResult<T, E>
    }
    return result as FlattenedResult<T, E>
}
