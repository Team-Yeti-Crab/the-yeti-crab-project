import React from 'react';
import YetiLogo from '../YetiLogo';
import * as actions from '../../actions/actions';
import { connect } from 'react-redux';

const mapDisaptchToProps = (dispatch) => ({
  signup: (userInfo) => dispatch(actions.signup(userInfo)),
});

const SignUpPage = (props) => {
  function SignupWrapper() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    const reqBody = {
      firstName,
      lastName,
      email,
      username,
      password,
      confirmpassword,
    };
    props.signup(reqBody);
  }

  return (
    <div className='AuthContainer'>
      <YetiLogo />
      <div className='SignUpContainer'>
      <input
        type='text'
        id='firstName'
        placeholder='First Name'
        required='true'
      ></input>
      <input
        type='text'
        id='lastName'
        placeholder='Last Name'
        required='true'
      ></input>
      <input
        type='email'
        id='email'
        placeholder='e-mail'
        required='true'
      ></input>
      <input
        type='text'
        id='username'
        placeholder='Username'
        required='true'
      ></input>
      <input
        type='password'
        id='password'
        placeholder='Password'
        required='true'
      ></input>
      <input
        type='password'
        id='confirmpassword'
        placeholder='Confirm Password'
        required='true'
      ></input>
      <button type='button' id='signupPageButton' onClick={SignupWrapper}>
        Submit
      </button>
      </div>
    </div>
  );
};

export default connect(null, mapDisaptchToProps)(SignUpPage);
