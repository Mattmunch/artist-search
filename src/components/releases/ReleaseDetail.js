import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecordingItem from './RecordingItem';
import { useRecordings } from '../../hooks/useRecordings';


const RecordingList = ({ match }) => {
  const { recordings } = useRecordings(match.params.releaseId);
  console.log(match)
  const recordingElements = recordings.map (recording => (
    <>
      <Link to={`/lyrics/${match.params.artist}/${match.params.title}`}>
        <li key={recording.id}>
          <RecordingItem artist={match.params.artist} title={recording.title} />
        </li>
      </Link>
    </>
  ));


  return (
    <>
      <div>
        <h2>Release</h2>
        <ul>
          {recordingElements}
        </ul>
      </div>
    </>
  );
};

RecordingList.propTypes = {
  match: PropTypes.object.isRequired
};

export default RecordingList;
