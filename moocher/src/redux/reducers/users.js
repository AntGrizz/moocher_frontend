import { FETCHED_USERS } from '../actions/users'

export const users = (oldState = [], action) => {
  switch (action.type) {
    case FETCHED_USERS:
      return action.payload
    default:
      return oldState
  }
}

export default users