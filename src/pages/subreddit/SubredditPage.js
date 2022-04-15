import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './SubredditPage.css';
import Header from '../../components/header/Header';
import { ReactComponent as BackIcon } from '../../assets/back.svg';

function SubredditPage() {
  const { id } = useParams();

  return (
    <>
      <Header>
        <h1>r/{id}</h1>
        <h4>Subreddit specifications</h4>
      </Header>
      <main>
        <section className="outer-content-container subreddit-specifications">
          <div className="inner-content-container">

              <div className="subreddit-specification-details">
                <h3>Title</h3>

                <h3>Description</h3>

                <h3>Number of subscribers</h3>

                <span className="back-link-wrapper">
                  <BackIcon className="back-icon"/>
                  <Link to="/">Take me back</Link>
                </span>
              </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default SubredditPage;