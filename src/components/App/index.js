import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";

import Login from '../Login';
import Dashboard from '../Dashboard';
import Table from '../common/Table';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem('access_token') !== undefined);
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <>
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
        </>
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;
