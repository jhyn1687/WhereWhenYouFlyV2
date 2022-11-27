import React from 'react'
import { IoIosAirplane as PlaneIcon } from 'react-icons/io';

const Navigator = (props) => {
  return (
    <>
    <div id="navigator">
      <h1 className="nav-title">Where When You Fly V2 </h1>
      <div id="nav-subtitle">
        <p className="nav-subtitle">Tracking how COVID-19 affected outgoing flights at major US airports</p>
      </div>
      <div id="nav-controls-text">
        <p className="nav-text">Controls</p>
        <p className="nav-text">Use left mouse button to rotate the globe</p>
        <p className="nav-text">Use scroll wheel or right mouse button to zoom</p>
      </div>
      <div id="nav-controls-links">
        <a className="nav-text" href="https://google.com">Google</a>
      </div>
    </div>
    </>
  )
}

export default Navigator;