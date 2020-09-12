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

