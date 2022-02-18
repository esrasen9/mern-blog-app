import React from 'react';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';

function PostDetail({ post }) {
  const {
    title, description, categories, createdAt, _id,
  } = post;

  return (
    <div className="post-details">
      <div className="post-header">
        <Link className="post-link" to={`/posts/${_id}`}>
          <h1 className="post-title">{title}</h1>
        </Link>
        <div className="post-category-info">
          {
            categories?.map((category, index) => (
              <span key={uuid()} className="post-category">
                {category}
                {index !== categories.length - 1 && ' |'}
              </span>
            ))
          }
        </div>
      </div>
      <div>
        <p className="post-text">{description}</p>
        <span className="post-date">{new Date(createdAt).toDateString()}</span>
      </div>
    </div>
  );
}

export default PostDetail;
