import React, { useState } from 'react';
import "./company_leftprofile.scss";
import { Link } from 'react-router-dom';
// import Logo from "../../assets/logo1.png";
import { AiOutlineMenuUnfold, AiOutlineUser, AiFillFolderOpen } from "react-icons/ai";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { TiShoppingBag } from "react-icons/ti";
import { VscArrowSwap } from "react-icons/vsc";

const Company_Leftprofile = () => {

    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    }
    return (
        <div className="dashLeft">
            <ul className="sidebar">
                <li className={`list-item ${isSelected ? 'selected' : ''}`}
                    onClick={handleClick}><AiOutlineMenuUnfold style={{ marginRight: "22px" }} size={25} />
                    <Link to="/company-dashboard" className="linkstyle">Overview</Link></li>

                <li className={`list-item ${isSelected ? 'selected' : ''}`}
                    onClick={handleClick}><TiShoppingBag style={{ marginRight: "22px" }} size={25} /><Link to="/voucherPage" className="linkstyle">E-Rupi Vouchers
                    </Link></li>

                <li className={`list-item ${isSelected ? 'selected' : ''}`}
                    onClick={handleClick}><VscArrowSwap style={{ marginRight: "22px", color: "#6a6b6b" }} size={25} /> <Link to="/transaction" className="linkstyle">Transactions</Link></li>

                <li className={`list-item ${isSelected ? 'selected' : ''}`}
                    onClick={handleClick}><AiOutlineUser style={{ marginRight: "22px" }} size={25} /><Link to="/profile" className="linkstyle">Profile</Link></li>

                <li className={`list-item ${isSelected ? 'selected' : ''}`}
                    onClick={handleClick}><AiFillFolderOpen style={{ marginRight: "22px" }} size={25} /> <Link to="/promotions" className="linkstyle">Promotions</Link></li>
            </ul>
            <div className="logout">
                <Link to="/" className="linkstyle">
                    <HiOutlineArrowNarrowLeft style={{ marginRight: "30px" }} size={20} />
                    <p className="paraLogout">Logout</p>
                </Link>
            </div>
        </div>
    )
}

export default Company_Leftprofile
