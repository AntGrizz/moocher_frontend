import { setUser } from './user';
export const FETCHED_RENTALS = 'FETCHED_RENTALS';
const URL = `http://localhost:3000/rented_items`;

export function patchRental(rental, status, condition) {
  debugger;
  return dispatch => {
    fetch(URL + `/${rental.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authentication: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        status: status,
        end_condition: condition
      })
    })
      .then(res => res.json())
      .then(user => {
        console.log('Rental was updated for', condition);
        dispatch(setUser(user));
      });
  };
}


export function fetchedRentals(rentals) {
  return { type: 'FETCHED_RENTALS', payload: rentals };
}


export function fetchingRentals() {
  return dispatch => {
    fetch(URL)
      .then(res => res.json())
      .then(rentals => {
        dispatch(fetchedRentals(rentals));
      });
  };
}
