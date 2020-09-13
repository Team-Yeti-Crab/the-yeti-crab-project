import * as actionTypes from '../constants/actiontypes';

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

// Login will dispatch userInfo (object with username and password values) to reducer, saw docs that didnt user dispatch as param
export const login = (userInfo) => {
  const action = {
    type: actionTypes.LOGIN_AUTH,
    payload: userInfo
  }
  dispatch(action);
};

// Signup will dispatch newUserinfo (also an object) to reducer
export const signup = (newUserInfo) => {
  const action = {
    type: actionTypes.SIGNUP_AUTH,
    payload: newUserInfo
  }
  dispatch(action);
}