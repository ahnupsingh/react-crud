import React, { useState } from 'react';
import LoginForm from '../common/Form';

const Login = ({ setIsAuthenticated }) => {
  return (
    <div className="small-container">
      <LoginForm setIsAuthenticated={setIsAuthenticated}>
      </LoginForm>
    </div>
  );
};

export default Login;
