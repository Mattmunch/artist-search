export const getArtists = (query) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=25`)
    .then(res => {
      return res.json();
    });
};
    
  
