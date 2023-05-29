import React from "react";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <>
      <div class="auth-container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h1 class="card-title text-center">Sign Up</h1>
                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
