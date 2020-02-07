import React from 'react';
import PropTypes from 'prop-types';

const ReleaseItem = ({ title, releaseId }) => {

  return (
    <figure>
      <img src={`http://coverartarchive.org/release/${releaseId}/front`} style={{ width: '200px' }} onError={(e)=>{e.target.onerror = null; e.target.src = 'https://dimensionmill.org/wp-content/uploads/2019/03/square-placeholder.jpg';}} />
      <figcaption>
        <p>{title}</p>
      </figcaption>
    </figure>
  );
};

ReleaseItem.propTypes = {
  title: PropTypes.string.isRequired,
  releaseId: PropTypes.string.isRequired
};

export default ReleaseItem;
