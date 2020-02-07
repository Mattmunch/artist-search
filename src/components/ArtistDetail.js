import React from 'react';
import { Link } from 'react-router-dom';
import { useReleases } from '../hooks/useReleases';
import ReleaseItem from './ReleaseItem';
import PropTypes from 'prop-types';

const ArtistDetail = ({ match }) => {
  const { releases } = useReleases(match.params.artistId);
console.log(releases);
  const artistReleases = releases.map(release => (
    <li key={release.id}>
      <Link to={`/release/${release.id}`}>
        <ReleaseItem artwork={release.artwork} title={release.title}/>
      </Link>
    </li>
  ));

  return (
    <ul>
      {artistReleases}
    </ul>
  );
};
ArtistDetail.propTypes = {
  match: PropTypes.object.isRequired
};

export default ArtistDetail;
