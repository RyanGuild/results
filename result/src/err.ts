import { ErrorResult } from '@results/types'

class ResultsErrError extends Error {
    constructor(message: string) {
        super(message)
        this.name = '@results/err'
    }
}

/**
 * Create an ErrorResult from an error or string
 * @param error an error or string message
 * @returns ErrorResult
 */
export function err<
    E extends Error | string,
    R = E extends string ? ErrorResult<ResultsErrError> : ErrorResult<E>
>(error: E): R {
    if (typeof error !== 'string') {
        return [null, error] as R
    } else {
        return [null, new ResultsErrError(error)] as R
    }
}
