import React from 'react';
import PostControlButtons from './PostControlButtons';
import { useStateValue } from '../../Context';

function DetailedPostHeader(props) {
  const { post } = props;
  const { username, title } = post;
  const { user } = useStateValue();
  return (
    <div className="detailed-post-header">
      <h1 className="detailed-post-title">{title}</h1>
      {user?.username === username && <PostControlButtons post={post} />}
    </div>
  );
}

export default DetailedPostHeader;
