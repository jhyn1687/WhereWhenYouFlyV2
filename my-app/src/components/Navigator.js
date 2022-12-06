import React from 'react'

const Navigator = (props) => {
  const onCreditClick = () => {
    props.setPopup(true)
  }

  return (
    <>
    <div id="navigator">
      <h1 className="nav-title">Where When You Fly V2 </h1>
      <div id="nav-subtitle">
        <p className="nav-subtitle">Tracking how COVID-19 affected outgoing flights at major US airports</p>
      </div>
      <div id="nav-controls-text">
        <p className="nav-text underlined">Controls</p>
        <p className="nav-text">Use left mouse button to rotate the globe</p>
        <p className="nav-text">Use scroll wheel or right mouse button to zoom</p>
        <p className="nav-text">Click on an airport to see more details</p>

      </div>
      <div id="nav-controls-links">
        <button className="button" onClick={onCreditClick}>Credits</button>
      </div>
    </div>
    </>
  )
}

export default Navigator;