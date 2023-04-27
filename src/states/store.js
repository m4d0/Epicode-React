import { configureStore } from '@reduxjs/toolkit'

import languageReducer from './LanguageSlice'
import counterReducer from './CounterSlice'
import authReducer from './AuthSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    language: languageReducer,
    counter: counterReducer,
  },
})
