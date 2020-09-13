import * as actionTypes from '../constants/actiontypes';
import axios from 'axios';

// Create specific action functions that return object/dispatch
export const loginPopup = (dispatch) => (
  dispatch({
    type: actionTypes.LOGGING_IN
  })
);

export const signupPopup = (dispatch) => (
  dispatch({
    type: actionTypes.SIGNING_UP
  })
);

// LOGIN ACTIONS //
// Login is a thunk that returns a function and let's store know of status of request at each point 
export const login = (userInfo) => {
  return dispatch => {
    dispatch(loginStarted());

    // Post request to server, axios automatically parses response
    axios.post('/api/login', {
      username: userInfo.username,
      password: userInfo.password
    })
    .then(res => dispatch(loginSuccess(res.data)))
    .catch(err => dispatch(loginFailed(err)));
  }
};

// Login started lets store know request started
export const loginStarted = () => ({
  type: actionTypes.LOGIN_START
});

// login success dispatches upon successful completion of get request
export const loginSuccess = (loginResponse) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: {...loginResponse}
});

// Login failure dispatches if theres an error in the request
export const loginFailed = (loginErr) => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: {...loginErr}
});

// SIGNUP ACTIONS //
// Signup will dispatch newUserinfo (also an object) to reducer
export const signup = (newUserInfo) => {
  const action = {
    type: actionTypes.SIGNUP_AUTH,
    payload: newUserInfo
  }
  dispatch(action);
}