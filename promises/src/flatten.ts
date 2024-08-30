import {
    err,
    FlattenedResult,
    isOk,
    isResult,
    ok,
    unwrap
} from '@results/result'
import { ResultPromise } from './ResultPromise.ts'

/**
 * Flattens nested results of type `Result<T,E>` into `FlattenedResult<T,E>`.
 * Any promises in the chain will be awaited.
 * If any result in the chain is an error, the entire chain will be an error.
 * Otherwise, the chain will be an ok result.
 */
export async function flatten<T, E>(
    result: ResultPromise<T, E>
): Promise<FlattenedResult<T, E>> {
    try {
        let res = await result
        if (isOk(res)) {
            let value = await unwrap(res)
            if (isResult(value)) {
                return (await flatten(
                    Promise.resolve(value)
                )) as FlattenedResult<T, E>
            }
            return ok(value) as FlattenedResult<T, E>
        }
        return result as Promise<FlattenedResult<T, E>>
    } catch (e) {
        return err(e) as Promise<FlattenedResult<T, E>>
    }
}
