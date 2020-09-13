import React, { Component } from 'react';
import * as actions from './actions/actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';

// mapping our state to props, so props will reflect our state's values.
const mapStateToProps = (state) => ({
  isLoggingIn: state.yetiReducer.isLoggingIn,
  isSigningUp: state.yetiReducer.isSigningUp,
});

// mapping our dispatch to props, each key is method which dispatches an action creator
const mapDispatchToProps = (dispatch) => ({
  loginPopup: () => dispatch(actions.loginPopup()),
  signupPopup: () => dispatch(actions.signupPopup()),
});

// declare a const App which will will be our main component which will render child components.
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <div id='App'>
        <LandingPage />
      </div>
    );
  }
}

// connect will pass our state & dispatch props to the App props.
export default connect(mapStateToProps, mapDispatchToProps)(App);
