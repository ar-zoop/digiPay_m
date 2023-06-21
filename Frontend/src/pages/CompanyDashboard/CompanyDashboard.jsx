import React, { useState } from 'react';
import "./companyDashboard.scss";

// import assets from components;
import Coupon from '../../assets/upi.png';
import Company_Leftprofile from '../../components/LeftProfile/LeftProfile' ;
import RightProfile from '../../components/RightProfile/RightProfile';
import DepartmentModal from '../../modals/departmentModal/DepartmentModal';
import Companyanalysis from '../../assets/Companyanalysis.jpg';


const CompanyDashboard = () => {
    //Stae variable for modals
    const [showDeptModal, setShowDeptModal] = useState(false);
    const [showDisModal, setShowDisModal] = useState(false);

    //Function to open departmnet modal
    const openDeptModal = () => {
        setShowDeptModal(true);
    };
    //Function to close departmnet modal
    const closeDeptModal = () => {
        setShowDeptModal(false);
    };
    //Function to open departmnet modal
    const openDistributeModal = () => {
        setShowDisModal(true);
    };
    //Function to close departmnet modal
    const closeDistributeModal = () => {
        setShowDisModal(false);
    };

    return (
        <div className="companyDashboard">
            <Company_Leftprofile />

            {/*Center section*/}
            <div className="companyDashboardCenter">
                <div className="centerHeading">
                    <h2 style={{ color: "#3f4040" }}>Profile</h2>
                    <div className="heading2">
                        <h4 style={{ color: "#59c59d", fontSize: "12px" }}>Current Balance</h4>
                        <h2 style={{ color: "#3f4040" }}>44,500.00</h2>
                    </div>
                </div>
                {/*Coupons section*/}
                <div className="coupons">
                    <h2 style={{ textAlign: "left", color: "#3f4040" }}>Request for Vouchers</h2>
                    <div className="voucherColumn1">

                        {/*Departmnet voucher*/}
                        <div className={`voucher ${showDeptModal}`}>
                            <button onClick={openDeptModal} className='voucher1'> Request Voucher </button>
                            {showDeptModal && <DepartmentModal closeModal={closeDeptModal} />}
                            </div>

                            {/*Distribute voucher*/}
                        <div className={`voucher ${showDisModal}`}>
                            <button onClick={openDistributeModal} className='voucher2'> Distribute Voucher </button>
                            {showDisModal && <openDistributeModal closeModal={closeDistributeModal} />}
                            </div>
                        </div>
                        {/*Company analysis image*/}
                <img src='src/assets/Companyanalysis.jpg'  className='cimg'></img>
                </div>
            </div>
            <RightProfile />
        </div>
    )
}

export default CompanyDashboard;