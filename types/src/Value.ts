import { NotNull } from './NotNull.ts'

/**
 * A tuple of the shape `[T, null]` representing a value result.
 * `T` may not be `null`.
 * Although `T` is allowed to be of type `Error` other modules in the `@results` namespace may assume that the value is not an instance of `Error`.
 */
export type Value<T> = NotNull<T>
export type ValueResult<T> = [Value<T>, null]
