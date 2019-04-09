export const NEW_USER = 'NEW_USER';
export const SET_USER = 'SET_USER';

const URL = 'http://localhost:3000/login'

export const newUser = (
  firstName,
  lastName,
  username,
  password,
  street,
  city,
  state,
  zipCode
) => {
  return {
    type: NEW_USER,
    payload: {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode
    }
  };
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  };
};


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
        console.log(user)
        if (user.authenticated){
          localStorage.setItem('token', user.token)
          dispatch(setUser(user))
        }else{
          alert('Incorrect username or password')
        }
        
      })
  }
}

export function fetchLoggedInUser(token){
  return dispatch => {
    fetch(`http://localhost:3000/profile`, {
      headers: {
        "Authentication": `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(user => {
        console.log('Token exists, user is: ', user)
        dispatch(setUser(user))
      })
    }
  }
  
// export function fetchingUser() {
//   return dispatch => {
//     fetch(URL)
//       .then(res => res.json())
//       .then(user => {
//         console.log(user);
//         dispatch(setUser(user));
//       });
//   };
// }