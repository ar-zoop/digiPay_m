
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./roles.scss";
import Logo from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import DetailsModal from "../../modals/detailsModal/DetailsModal";

const Roles = () => {
  const [isChecked, setIsChecked] = useState(false); // State for checkbox (not used in the code)

  const [showDetailsModal, setShowDetailsModal] = useState(false); // State to control the visibility of the details modal
  const navigate = useNavigate(); // React Router hook for navigation

  const openDetailsModal = () => {
    setShowDetailsModal(true); // Function to open the details modal
    // document.querySelector('.registration-page').classList.add('blur');
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false); // Function to close the details modal
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Event handler for checkbox change (not used in the code)
  };

  const handleRoleSelection = (event) => {
    const selectedRole = event.target.value;
    switch (selectedRole) {
      case "page1":
        navigate("/dashboard"); // Navigate to "/dashboard" route for "User" role
        break;
      case "page2":
        navigate("/governmentDashboard"); // Navigate to "/governmentDashboard" route for "Government" role
        break;
      case "page3":
        navigate("/Merchant"); // Navigate to "/Merchant" route for "Merchant" role
        break;
      case "page4":
        navigate("/company-dashboard"); // Navigate to "/company-dashboard" route for "Employee" role
        break;
      case "page5":
        navigate("/CompanyDashboard"); // Navigate to "/CompanyDashboard" route for "Corporate" role
        break;
      default:
        break;
    }
  };

  return (
    <div className="register">
      <div className="registerLeft">
        <img src={Logo} alt="" /> {/* Logo image */}
        <h1>
          Experience hassle-free <br /> Transaction
        </h1>
        <p>
          Streamline transaction with DigiPay, a seamless <br /> digital wallet.
          Simplify payments and embrace the <br /> future of cashless
          transaction with our secure and <br /> user-friendly platform using
          e-Rupi
        </p>
      </div>
      <div className="registerRight">
        <div className="registerContainer">
          <h1 className="welcomeHeading">Your Role</h1>
          <div className="roleForm">
            <div className="roleInfo">
              <select className="roleDropdown" onChange={handleRoleSelection}>
                <option value="">Select your Role</option>
                <option value="page1">User</option>
                <option value="page2">Government</option>
                <option value="page3">Merchant</option>
                <option value="page4">Employee</option>
                <option value="page5">Corporate</option>
              </select>
            </div>
          </div>
          <div className={`registerButton ${showDetailsModal}`}>
            <button onClick={openDetailsModal}>Enter</button>
            {/* {showDetailsModal && (
              <DetailsModal closeModal={closeDetailsModal} />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;