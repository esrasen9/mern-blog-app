import React from 'react';
import './Left.css';
import { Link } from 'react-router-dom';
import logo from '../../../img/blogicon.png';

function Left() {
  return (
    <Link to="/" className="left">
      <img className="left-img" src={logo} alt="" />
    </Link>
  );
}

export default Left;
