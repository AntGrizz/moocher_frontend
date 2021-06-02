export const FETCHED_USERS = 'FETCHED_USERS';
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';
// const URL = 'http://localhost:3000/users'


export function fetchedUsers(users) {
  return { type: "FETCHED_USERS", payload: users }
}

export function fetchingUsers() {
  return dispatch => {
    fetch(BASE_URL + '/users')
      .then(res => res.json())
      .then(users => {
        dispatch(fetchedUsers(users));
      });
  };
}
