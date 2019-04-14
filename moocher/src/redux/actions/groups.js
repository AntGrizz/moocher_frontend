export const FETCHED_GROUPS = 'FETCHED_GROUPS';

const URL = 'http://localhost:3000/groups'


export function fetchedGroups(groups) {
  return { type: FETCHED_GROUPS, payload: groups }
}

export function fetchingGroups() {
  return dispatch => {
    fetch(URL)
      .then(res => res.json())
      .then(groups => {
        console.log(groups);
        dispatch(fetchedGroups(groups));
      });
  };
}
