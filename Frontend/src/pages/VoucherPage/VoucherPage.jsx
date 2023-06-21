import React from 'react';
import { Link } from 'react-router-dom';
import "./voucherPage.scss";
import LeftProfile from '../../components/LeftProfile/LeftProfile';
import Coupon from "../../assets/upi.png";
import RightProfile from '../../components/RightProfile/RightProfile';

const GenerateQR = () => {
    return (
        <div className="voucherContainer">
            <LeftProfile /> {/* Component for left profile */}
            <div className="voucherCenter">
                <div className="centerHeading">
                    <h2 style={{ color: "#3f4040" }}>Profile</h2>
                    <div className="heading2">
                        <h4 style={{ color: "#59c59d", fontSize: "12px" }}>Current Balance</h4>
                        <h2 style={{ color: "#3f4040" }}>44,500.00</h2>
                    </div>
                </div>

                <div className="coupons">
                    <h2 style={{ textAlign: "left", color: "#3f4040" }}>Your Vouchers</h2>
                    <div className="voucherColumn1">
                        {/* Voucher 1 */}
                        <div className="voucher">
                            <Link to="/voucherID"><img src={Coupon} alt="" /></Link> {/* Image for voucher */}
                            <p style={{ fontWeight: "600", marginTop: "15px" }}>Worth ₹ 500</p> {/* Voucher details */}
                        </div>
                        {/* Voucher 2 */}
                        <div className="voucher">
                            <img src={Coupon} alt="" /> {/* Image for voucher */}
                            <p style={{ fontWeight: "600", marginTop: "15px" }}>Worth ₹ 1000</p> {/* Voucher details */}
                        </div>
                    </div>
                    <div className="voucherColumn2">
                        {/* Voucher 3 */}
                        <div className="voucher">
                            <img src={Coupon} alt="" /> {/* Image for voucher */}
                            <p style={{ fontWeight: "600", marginTop: "15px" }}>Worth ₹ 5000</p> {/* Voucher details */}
                        </div>
                        {/* Voucher 4 */}
                        <div className="voucher">
                            <img src={Coupon} alt="" /> {/* Image for voucher */}
                            <p style={{ fontWeight: "600", marginTop: "15px" }}>Worth ₹ 10000</p> {/* Voucher details */}
                        </div>
                    </div>
                </div>
            </div>
            <RightProfile /> {/* Component for right profile */}
        </div>
    )
}

export default GenerateQR;
