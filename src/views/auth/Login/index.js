import React from 'react';
import LoginForm from './Form';
import '../auth.scss';

const Login = ({ setIsAuthenticated }) => {
  return (
    <div className="auth-container">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-12 col-lg-11 col-xl-10">
            <div className="card d-flex mx-auto my-5">
              <div className="row">
                <div className="col-md-5 col-sm-12 col-xs-12 c1 p-5 d-xs-none d-md-block">
                    <div className="row mb-5 m-3"> <img src="https://i.imgur.com/pFfTOwy.jpg" width="70vw" height="55vh" alt=""/> </div> <img src="https://i.imgur.com/kdE7GKw.jpg" width="120vw" height="210vh" className="mx-auto d-flex" alt="Teacher"/>
                    <div className="row justify-content-center">
                        <div className="w-75 mx-md-5 mx-1 mx-sm-2 mb-5 mt-4 px-sm-5 px-md-2 px-xl-1 px-2">
                            <h1 className="wlcm text-center">Welcome to Ramailo</h1> 
                            <span className="sp1 text-center"> 
                            <span className="px-3 bg-danger rounded-pill"></span> 
                            <span className="ml-2 px-1 rounded-circle"></span> 
                            <span className="ml-2 px-1 rounded-circle"></span> </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12 c2 px-5 pt-5">
                    <div className="row">
                        <nav className="nav font-weight-500 mb-1 mb-sm-2 mb-lg-5 px-sm-2 px-lg-5"> 
                          <a className="nav-link ac" href="/login ">Login</a> 
                          <a className="nav-link" href="#">Signup</a> 
                        </nav>
                    </div>
                    <LoginForm setIsAuthenticated={setIsAuthenticated}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
