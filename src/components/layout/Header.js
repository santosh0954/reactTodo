import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white">
      <nav className="navbar navbar-expand-md navbar-light shadow-sm justify-content-md-right">
        <div className="container">
          <Link className="navbar-brand text-danger" to="/">ToDo List (react)</Link>
          <button className="navbar-toggler" data-target="#menu" data-toggle="collapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="menu">

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;