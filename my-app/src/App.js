import './App.css';
import React, { useState } from 'react'
import Graph from './components/Graph'
// import Globe from 'globe.gl';
import Earth from './components/Earth'
import Intro from './components/Intro'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <div id="content">
        <Intro /> 
        <Earth />
        <Graph />
      </div>
      <Footer />
    </div>
  );
}

export default App;
