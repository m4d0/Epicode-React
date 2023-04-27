import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  language: 'it',
}

export const languageSlice = createSlice({
  name: 'languageSlice',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload
    },
  },
})

export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer
