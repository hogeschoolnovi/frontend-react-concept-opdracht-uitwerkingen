import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SubredditPage from './pages/subreddit/SubredditPage';
import HomePage from './pages/home/HomePage';
import './App.css';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subreddit/:id" element={<SubredditPage />} />
      </Routes>

      <Footer company="NOVI Hogeschool" year="2022"/>
    </>
  );
}

export default App;
