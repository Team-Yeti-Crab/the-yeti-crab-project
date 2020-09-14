import React from 'react';
import YetiLogo from '../YetiLogo';
// import React and YetiLogo

// create the LoginPage component passing in props to render our Yeti Logo, two input fields and login button.
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

//export the LoginPage
export default LoginPage;
