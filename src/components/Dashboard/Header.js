import React from 'react';

import Logout from '../Logout';

const Header = ({setIsAuthenticated }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 text-white">
      <a className="navbar-brand" href="/">React <small>Ramailo</small></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">*</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/feed">Feed</a>
          </li>
          <li className="nav-item">
          </li>
        </ul>
      </div>
      <form className="form-inline my-2 my-lg-0">
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </form>
    </nav>
  );
};

export default Header;
