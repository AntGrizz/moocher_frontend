export const FETCHED_GROUPS = 'FETCHED_GROUPS';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000'


export function fetchedGroups(groups) {
  return { type: FETCHED_GROUPS, payload: groups }
}

export function fetchingGroups() {
  return dispatch => {
    fetch(BASE_URL + '/groups')
      .then((res) => res.json())
      .then((groups) => {
        dispatch(fetchedGroups(groups));
      });
  };
}
