import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header({ children }) {
  return (
    <header className="outer-content-container">
      <div className="inner-content-container">
        <nav>
          <ul>
            <li><NavLink to="/">Hottest posts</NavLink></li>
            <li><a href="https://www.reddit.com/">Reddit</a></li>
            <li><NavLink to="/subreddit/memes">Memes</NavLink></li>
          </ul>
        </nav>
        <div className="hero-content">
          {children}
        </div>
      </div>
    </header>
  );
}

export default Header;