import { useState, useEffect } from 'react';
import { getArtists } from '../services/artistApi';



const useCharacters = (query) => {
  const [currentArtists, setCurrentArtists] = useState({
    artists:[]
  });
  useEffect(() => {
    if(query !== '') {
        
      getArtists(query)
        .then(currentCharacters => setCurrentArtists(currentCharacters));
    }
    
  }, [query]);
  return currentArtists;
};
export default useCharacters;
