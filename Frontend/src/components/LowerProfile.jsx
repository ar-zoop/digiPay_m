import React from 'react';
import "./RightProfile/RightProfile.scss";
import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
import { CgBell } from "react-icons/cg";
import ProfilePic from "../assets/dbs2.jpg"

const RightProfile = () => {
    return (
        <div className="dashRight">
            <div className="rightUpper">
                
            </div>


            <div className="rightLower">
                

                <div className="transactionsLower">
                    <div className="details">
                        <h3 style={{ color: "#8d8d8d" }}>Hospital Bills</h3>
                        <h3 style={{ color: "#8d8d8d" }}>06.Mar.2023 - 10.Jun.2023</h3>
                        <h3 style={{ color: "#47be92" }}>5,000.00</h3>
                    </div>
                    <div className="details">
                        <h3 style={{ color: "#8d8d8d" }}>Groceries</h3>
                        <h3 style={{ color: "#8d8d8d" }}>06.Dec.2023 - 06.Jun.2023</h3>
                        <h3 style={{ color: "#47be92" }}>2,000.00</h3>
                    </div>
                    <div className="details">
                        <h3 style={{ color: "#8d8d8d" }}>Scholarship</h3>
                        <h3 style={{ color: "#8d8d8d" }}>06.Mar.2023 - 09:39</h3>
                        <h3 style={{ color: "#47be92" }}>10,000.00</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightProfile;
