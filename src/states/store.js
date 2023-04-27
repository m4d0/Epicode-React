import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import languageReducer from './LanguageSlice'
import counterReducer from './CounterSlice'

const initialAuth = {
  isAuth: false,
  user: {},
  token: null,
}

const authenticator = createSlice({
  name: 'auth',
  initialAuth,
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        isAuth: true,
        user: action.payload.userProfile,
        token: action.payload.token,
      }
    },
    logout: (state, action) => {
      return { ...state, isAuth: false, user: null, token: null }
    },
  },
})

export const store = configureStore({
  reducer: {
    authenticator: authenticator,
    language: languageReducer,
    counter: counterReducer,
  },
})
