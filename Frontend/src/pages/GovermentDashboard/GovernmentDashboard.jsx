import React from 'react';
import "./governementDashboard.scss";
import governLogo from "../../assets/logo_1.png"
import nav1 from "../../assets/nav1.png";
import nav2 from "../../assets/nav2.png";
import nav3 from "../../assets/nav3.png";
import nav4 from "../../assets/nav4.png";
import nav5 from "../../assets/nav5.png";
import transactionImg from "../../assets/transactions.jpeg";
import bulletinImg from "../../assets/bulletin.jpeg";
import { IoMdArrowDropdown } from "react-icons/io"
import { SiWindows11 } from "react-icons/si"
import { AiFillEye } from "react-icons/ai"
import { RiGovernmentFill } from "react-icons/ri"
import LeftProfile from '../../components/LeftProfile/LeftProfile';

const GovernmentPortal = () => {
    return (
        <div className="portalContainer">
            <div className="governNavbar">

                <div className="searchbar">
                    <div className="search">
                        <div className="searchInput">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search, Phrase"
                            />
                        </div>
                        <h4 style={{ marginLeft: "30px" }}>Advanced Search <IoMdArrowDropdown /></h4>
                    </div>

                    <div className="mostSearched">
                        <h4 style={{ textAlign: "left" }}>Most <br /> Searched</h4>
                        <p style={{ marginLeft: "35px", fontSize: "12px", cursor: "pointer" }}>Schemas | </p>
                        <p style={{ marginLeft: "35px", fontSize: "12px", cursor: "pointer" }}>Voucher | </p>
                        <p style={{ marginLeft: "35px", fontSize: "12px", cursor: "pointer" }}>Extend expiry | </p>

                    </div>
                </div>
            </div>


            <div className="homeInfo">

                <div className="content">
                    <LeftProfile />

                    <div className="schemes">
                        <div className="boxstyle">
                            <button style={{ fontSize: "18px", color: "#573b87", textAlign: "center", cursor: "pointer", height: '100px', width: '150px', marginRight: "100px" }}>
                                Create Vouchers    <br />
                            </button>
                            <button style={{ fontSize: "18px", color: "#573b87", textAlign: "center", cursor: "pointer", marginLeft: '10px', height: '100px', width: '150px' }}>Distribute Vouchers
                                <br />
                            </button>

                            <div className="graphImages">
                                <img src={transactionImg} alt="" className="gImage" style={{ marginTop: "30px", width: "100%", height: "450px" }} />
                            </div>
                        </div>

                    </div>

                    <div className="bulletin">
                       <img src={bulletinImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GovernmentPortal;