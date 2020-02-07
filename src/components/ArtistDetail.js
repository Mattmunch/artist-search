import React from 'react';
import { Link } from 'react-router-dom';
// import { useArtist } from hooks

const ArtistDetail = () => {
  const releases = useArtist();

  const artistReleases = releases.map(release => (
    <li key={artist.name}>
      <Link to={`/artist/${artist.name}`}>
      <img src={artwork} />
      <p>{release.title}</p>
      </Link>
    </li>
  ))

  return (
      <ul>
        {artistReleases}
      </ul>
  );
};

export default ArtistDetail;