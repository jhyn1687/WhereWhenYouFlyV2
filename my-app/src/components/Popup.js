import React, { useState, useEffect } from 'react'
import { AiOutlineClose as Close } from 'react-icons/ai'

const Popup = (props) => {
  const [popup, setPopup] = useState(false);

  const onClose = () => {
    setPopup(false)
  }

  useEffect(() => {
    if(props.popup !== popup) {
      setPopup(!popup)
    }
  }, [props]);

  return (
    <>
    <div id="popup-screen-container" style={popup ? {display:"flex"} : {display:"none"}}>
      <div id="popup-screen">
        <div id="popup-text">
          <h1 className="popup-title">Where When You Fly V2</h1>
          <p className="popup-subtitle">Junhao Yuan, Erika Moreno Blackburn, Eva Liu</p>
          <p className="popup-text">Tracking how COVID-19 affected outgoing flights at major US airports</p>
          <p className="popup-text">I think our rationale is supposed to be with the data.</p>
          <p className="popup-text">(since this is supposed to be like a interactive article)</p>
          <p className="popup-text">So we can use this for credits maybe?</p>
          <p className="popup-text">Created for CSE 442 using React, Globe.gl, and Supabase</p> 
          {/* add links? */}
          <p className="popup-text"></p>
        </div>
        <button id="close-button" onClick={onClose}>
          <Close className="popup-button"/>
        </button>
      </div>
    </div>
    </>
  )
}

export default Popup;