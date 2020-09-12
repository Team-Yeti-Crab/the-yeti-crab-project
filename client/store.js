// here is where we will import from redux

// importing from redux to import store and applyMiddleware
import { createStore, applyMiddleware } from 'redux';
//import composeWithDevTools to give us access to redux dev tools from google
import { composeWithDevTools } from 'redux-devtools-extension';
// import our root reducer that we made in our index.js(needed for multiple reducers)
import rootReducer from './reducers/index';

// we will create our store here!
// Declare a const var with the label store and set it equal to the eval result of createStore passing in rootReducer

const store = createStore(rootReducer);

//export our store here
export default store;
