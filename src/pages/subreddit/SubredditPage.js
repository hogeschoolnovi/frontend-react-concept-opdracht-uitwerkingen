import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SubredditPage.css';
import Header from '../../components/header/Header';
import BackLink from '../../components/backLink/BackLink';
import TitleAndDescription from '../../components/titleAndDescription/TitleAndDescription';
import formatDotNotation from '../../helpers/formatDotNotation';

function SubredditPage() {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://www.reddit.com/r/${id}/about.json`);
        console.log(response);
        setDetails(response.data.data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header>
        <h1>r/{id}</h1>
        <h4>Subreddit specifications</h4>
      </Header>
      <main>
        <section className="outer-content-container subreddit-specifications">
          <div className="inner-content-container">
            {Object.keys(details).length > 0 && (
              <div className="subreddit-specification-details">

                <TitleAndDescription title="Title" description={details.title} />
                <TitleAndDescription title="Description" description={details.description} />
                <TitleAndDescription title="Number of subscribers" description={formatDotNotation(details.subscribers)} />

                <BackLink url="/" label="Take me back" />
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default SubredditPage;