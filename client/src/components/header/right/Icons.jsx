import React from 'react';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { useStateValue } from '../../../Context';

function Icons() {
  const { user, setUser } = useStateValue();
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div className="icons">
      {
        user ? (
          <>
            <Link to="/settings">
              <button className="icon-button" type="button">
                <FiSettings size={40} />
              </button>
            </Link>
            <button className="icon-button" type="button" onClick={handleLogout}>
              <BiLogOut
                color="crimson"
                size={50}
              />
            </button>
          </>
        )
          : (<Link className="link" to="/sign"><BiLogIn size={50} /></Link>)
    }
    </div>
  );
}

export default Icons;
