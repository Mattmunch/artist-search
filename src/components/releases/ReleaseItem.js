import React from 'react';
import PropTypes from 'prop-types';

const ReleaseItem = ({ releaseItem }) => (
  <>
    <h2>releaseItem.title</h2>
    <p>releaseItem.id</p>
  </>
);

ReleaseItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}.isRequired;

export default ReleaseItem;
