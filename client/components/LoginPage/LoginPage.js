import React from 'react';
import YetiLogo from '../YetiLogo';

const LoginPage = (props) => {
  return (
    <div className='AuthContainer'>
      <YetiLogo />
      <input
        type='text'
        id='LoginUsername'
        placeholder='Username'
        required='true'
      ></input>
      <input
        type='text'
        id='LoginPassword'
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
