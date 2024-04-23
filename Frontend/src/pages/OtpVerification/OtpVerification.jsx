import React, { useState } from 'react';
import "./OtpVerification.scss";
import Logo from "../../assets/logo1.png";
import { Link } from 'react-router-dom';
import OtpInput from '../../components/OtpInput';

const OtpVerification = () => {
//     const [otp, setOtp] = useState(['', '', '', '', '', '']);
    


//     const handleOtpChange = (event, index) => {
//         const value = event.target.value.replace(/\D/g, '');

//         if (value.length <= 1) {
//             const newOtp = [...otp];
//             newOtp[index] = value;
//             setOtp(newOtp);
//         }
//     };

    return (
        <div className="otp">
            <div className="otpLeft">
                <img src={Logo} alt="" />
                <h1>Experience hassle-free <br /> Transaction</h1>
                <p>Streamline transaction with DigiPay, a seamless <br /> digital wallet. Simplify payments and embrace the <br /> future of cashless transaction with our secure and <br /> user-friendly platform using e-Rupi</p>
            </div>

            <div className="otpRight">
                <h1 className="otpHeading">OTP Verification</h1>
                <OtpInput />
        </div>
        </div>
    )
}

export default OtpVerification;