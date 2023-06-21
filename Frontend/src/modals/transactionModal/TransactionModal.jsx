import React from 'react';
import "./transactionModal.scss";
import { Link } from 'react-router-dom';

const TransactionModal = ({ closeModal }) => {

    return (
        <>

            <div className="transactionModal">
                <div className="transactionModalContent">
                    <h2>Transaction Completed</h2>
                    <p>Rs. 865 <br /> transferred to <br /> +91 9876545671</p>
                    <Link to="/dashboard"><button>Done</button></Link>
                </div>
            </div>
        </>
    )
}

export default TransactionModal;
