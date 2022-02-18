import React from 'react';
import { useNavigate } from 'react-router-dom';
import postNotFoundImg from '../../img/undraw_wall_post_re_y78d.svg';
import './PostsEmpty.css';

function PostsEmpty() {
  const navigate = useNavigate();
  return (
    <div className="no-post-container">
      <img className="no-post-image" src={postNotFoundImg} alt="post" />
      <div className="no-post-content">
        <p className="no-post-message">
          You haven't yet published any blog entries.Let's get started.
        </p>
        <button className="write-button" onClick={() => navigate('/write')} type="button">
          Write
        </button>
      </div>
    </div>
  );
}

export default PostsEmpty;
