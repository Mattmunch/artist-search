import React from 'react';
import { Link } from 'react-router-dom';
import { useArtist } from '../hooks/artists';

const ArtistDetail = () => {
  const releases = useArtist();

  const artistReleases = releases.map(release => (
    <li key={release.id}>
      <Link to={`/artist/${release.id}`}>
        <img src={release.artwork} />
        <p>{release.title}</p>
      </Link>
    </li>
  ));

  return (
    <ul>
      {artistReleases}
    </ul>
  );
};

export default ArtistDetail;
