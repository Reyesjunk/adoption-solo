import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/actions.js'

const initialState = {
  loggedInShelter: false,
  loading: false
}

const logInReducer = (state=initialState, action) => {
  if (action.type === LOGIN_REQUEST) {
    return Object.assign({}, state, {loading: action.loading });
  }
  else if (action.type === LOGIN_SUCCESS) {
    return Object.assign({}, state, {
      loggedInShelter: action.shelter,
      loading: false
    })
  }
  else if (action.type === LOGIN_ERROR) {
    console.log(action.error)
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  else return state
}

export default logInReducer