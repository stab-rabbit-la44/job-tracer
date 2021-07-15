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
    })
    .catch((err) => {
      // dispatch errors here later...
      console.log(err);
    });
};

export const addJobApplication = (data) => (dispatch) => {
  console.log(data);
  fetch(`api/jobApplication`, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify(data),
  })
    .then(() => {
      dispatch({
        type: types.ADD_JOB_APPLICATION,
        payload: data,
      });
    })
    .catch((err) => {
      // dispatch errors here later...
      console.log(err);
    });
};

export const deleteJobApplication = (id) => (dispatch) => {
  fetch(`api/jobApplication/?id=${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'Application/JSON',
    },
  })
    .then(() => {
      dispatch({
        type: types.DELETE_JOB_APPLICATION,
        payload: id,
      });
    })
    .catch((err) => {
      // dispatch errors here later...
      console.log(err);
    });
};

export const editApp = (data) => (dispatch) => {
  console.log(data);
  fetch(`api/jobApplication/${data.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify(data),
  })
    .then(() => {
      dispatch({
        type: types.EDIT_JOB_APPLICATION,
        payload: data,
      });
    })
    .catch((err) => {
      // dispatch errors here later...
      console.log(err);
    });
};
