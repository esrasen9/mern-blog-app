import React from 'react';
import uuid from 'react-uuid';
import { FaMicroblog } from 'react-icons/fa';
import './MyPosts.css';
import Post from '../post/Post';

function MyPostsContainer({ posts }) {
  return (
    <div className="my-posts-container">
      <h1 className="my-posts-title">
        Writings by You
        <FaMicroblog size={35} />
      </h1>
      <div className="my-posts">
        {
          posts.map((post) => (<Post key={uuid()} post={post} />))
        }
      </div>
    </div>
  );
}

export default MyPostsContainer;
