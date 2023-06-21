
import React from 'react';
import "./governementDashboard.scss";
import governLogo from "../../assets/logo_1.png"
import nav1 from "../../assets/nav1.png";
import nav2 from "../../assets/nav2.png";
import nav3 from "../../assets/nav3.png";
import nav4 from "../../assets/nav4.png";
import nav5 from "../../assets/nav5.png";
import schemes from "../../assets/schemes.png";
import { IoMdArrowDropdown } from "react-icons/io"
import { SiWindows11 } from "react-icons/si"
import { AiFillEye } from "react-icons/ai"
import { RiGovernmentFill } from "react-icons/ri"

const GovernmentPortal = () => {
  return (
    <div className="portalContainer">
        <div className="governNavbar">
            <img src={governLogo} alt="" className="logoImage1" /> 

            <div className="navItems">
                <div className="navItem">
                    <img src={nav1} className="navImages"/>
                    <p className="navNames">TOPICS</p>
                </div>
                <div className="navItem">
                    <img src={nav2} className="navImages" />
                    <p className="navNames">SERVICES</p>
                </div>
                <div className="navItem">
                    <img src={nav3} className="navImages" />
                    <p className="navNames">MY GOVERNMENT</p>
                </div>
                <div className="navItem">
                    <img src={nav4} className="navImages" />
                    <p className="navNames">PEOPLE GROUPS</p>
                </div>
                <div className="navItem">
                    <img src={nav5} className="navImages" />
                    <p className="navNames">INDIA AT A GLANCE</p>
                </div>
                
            </div>
        </div>

        <div className="searchbar">
            <div className="search">
                <div className="searchInput">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search - Keyword, Phrase"
                    />
                    <button>Search</button>
                </div>
                <h4 style={{marginLeft: "20px"}}>Advanced Search <IoMdArrowDropdown /></h4>
            </div>

            <div className="mostSearched">
                <h4 style={{textAlign: "left"}}>Most <br/> Searched</h4>
                <p style={{marginLeft: "35px", fontSize: "12px", cursor: "pointer"}}>Birth Certificate | </p>
                <p style={{marginLeft: "35px", fontSize: "12px", cursor: "pointer"}}>Driving Licence | </p>
                <p style={{marginLeft: "35px", fontSize: "12px", cursor: "pointer"}}>PAN Card | </p>

            </div>
        </div>

        <div className="homeInfo">
            <div className="activePage">
                <p style={{marginLeft: "25px", fontSize: "10px", cursor:"pointer"}}>Home <SiWindows11 size={9} style={{marginLeft: "12px"}} /></p>
                <p style={{marginLeft: "12px", fontSize: "10px", cursor:"pointer"}}>My Government <SiWindows11 size={9} style={{marginLeft: "12px"}} /></p>
                <p style={{marginLeft: "12px", fontSize: "10px", cursor:"pointer"}}>Schemes</p>
            </div>

            <div className="content">
                <ul className="myGovernment">
                    <h4><RiGovernmentFill /> My Government</h4>
                    <p>• Constitution of India</p>
                    <p>• Government Directory</p>
                    <p>• Indian Parliament</p>
                    <p>• Publications</p>
                    <p>• Who's Who</p>
                    <p>• Acts</p>
                    <p>• Schemes</p>
                    <p>• Documents</p>
                </ul>

                <div className="schemes">
                    <div className="schemeHeading">
                        <img src={schemes} alt="" />
                        <h2>Schemes</h2>
                    </div>
                    <p>Indian Government, at all levels, announces Welfare Schemes for a cross section of the society from time to time. These schemes could be either Central, State specific or a joint collaboration between the Centre and the States. In this section, we have attempted to provide you an easy and single point access to information about several welfare schemes of the Government and their various aspects including eligible beneficiaries, types of benefits, scheme details etc.</p>
                </div>

                <div className="mostView">
                    <h3><AiFillEye />Most Viewed</h3>
                    <p>• New Millennium Indian Technology Leadership Initiative by CSIR</p>
                    <p>• Information on tax holiday scheme by Micro, Small & Medium Enterprises Development Commissioner</p>
                    <p>• Information on schemes for students in Madhya Pradesh</p>
                    <p>• Paryavaran Vahini Scheme by Ministry of Environment and Forests</p>
                    <p>• Information on schemes by Department of Education of Gujarat</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GovernmentPortal;