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
        {/* <Intro />  */}
        <Navigator />
        <Popup popup={true}/> 
        {/* set to true for popup to show (add logic later) */}
        <Earth id="earth"/>
        <Graph airport="IAH"/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
