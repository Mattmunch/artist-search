import React from 'react';
import PropTypes from 'prop-types';

const RecordingItem = ({ title }) => (
  <>
    <h2>{title}</h2>
    
  </>
);

RecordingItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default RecordingItem;
