import { useState, useEffect } from 'react';
import { getArtists } from '../services/artistApi';

const useArtists = (query) => {
  const [currentArtists, setCurrentArtists] = useState({
    artists:[]
  });
  useEffect(() => {
    if(query !== '') {
        
      getArtists(query)
        .then(currentArtists => setCurrentArtists(currentArtists));
    }
    
  }, [query]);
  return currentArtists;
};
export default useArtists;
