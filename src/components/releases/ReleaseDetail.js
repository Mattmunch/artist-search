import React from 'react';
import PropTypes from 'prop-types';
import RecordingItem from './RecordingItem';
import { useRecordings } from '../../hooks/useRecordings';


const RecordingList = ({ match }) => {
  const { recordings } = useRecordings(match.params.releaseId);
  console.log(recordings);
  const recordingElements = recordings.map (recording => (
    <li key={recording.id}>
      <RecordingItem title={recording.title} />
    </li>
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
