import * as actionTypes from '../constants/actiontypes';
import axios from 'axios';

// Create specific action functions that return object/dispatch
export const loginPopup = () => ({
  type: actionTypes.LOGGING_IN,
});

export const signupPopup = () => ({
  type: actionTypes.SIGNING_UP,
});

// LOGIN ACTIONS //
// Login is a thunk that returns a function and let's store know of status of request at each point
export const login = (userInfo) => {
  return (dispatch) => {
    dispatch(loginStarted());

    // Post request to server, axios automatically parses response
    axios
      .post('/api/login', {
        username: userInfo.username,
        password: userInfo.password,
      })
      // Expect user id from api call
      .then((res) => dispatch(loginSuccess(res.data)))
      .then(()=> dispatch(getPosts()))
      .catch((err) => dispatch(loginFailed(err.message)));
  };
};

// Login started lets store know request started
export const loginStarted = () => ({
  type: actionTypes.LOGIN_START,
});

// login success dispatches upon successful completion of get request
export const loginSuccess = (loginResponse) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: loginResponse,
});

// Login failure dispatches if theres an error in the request
export const loginFailed = (loginErr) => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: { ...loginErr },
});

// SIGNUP ACTIONS //
// Signup will return a dispatch that gets invoked once by middleware, then invoked again when dispatched in React
export const signup = (newUserInfo) => {
  return (dispatch) => {
    dispatch(signupStart());

    // Axios post to signup
    axios
      .post('/api/signup', {
        firstName: newUserInfo.firstName,
        lastName: newUserInfo.lastName,
        email: newUserInfo.email,
        username: newUserInfo.username,
        password: newUserInfo.password,
        confirmPassword: newUserInfo.confirmpassword,
      })
      .then((res) => dispatch(signupSuccess(res.data)))
      .then(()=> dispatch(getPosts()))
      .catch((err) => dispatch(signupFailed(err.message)));
  };
};
// Signup start lets store know request initiated
export const signupStart = () => ({
  type: actionTypes.SIGNUP_START,
});
// Signup success changes state based on successful response
export const signupSuccess = (signupResponse) => ({
  type: actionTypes.SIGNUP_SUCCESS,
  payload: signupResponse,
});
// Signup failure responds with the specific error message and adds it to state
export const signupFailed = (signupErr) => ({
  type: actionTypes.SIGNUP_FAILURE,
  payload: { ...signupErr },
});
// GET POST ACTIONS
export const getPosts = () => {
  return (dispatch) => {
    dispatch(getPostStart());
    // Fill in body later
    axios
      .get('/api/posts')
      .then((res) => dispatch(getPostSuccess(res.data)))
      .catch((err) => dispatch(getPostFailed(err.message)));
  };
};
export const getPostStart = () => ({
  type: actionTypes.GETPOST_START,
});
export const getPostSuccess = (getPostResponse) => ({
  type: actionTypes.GETPOST_SUCCESS,
  payload: getPostResponse,
});
export const getPostFailed = (postErr) => ({
  type: actionTypes.GETPOST_FAILURE,
  payload: { ...postErr },
});
// ADD POST ACTIONS
export const addPost = (info) => {
  return (dispatch) => {
    dispatch(addPostStart());
    // Fill in body later
    axios
      .post('/api/posts', info)
      .then((res) => dispatch(addPostSuccess(res.data)))
      .catch((err) => dispatch(addPostFailed(err.message)));
  };
};
export const addPostStart = () => ({
  type: actionTypes.ADDPOST_START,
});
export const addPostSuccess = (addPostResponse) => ({
  type: actionTypes.ADDPOST_SUCCESS,
  payload: addPostResponse,
});
export const addPostFailed = (postErr) => ({
  type: actionTypes.ADDPOST_FAILURE,
  payload: postErr,
});
