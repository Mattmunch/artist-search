export const getArtists = (query) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=25`)
    .then(res => res.json());
};
    
export const getReleases = (artistid) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistid}&fmt=json`)
    .then(res => {
      return res.json();
    });
};
    
export const getRecordings = (releaseid) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseid}&fmt=json`)
    .then(res => res.json());
};

export const getLyrics = (artist, title) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json());
};
