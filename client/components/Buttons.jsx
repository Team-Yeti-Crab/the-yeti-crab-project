// import statements
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Buttons = (props) => {
  return (
    <div>
      {/* onclick will change state path to "/login" */}
      <button type='button' id='loginButton'>
        Log-in
      </button>
      {/* onclick will change stare path to "/signup" */}
      <button type='button' id='signUpButton'>
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
export default Buttons;
