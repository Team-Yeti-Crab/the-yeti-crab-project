import React from 'react';
import YetiLogo from '../YetiLogo';

const SignUpPage = (props) => {
  return (
    <div className='AuthContainer'>
      <YetiLogo />
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
      <button type='button' id='signupPageButton' onClick=''>
        Submit
      </button>
    </div>
  );
};

export default SignUpPage;
