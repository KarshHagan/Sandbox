
// var request = require('superagent');

export const ADD_DESCRIPTOR = 'ADD_DESCRIPTOR';
export const REMOVE_DESCRIPTOR = 'REMOVE_DESCRIPTOR';

export const addDescriptors = (value) => {
  return { type: ADD_DESCRIPTOR, value };
};
export const removeDescriptor = (value) => {
  return { type: REMOVE_DESCRIPTOR, value };
};

export const CREATE_CANDIDATES = 'CREATE_CANDIDATES';
export const createCandidates = () => {
  return { type: CREATE_CANDIDATES };
};
export const REFRESH_CANDIDATES = 'REFRESH_CANDIDATES';
export const refreshCandidates = () => {
  return { type: REFRESH_CANDIDATES };
};
export const COMPLETE = 'COMPLETE';
export const completeProcess = (selected) => {
  return { type: COMPLETE, selected };
};
