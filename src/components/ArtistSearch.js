import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useArtists from '../hooks/useArtists';
import styles from './App.css';

const ArtistSearch = () => {
  const [query, setQuery] = useState('');
  const artistResponse = useArtists(query);
  const artistElements = artistResponse.artists.map(artist =>
    <li className={styles.ArtistName} key={artist.id}>
      <Link to={`/artist/${artist.id}/${artist.name}`}>
        <h1>{artist.name}</h1>
      </Link>
    </li>
  );
    
  return (
    <>
      <form className={styles.ArtistSearch}>
        <input type='text' placeholder="Search by artist" value={query} onChange={(event) => setQuery(event.target.value)} />
      </form>
      <ul>
        {artistElements}
      </ul>
    </>
  );
};


export default ArtistSearch;
