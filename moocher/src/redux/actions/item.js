import { setUser } from './user';

export const ADD_ITEM = "ADD_ITEM"


const URL = `http://localhost:3000/items`;

export function deleteItem(item) {
  return dispatch => {
    fetch(URL + `/${item.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authentication: `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(user => {
        alert('Your item has been deleted');
        dispatch(setUser(user));
      });
  };
}

export function listItem(name, description, image, condition, user) {
  debugger;
  return dispatch => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authentication: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        name: name,
        description: description,
        image: image,
        condition: condition,
        user_id: user.id
      })
    })
      .then(res => res.json())
      .then(item => {
        console.log(item);
        dispatch(addItem(item));
        dispatch(setUser(user))
      });
  };
}

export function addItem(item) {
  return { type: ADD_ITEM, payload: item };
}


export function fetchedItems(items) {
  return { type: 'FETCHED_ITEMS', payload: items };
}

export function fetchingItems() {
  return dispatch => {
    fetch(URL)
      .then(res => res.json())
      .then(items => {
        dispatch(fetchedItems(items));
      });
  };
}
