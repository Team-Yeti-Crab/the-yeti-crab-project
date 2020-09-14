import React from 'react';
import YetiLogo from '../YetiLogo';
import * as actions from '../../actions/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  login: (userInfo) => dispatch(actions.login(userInfo)),
});

// create the LoginPage component passing in props to render our Yeti Logo, two input fields and login button.
const LoginPage = (props) => {
  function loginWrapper() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const reqBody = { username, password };
    props.login(reqBody);
  }

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
        type='password'
        id='loginPassword'
        placeholder='Password'
        required='true'
      ></input>
      <button type='button' id='loginPageButton' onClick={loginWrapper}>
        Login
      </button>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(LoginPage);
