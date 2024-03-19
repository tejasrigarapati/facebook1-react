import React from 'react';
import { Link } from 'react-router-dom';
// import './SideNav.css'

function SideNav() {
  return (
    <div className="side-nav-container">
      <div className="nav-links">
        <Link to="/feeds">Feeds</Link>
        <Link to="/albums">Albums</Link>
      </div>
    </div>
  );
}

export default SideNav;
