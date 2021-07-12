import * as types from '../constants/actionTypes';

// define initialState

const initialState = {
  jobApplications: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_JOB_APPLICATIONS:
      return {
        ...state,
        jobApplications: action.payload,
      };
    case types.ADD_JOB_APPLICATION:
      return {
        ...state,
        jobApplications: [action.payload, ...state.jobApplications],
      };
    case types.DELETE_JOB_APPLICATION:
      return {
        ...state,
        jobApplications: state.jobApplications.filter(
          (application) => application.id !== action.payload
        ),
      };
    case types.EDIT_JOB_APPLICATION:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
