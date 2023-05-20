import React, { useState, useEffect } from 'react';
import Dashboard from '../Dashboard';
import { useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const queryClient = new QueryClient();

  useEffect(() => {
    const isAuth = localStorage.getItem('access_token') !== undefined;
    setIsAuthenticated(isAuth);
    if(!isAuth){
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {isAuthenticated && <Dashboard setIsAuthenticated={setIsAuthenticated} />}
      </QueryClientProvider>
    </>
  );
};

export default App;
