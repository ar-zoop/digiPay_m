import React from 'react';
import "./analysis.scss";
// Importing images
import Image1 from '../../assets/analysis_category.jpeg';
import Image2 from '../../assets/analysis_monthly.jpeg';
//Importing icons
import { CgBell } from "react-icons/cg";
import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
//Importing components
import LeftProfile from '../../components/LeftProfile/LeftProfile';
//IMporting profile picture
import ProfilePic from "../../assets/dbs2.jpg"

const Analysis = () => {
  return (
    <div className="transactionContainer">
      <LeftProfile />
      {/*Center section*/}
      <div className="transactionCenter" style={{ position: 'absolute' }}>
        <div className="centerUpper" style={{ marginLeft: '320px' }}>
          <div className="inputBox" style={{ marginRight: '350px' }}>
            <AiOutlineSearch style={{ marginTop: '20px',height:'30px',width:'45px', marginRight: '200px' }} />
            <h4 style={{ marginLeft: "40px", fontSize: "18px", color: "#8d8d8d", marginTop: '-35px' }}>Search</h4>
          </div>
        </div>

        {/*User information*/}
        <div className="heading2" style={{ marginTop: '-60px', marginLeft: '650px' }}>
        <div className="rightUpperNew">
                   {/*Displaying profile picture*/} 
                    <img src={ProfilePic} alt="" className="profilePic" />
                </div>
          <h4 style={{ color: "#59c59d", fontSize: "24px",width:'200px',padding:'5px' }}>Shweta Mehta</h4>
          <h2 style={{ color: "#3f4040" , marginLeft:'280px',marginTop:'-60px'}}>1234567890</h2>
          <CgBell style={{ marginRight: "0px",height:'20%',width:'40%' }} />
        </div>
      </div>
      {/*Image section*/}
      <div className="row">
        <div className="column">
          {/*Displaying the first image*/}
          <img src={Image1}  style={{ width: '130%', height:'100%',marginTop:'140px',marginLeft:'80px'}} />
        </div>
        <div className="column">
          {/*Displaying the second image*/}
          <img src={Image2} alt="Forest" style={{ width: '130%', height:'100%', marginLeft:'210px' ,marginTop:'140px'}} />
        </div>
      </div>
    </div>
  );
}

export default Analysis;
