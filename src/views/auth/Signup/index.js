import React, { useState } from "react";
import SignupForm from "./Signup";
import "../auth.scss";
import "./sign.css";
const Signup = () => {
  return (
    <div className="auth-container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign Up</h5>
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
