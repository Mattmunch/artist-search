import { useState, useEffect } from 'react';
import { getReleases } from '../services/artistApi';

export const useReleases = artistid => {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    getReleases(artistid)
      .then(({ releases }) => setReleases(releases));
  }, []);

  return { releases };
};
