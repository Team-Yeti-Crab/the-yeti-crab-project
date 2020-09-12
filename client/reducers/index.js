// all of the reducers will imported and exported here.
import yetiReducer from './yetiReducer';

// importing combinedReducers from redux module, this will create one root reducer.
import { combinedReducers } from 'redux';

//
const rootReducer = combinedReducers({
  yetiReducer,
});

// export our rootReducer here
export default rootReducer;
