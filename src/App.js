import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import NowPlaying from './containers/NowPlaying/NowPlaying';
import UpcomingMovies from './containers/UpcomingMovies/UpcomingMovies';
import LatestMovies from './containers/LatestMovies/LatestMovies';
import {Route , Switch} from 'react-router-dom';
import SearchMovie from './containers/SearchMovie/SearchMovie';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <Switch>
              <Route path="/" exact component={NowPlaying}/>
              <Route path="/UpcomingMovies" component={UpcomingMovies} />
              <Route path="/LatestMovies" component={LatestMovies}/>
              <Route path="/SearchMovies" component={SearchMovie}/>
            </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;