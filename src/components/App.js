import React from 'react';
import ArtistSearch from './ArtistSearch';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ArtistDetail from './ArtistDetail';
import ReleaseDetail from './releases/ReleaseDetail';
import Lyrics from './releases/Lyrics';

export default function App() {
  return (
    <Router>
      
      <Route exact path="/" component={ArtistSearch}/> 
      <Route path="/artist/:artistId/:artist" component={ArtistDetail} />
      <Route path="/release/:releaseId/:artist" component={ReleaseDetail} />
      <Route path="/lyrics/:artist/:title" component={Lyrics} />
    </Router>
  );
}
  
