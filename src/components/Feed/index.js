import React from 'react';
import Header from '../Dashboard/Header';

const Feed = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <div className='container'>
        <Header
            setIsAdding={false}
            setIsAuthenticated={setIsAuthenticated}
          />
        <h1>Feed</h1>
    </div>
  );
};

export default Feed;
