import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from './components/Feed';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="feed" element={<Feed />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
