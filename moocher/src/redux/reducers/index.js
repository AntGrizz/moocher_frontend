import {combineReducers} from 'redux'
import newUser from './newUser'
import user from './user'
import items from './items'


const rootReducer = combineReducers({
  user,
  newUser,
  items
})

export default rootReducer
