import React from 'react';
import defaultImage from '../../img/defaultPost.jpeg';
import PostDetail from './PostDetail';
import './Post.css';

function Post({ post }) {
  const { postImage } = post;
  const imgSrc = `http://localhost:5001/${postImage}`;
  return (
    <div className="post">
      <img className="post-image" src={postImage ? imgSrc : defaultImage} alt="" />
      <PostDetail post={post} />
    </div>
  );
}

export default Post;
