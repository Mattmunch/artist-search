import { useState, useEffect } from 'react';
import { getRecordings } from '../services/artistApi';

export const useRecordings = releaseId => {
  const [recordings, setRecordings] = useState({ recordings:[] });

  useEffect(() => {
    getRecordings(releaseId)
      .then(recordings => setRecordings(recordings));
  }, []);

  return recordings;
};
