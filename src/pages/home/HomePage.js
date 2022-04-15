import React, { useEffect, useState } from 'react';
import './HomePage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import logo from '../../assets/logo.png';

function HomePage() {
  const [reddits, setReddits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://www.reddit.com/hot.json?limit=15');
        console.log(response);
        setReddits(response.data.data.children);
      } catch (e) {
        console.error(e);
      }
    }

    fetchData();
  }, [])

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
              {reddits.map((reddit) => {
                return (
                  <article className="subreddit-article" key={reddit.data.id}>

                    {/*We gebruiken hier een <a> ipv <Link> omdat we naar een webpagina buiten onze applicatie linken */}
                    <a href={reddit.data.url} className="subreddit-article-title-link">
                      <h3>{reddit.data.title}</h3>
                    </a>

                    <span>
                      <p><Link to={`/subreddit/${reddit.data.subreddit}`}>{reddit.data.subreddit_name_prefixed}</Link></p>
                      <p>Comments {reddit.data.num_comments} — Ups {reddit.data.ups}</p>
                    </span>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;