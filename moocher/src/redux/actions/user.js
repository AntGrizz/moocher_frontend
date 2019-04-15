export const SET_USER = 'SET_USER';
export const LOADING_USER = 'LOADING_USER'

const URL = 'http://localhost:3000/login'
const userURL = 'http://localhost:3000/users'


export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  };
};

export function loadingUser() {
  return { type: "LOADING_USER" }
}

export function fetchingUser(username, password) {
  return dispatch => {
    fetch(URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(res => res.json())
      .then( user => {
        if (user.authenticated){
          localStorage.setItem('token', user.token)
          // debugger
          dispatch(setUser(user.user))
        }else{
          alert('Incorrect username or password')
        }
        
      })
  }
}



export function fetchLoggedInUser(token){
  return dispatch => {
    dispatch(loadingUser())
    fetch(`http://localhost:3000/profile`, {
      headers: {
        "Authentication": `Bearer ${token}`,
      }
    })
      .then(res => res.json())
      .then(user => {
        dispatch(setUser(user))
      })
    }
  }
  
export function createUser(
  firstName,
  lastName,
  username,
  password,
  street,
  city,
  state,
  zipCode){
  return dispatch => {
    dispatch(loadingUser())
    fetch(userURL, {
      method: 'POST',
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
          
        user: {first_name: firstName,
          last_name: lastName,
          username: username,
          password: password,
          street: street,
          city: city,
          state: state,
          zip_code: zipCode,
          user_rating: 0,
          renter_rating: 0}
      })
    })
    .then(res => res.json())
    .then(user => {
      dispatch(setUser(user.user))
    })
  }
}