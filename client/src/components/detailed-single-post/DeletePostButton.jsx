import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import Dialog from '../dialog/Dialog';
import { useStateValue } from '../../Context';

function DeletePostButton() {
  const { dialogIsOpen, setDialogIsOpen } = useStateValue();
  return (
    <>
      {dialogIsOpen && <Dialog />}
      <button
        className="post-control-button"
        type="button"
        onClick={() => setDialogIsOpen(true)}
      >
        <MdDeleteOutline size={44} />
      </button>
    </>
  );
}

export default DeletePostButton;
