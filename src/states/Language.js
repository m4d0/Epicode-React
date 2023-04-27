import { createStore } from 'redux'

const initialState = {
  language: 'it',
  auth: {
    isAuth: false,
    user: {},
    token: null,
  },
}

const reducer = (state, action) => {
  if (action.type === `SETLANG`) {
    return Object.assign({}, state, {
      language: action.language,
    })
  }

  if (action.type === `LOGIN`) {
    return Object.assign({}, state, {
      isAuth: true,
      user: action.payload.userProfile,
      token: action.payload.token,
    })
  }

  if (action.type === `LOGOUT`) {
    return Object.assign({}, state, {
      isAuth: false,
      user: null,
      token: null,
    })
  }

  return state
}

const languageStore = () => createStore(reducer, initialState)
export default languageStore
