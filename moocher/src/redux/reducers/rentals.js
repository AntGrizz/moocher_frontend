import { FETCHED_RENTALS } from '../actions/rentals';
import { CREATE_RENTAL } from '../actions/rentals';

const rentals = (oldState = [], action) => {
  switch (action.type) {
    case FETCHED_RENTALS:
      return action.payload;
    case CREATE_RENTAL:
      return [...oldState, action.payload]
    default:
      return oldState;
  }
};

export default rentals;
