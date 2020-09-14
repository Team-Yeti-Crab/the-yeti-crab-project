import React from 'react';
import YetiLogo from '../YetiLogo';

const LoginPage = (props) => {
  return (
    <div className='AuthContainer'>
      <YetiLogo />
      <input
        type='text'
        id='loginUsername'
        placeholder='Username'
        required='true'
      ></input>
      <input
        type='text'
        id='loginPassword'
        placeholder='Password'
        required='true'
      ></input>
      <button type='button' id='loginPageButton' onClick=''>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
