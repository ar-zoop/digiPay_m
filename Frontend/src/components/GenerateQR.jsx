import React, { useState , useEffect } from 'react';
import '../App.css';
import '../pages/Login/login.scss';
import Popup from '../components/Popup';
// import '../pages/Merchant/Merchant.scss';
import LeftProfile from './LeftProfile/LeftProfile';
import { BsArrowRight } from 'react-icons/bs';
import RightProfile from './RightProfile/RightProfile';
import OTPPopup from '../modals/otpModal/OTPPopup';
import { Link } from 'react-router-dom';
import QRCode from 'react-qr-code';
import ProfilePic from "../assets/dbs2.jpg"

const GenerateQR = () => {
  const [title, setTitle] = useState(''); // Add the title state variable
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
  setTimeout(() => {
    setTimedPopup(true);
  }, 10000);

}, []);

  const [value, setValue] = useState();
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');
  const [size, setSize] = useState(256);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '100%' }}>
      <LeftProfile />
      <div className="centerContainer" style={{ width: '40%' }}>
        <div className="centerHeading">
          <h2 style={{ color: '#3f4040' }}>Scan and Pay</h2>
          <div className="heading2">
            <h4 style={{ color: '#59c59d', fontSize: '12px' }}>Current Vouchers </h4>
            <h2 style={{ color: '#3f4040' }}>3</h2>
          </div>
        </div>
        <div className="GenerateQR">
        <div className='center'>
        <div className="WelcomeText" style={{marginBottom:'480px',fontSize:'20px',position:'absolute'}}>
              <b>Generate QR Code</b>
            </div>
            <div className="part1">
            <div className='ProfileQR'>
              <img src={ProfilePic} alt="" className="profilePic" />
              <p className="WelcomeText" style={{marginRight:'20px'}}><b>Shweta Mehta</b></p>
              </div>
            </div>
            <div className='part2'>
              <p className="WelcomeText" style={{fontSize:'13px'}} ><b>UPI_ID:</b>8030411314@digipay </p>
              <p className="WelcomeText" ><b>Amount:</b>Rs.500 </p>
              </div>    
              <div style={{marginTop:'190px'}}>
            <h4 className="WelcomeText" style={{marginBottom:'20px'}}>Select the Purpose</h4>
            <select
            className="inputBox" 
            style={{ width: '100%' ,height:'30px' ,marginBottom:'50px',marginLeft:'0px'}}
            onChange={(e) => setTitle(e.target.value)}
            value={title} // Add the value prop to maintain the selected value
          >
            <option value=""></option>
            <option value="Scholarship">Scholarship</option>
            <option value="Subsidy">Subsidy</option>
            <option value="Pension">Pension</option>
            <option value="Allowance">Allowance</option>
          </select>
          <h4 className="WelcomeText" style={{marginBottom:'20px',padding:'0px'}}>Select the Voucher</h4>
          <select
          className="inputBox"
          style={{width: '100%' ,height:'30px' ,marginBottom:'50px',marginLeft:'0px'}}
          onChange={(e) => setValue(e.target.value)}
          value={value} // Add the value prop to maintain the selected value
        >
          <option value=""></option>
          <option value="Redemption">Voucher1</option>
          <option value="Refund">Voucher2</option>
          <option value="Pension">Voucher3</option>
          <option value="Allowance">Voucher4</option>
        </select>
        </div>
          {value && (
            <QRCode
              title={title}
              value={value}
              bgColor={back}
              fgColor={fore}
              size={164}
            />
          )}

        </div>
        </div>
      </div>
      <RightProfile />

      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
      <h3>Transaction Completed</h3>
      <p>Amount  Rs. 500</p>
      </Popup>
    </div>
  );
};

export default GenerateQR;
