import React from 'react';
import PropTypes from 'prop-types';

const Release = ({ title, artwork }) => {
  undefined.map();

  return (
    <figure>
      <img src={artwork} />
      <figcaption>
        <p>{title}</p>
      </figcaption>
    </figure>
  );
};

Release.propTypes = {
  title: PropTypes.string,
  artwork: PropTypes.string,
}
;
