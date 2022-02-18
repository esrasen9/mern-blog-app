import React from 'react';
import NewPost from '../components/new-post/NewPost';
import { useStateValue } from '../Context';
import SignInvitation from '../components/new-post/SignInvitation';

function Write() {
  const { user } = useStateValue();
  return (
    <div>
      {user ? <NewPost /> : <SignInvitation />}
    </div>
  );
}

export default Write;
