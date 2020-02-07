import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecordingItem = ({ title, artist }) => (
  <>
    <Link to={`/lyrics/${artist}/${title}`}>
      <h2>{title}</h2>
    </Link>
  </>
);

RecordingItem.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired
};

export default RecordingItem;
