import React, { useContext } from 'react';
import { Usecontext1 } from '../UserContext/Usercontext1';
import { Link } from 'react-router-dom';
// import './TopNav.css'

function TopNav() {
  const { setFlag, UserName1 } = useContext(Usecontext1);

  return (
    <div className="top-nav-container">
      <div className="user-info">
        <div>Hello! {UserName1}, you are logged in</div>
      </div>
      <button className="logout-button" onClick={() => setFlag(0)}>Logout</button>
    </div>
  );
}

export default TopNav;
