import { types } from "../types/types";

export const setError = ( error ) => ({
    type: types.uiSetError,
    payload: error
})

export const RemoveError = ( error ) => ({
    type: types.uiRemoveError
})

export const startLoading = ( ) => ({
    type: types.uiStartLoading
})

export const finishLoading = ( ) => ({
    type: types.uiFinishLoading
})