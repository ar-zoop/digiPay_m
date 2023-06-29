import React, { useState, useEffect } from "react";
import "./scanModal.scss";
import qrGIF from "../../assets/qr-code-scanner.gif";
import UserDetailModal from "../userDetail/UserDetailModal";


const ScanModal = ({closeModal}) => {
    const [showUserDetail, setShowUserDetail] = useState(false);
//     const [isModalVisible, setModalVisible] = useState(false);

//   useEffect(() => {
//     if (isModalVisible) {
//       setTimeout(() => {
//         setModalVisible(false);
//     }, 2000);
//     } else {
//       setTimeout(() => {
//         setModalVisible(true);
//       }, 2000);
//     }
//   }, [isModalVisible])

    const openUserDetail = () => { 
        setShowUserDetail(true);
    };

    const closeUserDetail = () => { 
        setShowUserDetail(false);
    };

    
  return (
    <div className="scannerWrapper">
        <div className="scannerContainer">
            <img src={qrGIF} alt="" />
            <div className={`btnScan ${showUserDetail}`}>
                <button onClick={openUserDetail}>Scan</button>
                {showUserDetail && <UserDetailModal closeModal={closeUserDetail} />}  
            </div>
        </div>
    </div>
  )
}

export default ScanModal;