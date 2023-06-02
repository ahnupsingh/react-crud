import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import Dashboard from "../views/dashboard";
import { useAuth } from "../context/AuthProvider";

const App = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  useEffect(() => {
    if (user == undefined) {
      navigate("/login");
    }
  }, [navigate, user]);

  return (
    <>
      {user && <Dashboard />}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </>
  );
};

export default App;
