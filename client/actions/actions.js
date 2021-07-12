import * as types from '../constants/actionTypes';

export const loadJobApplications = () => (dispatch) => {
  fetch('api/', {
    method: 'GET',
    headers: {
      'Content-Type': 'Application/JSON',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.LOAD_JOB_APPLICATIONS,
        payload: data,
      });
    });
};

export const addApp = () => ({
  type: types.ADD_JOB_APPLICATION,
  payload: 'addApp payload placeholder',
});

export const deleteJobApplication = (id) => (dispatch) => {
  console.log(id);
  fetch(`api/jobApplication/?id=${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'Application/JSON',
    },
  }).then(() => {
    dispatch({
      type: types.DELETE_JOB_APPLICATION,
      payload: id,
    });
  });
};

export const editApp = () => ({
  type: types.EDIT_JOB_APPLICATION,
  payload: 'editApp payload placeholder',
});
