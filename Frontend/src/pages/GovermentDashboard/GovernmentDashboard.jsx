
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
                {/*Navigation item 1*/}
                <div className="navItem">
                    <img src={nav1} className="navImages"/>
                    <p className="navNames">TOPICS</p>
                </div>

                {/*Navigation item 2*/}
                <div className="navItem">
                    <img src={nav2} className="navImages" />
                    <p className="navNames">SERVICES</p>
                </div>
                {/*Navigation item 3*/}
                <div className="navItem">
                    <img src={nav3} className="navImages" />
                    <p className="navNames">MY GOVERNMENT</p>
                </div>
                {/*Navigation item 4*/}
                <div className="navItem">
                    <img src={nav4} className="navImages" />
                    <p className="navNames">PEOPLE GROUPS</p>
                </div>
                {/*Navigation item 5*/}
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
                {/*Most searched item 1*/}
                <p style={{marginLeft: "35px", fontSize: "12px", cursor: "pointer"}}>Birth Certificate | </p>
                {/*Most searched item 2*/}
                <p style={{marginLeft: "35px", fontSize: "12px", cursor: "pointer"}}>Driving Licence | </p>
                {/*Most searched item 3*/}
                <p style={{marginLeft: "35px", fontSize: "12px", cursor: "pointer"}}>PAN Card | </p>

            </div>
        </div>

        <div className="homeInfo">
            <div className="activePage">
                {/*Active page item 1*/}
                <p style={{marginLeft: "25px", fontSize: "10px", cursor:"pointer"}}>Home <SiWindows11 size={9} style={{marginLeft: "12px"}} /></p>
                {/*Active page item 2*/}
                <p style={{marginLeft: "12px", fontSize: "10px", cursor:"pointer"}}>My Government <SiWindows11 size={9} style={{marginLeft: "12px"}} /></p>
                {/*Active page item 3*/}
                <p style={{marginLeft: "12px", fontSize: "10px", cursor:"pointer"}}>Schemes</p>
            </div>

            <div className="content">
                <ul className="myGovernment"> {/*List of My Government items*/}
                    <h4><RiGovernmentFill /> My Government</h4> {/*My Government heading with governmnet icom*/}
                    <p>• Constitution of India</p> {/*My Governmnet item 1 */}
                    <p>• Government Directory</p> {/*My Governmnet item 2 */}
                    <p>• Indian Parliament</p>{/*My Governmnet item 3 */}
                    <p>• Publications</p>{/*My Governmnet item 4 */}
                    <p>• Who's Who</p>{/*My Governmnet item 5 */}
                    <p>• Acts</p>{/*My Governmnet item 6 */}
                    <p>• Schemes</p>{/*My Governmnet item 7 */}
                    <p>• Documents</p>{/*My Governmnet item 8 */}
                </ul>

                <div className="schemes"> {/*Schemes section */}
                    <div className="schemeHeading">
                        <img src={schemes} alt="" /> {/*Schemes image */}
                        <h2>Schemes</h2> {/*Schemes heading */}
                    </div>
                    <p>Indian Government, at all levels, announces Welfare Schemes for a cross section of the society from time to time. These schemes could be either Central, State specific or a joint collaboration between the Centre and the States. In this section, we have attempted to provide you an easy and single point access to information about several welfare schemes of the Government and their various aspects including eligible beneficiaries, types of benefits, scheme details etc.</p>
                </div>

                <div className="mostView"> {/*Most Viewed section section */}
                    <h3><AiFillEye />Most Viewed</h3> {/*Most Viewed haeding with eye icon*/}
                    <p>• New Millennium Indian Technology Leadership Initiative by CSIR</p>{/*Most Viewed item 1*/}
                    <p>• Information on tax holiday scheme by Micro, Small & Medium Enterprises Development Commissioner</p> {/*Most Viewed item 2*/}
                    <p>• Information on schemes for students in Madhya Pradesh</p> {/*Most Viewed item 3*/}
                    <p>• Paryavaran Vahini Scheme by Ministry of Environment and Forests</p> {/*Most Viewed item 4*/}
                    <p>• Information on schemes by Department of Education of Gujarat</p> {/*Most Viewed item 5*/}
                </div>
            </div>
        </div>
    </div>
  )
}

export default GovernmentPortal;