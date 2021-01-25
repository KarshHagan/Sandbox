
// import _ from 'lodash';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import ScrollTrigger from 'react-scroll-trigger';

var HomePage = ({ dispatch, data }) => {
  console.log(data, dispatch);

  useEffect(() => {
    // window.hbspt && window.hbspt.forms.create({
    //   portalId: '6035988',
    //   formId: '186021f5-f852-4783-b91b-4d85683d2a5d',
    //   target: '#form-target'
    // });
  }, []); // only do it once

  // const [heroVisible, setHeroVisible] = useState(false);

  return (
    <div className="render-group">
      <h1 style={{color: 'blue'}}>Default</h1>
      <p>Template</p>
    </div>
  );
};

HomePage.propTypes = {
  dispatch: PropTypes.func,
  data: PropTypes.object,
};

export default HomePage;
