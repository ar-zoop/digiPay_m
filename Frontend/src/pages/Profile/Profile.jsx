import React from 'react';
import "./profile.scss";
import { Link } from 'react-router-dom';
import profileImg from "../../assets/dbs2.jpg"
import LeftProfile from '../../components/LeftProfile/LeftProfile';
import RightProfile from '../../components/RightProfile/RightProfile';

const Profile = () => {
    return (
        <div className="profileContainer">
            <LeftProfile />

            <div className="profileCenter">
                <div className="centerHeading">
                    <h2 style={{ color: "#3f4040" }}>Profile</h2>
                    <div className="heading2">
                        <h4 style={{ color: "#59c59d", fontSize: "12px" }}>Current Balance</h4>
                        <h2 style={{ color: "#3f4040" }}>44,500.00</h2>
                    </div>
                </div>

                <div className="profileInfo">
                    <div className="info1">
                        <img src={profileImg} alt="" />
                        <h2 style={{marginTop: "15px"}}>Shweta Mehta</h2>
                        <h4 className="userHeading">Pro user</h4>
                    </div>
                    <div className="infoForm">
                        <div className="email">
                            <p style={{color: "#3ebb8c", fontSize:"12px", marginBottom: "12px"}}>Email</p>
                            <h3 style={{fontSize: "16px"}}>shwetamehta@gmail.com</h3>
                        </div>
                        <div className="phone">
                            <p style={{color: "#3ebb8c", fontSize:"12px", marginBottom: "12px"}}>Phone Number</p>
                            <h3 style={{fontSize: "16px"}}>+234 8030411314</h3>
                        </div>
                        <div className="gender">
                            <p style={{color: "#3ebb8c", fontSize:"12px", marginBottom: "12px"}}>Gender</p>
                            <h3 style={{fontSize: "16px"}}>Female</h3>
                        </div>
                        <Link><button>Reset Password</button></Link>
                    </div>
                </div>
            </div>

            <RightProfile />
        </div>
    )
}

export default Profile;
