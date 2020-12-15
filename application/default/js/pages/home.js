
// import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

var HomePage = ({ dispatch, data }) => {
  console.log(data, dispatch);

  return (
    <div className="render-group">
      <h1>Default</h1>
      <p>Template</p>
    </div>
  );
};

HomePage.propTypes = {
  dispatch: PropTypes.function,
  data: PropTypes.object,
};

export default HomePage;
