import React, { useState } from 'react';
import "./OtpVerification.scss";
import Logo from "../../assets/logo1.png";
import { Link } from 'react-router-dom';
import OtpInput from '../../components/OtpInput';

const OtpVerification = () => {

    return (
        <div className="otp">
            <div className="otpLeft">
                {/* Displaying the logo */}
                <img src={Logo} alt="" />
                <h1>Experience hassle-free <br /> Transaction</h1>
                <p>Streamline transaction with DigiPay, a seamless <br /> digital wallet. Simplify payments and embrace the <br /> future of cashless transaction with our secure and <br /> user-friendly platform using e-Rupi</p>
            </div>

            <div className="otpRight">
                <h1 className="otpHeading">OTP Verification</h1>
                {/* Component for entering OTP */}
                <OtpInput />
            </div>
        </div>
    )
}

export default OtpVerification;
