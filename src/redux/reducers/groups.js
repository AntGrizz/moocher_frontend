import { FETCHED_GROUPS } from '../actions/groups'

const groups = (oldState = [], action) => {
  switch (action.type) {
    case FETCHED_GROUPS:
      return action.payload
    default:
      return oldState
  }
}

export default groups