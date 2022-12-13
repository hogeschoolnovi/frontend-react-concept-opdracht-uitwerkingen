import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SubredditPage from './pages/subreddit/SubredditPage';
import HomePage from './pages/home/HomePage';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subreddit/:id" element={<SubredditPage />} />
      </Routes>

      <footer className="outer-content-container">
        <div className="inner-content-container">
          In opdracht van NOVI Hogeschool © 2022
        </div>
      </footer>
    </>
  );
}

export default App;
