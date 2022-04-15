import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/header/Header';
import SubredditArticle from '../../components/subredditArticle/SubredditArticle';
import logo from '../../assets/logo.png';
import './HomePage.css';

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
                  <SubredditArticle
                    key={reddit.data.id}
                    url={reddit.data.url}
                    title={reddit.data.title}
                    subredditName={reddit.data.subreddit}
                    subredditNamePrefixed={reddit.data.subreddit_name_prefixed}
                    comments={reddit.data.num_comments}
                    ups={reddit.data.ups}
                  />
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