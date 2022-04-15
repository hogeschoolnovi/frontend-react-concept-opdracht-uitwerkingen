import React from 'react';
import './HomePage.css';
import Header from '../../components/header/Header';
import logo from '../../assets/logo.png';

function HomePage() {
  return (
    <>
      <Header>
        <img src={logo} alt="Reddit header logo"/>
        <h1>Reddit</h1>
      </Header>
      <main>
        <section className="outer-content-container hottest-posts">
          <div className="inner-content-container">
            <h2>Hottest posts</h2>
            <h4>on Reddit right now</h4>
            <div className="subreddit-article-container">

            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;