import React from 'react';
import './Dialog.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useStateValue } from '../../Context';

function Dialog() {
  const navigate = useNavigate();
  const { setDialogIsOpen } = useStateValue();
  const location = useLocation();
  const path = location.pathname;
  // posts/:id

  const handleDeletePost = () => {
    axios.delete(path)
      .then(() => setDialogIsOpen(false))
      .then(() => navigate('/myposts'))
      .catch((err) => console.error(err));
  };

  return (
    <div className="dialog-container">
      <div className="dialog-box">
        <h3 className="dialog-message">Are you sure you want to delete this post?</h3>
        <div className="dialog-buttons">
          <button className="btn btn-yes" onClick={handleDeletePost} type="button">Yes</button>
          <button className="btn btn-no" onClick={() => setDialogIsOpen(false)} type="button">No</button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
