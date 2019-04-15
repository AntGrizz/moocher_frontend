import {combineReducers} from 'redux'
import user from './user'
import users from './users'
import groups from './groups'
import loading from './loading'
import rentals from './rentals'


const rootReducer = combineReducers({
  user,
  users,
  groups,
  loading,
  rentals
})

export default rootReducer
