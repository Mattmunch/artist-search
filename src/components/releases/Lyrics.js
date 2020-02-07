import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getLyrics } from '../../services/artistApi';

const Lyrics = ({ match }) => {
  const [lyrics, setLyrics] = useState('');
  useEffect(() => {
    getLyrics(match.params.artist, match.params.title)
      .then(lyrics => setLyrics(lyrics));
  }, []);
console.log(lyrics);
  return (
    <p>{lyrics.lyrics}</p>
  );
};

Lyrics.propTypes = {
  match: PropTypes.object.isRequired
};

export default Lyrics;
