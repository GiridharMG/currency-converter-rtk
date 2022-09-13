import { createSlice } from '@reduxjs/toolkit'

/**
 * initial value for converted currency
 */
const initialState = {
    value: 0
}

/**
 * reducers to update value for converted currency
 */
const currencySlice = createSlice({
    name: 'Currency',
    initialState,
    reducers: {
        setConvertedCurrency: (state, action) => {
            console.log(action.payload)
            state.value = action.payload
        }
    }
})

export const { setConvertedCurrency } = currencySlice.actions

export default currencySlice.reducer