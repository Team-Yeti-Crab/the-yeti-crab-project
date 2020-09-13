// import statements
import * as actionTypes from '../constants/actiontypes';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Buttons extends Component {
  render() {
    return (
      <button onClick={onClick} type={type}>
        Woohoo!.
      </button>
    );
  }
}

// login button
// the login once clicked will populate a username/password field to allow for signup
// another button may be needed to confirm the login or use the same login button to check state and conditional statement executes route to user home page.

// signup button
// when signup button is clicked a field will populate requesting user information (firstname, lastname, email, username, password). a submit button will also have to popoulate. once submit is clicked the user will then be routed to their new home page.
module.exports = Buttons;
