import './App.css';
import React, { useState } from 'react'
import Graph from './components/Graph'
// import Globe from 'globe.gl';
import Earth from './components/Earth'
import Intro from './components/Intro'
import Navigator from './components/Navigator'
import Footer from './components/Footer'
import Popup from './components/Popup'

function App() {

  return (
    <div className="App">
      <div id="content">
        <Intro />
        <Navigator />
        <Popup popup={false}/> 
        {/* set to true for popup to show (add logic later) */}
        <div id="container">
          <div id="Globe">
            <Earth id="earth"/>
          </div>
          <div id="Graph">
            <Graph airport="IAH"/>
          </div>
        </div>
        <Footer className="graph"/>
      </div>
    </div>
  );
}

export default App;
