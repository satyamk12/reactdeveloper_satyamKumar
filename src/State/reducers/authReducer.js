// authReducer.js

import { LOGIN_SUCCESS,  LOGIN_FAILURE } from "../actions/authActions";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
      };
    
    case LOGIN_FAILURE:
        return {
              ...state,
              error: true
        };
    default:
      return state;
  }
}
