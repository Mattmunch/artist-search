import React from 'react';
import ArtistSearch from './ArtistSearch';
import styles from './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ArtistDetail from './ArtistDetail';
import ReleaseDetail from './releases/ReleaseDetail';
import Lyrics from './releases/Lyrics';

const Header = () => (
  <header>
    <h1 className={styles.Header}>LyricsQuest</h1>
    <nav className={styles.ReturnLink}>
      <Link to="/">-- Return to Artist Search --</Link>
    </nav>
  </header>
);

export default function App() {
  return (
    <Router>   
      <Header />
      <Route exact path="/" component={ArtistSearch}/> 
      <Route path="/artist/:artistId/:artist" component={ArtistDetail} />
      <Route path="/release/:releaseId/:artist" component={ReleaseDetail} />
      <Route path="/lyrics/:artist/:title" component={Lyrics} />
    </Router>
  );
}
  
