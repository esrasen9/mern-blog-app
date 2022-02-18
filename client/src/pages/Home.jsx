import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Banner from '../components/banner/Banner';
import Posts from '../components/posts/Posts';
import { useStateValue } from '../Context';

function Home() {
  const { setPosts } = useStateValue();
  const { search } = useLocation();

  useEffect(() => {
    axios.get(`/posts${search}`)
      .then((posts) => setPosts([...posts.data]))
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div>
      <Banner />
      <Posts />
    </div>
  );
}

export default Home;
