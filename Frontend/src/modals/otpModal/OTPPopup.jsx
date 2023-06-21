import React, { useState, useEffect } from "react";
import "./otpPopup.scss";
import TransactionModal from "../transactionModal/TransactionModal";
import { CgClose } from "react-icons/cg";

const OTPPopup = ({ closeModal }) => {
    const [showTransactionModal, setShowTransactionModal] = useState(false);

    const openTransactionModal = () => {
        setShowTransactionModal(true);
        // closeModal();
    };

    const closeTransactionModal = () => {
        setShowTransactionModal(false);
    };


    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, []);

    return (
        <>
            <div className="modalWrapper">
                <div className="modalContainer">
                    <div className="start">
                        <h2>Enter OTP</h2>
                        <CgClose onClick={closeModal} style={{cursor: "pointer"}}/>
                    </div>
                    
                    <p>Enter OTP</p>
                    <input type="number" name="otp" required />
                    <div className={`modalOtpContainer ${showTransactionModal}`}>
                        <button onClick={openTransactionModal}>Pay</button>
                        {showTransactionModal && <TransactionModal closeModal={closeTransactionModal} />}
                        {/* <button  onClick={closeModal} >Close Modal 1</button> */}
                    </div>

                </div>
            </div>
        </>
    );
};

export default OTPPopup;
