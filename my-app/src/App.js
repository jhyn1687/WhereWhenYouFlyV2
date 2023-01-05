import './App.css';
import React, { useState } from 'react'
// import Globe from 'globe.gl';
import Earth from './components/Earth'
import Navigator from './components/Navigator'
import Footer from './components/Footer'
import Popup from './components/Popup'
import Article from './components/Article';

function App() {
  const [airport, setAirport] = useState("")
  const [popup, setPopup] = useState(false)

  return (
    <div className="App">
      <div id="content">
        <Navigator setPopup={setPopup}/>
        <Popup popup={popup} setPopup={setPopup}/> 
        <div id="container">
          <div id="Globe">
            <Earth id="earth" changeAirport={setAirport} />
          </div>
          <div id="Article-container">
            <Article airport={airport}/>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
