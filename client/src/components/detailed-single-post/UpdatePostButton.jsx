import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import UpdatePostModal from '../update-post-modal/UpdatePostModal';
import { useStateValue } from '../../Context';

function UpdatePostButton({ post }) {
  const { setUpdateModalOpen } = useStateValue();
  return (
    <>
      <UpdatePostModal post={post} />
      <button
        className="post-control-button"
        type="button"
        onClick={() => setUpdateModalOpen(true)}
      >
        <BsPencilSquare size={40} />
      </button>
    </>
  );
}

export default UpdatePostButton;
