import React from 'react';
import ArtistSearch from './ArtistSearch';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ArtistDetail from './ArtistDetail';
// import ReleaseItem from './releases/release';

export default function App() {
  return (
    <Router>
      
      <Route exact path="/" component={ArtistSearch}/> 
      <Route path="/artist/:artistId" component={ArtistDetail} />
      
    </Router>
  );
}
  
