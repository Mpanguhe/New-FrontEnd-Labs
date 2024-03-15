import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResourceList from './components/ResourceList';

function App() {
  return (
    <div className="App">
      <h1>Resource Management</h1>
      <ResourceList />
    </div>
  );
}

export default App;
