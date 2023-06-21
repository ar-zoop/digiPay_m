import React, { useState } from 'react';
import "./dashboard.scss";
import { MdOutlineSensorOccupied } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaEnvelopeOpenText, FaBlenderPhone } from "react-icons/fa";
import LeftProfile from '../../components/LeftProfile/LeftProfile';
import CenterProfile from '../../components/CenterProfile/CenterProfile';
import RightProfile from '../../components/RightProfile/RightProfile';
import LowerProfile from '../../components/LowerProfile';

const Dashboard = () => {

    return (
        <div className="dashboardContainer">

            <LeftProfile />
            <div className="dashCenter">
                <div className="centerHeading">
                    <h2 style={{ color: "#3f4040" }}>Overview</h2>
                    <div className="heading2">
                        <h4 style={{ color: "#59c59d", fontSize: "12px" }}>Current Vouchers</h4>
                        <h2 style={{ color: "#3f4040" }}>3</h2>
                    </div>
                </div>

                <div className="CAB">
                    <h3 style={{ textAlign: "left", color: "#3f4040" }}>Current Account </h3>
                    <CenterProfile />
                </div>

                <div className="transferMoney">
                    <h3 style={{ textAlign: "left", color: "#3f4040" }}>Transfer Money</h3>
                    <div className="start2">
                        <button className="box1">
                            <h4 className="transferHeading">Analysis</h4>
                            <MdOutlineSensorOccupied style={{ marginTop: "6px" }} />
                        </button>
                        <button className="box1">
                            <h4 className="transferHeading">Pay</h4>
                            <FaEnvelopeOpenText style={{ marginTop: "6px" }} />
                        </button>
                        <button className="box1">
                            <h4 className="transferHeading">Reward Points</h4>
                            <FaBlenderPhone style={{ marginTop: "6px" }} />
                        </button>
                    </div>
                </div>

                <div className="currency">
                    <div className="thirdHeading">
                        <h3 style={{ color: "#3f4040" }}>Vouchers</h3>
                        <h3 style={{ color: "#8d8d8d" }}>show All <IoMdArrowDropdown /></h3>
                    </div>
                    <LowerProfile />
                   
                </div>
            </div>
            <RightProfile />
        </div>
    )
}

export default Dashboard;    