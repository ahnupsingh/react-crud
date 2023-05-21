import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from './views/feed';
import Login from './views/auth/Login';
import Dashboard from './views/dashboard';
import EmployeeForm from './views/employees/Form';
import { Profile } from './views/employees/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
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
);
