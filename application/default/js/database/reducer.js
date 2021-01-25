
import * as Actions from './actions.js';
import Cookies from './cookies.js';

export const initialState = {
  fetchStart: false,
  fetchComplete: false,
  originalList: [],
  currentList: [],
  selectedRegion: null,
  searchPhrase: '',
  language: 'en',
  country: 'us',
  host: window.location.host,
  path: window.location.pathname,
};

var langPref = Cookies.get('language');
var countryPref = Cookies.get('country');
if (langPref) initialState.language = langPref;
if (countryPref) initialState.country = countryPref;

// private state storage
var currentState = Object.assign({}, initialState);

// helper method
const newState = () => (Object.freeze(Object.assign({}, currentState)));

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {

  // case Actions.FETCH_START:
  //   currentState.fetchStart = true;
  //   return newState();
  //
  // case Actions.LIST_RECEIVED:
  //   return newState();

  case Actions.UPDATE_LANGUAGE:
    currentState.language = action.language;
    Cookies.set('language', action.language);
    currentState.country = action.country;
    Cookies.set('country', action.country);
    return newState();

  default:
    return currentState;
  }
};
