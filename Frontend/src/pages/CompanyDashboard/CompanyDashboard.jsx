import React, { useState } from 'react';
import "./companyDashboard.scss";

// import { Link } from 'react-router-dom';
import Coupon from '../../assets/upi.png';
import Company_Leftprofile from '../../components/LeftProfile/LeftProfile' ;
import RightProfile from '../../components/RightProfile/RightProfile';
import DepartmentModal from '../../modals/departmentModal/DepartmentModal';
// import DistributeModal from '../../../modals/distributeModal/DistributeModal';
import Companyanalysis from '../../assets/Companyanalysis.jpg';


const CompanyDashboard = () => {

    const [showDeptModal, setShowDeptModal] = useState(false);
    const [showDisModal, setShowDisModal] = useState(false);

    const openDeptModal = () => {
        setShowDeptModal(true);
    };

    const closeDeptModal = () => {
        setShowDeptModal(false);
    };
    const openDistributeModal = () => {
        setShowDisModal(true);
    };

    const closeDistributeModal = () => {
        setShowDisModal(false);
    };

    return (
        <div className="companyDashboard">
            <Company_Leftprofile />
            <div className="companyDashboardCenter">
                <div className="centerHeading">
                    <h2 style={{ color: "#3f4040" }}>Profile</h2>
                    <div className="heading2">
                        <h4 style={{ color: "#59c59d", fontSize: "12px" }}>Current Balance</h4>
                        <h2 style={{ color: "#3f4040" }}>44,500.00</h2>
                    </div>
                </div>

                <div className="coupons">
                    <h2 style={{ textAlign: "left", color: "#3f4040" }}>Request for Vouchers</h2>
                    <div className="voucherColumn1">
                        <div className={`voucher ${showDeptModal}`}>
                            <button onClick={openDeptModal} className='voucher1'> Request Voucher </button>
                            {showDeptModal && <DepartmentModal closeModal={closeDeptModal} />}
                            </div>
                        <div className={`voucher ${showDisModal}`}>
                            <button onClick={openDistributeModal} className='voucher2'> Distribute Voucher </button>
                            {showDisModal && <openDistributeModal closeModal={closeDistributeModal} />}
                            </div>
                        </div>
                <img src='src/assets/Companyanalysis.jpg'  className='cimg'></img>
                </div>
            </div>
            <RightProfile />
        </div>
    )
}

export default CompanyDashboard;