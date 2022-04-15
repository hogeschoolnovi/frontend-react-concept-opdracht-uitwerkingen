import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SubredditPage from './pages/subreddit/SubredditPage';
import HomePage from './pages/home/HomePage';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/subreddit/:id">
          <SubredditPage />
        </Route>
      </Switch>

      <footer className="outer-content-container">
        <div className="inner-content-container">
          In opdracht van NOVI Hogeschool © 2022
        </div>
      </footer>
    </>
  );
}

export default App;
