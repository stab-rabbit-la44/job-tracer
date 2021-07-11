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

export const loadApps = () => ({
  type: types.LOAD_APPS,
  payload: 'loadApps payload placeholder',
});
