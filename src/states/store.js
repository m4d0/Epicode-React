import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import languageReducer from './LanguageSlice'
import counterReducer from './CounterSlice'

// const initialLanguage = {
//   language: 'it',
// }
const initialAuth = {
  isAuth: false,
  user: {},
  token: null,
}

// const languages = createSlice({
//   name: 'lang',
//   initialLanguage,
//   reducers: {
//     setLanguage: (state, action) => {
//       return { ...state, language: action.language }
//     },
//   },
// })

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
    //languages,
    authenticator: authenticator,
    language: languageReducer,
    counter: counterReducer,
  },
})
