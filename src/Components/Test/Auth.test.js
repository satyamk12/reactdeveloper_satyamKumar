import React from 'react'
import authAction from "../../State/actions/authActions";
 const LOGIN_REQUEST = 'LOGIN_REQUEST'; 
 const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

 
// const Authtest = () => {
//   return (
//     <div></div>
//   )
// }

// export default Authtest;



// const mockStore = configureMockStore([thunk]);
// const mock = new MockAdapter(axios);

// describe('login', () => {
//   it('dispatches LOGIN_SUCCESS when login is successful', () => {
//     const store = mockStore({});
//     const expectedActions = [
//       { type: LOGIN_REQUEST },
//       { type: LOGIN_SUCCESS, payload: 'token' },
//     ];
//     const email = 'test@example.com';
//     const password = 'password';
//     const response = { token: 'token' };
//     mock.onPost('https://reqres.in/api/login', { email, password }).reply(200, response);

//     return store.dispatch(login(email, password)).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });

//   it('dispatches LOGIN_FAILURE when login fails', () => {
//     const store = mockStore({});
//     const expectedActions = [
//       { type: LOGIN_REQUEST },
//       { type: LOGIN_FAILURE, payload: 'Invalid email or password' },
//     ];
//     const email = 'test@example.com';
//     const password = 'wrongpassword';
//     const errorResponse = { error: 'Invalid email or password' };
//     mock.onPost('https://reqres.in/api/login', { email, password }).reply(401, errorResponse);

//     return store.dispatch(login(email, password)).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });

describe('Test case for constants', () => {
    it("Test LOGIN_REQUEST constant", () => {
      const loginRequest = authAction.LOGIN_REQUEST;
      expect(loginRequest).toBe(LOGIN_REQUEST);
    });
  }) 