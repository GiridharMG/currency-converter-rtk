import { configureStore } from '@reduxjs/toolkit'
import currencySlice from './feature/currencySlice'

export const store = configureStore({
    reducer: {
        currency: currencySlice
    }
})