export const getArtists = (query) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=25`)
    .then(res => res.json());
};
    
export const getRelease = (releaseid) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseid}&fmt=json`)
    .then(res => res.json());
};
