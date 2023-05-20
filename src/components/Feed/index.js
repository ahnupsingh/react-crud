import React from 'react';
import Header from '../Dashboard/Header';

const Feed = ({ setIsAuthenticated }) => {
  return (
    <div className='container'>
        <Header
            setIsAuthenticated={setIsAuthenticated}
          />
        <h1>Feed</h1>
    </div>
  );
};

export default Feed;
