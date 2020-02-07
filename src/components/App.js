import React from 'react';
import ArtistSearch from './ArtistSearch';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ArtistDetail from './ArtistDetail';
import ReleaseDetail from './releases/ReleaseDetail';

export default function App() {
  return (
    <Router>
      
      <Route exact path="/" component={ArtistSearch}/> 
      <Route path="/artist/:artistId" component={ArtistDetail} />
      <Route path="/release/:releaseId" component={ReleaseDetail} />
      
    </Router>
  );
}
  
