import * as types from '../constants/actionTypes';

export const addApp = () => ({
  type: types.ADD_APP,
  payload: 'addApp payload placeholder',
});

export const deleteApp = () => ({
  type: types.DELETE_APP,
  payload: 'deleteApp payload placeholder',
});

export const editApp = () => ({
  type: types.EDIT_APP,
  payload: 'editApp payload placeholder',
});

export const loadApps = () => (dispatch) => {
  dispatch({
    type: types.LOAD_APPS,
    payload: {
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
    },
  });
};
