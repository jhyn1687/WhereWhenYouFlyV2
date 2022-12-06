import React from 'react'
import { AiOutlineClose as Close } from 'react-icons/ai'

const Popup = (props) => {
  const onClose = () => {
    props.setPopup(false)
  }

  return (
    <>
    <div id="popup-screen-container" style={props.popup ? {display:"flex"} : {display:"none"}}>
      <div id="popup-screen">
        <div id="popup-text">
          <h1 className="popup-title">Where When You Fly V2</h1>
          <p className="popup-subtitle"><a href="https://tnyyn.com/">Junhao Yuan</a>, <a href="https://www.linkedin.com/in/erika-moreno-blackburn-65311a192/">Erika Moreno Blackburn</a>, <a href="https://www.linkedin.com/in/evaliu02/">Eva Liu</a></p>
          <p className="popup-text">Created for <a href="https://courses.cs.washington.edu/courses/cse442/22au/">CSE 442</a> using </p>
          <p className="popup-text">
            <a href="https://reactjs.org/">React</a>, <a href="https://vega.github.io/vega-lite/">Vega-Lite</a>, <a href="https://globe.gl/">Globe.gl</a>, and <a href="https://supabase.com/">Supabase</a>
          </p>
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