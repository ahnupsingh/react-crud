import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";

import Login from '../Login';
import Dashboard from '../Dashboard';
import Table from '../common/Table';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const isAuth = localStorage.getItem('access_token') !== undefined;
    setIsAuthenticated(isAuth);
    if(!isAuth){
      navigate('/login');
    }
  }, []);

  return (
    <>
      <Dashboard setIsAuthenticated={setIsAuthenticated} />
    </>
  );
};

export default App;
