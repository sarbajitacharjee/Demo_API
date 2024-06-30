// src/App.js
import React from 'react';
import Data from './components/Data';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl font-bold mb-4">API Data Table</h1>
        <Data />
      </header>
    </div>
  );
}

export default App;
