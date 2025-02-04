/**
 * Utility type to exclude `null` from a type.
 */
export type NotNull<T> = T extends null ? never : T
