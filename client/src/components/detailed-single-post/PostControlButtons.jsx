import React from 'react';
import DeletePostButton from './DeletePostButton';
import UpdatePostButton from './UpdatePostButton';

function PostControlButtons({ post }) {
  return (
    <div className="post-control-buttons">
      <UpdatePostButton post={post} />
      <DeletePostButton />
    </div>
  );
}

export default PostControlButtons;
