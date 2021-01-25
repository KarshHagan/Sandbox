
import React, { useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';

import { reducer, initialState } from './database/reducer.js';
// import * as Actions from './database/actions.js';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home.js';

// render the router
const LandingPage = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const { fetchStart, fetchComplete } = state;

  // const WP_HOST = "";
  // async function fetchData() {
  //   const response = await fetch(WP_HOST + "/wp-json/inr/v1/locations");
  //   response.json()
  //     .then((response) => {
  //       dispatch({
  //         type: Actions.LIST_RECEIVED,
  //         list: response.locations
  //       });
  //     }).catch((error) => dispatch({ type: Actions.ERROR, error}));
  // }

  useEffect(() => {
    if (!fetchStart && !fetchComplete) {
      // dispatch({ type: Actions.FETCH_START });
      // fetchData();
    }
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage dispatch={dispatch} data={state} />
        </Route>
      </Switch>
    </Router>
  );
};

const node = document.getElementById('content');
if (node) { ReactDOM.render(<LandingPage />, node); }

// it has begun
console.log('%c App Started', 'color:green');
