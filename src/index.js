import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./views/feed";
import Login from "./views/auth/Login";

import Dashboard from "./views/dashboard";
import EmployeeForm from "./views/employees/Form";
import { Profile } from "./views/employees/Profile";
import { AuthProvider } from "./context/AuthProvider";
import { NavigationProvider } from "./context/NavigationProvider";
import {
  EMPLOYEE_FORM,
  EMPLOYEE_LIST_URL,
  FEED_URL,
  LOGIN_URL,
  PROFILE_URL,
  ROOT_URL,
} from "./config/url";
import { QueryClient, QueryClientProvider } from "react-query";
import Signup from "./views/auth/Signup/index";
import Blog from "./views/feed/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
let user = localStorage.getItem("user");
user = JSON.parse(user);
const queryClient = new QueryClient();

root.render(
  <AuthProvider userData={user}>
    <NavigationProvider>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path={ROOT_URL} element={<App />} />
              <Route path={EMPLOYEE_LIST_URL} element={<Dashboard />} />
              <Route path={EMPLOYEE_FORM} element={<EmployeeForm />} />
              <Route path={FEED_URL} element={<Feed />} />
              <Route path={PROFILE_URL} element={<Profile />} />
              <Route path={LOGIN_URL} element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </React.StrictMode>
    </NavigationProvider>
  </AuthProvider>
);
