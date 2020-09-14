// import actions
import * as actionTypes from '../constants/actiontypes';

// reducers go here

// initial state is created
const initialState = {
  isLoggingIn: false,
  isSigningUp: false,
  isLoggedIn: false,
  currentUserId: '',
  // Path used for react router
  path: '/',
  // Post will be array of objects
  posts: [],
  loading: false,
  error: null,
};

// reducer function

const yetiReducer = (state = initialState, action) => {
  switch (action.type) {
    // Functionality to show login popup
    case actionTypes.LOGGING_IN:
      return {
        ...state,
        isLoggingIn: true,
      };
    // functionality to show signin popup
    case actionTypes.SIGNING_UP:
      return {
        ...state,
        isSigningUp: true,
      };
    // LOGIN REDUCERS
    case actionTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        currentUserId: action.payload,
        path: '/main',
        //Something with posts
        loading: false,
        error: null,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    // SIGNUP REDUCERS
    case actionTypes.SIGNUP_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        isLoggedIn: true,
        currentUserId: action.payload.user_id,
        path: '/main',
        loading: false,
        error: null,
      };
    case actionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    // GET POST REDUCERS
    case actionTypes.GETPOST_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GETPOST_SUCCESS:
      return {
        ...state,
        posts: [...action.payload],
        loading: false,
        error: null,
      };
    case actionTypes.GETPOST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    // ADD POST REDUCERS
    case actionTypes.ADDPOST_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ADDPOST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
        error: null,
      };
    case actionTypes.ADDPOST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    // LOGIN AND SIGNUP REDIRECT REDUCERS
    case actionTypes.LOGIN_REDIRECT:
      return {
        ...state,
        path: '/login',
      };
    case actionTypes.SIGNUP_REDIRECT:
      return {
        ...state,
        path: '/signup',
      };
    // DEFAULT RETURN
    default:
      return state;
  }
};

// This is where we will export our reducer(s)
export default yetiReducer;
