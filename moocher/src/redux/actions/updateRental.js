import { setUser } from './user';
export const UPDATE_RENTAL = "UPDATE_RENTAL"
const URL = `http://localhost:3000/rented_items`


export function patchRental(rental, status) {
  console.log(status)
  console.log(localStorage.token)
  return dispatch => {
    fetch(URL + `/${rental.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json", "Accept": "application/json", 
        "Authentication": `Bearer ${localStorage.token}`
      }, body: JSON.stringify({
        status: status
      })
    })
      .then(res => res.json())
      .then(user => {
        console.log('Rental was updated for', user)
        dispatch(setUser(user))
      })
  }
}
