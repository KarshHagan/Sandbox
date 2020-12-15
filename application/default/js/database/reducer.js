
import * as Actions from './actions.js';

export const initialState = {
  fetchStart: false,
  fetchComplete: false,
  originalList: [],
  currentList: [],
  selectedRegion: null,
  searchPhrase: '',
  host: window.location.host,
  path: window.location.pathname,
};

// private state storage
var currentState = Object.assign({}, initialState);

// helper method
const newState = () => (Object.freeze(Object.assign({}, currentState)));

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {

  case Actions.FETCH_START:
    currentState.fetchStart = true;
    return newState();

  case Actions.LIST_RECEIVED:
    return newState();

  default:
    return currentState;
  }
};
