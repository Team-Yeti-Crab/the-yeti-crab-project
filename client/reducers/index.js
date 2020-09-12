// all of the reducers will imported and exported here.
import yetiReducer from './yetiReducer';

// importing combinedReducers from redux module, this will create one root reducer.
import { combineReducers } from 'redux';

//
const rootReducer = combineReducers({
  yetiReducer,
});

// export our rootReducer here
export default rootReducer;
