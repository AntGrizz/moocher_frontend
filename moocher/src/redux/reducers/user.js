import { SET_USER } from '../actions/user'

export const user = (oldState={}, action) => {
  switch(action.type){
    case SET_USER:
      return action.payload
    default:
      return oldState
  }
}

export default user