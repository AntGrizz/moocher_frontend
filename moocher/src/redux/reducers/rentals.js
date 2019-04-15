import { FETCHED_RENTALS } from '../actions/rentals';

const rentals = (oldState = [], action) => {
  switch (action.type) {
    case FETCHED_RENTALS:
      return action.payload;
    default:
      return oldState;
  }
};

export default rentals;
