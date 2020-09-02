import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import SearchPage from './components/SearchPage';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>

          <Route path="/" exact>
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
          
          <Route path="/search/:search_query">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
