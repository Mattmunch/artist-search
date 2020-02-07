import React from 'react';
import PropTypes from 'prop-types';

const ReleaseItem = ({ title, artwork }) => {

  return (
    <figure>
      <img src={artwork} />
      <figcaption>
        <p>{title}</p>
      </figcaption>
    </figure>
  );
};

ReleaseItem.propTypes = {
  title: PropTypes.string,
  artwork: PropTypes.string,
};

export default ReleaseItem;
