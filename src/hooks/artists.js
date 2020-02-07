import { useState, useEffect } from 'react';
import { getReleases } from '../services/artistApi';

export const useArtists = name => {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    getReleases(name)
      .then(releases => setReleases(releases));
  }, [name]);

  return { releases };
};
