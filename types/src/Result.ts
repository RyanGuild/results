import { ErrorResult } from './Error.ts'
import { NotNull } from './NotNull.ts'
import { Value, ValueResult } from './Value.ts'

/**
 * A union of `[T, null]` and `[null, E]` representing a result that can be either a value or an error.
 */
export type Result<T, E> = ValueResult<T> | ErrorResult<E>

/**
 * The type of the `T` value of a `Result<T,E>`. If that value is a `ValueResult<T>`, yield  `ValueOf<T>` recursively.
 * Always provides a type that is not `null`.
 * If the result is an `ErrorResult<E>`, yield `never`.
 */
export type ValueOf<T = any> = T extends Result<infer V, never>
    ? V extends Result<infer N, infer NE>
        ? ValueOf<Result<N, NE>>
        : Value<V>
    : never

/**
 * The type of the `E` of a `Result<T,E>`. If the result is a `ValueResult<T>`, yield `ErrorOf<T>` recursively.
 * Always provides a type that is not `null`.
 * If the result is an `ValueResult<T>`, yield `never`.
 */
export type ErrorOf<T = any> = NotNull<
    T extends ValueResult<infer V>
        ? V extends Result<infer N, infer NE>
            ? ErrorOf<Result<N, NE>>
            : never
        : T extends ErrorResult<infer E>
        ? E
        : never
>
