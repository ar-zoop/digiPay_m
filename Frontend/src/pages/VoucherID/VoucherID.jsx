import React, { useState, useEffect } from 'react';
import "./voucherID.scss";
// import { Link } from "react-router-dom";
import IdImage from "../../assets/upi.png";
import LeftProfile from '../../components/LeftProfile/LeftProfile';
import { BsArrowRight } from "react-icons/bs";
import RightProfile from '../../components/RightProfile/RightProfile';
import OTPPopup from '../../modals/otpModal/OTPPopup';
import { Link } from 'react-router-dom';
import Merchant from '../../pages/Merchant/Merchant';

const VoucherID = () => {

    const [showOtpModal, setShowOtpModal] = useState(false);


    const [amount, setAmount] = useState(5000);

    const updateAmount = () => {
        // Replace this logic with your actual transaction update logic
        setAmount(amount - 500);

    };

    const openOtpModal = () => {
        setShowOtpModal(true);
    };

    const closeOtpModal = () => {
        setShowOtpModal(false);
    };

    return (
        <div className="voucherIDContainer">
            <LeftProfile />
            <div className="voucherIDCenter">
                <div className="centerHeading">
                    <h2 style={{ color: "#3f4040" }}>Profile</h2>
                    <div className="heading2">
                        <h4 style={{ color: "#59c59d", fontSize: "12px" }}>Current Vouchers </h4>
                        <h2 style={{ color: "#3f4040" }}>3</h2>
                    </div>
                </div>

                <div className="idInfo">
                    <h2 style={{ textAlign: "left", color: "#3f4040" }}>Voucher ID - b67Hi90g</h2>
                    <img src={IdImage} alt="" />
                    <div className="idValidation">
                        <div className="info1">
                            <p style={{ color: "#573b87", fontSize: "10px", fontWeight: "600" }}>Amount</p>
                            <h3 style={{ marginTop: "12px" }}>{amount}</h3>
                        </div>
                        <div className="info1">
                            <p style={{ color: "#573b87", fontSize: "10px", fontWeight: "600" }}>Date</p>
                            <h3 style={{ marginTop: "12px" }}>15-06-2024</h3>
                        </div>
                        <div className="info1">
                            <p style={{ color: "#573b87", fontSize: "10px", fontWeight: "600" }}>TIme</p>
                            <h3 style={{ marginTop: "12px" }}>12:00:00</h3>
                        </div>
                    </div>


                    <div className='modal-container' >
                        <Link to="/generateQR">
                            <button onClick={updateAmount}>Pay Now <BsArrowRight className="iconArrow" /></button>
                        </Link>
                    </div>



                </div>

            </div>
            <RightProfile />
        </div>
    );
};

export default VoucherID;
