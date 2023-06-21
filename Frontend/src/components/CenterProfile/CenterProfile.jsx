import React, { useState } from 'react';
import "./centerProfile.scss";
import Logo from "../../assets/logo1.png";
import {  AiTwotoneBank } from "react-icons/ai";
import { RiUserSharedFill } from "react-icons/ri";
// import AmountModal from '../../modals/amountModal/AmountModal';


const CenterProfile = () => {
    // const [enterAmountModal, setEnterAmountModal] = useState(false);

    // const openEnterAmountModal = () => {
    //     setEnterAmountModal(true);
    // };

    // const closeEnterAmountModal = () => {
    //     setEnterAmountModal(false);
    // };



    return (
        <div className="start1">
            <img src={Logo} alt="" className="CABpic" />
            <div className="currentBalance">
                <h4 style={{ fontSize: "12px", color: "#573b87" }}>Shweta Mehta</h4>
                <h2 style={{ fontSize: "16px", marginTop: "6px", color: "#3f4040" }}>+ 91-1234567890</h2>
            </div>
            <div className="wallet">
                <button style={{ fontSize: "12px", color: "#573b87", textAlign: "center", cursor: "pointer" }}  >Request Vouchers
                <br />
                <RiUserSharedFill style={{ marginTop: "6px", cursor: "pointer"}}  />
                </button>
            </div>
            <div className="addToBank">
                <button style={{ fontSize: "12px", color: "#573b87", cursor: "pointer" }}>Extented expiry
                <br />
                <AiTwotoneBank style={{ marginTop: "6px", cursor: "pointer" }} />
                </button>
            </div>
        </div>
    )
}

export default CenterProfile
