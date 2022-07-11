import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './components/Feed';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
