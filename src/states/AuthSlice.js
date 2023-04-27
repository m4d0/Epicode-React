import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  user: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const payload = action.payload

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

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer
