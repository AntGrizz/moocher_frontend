import { NEW_USER } from '../actions/user'

export const newUser = (oldState = {}, action) => {
  switch(action.type) {
    case NEW_USER:
      return action.payload
    default:
      return oldState
  }
}

