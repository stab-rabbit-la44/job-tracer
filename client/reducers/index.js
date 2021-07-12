// import { combineReducers } from 'redux'
import { combineReducers } from 'redux';

// import reducers from './reducers';
import jobApplicationsReducer from './jobApplicationsReducer';

// export combineReducers w/ obj of key applications: reducers
const reducers = combineReducers({
  jobApplications: jobApplicationsReducer,
});

export default reducers;
