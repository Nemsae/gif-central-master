import React from 'react';
import { Link } from 'react-router';

export default function NavBar() {
  return(
    <nav className="navbar navbar-inverse">
      <div className="navbarContainer">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/" >Gif Central</Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="nav navbar-nav navItemsContainer">
            <li className="linkItem"><Link className="link" to="/">Home</Link></li>
            <li className="linkItem"><Link className="link" to="/">Search</Link></li>
            <li className="linkItem"><Link className="link" to="/">Playground</Link></li>
            <li className="linkItem"><Link className="link" to="/">Screenshots</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
