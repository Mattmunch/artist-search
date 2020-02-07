import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useArtists from '../hooks/useArtists';



const ArtistSearch = () => {
  const [query, setQuery] = useState('');
  const artistResponse = useArtists(query);
  console.log(artistResponse);
  const artistElements = artistResponse.artists.map(artist =>
    <li key={artist.id}>
      <Link to={`/artist/${artist.id}/${artist.name}`}>
        <h1>{artist.name}</h1>
      </Link>
    </li>
  );
    
  return (
    <>
      <input type='text' value={query} onChange={(event) => setQuery(event.target.value)} />
      <ul>
        {artistElements}
      </ul>
    </>
  );
};


export default ArtistSearch;
