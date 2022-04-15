import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SubredditPage from './pages/subreddit/SubredditPage';
import HomePage from './pages/home/HomePage';
import './App.css';
import Footer from './components/footer/Footer';

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

      <Footer company="NOVI Hogeschool" year="2022"/>
    </>
  );
}

export default App;
