import {CREATE_USER} from "../actions/users"

const newUser = (oldState = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
    return action.payload
    default:
      return oldState
  }
}

export default newUser