import React from 'react';
import "./navbar.scss";
import { Link } from 'react-router-dom';

import ContentWrapper from '../ContentWrapper/ContentWrapper';

import Logo from "../../assets/logo1.png";

const Navbar = () => {
  return (
    <div className="navbar">
        <ContentWrapper>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <ul className="menuItems">
                <li className="menuItem">About</li>
                <li className="menuItem">Contact Us</li>
            </ul>
            
        </ContentWrapper>
        <Link to="/register"><button className="btnLogin" >Sign up</button></Link>
        <Link to="/login"><button className="btnLogin">Log in</button></Link>
        
    </div>
  )
}

export default Navbar;
