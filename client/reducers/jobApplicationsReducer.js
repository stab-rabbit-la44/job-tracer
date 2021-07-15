import * as types from '../constants/actionTypes';

// define initialState

const initialState = {
  jobApplications: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_JOB_APPLICATIONS:
      const jobApps = []
      action.payload.forEach((app) => {
        let jobApplication = {
          id: app.id,
          companyName: app.company_name,
          description: app.description,
          favorite: app.favorite,
          jobTitle: app.job_title,
          notes: app.notes,
          postSource: app.post_source,
          salary: app.salary,
          statusDate: app.status_date,
          statusName: app.status_name,
        }
        jobApps.push(jobApplication)
      })
      return {
        ...state,
        jobApplications: jobApps,
        // jobApplications: action.payload
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
