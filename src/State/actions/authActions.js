import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (email, password) => {
return (dispatch) => {
dispatch({ type: LOGIN_REQUEST });
axios
  .post('https://reqres.in/api/login', { email, password })
  .then((response) => {
    const token = response.data.token;
    localStorage.setItem('token', token);
    dispatch({ type: LOGIN_SUCCESS, payload: token });
  })
  .catch((error) => {
    const errorMessage = error.response.data.error;
    dispatch({ type: LOGIN_FAILURE, payload: errorMessage });
  });
};
}; 


