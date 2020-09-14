import React, { Component } from 'react';
import * as actions from './actions/actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignUpPage/SignUpPage';
import Home from './components/HomePage/MainHome';

// mapping our state to props, so props will reflect our state's values.
const mapStateToProps = (state) => ({
  isLoggingIn: state.yetiReducer.isLoggingIn,
  isSigningUp: state.yetiReducer.isSigningUp,
  path: state.yetiReducer.path,
  isLoggedIn: state.yetiReducer.isLoggedIn
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
    this.checkIfLoggedIn = this.checkIfLoggedIn.bind(this);
  }

  checkIfLoggedIn() {
    if (this.props.isLoggedIn) {
      return <Home />;
    }
  }

  render() {
    console.log(this.props);
    return (
      <Router>
        <div id='App'>
          <Switch>
            <Route path='/login'>
              {this.props.isLoggedIn && <Redirect to='/home' />}
              {this.props.isSigningUp && <Redirect to='/signup' />}
              <LoginPage />
            </Route>
            <Route path='/signup'>
              {this.props.isLoggedIn && <Redirect to='/home' />}
              {this.props.isLoggingIn && <Redirect to='/login' />}
              <SignupPage />
            </Route>
            <Route path='/home' component={Home} onEnter={this.checkIfLoggedIn} />
            <Route exact path='/'>
              {/* Come back to later to fix bug where user can enter main page without auth */}
              {this.props.isLoggedIn && <Redirect to='/home' />}
              {this.props.isLoggingIn && <Redirect to='/login' />}
              {this.props.isSigningUp && <Redirect to='/signup' />}
              <LandingPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// connect will pass our state & dispatch props to the App props.
export default connect(mapStateToProps, mapDispatchToProps)(App);
