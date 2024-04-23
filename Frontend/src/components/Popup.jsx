import React from 'react'
import  './Popup.scss'

 function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
    <div className="popup_inner">
    <button className="close-btn" onClick={() => props.PopupsetTrigger(false)}>X</button>
    {props.children}
      </div>
    </div>
  ) : "";
}

export default Popup