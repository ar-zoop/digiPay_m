import React from 'react';
import { Link  } from 'react-router-dom';
import "./completeTransaction.scss";

const CompleteTransaction = () => {
  return (
    <div className="completeTransContainer">
        <div className="completeTransWrapper">
            <h2>Transaction Completed</h2>
            <Link to="/dashboard">
                <button>Done</button>
            </Link>
        </div>
    </div>
  )
}

export default CompleteTransaction;