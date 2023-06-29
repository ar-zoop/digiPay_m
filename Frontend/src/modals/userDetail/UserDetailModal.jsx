import React from 'react';
import './userDetailModal.scss';
// import { Link } from "react-router-dom"
// import CompleteTransaction from '../completeTransaction/CompleteTransaction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import TransactionModal from "../transactionModal/TransactionModal";

const UserDetailModal = ({ closeModal }) => {
    // const [showTransaction, setShowTransaction] = useState(false);

    // const openTransaction = () => {
    //     setShowTransaction(true);
    //   };

    //   const closeTransaction = () => {
    //     setShowTransaction(true);
    //   };

    const handleButtonClick = () => {
        toast.success("Transaction Completed");
    };




    return (
        <div className="detailContainer">
            <div className="detailWrapper">
                <p style={{ marginTop: "12px", textAlign: "left" }}>
                    <b>UserName: </b> Ritish Prasad
                </p>
                <p style={{ marginTop: "12px", textAlign: "left" }}>
                    <b>VoucherID: </b> 12345678
                </p>
                <p style={{ marginTop: "12px", textAlign: "left" }}>
                    <b>Purpose: </b> Kisan Seva Yojana
                </p>
                <p style={{ marginTop: "12px", textAlign: "left" }}>
                    <b>Validity: </b> Expires 2024
                </p>



                <div className="otpPopup">
                    <h2 style={{ marginTop: "12px" }}>Enter OTP</h2>
                    <input className='inputBox' type="text" placeholder="OTP" />



                </div>


                <button onClick={handleButtonClick}>Submit</button>



            </div>
            <ToastContainer />
        </div>
    )
}

export default UserDetailModal;