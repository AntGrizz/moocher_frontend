import {combineReducers} from 'redux'
import user from './user'
import users from './users'
import groups from './groups'
import loading from './loading'


const rootReducer = combineReducers({
  user,
  users,
  groups,
  loading
})

export default rootReducer
