import './App.css';
import React, { useState } from 'react'
import Graph from './components/Graph'
// import Globe from 'globe.gl';
import Earth from './components/Earth'
import Intro from './components/Intro'

function App() {

  return (
    <div className="App">
      <div id="content">
        <Intro /> 
        {/* TODO: convert hearder into footer, add copyright thingy :D */}
        <div id="Globe">
          <Earth />
        </div>
        <div id="Graph">
          <Graph className="Graph"/>
        </div>
      </div>
      {/* make footer component later iykwim */}
      <footer>
        <p>
          {'\u00A9'} Junhao Yuan, Erika Moreno Blackburn, Eva Liu 2022
        </p>
      </footer>
    </div>
  );
}

export default App;
