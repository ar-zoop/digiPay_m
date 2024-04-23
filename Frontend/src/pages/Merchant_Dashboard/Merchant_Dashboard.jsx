import React, { useState, useEffect } from "react";
import "./Merchant_Dashboard.scss";
import Popup from "../../components/Popup";
import { Button, Modal } from "antd";
import ProfilePic from "../../assets/dbs2.jpg";
import { CgBell } from "react-icons/cg";
import { IoMdQrScanner } from "react-icons/io";
import LeftProfile from "../../components/LeftProfile/LeftProfile";
import RightProfile from "../../components/RightProfile/RightProfile";
import ScanModal from "../../modals/scanModal/ScanModal";
import bulletinImg from "../../assets/bulletin.jpeg";
import categoryImg from "../../assets/categorygraph.jpeg";
import analysisImg from "../../assets/analysis.jpeg";
// import UserDetailModal from "../../modals/userDetail/UserDetailModal";

const Merchant = () => {
    const [showDetModal, setShowDetModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [showOtpModal, setShowOtpModal] = useState(false);
    const [title, setTitle] = useState(''); // Add the title state variable
    const [buttonPopup, setButtonPopup] = useState(false);
    const [showScanModal, setShowScanModal] = useState(false);
    // const [isModalVisible, setModalVisible] = useState(false);
    const [showUserDetail, setShowUserDetail] = useState(false);




    const closeUserDetailModal = () => {
        setShowUserDetail(true);
    };

    const openScanModal = () => {
        setShowScanModal(true);
    };

    const closeScanModal = () => {
        setShowScanModal(false);
    };


    const openDetModal = () => {
        setShowDetModal(true);
    };

    const closeDetModal = () => {
        setShowDetModal(false);
    };

    const closeAmountModal = () => {
        setShowAmountModal(false);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    // const handleOk = () => {
    //   setIsModalOpen(false);
    //   <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
    //   <h3>Transaction Compleleted</h3>
    //   </Popup>
    // };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // const showOtpPopup = () => {
    //   setShowOtpModal(true);
    // };

    // const closeOtpPopup = () => {
    //   setShowOtpModal(false);
    // };

    return (
        <div className="merchantContainer">
            <LeftProfile />
            <div className=""></div>

            <div className="merchantCenter">
                <div className="centerHeading">
                    <div className="rightUpperOld">
                        <h2 style={{}}>No of Transactions</h2>
                        <h3 style={{}}>20</h3>
                    </div>
                    <div style={{}}>
                        <h2>Amount</h2>
                        <h3>4,500</h3>

                    </div>



                </div>
                <div className="boxstyle">
                    <button style={{ fontSize: "18px", color: "#573b87", textAlign: "center", cursor: "pointer", height: '100px', width: '150px', marginRight: "100px" }}>
                        Add Vouchers    <br />
                    </button>
                    <button style={{ fontSize: "18px", color: "#573b87", textAlign: "center", cursor: "pointer", marginLeft: '10px', height: '100px', width: '150px' }}>Request Vouchers
                        <br />
                    </button>
                </div>

                <div className="graphImages">
                    <img src={categoryImg} alt="" className="gImage" />
                    <img src={analysisImg} alt="" className="gImage" style={{ marginTop: "30px" }} />
                </div>

            </div>

            <div className="bulletin">
                <div className="heading1" >
                    <h5
                        style={{ color: "#3f4040", fontSize: "12px", textAlign: "left" }}
                    >
                        Hello, Merchant Ram Prasad
                    </h5>
                    <h2
                        style={{ color: "#3f4040", textAlign: "left", marginTop: "10px" }}
                    >
                        +91 7060504030
                    </h2>
                    <div className={`scanqr ${showScanModal}`}>
                        <button onClick={openScanModal} style={{ marginBottom: "12px" }}>scan</button>
                        {showScanModal && <ScanModal closeModal={closeScanModal} />}
                    </div>



                </div>
                <img src={bulletinImg} alt="" />
            </div>

        </div>
    );
};

export default Merchant;
