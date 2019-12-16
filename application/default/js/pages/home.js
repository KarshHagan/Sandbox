
// import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

var HomePage = ({ history, data }) => {
  console.log(history, data);

  return (
    <div className="render-group">
      <h1>Default</h1>
      <p>Template</p>
    </div>
  );
};

HomePage.propTypes = {
  history: PropTypes.object,
  data: PropTypes.object,
};

export default HomePage;
