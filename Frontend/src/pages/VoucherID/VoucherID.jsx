import React, { useState } from 'react';
import './voucherID.scss';
import { Button, Modal } from 'antd';
import IdImage from '../../assets/upi.png';
import LeftProfile from '../../components/LeftProfile/LeftProfile';
import { BsArrowRight } from 'react-icons/bs';
import RightProfile from '../../components/RightProfile/RightProfile';
import Logo from '../../assets/logo1.png';
import OtpInput from '../../components/OtpInput';
import { useNavigate } from 'react-router-dom';

const VoucherID = () => {
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpValues, setOtpValues] = useState({
    otp1: '',
    otp2: '',
    otp3: '',
    otp4: '',
  });

  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleChange = (value, event) => {
    setOtpValues({ ...otpValues, [value]: event.target.value });
  };

  const openOtpModal = () => {
    setShowOtpModal(true);
  };

  const closeOtpModal = () => {
    setShowOtpModal(false);
  };

  const showModal = () => {
    setShowOtpModal(true);
  };

  const handleOk = () => {
    setShowOtpModal(false);
    navigate('/generateQR'); // Programmatically navigate to '/generateQR' route
  };

  const handleCancel = () => {
    setShowOtpModal(false);
  };

  return (
    <div className="voucherIDContainer">
      <LeftProfile />
      <div className="voucherIDCenter">
        <div className="centerHeading">
          <h2 style={{ color: '#3f4040' }}>Profile</h2>
          <div className="heading2">
            <h4 style={{ color: '#59c59d', fontSize: '12px' }}>Current Vouchers </h4>
            <h2 style={{ color: '#3f4040' }}>3</h2>
          </div>
        </div>

        <div className="idInfo">
          <h2 style={{ textAlign: 'left', color: '#3f4040' }}>Voucher ID - b67Hi90g</h2>
          <img src={IdImage} alt="" />
          <div className="idValidation">
            <div className="info1">
              <p style={{ color: '#573b87', fontSize: '10px', fontWeight: '600' }}>Amount</p>
              <h3 style={{ marginTop: '12px' }}>5000</h3>
            </div>
            <div className="info1">
              <p style={{ color: '#573b87', fontSize: '10px', fontWeight: '600' }}>Date</p>
              <h3 style={{ marginTop: '12px' }}>15-06-2024</h3>
            </div>
            <div className="info1">
              <p style={{ color: '#573b87', fontSize: '10px', fontWeight: '600' }}>Time</p>
              <h3 style={{ marginTop: '12px' }}>12:00:00</h3>
            </div>
          </div>

          <div className="modal-container">
            <button onClick={showModal}>
              Pay Now <BsArrowRight className="iconArrow" />
            </button>
          </div>
        </div>
      </div>
      <Modal title="Enter Pin" visible={showOtpModal} onOk={handleOk} onCancel={handleCancel}>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <h2>Verify Passcode</h2>
        <h4 style={{ color: 'grey' }}>
          Enter your 4-digit Digi pay Passcode to complete money transfer to ABC fertilizer shop{' '}
          <b>UPI ID:</b> dfjkdfg@digipay
        </h4>
        <br />
        <p style={{ color: 'grey' }}>This is the same passcode that you set during registration to your Digi pay account</p>
        <br />
        <div className="otpContainer">
          <input
            name="otp1"
            className='otpInput'
            value={otpValues.otp1}
            onChange={(e) => handleChange('otp1', e)}
            tabIndex={1}
            maxLength={1}
          />
          <input
            name="otp2"
            className='otpInput'
            value={otpValues.otp2}
            onChange={(e) => handleChange('otp2', e)}
            tabIndex={2}
            maxLength={1}
          />
          <input
            name="otp3"
            className='otpInput'
            value={otpValues.otp3}
            onChange={(e) => handleChange('otp3', e)}
            tabIndex={3}
            maxLength={1}
          />
          <input
            name="otp4"
            className='otpInput'
            value={otpValues.otp4}
            onChange={(e) => handleChange('otp4', e)}
            tabIndex={4}
            maxLength={1}
          />
        </div>
      </Modal>
      <RightProfile />
    </div>
  );
};

export default VoucherID;
