import React from 'react';
import { ROOT_URL } from '../config/url';
import './components.scss';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 text-white">
      <div className='container'>
      <a className="navbar-brand" href={ROOT_URL}>Ramailo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span> */}
          <img src="https://i.imgur.com/C4egmYM.jpg" className="rounded-circle" width="30" alt='profileImg'/>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ml-auto">
            <a className="nav-link active" aria-current="page" href={ROOT_URL}>Home</a>
            <a className="nav-link" href="/feed">Feed</a>
        </div>
      </div>
      <a href="/profile" className="form-inline my-2 my-lg-0 d-none d-md-block">
        <img src="https://i.imgur.com/C4egmYM.jpg" className="rounded-circle" width="30" alt='profileImg2'/>
      </a>
      </div>
    </nav>
  );
};

export default Header;
