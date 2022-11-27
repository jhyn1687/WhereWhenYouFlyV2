import React, { useState } from 'react'
import { IoIosAirplane as PlaneIcon } from 'react-icons/io';
import { AiFillRightCircle as RightArrow } from 'react-icons/ai';

const Intro = (props) => {
  const [intro, setIntro] = useState(true);

  const onContinue = () => {
    setIntro(false)
  }

  return (
    <>
    <div id="intro-screen" style={intro ? {} : {display:"none"}}>
      <h1 className="intro-title">Where When You Fly V2 </h1>
      <PlaneIcon className="intro-title"/>
      <div id="intro-subtitle">
        <p className="intro-subtitle">Tracking how COVID-19 affected outgoing flights at major US airports</p>
      </div>
      <div id="controls-text">
        <p className="intro-text underlined">Controls</p>
        <p className="intro-text">Use left mouse button to rotate the globe</p>
        <p className="intro-text">Use scroll wheel or right mouse button to zoom</p>
      </div>
      <button id="continue-button" onClick={onContinue}>
        <p className="intro-button" style={{margin:"0 0 0.25rem 0"}}> Continue</p>
        <RightArrow className="intro-button"/>
      </button>
    </div>
    </>
  )
}

export default Intro;