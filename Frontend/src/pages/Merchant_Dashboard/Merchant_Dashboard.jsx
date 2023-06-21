import React, { useState ,useEffect} from "react";
import "./Merchant_Dashboard.scss";
import { Button, Modal } from "antd";
import ProfilePic from "../../assets/dbs2.jpg";
import { CgBell } from "react-icons/cg";
import Popup from '../.././components/Popup';
import { IoMdQrScanner } from "react-icons/io";
import LeftProfile from "../../components/LeftProfile/LeftProfile";
import RightProfile from "../../components/RightProfile/RightProfile";

const Merchant = () => {
  const [showDetModal, setShowDetModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [title, setTitle] = useState(''); // Add the title state variable
  const [timedPopup, setTimedPopup] = useState(false);



  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 10000);
  
  }, []);
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

  const handleOk = () => {
    setIsModalOpen(false);
    alert("Transaction Successful");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showOtpPopup = () => {
    setShowOtpModal(true);
  };

  const closeOtpPopup = () => {
    setShowOtpModal(false);
  };

  return (
    <div className="merchantContainer">
      <LeftProfile />
      <div className=""></div>

      <div className="merchantCenter">
        <div className="centerHeading">
          <div className="rightUpperOld">
            <h2 style={{marginBottom:'20px'}}>No of Transactions</h2>
            <h3 style={{marginBottom:'20px'}}>20</h3>
            <div style={{marginLeft:'-820px',marginTop:'-80px'}}>
            <h2>Amount</h2>
            <h3>4,500</h3>
            </div>
          </div>

          <button  className="boxstyle"style={{ fontSize: "18px", color: "#573b87", textAlign: "center", cursor: "pointer" ,marginBottom:'-220px',marginLeft:'-1200px',height:'100px' , width:'150px'}}>Request Vouchers
                    <br />
                </button>
                <button  className="boxstyle"style={{ fontSize: "18px", color: "#573b87", textAlign: "center", cursor: "pointer" ,marginBottom:'-220px',marginLeft:'-1200px',height:'100px' , width:'150px'}}>
                    <br />
                </button>
          <div className="heading1" style={{ marginLeft: "-80px" }}>
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
            <button onClick={showModal}>scan</button>
            <Modal
              title="Voucher and User Details"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>
                <b>UserName: </b> HariLal Prasad
              </p>
              <p>
                <b>VoucherID: </b> 12345678
              </p>
              <p>
                <b>Purpose: </b> Kisan Seva Yojana
              </p>
              <p>
                <b>Validity: </b> Expires 2024
              </p>
              <br></br>
              <button onClick={showOtpPopup}>Enter OTP</button>
            
            {showOtpModal && (
              <div className="otpPopup">
                <h2>Enter OTP</h2>
                <input className='inputBox' type="text" placeholder="OTP" />
                <button onClick={closeOtpPopup}>Submit</button>
                </div>
                )}
                </Modal>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Merchant;
