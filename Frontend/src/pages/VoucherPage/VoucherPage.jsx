import React from 'react';
import { Link } from 'react-router-dom';
import "./voucherPage.scss";
import LeftProfile from '../../components/LeftProfile/LeftProfile';
import Coupon from "../../assets/upi.png";
// import CenterProfile from '../../components/CenterProfile/CenterProfile';
import RightProfile from '../../components/RightProfile/RightProfile';
const GenerateQR = () => {
    return (
        <div className="voucherContainer">
            <LeftProfile />
            <div className="voucherCenter">
                <div className="centerHeading">
                    <h2 style={{ color: "#3f4040" }}>Profile</h2>
                    <div className="heading2">
                        <h4 style={{ color: "#59c59d", fontSize: "12px" }}>Current Balance</h4>
                        <h2 style={{ color: "#3f4040" }}>44,500.00</h2>
                    </div>
                </div>

                <div className="coupons">
                    <h2 style={{ textAlign: "left", color: "#3f4040" }}>All Vouchers</h2>
                    <div className="voucherColumn1">
                        <div className="voucher">
                            <Link to="/voucherID"><img src={Coupon} alt="" /></Link>
                            <p style={{ fontWeight: "600", marginTop: "15px" }}>Farming</p>
                        </div>
                        <div className="voucher">
                            <img src={Coupon} alt="" />
                            <p style={{ fontWeight: "600", marginTop: "15px" }}>Hospital Bills</p>
                        </div>
                    </div>
                    <div className="voucherColumn2">
                        <div className="voucher">
                            <img src={Coupon} alt="" />
                            <p style={{ fontWeight: "600", marginTop: "15px" }}>Subsidy</p>
                        </div>
                        <div className="voucher">
                            <img src={Coupon} alt="" />
                            <p style={{ fontWeight: "600", marginTop: "15px" }}>Scholarship</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* <CenterProfile /> */}
            <RightProfile />
        </div>
    )
}

export default GenerateQR;
