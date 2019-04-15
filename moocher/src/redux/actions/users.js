export const FETCHED_USERS = 'FETCHED_USERS';

const URL = 'http://localhost:3000/users'


export function fetchedUsers(users) {
  return { type: "FETCHED_USERS", payload: users }
}

export function fetchingUsers() {
  return dispatch => {
    fetch(URL)
      .then(res => res.json())
      .then(users => {
        dispatch(fetchedUsers(users));
      });
  };
}
