import React from 'react';
import LoginForm from '../common/ReactForm';

const Login = ({ setIsAuthenticated }) => {
  return (
    <div className="small-container">
      <LoginForm setIsAuthenticated={setIsAuthenticated}>
      </LoginForm>
    </div>
  );
};

export default Login;
