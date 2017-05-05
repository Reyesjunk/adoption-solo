import { combineReducers } from 'redux'
import logInReducer from './login-reducer'

const rootReducer = combineReducers({
  logIn: logInReducer
})

export default rootReducer