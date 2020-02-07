import { useState, useEffect } from 'react';
// import { getArtists } from '../services/...';

export const useArtists = name => {
  const [releases, setReleases] = useState([http://musicbrainz.org/ws/2/release?artist=b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d&fmt=json]);

  useEffect(() => {
    getCharacters(name)
      .then(characters => setCharacters(characters));
  }, [name]);

  return { characters };
};
