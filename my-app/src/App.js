import './App.css';
import React, { useState } from 'react'
import Graph from './components/Graph'
// import Globe from 'globe.gl';
import Earth from './components/Earth'
import Intro from './components/Intro'
import Navigator from './components/Navigator'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <div id="content">
        <Intro /> 
        <Navigator />
        <Earth id="earth"/>
        <Graph />
        <Footer />
      </div>
    </div>
  );
}

export default App;
