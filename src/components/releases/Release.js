import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReleaseItem from './RecordingItem';
import getRelease from '../../services/artistApi';


const [releaseList, setReleaseList] = useState();

const ReleaseList = ({ releaseList }) => {
  const releaseElements = release.map ((item, id) => (
    <li key={id}>
      <ReleaseItem releaseItem={item} />
    </li>
  ));


  return (
    <>
      <div>
        <h2>Release</h2>
        <ul>
          {releaseElements}
        </ul>
      </div>
    </>
  );
};

ReleaseList.propTypes = {
  Artist: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  ReleaseItem: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }))
};

const dummyData = {
  'recording-offset': 0,
  'recording-count': 2,
  'recordings': [
    {
      'length': 124000,
      'disambiguation': 'original mono studio mix',
      'video': false,
      'id': '875c1cf7-f568-4f0d-b5e3-bc8a7614269a',
      'title': 'Please Please Me'
    },
    {
      'disambiguation': 'original mono studio mix',
      'video': false,
      'length': 145000,
      'title': 'Ask Me Why',
      'id': 'c8da403f-3c34-48b0-ae9e-7aa419df07c3'
    }
  ]

};
export default ReleaseList;
