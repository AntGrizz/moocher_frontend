import { setUser } from './user';

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

export function listItem(name, description, image, condition, user_id) {
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
        user_id: user_id
      })
    })
      .then(res => res.json())
      .then(user => {
        console.log(user)
        dispatch(setUser(user));
      });
  };
}
