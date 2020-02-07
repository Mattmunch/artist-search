import React from 'react';
import PropTypes from 'prop-types';
// import {  } from hooks

const ArtistDetail = ({ match }) => {
  const artist = useArtist(match.params.id);

  const releaseLinks = artist.release.map(url => (
    <a key={url} href={url}>Release {url.split('/').splice(-1)[0]}</a>
  ));

  const 

  return (
    <section>
      <h1>The Beatles</h1>
      <ul>
        <li>
          <p>{release.name}</p>
          <img src="https://ia801905.us.archive.org/20/items/mbid-ee397a6d-c56f-45ea-9955-d203d2fea708/mbid-ee397a6d-c56f-45ea-9955-d203d2fea708-15141015861.jpg" />
        </li>
        <li>
          <p>{release.name}</p>
          <img src="https://ia801905.us.archive.org/20/items/mbid-ee397a6d-c56f-45ea-9955-d203d2fea708/mbid-ee397a6d-c56f-45ea-9955-d203d2fea708-15141015861.jpg" />
        </li>
        <li>
          <p>{release.name}</p>
          <img src="https://ia801905.us.archive.org/20/items/mbid-ee397a6d-c56f-45ea-9955-d203d2fea708/mbid-ee397a6d-c56f-45ea-9955-d203d2fea708-15141015861.jpg" />
        </li>
      </ul>
    </section>
  );
};

ReleaseDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default CharacterDetail;