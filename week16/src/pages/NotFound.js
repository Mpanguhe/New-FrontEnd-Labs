// pages/NotFound.js
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const NotFound = () => {
  return (
    <div> 
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Spinner animation="grow" />
    </div>
  );
}



export default NotFound;
