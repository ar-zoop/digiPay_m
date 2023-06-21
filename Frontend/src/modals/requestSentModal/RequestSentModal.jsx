import React from 'react';
import "./requestSentModal.scss";
import { Link } from 'react-router-dom';

const RequestSentModal = () => {
  return (
    <>
        <div className="requestWrapper">
            <div className="requestContainer">
                <h2>Request Sent Successfully !!</h2>
                <Link to="/dashboard"><button>Done</button></Link>
            </div>
        </div>
    </>
  )
}

export default RequestSentModal;