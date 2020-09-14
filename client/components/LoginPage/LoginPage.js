import React from 'react';
import YetiLogo from '../YetiLogo';
import * as actions from '../../actions/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  login: (userInfo) => dispatch(actions.login(userInfo))
});

const LoginPage = (props) => {
  function loginWrapper() {
    const username = document.getElementById('LoginUsername').value;
    const password = document.getElementById('LoginPassword').value;
    const reqBody = {username, password};
    props.login(reqBody);
  }

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
        type='password'
        id='LoginPassword'
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
