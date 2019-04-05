export const CREATE_USER = 'CREATE_USER';
export const SET_USER = 'SET_USER';

export const createUser = (
  username,
  password,
  firstName,
  lastName,
  street,
  city,
  state,
  zipCode
) => {
  return {
    type: CREATE_USER,
    payload: {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode
    }
  };
};

export const setUser = (username, password) => {
  return {
    type: 'SET_USER',
    payload: { username: username, password: password }
  };
};
