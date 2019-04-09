import {combineReducers} from 'redux'
import {newUser} from './newUser'
import user from './user'
import users from './users'


const rootReducer = combineReducers({
  user,
  newUser,
  users
})

export default rootReducer
