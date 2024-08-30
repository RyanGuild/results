import { ResultPromise } from './ResultPromise.ts'
import * as Results from '@results/result'

type TypedFunction<A extends any[], T = any> = (...args: A) => T
type PromiseWithResolvedValueType<T = any> = Promise<T>

/**
 * A function or promise that returns a value with a type
 */
export type AsyncWrappable<T> =
    | TypedFunction<unknown[], T>
    | PromiseWithResolvedValueType<T>

/**
 * The return type of the wrap function. either a function or a promise that returns a result.
 */
export type AsyncWrapResult<
    T,
    E,
    AW extends AsyncWrappable<T>
> = AW extends PromiseWithResolvedValueType<T>
    ? ResultPromise<T, E>
    : AW extends TypedFunction<infer A, T>
    ? (...args: A) => ResultPromise<T, E>
    : never

/**
 * Wraps an async function or promise in a result promise.
 * If the value is a function it will return a function that returns a result promise.
 *
 * If the promise resolves, the result will be an ok result.
 * If the promise rejects, the result will be an err result.
 * If the async function throws an error, the result will be an err result.
 */
export function wrap<T, E extends Error>(
    wrapFN: AsyncWrappable<T>
): AsyncWrapResult<T, E, typeof wrapFN> {
    if (wrapFN instanceof Promise) {
        return new Promise((resolve) =>
            wrapFN
                .then((value) => resolve(Results.ok(value)))
                .catch((e) => resolve(Results.err(e)))
        )
    }

    return async (
        ...args: Parameters<typeof wrapFN>
    ): ResultPromise<ReturnType<typeof wrapFN>, E> => {
        try {
            return Results.ok(await wrapFN(...args))
        } catch (e) {
            return Results.err(e as E)
        }
    }
}
