// import { combineReducers } from 'redux'
import { combineReducers } from 'redux';

// import reducers from './reducers';
import reducers from './reducers';

// export combineReducers w/ obj of key applications: reducers
export default combineReducers({
  applications: reducers,
});
