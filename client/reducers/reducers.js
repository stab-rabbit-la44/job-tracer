import * as types from '../constants/actionTypes';

// define initialState

const initialState = {
  applications: [
    {
      id: 1,
      company_name: 'Company Name 1',
      job_title: 'Job Title 1',
      salary: null,
      description: 'description 1',
      post_source: 'friend',
      status_id: 1234,
      notes: 'notes notes notes',
      status_date: '01/01/1990',
      favorite: false,
    },
    {
      id: 2,
      company_name: 'Company Name 1',
      job_title: 'Job Title 1',
      salary: null,
      description: 'description 1',
      post_source: 'friend',
      status_id: 1234,
      notes: 'notes notes notes',
      status_date: '01/01/1990',
      favorite: false,
    },
    {
      id: 3,
      company_name: 'Company Name 1',
      job_title: 'Job Title 1',
      salary: null,
      description: 'description 1',
      post_source: 'friend',
      status_id: 1234,
      notes: 'notes notes notes',
      status_date: '01/01/1990',
      favorite: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_APP:
      return {
        ...state,
      };
    case types.DELETE_APP:
      return {
        ...state,
      };
    case types.EDIT_APP:
      return {
        ...state,
      };
    case types.LOAD_APPS:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
