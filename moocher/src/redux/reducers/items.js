import { ADD_ITEM } from '../actions/item';

const items = (state = [], action) => {
  switch (action.type) {
    case 'FETCHED_ITEMS':
      return action.payload;
    case 'ADD_ITEM':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default items;
