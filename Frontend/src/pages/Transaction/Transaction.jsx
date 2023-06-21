import React, { useState } from 'react';
import "./transaction.scss";

import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";

import LeftProfile from '../../components/LeftProfile/LeftProfile';

const Transaction = () => {
    const [isSelected, setIsSelected] = useState(false); // State for tracking selection (not used in the code)

    const handleClick = () => {
        setIsSelected(!isSelected); // Function to toggle selection (not used in the code)
    }

    return (
        <div className="transactionContainer">
            <LeftProfile /> {/* Component for left profile */}
            <div className="transactionCenter" style={{ position: 'absolute' }}>
                <div className="centerUpper" style={{ marginLeft: '320px' }}>
                    <div className="inputBox" style={{ marginRight: '350px' }}>
                        <AiOutlineSearch style={{ marginTop: '20px', marginRight: '180px' }} />
                        <h4 style={{ marginLeft: "40px", fontSize: "18px", color: "#8d8d8d", marginTop: '-20px' }}>Search</h4>
                    </div>
                </div>
                <div className="heading2" style={{ marginTop: '-60px', marginLeft: '650px' }}>
                    <h4 style={{ color: "#59c59d", fontSize: "12px" }}>Shweta Mehta</h4>
                    <h2 style={{ color: "#3f4040" }}>1234567890</h2>
                </div>
            </div>

            <div className="dashRight" style={{ marginTop: '120px', marginRight: '540px' }}>
                <h1>Transaction History </h1>
                <br />
                <div className="rightLower">
                    <div className="transactions">
                        {/* Transaction details */}
                        <div className="details" style={{ width: '500px' }}>
                            <h3 style={{ color: "#8d8d8d" }}>RNT Hospital</h3>
                            <h3 style={{ color: "#8d8d8d" }}>16.june.2023 - 09:39</h3>
                            <h3 style={{ color: "#e74f5b" }}>2,000.00</h3>
                        </div>
                        <div className="details" style={{ width: '500px' }}>
                            <h3 style={{ color: "#8d8d8d" }}>Manoj Kirana</h3>
                            <h3 style={{ color: "#8d8d8d" }}>06.jun.2023 - 09:39</h3>
                            <h3 style={{ color: "#e74f5b" }}>5000.00</h3>
                        </div>
                        <div className="details" style={{ width: '500px' }}>
                            <h3 style={{ color: "#8d8d8d" }}>Techno college</h3>
                            <h3 style={{ color: "#8d8d8d" }}>06.Mar.2023 - 09:39</h3>
                            <h3 style={{ color: "#e74f5b" }}>85,00.00</h3>
                        </div>
                        <div className="details" style={{ width: '500px' }}>
                            <h3 style={{ color: "#8d8d8d" }}>Bharat Petrol</h3>
                            <h3 style={{ color: "#8d8d8d" }}>16.Mar.2023 - 09:39</h3>
                            <h3 style={{ color: "#e74f5b" }}>5,00.00</h3>
                        </div>
                        <div className="details" style={{ width: '500px' }}>
                            <h3 style={{ color: "#8d8d8d" }}>Gas Tank</h3>
                            <h3 style={{ color: "#8d8d8d" }}>5.Dec.2022 - 09:39</h3>
                            <h3 style={{ color: "#e74f5b" }}>2,500.00</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction;
