// import actions
import * as actionTypes from '../constants/actiontypes';

// reducers go here

// initial state is created
const initialState = {
  isLoggingIn: false,
  isSigningUp: false,
};

// reducer function

const yetiReducer = (state = initialState, action) => {
  switch (action.type) {
    // Functionality to show login popup
    case actionTypes.LOGGING_IN :
      return {
        ...state,
        isLoggingIn: true
      }
    // functionality to show signin popup
    case actionTypes.SIGNING_UP :
      return {
        ...state,
        isSigningUp: true
      }
    default :
      return state
  }
};

// This is where we will export our reducer(s)
export default yetiReducer;
