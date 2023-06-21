import React, { useState } from 'react';
import "./transaction.scss";

import LeftProfile from '../../components/LeftProfile/LeftProfile';

const Transaction = () => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    }

    return (
        <div className="transactionContainer">
            <LeftProfile />
            <div className="transactionCenter">
                <div className="centerUpper">
                    <div className="upperFirst">
                        <h2>Enter amount</h2>
                        <input
                            type="number"
                            name="amount"
                            placeholder="Enter Amount"
                            // value={digit}
                        />
                    </div>
                    <div className="heading2">
                        <h4 style={{ color: "#59c59d", fontSize: "12px" }}>Shweta Mehta</h4>
                        <h2 style={{ color: "#3f4040" }}>1234567890</h2>
                    </div>
                </div>
            </div>

            <div className="transactionRight">

            </div>
        </div>
    )
}

export default Transaction;
