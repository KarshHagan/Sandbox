
import _ from 'lodash';
import * as Actions from './actions.js';
import { doScience } from '../components/science.js';

const defaultState = {
  descriptors: [],
  allCandidates: [],
  candidates: [],
  selected: []
};

// private state storage
var currentState = Object.assign({}, defaultState);

// helper method
const newState = () => (Object.freeze(Object.assign({}, currentState)));

const dataReducer = (state = defaultState, action) => {

  switch (action.type) {
  case Actions.ADD_DESCRIPTOR:
    action.value.forEach((value) => {
      const exists = currentState.descriptors.find(word => word === value);
      if (!exists && value.length > 1) currentState.descriptors.push(value);
    });
    return newState();
  case Actions.REMOVE_DESCRIPTOR:
    currentState.descriptors = currentState.descriptors.filter(chip => chip !== action.value);
    return newState();
  case Actions.CREATE_CANDIDATES:
    currentState.allCandidates = doScience(currentState.descriptors);
    currentState.allCandidates = currentState.allCandidates.filter(word => word.length > 1);
    console.log(currentState.allCandidates);
    currentState.candidates = _.shuffle(_.sampleSize(currentState.allCandidates, 10));
    return newState();
  case Actions.REFRESH_CANDIDATES:
    currentState.candidates = _.shuffle(_.sampleSize(currentState.allCandidates, 10));
    return newState();
  case Actions.COMPLETE:
    currentState.selected = action.selected;
    return newState();
  default: return state;
  }

};

module.exports = dataReducer;
