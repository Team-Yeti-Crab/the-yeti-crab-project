// import statements
import React from 'react';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

// mapping our dispatch to props, each key is method which dispatches an action creator
const mapDispatchToProps = (dispatch) => ({
  loginPopup: () => dispatch(actions.loginPopup()),
  signupPopup: () => dispatch(actions.signupPopup()),
});

const Buttons = (props) => {
  return (
    <div id='buttonContainer'>
      {/* onclick will change state path to "/login" */}
      <button type='button' id='logInButton' onClick={props.loginPopup}>
        Log-in
      </button>
      {/* onclick will change stare path to "/signup" */}
      <button type='button' id='signUpButton' onClick={props.signupPopup}>
        Sign Up!
      </button>
    </div>
  );
};

// login button
// the login once clicked will populate a username/password field to allow for signup
// another button may be needed to confirm the login or use the same login button to check state and conditional statement executes route to user home page.

// signup button
// when signup button is clicked a field will populate requesting user information (firstname, lastname, email, username, password). a submit button will also have to popoulate. once submit is clicked the user will then be routed to their new home page.
// connect will pass our state & dispatch props to the App props.
export default connect(null, mapDispatchToProps)(Buttons);