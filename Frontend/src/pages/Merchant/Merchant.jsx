import React, { useState } from 'react';
import "./merchant.scss";
import profilePic from "../../assets/dbs2.jpg";
import QRImage from "../../assets/qrimage.png";
import { MdOutlineQrCodeScanner } from "react-icons/md"
import { BsShareFill } from "react-icons/bs";
import LeftProfile from '../../components/LeftProfile/LeftProfile';
import RightProfile from '../../components/RightProfile/RightProfile';

const Merchant = () => {
    // State for showing/hiding the amount modal
    const [showAmountModal, setShowAmountModal] = useState(false);

    // Open the amount modal
    const openAmountModal = () => {
        setShowAmountModal(true);
    };

    // Close the amount modal
    const closeAmountModal = () => {
        setShowAmountModal(false);
    };

    return (
        <div className="merchantContainer">
            <LeftProfile />

            <div className="merchantCenter">
                <div className="centerHeading">
                    <h2 style={{ color: "#3f4040" }}>Profile</h2>
                    <div className="heading2">
                        <h4 style={{ color: "#59c59d", fontSize: "12px" }}>Current Balance</h4>
                        <h2 style={{ color: "#3f4040" }}>44,500.00</h2>
                    </div>
                </div>

                <div className="merchantInfo">
                    <div className="mInfo1">
                        <img src={profilePic} alt="" className="profileImage" />
                        <h2 style={{ marginTop: "5px" }}>Shweta Mehta</h2>
                        <p style={{ color: "#252525", fontSize: "12px", marginTop: "5px" }}>UPI ID: 8030411314@digipay <span>Copy</span></p>
                        <p style={{ color: "#252525", fontSize: "12px", marginTop: "5px" }}>DigiPay: 8030411314</p>
                    </div>
                    <div className="minfo2">
                        <img src={QRImage} alt="" />
                        <p style={{ fontSize: "11px", textAlign: "center", padding: "3px", lineHeight: "13px" }}>Payments made to this QR through Paytm, DigiPay, GPay,<br /> PhonePe, or any other UPI app will be received <br /> in your <span>linked bank account</span></p>

                        <div className={`modal-NewAmountContainer ${showAmountModal}`}>
                            <button onClick={openAmountModal}>Scan QR <MdOutlineQrCodeScanner style={{ marginLeft: "6px" }} /></button>
                            {showAmountModal && <AmountModal closeModal={closeAmountModal} />}
                        </div>

                        <button className="btn2">Share QR <BsShareFill style={{ marginLeft: "6px" }} /></button>
                    </div>
                </div>
            </div>
            <RightProfile />
        </div>
    )
}

export default Merchant;
