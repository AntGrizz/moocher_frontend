import { setUser } from './user';
export const FETCHED_RENTALS = 'FETCHED_RENTALS';
export const CREATE_RENTAL = 'CREATE_RENTAL';
const URL = `http://localhost:3000/rented_items`;

export function approveRental(rental, status) {
  // debugger;
  return dispatch => {
    fetch(URL + `/${rental.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authentication: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        status: status
      })
    })
      .then(res => res.json())
      .then(user => {
        console.log('Rental was updated for', user);
        dispatch(setUser(user));
      });
  };
}

export function patchRental(rental, status, condition) {
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

export function postRentalRequest(renter_id, item_id, start, end, condition) {
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
        renter_id: renter_id,
        item_id: item_id,
        start_date: start,
        end_date: end,
        start_condition: condition,
        status: 'Pending'
      })
    })
      .then(res => res.json())
      .then(rental => {
        console.log('Rental was updated for', condition);
        dispatch(addRental(rental));
      });
  };
}

export function addRental(rental) {
  return { type: 'CREATE_RENTAL', payload: rental };
}
