import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../Context';
import PostsEmpty from '../components/posts-empty/PostsEmpty';
import MyPostsContainer from '../components/my-posts/MyPostsContainer';

function MyPosts() {
  const { user } = useStateValue();
  const navigate = useNavigate();
  const [myPosts, setMyPosts] = useState([]);
  useEffect(() => {
    if (user) {
      axios.get(`/posts?username=${user.username}`)
        .then((res) => setMyPosts(res.data))
        .catch((err) => console.error(err));
    } else {
      navigate('/');
    }
  }, [myPosts, user]);
  return (
    <div>
      {
        myPosts.length > 0 ? <MyPostsContainer posts={myPosts} /> : <PostsEmpty />
      }
    </div>
  );
}

export default MyPosts;
