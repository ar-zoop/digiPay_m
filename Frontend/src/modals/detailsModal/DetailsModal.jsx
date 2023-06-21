import React, { useState, useEffect } from "react";
import "./detailsModal.scss";
import { Link } from 'react-router-dom';
// import { CgClose } from 'react-icons/cg';

const DetailsModal = () => {

    const [selectedValue, setSelectedValue] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, []);

    return (
        <>
            <div className="detailWrapper">
                <div className="detailsContainer">
                    <div className="start">
                        <h2>Enter Details</h2>
                        {/* <CgClose onClick={closeModal} style={{ cursor: "pointer" }} /> */}
                    </div>

                    <form className="form">
                        <div className="detailInfo">
                            <label className="label">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="detailInfo">
                            <label className="label">Shop Name</label>
                            <input
                                type="text"
                                name="shop-name"
                                placeholder="Enter shop name"
                                required
                            />
                        </div>
                        <div className="detailInfo">
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="detailInfo">
                            <label className="label">Address</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your address"
                                required
                            />
                        </div>
                        <div className="detailInfo">
                            <label className="label">Purpose</label>
                            <select value={selectedValue} onChange={handleDropdownChange} className="dropdown">
                                <option value="">Purpose</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                            <p>{selectedValue}</p>
                        </div>
                    </form>

                    <Link to="/dashboard">
                        <button>Submit</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default DetailsModal;