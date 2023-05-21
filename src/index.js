import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./views/feed";
import Login from "./views/auth/Login";
import Dashboard from "./views/dashboard";
import EmployeeForm from "./views/employees/Form";
import { Profile } from "./views/employees/Profile";
import { AuthProvider } from "./context/AuthProvider";
import { NavigationProvider } from "./context/NavigationProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
let user = localStorage.getItem("user");
user = JSON.parse(user);

root.render(
  <AuthProvider userData={user}>
    <NavigationProvider>
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/employees" element={<Dashboard />} />
            <Route path="form" element={<EmployeeForm />} />
            <Route path="feed" element={<Feed />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </NavigationProvider>
  </AuthProvider>
);
