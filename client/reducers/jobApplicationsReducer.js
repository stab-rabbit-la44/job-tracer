import * as types from '../constants/actionTypes';

// define initialState

const initialState = {
  jobApplications: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_JOB_APPLICATION:
      return {
        ...state,
      };
    case types.DELETE_JOB_APPLICATION:
      return {
        ...state,
      };
    case types.EDIT_JOB_APPLICATION:
      return {
        ...state,
      };
    case types.LOAD_JOB_APPLICATIONS:
      return {
        ...state,
        jobApplications: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
