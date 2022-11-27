import './App.css';
import React, { useState } from 'react'
import Graph from './components/Graph'
import Intro from './components/Intro'

function App() {

  return (
    <div className="App">
      <div id="content">
        <Intro /> 
        <header className="App-header">
          Where When You Fly V2
        </header>
        <p>
          Graph
        </p>
        <Graph />
      </div>
    </div>
  );
}

export default App;
