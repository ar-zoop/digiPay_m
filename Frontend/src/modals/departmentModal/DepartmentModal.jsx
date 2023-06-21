import React, { useState, useEffect } from "react";
import "./departmentModal.scss"
import { CgClose } from "react-icons/cg";
import RequestSentModal from "../requestSentModal/RequestSentModal";

const DepartmentModal = ({ closeModal }) => {
    const [showRequestSentModal, setShowRequestSentModal] = useState(false);
    const [selectedDeptValue, setSelectedDeptValue] = useState('');

    const openRequestSentModal = () => {
        setShowRequestSentModal(true);
        // closeModal();
    };

    const closeRequestSentModal = () => {
        setShowRequestSentModal(false);
    };

    const handleDeptDropdownChange = (event) => {
        setSelectedDeptValue(event.target.value);
    };

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, []);

    return (
        <>
            <div className="deptWrapper">
                <div className="deptContainer">
                    <div className="start">
                        <h2>Enter Details</h2>
                        <CgClose onClick={closeModal} style={{ cursor: "pointer" }} />
                    </div>

                    <div className="deptForm">
                        <div className="deptInfo">
                            <select value={selectedDeptValue} onChange={handleDeptDropdownChange} className="deptDropdown">
                                <option value="">Department</option>
                                <option value="option1">Finance</option>
                                <option value="option2">Human resources</option>
                                <option value="option3">Marketing</option>
                            </select>
                        </div>

                        <div className="deptInfo">
                            <input
                                type="text"
                                name="employees number"
                                placeholder="Number of Employees"
                                required
                            />
                        </div>
                        <div className="deptInfo">
                            <input
                                type="text"
                                name="purpose"
                                placeholder="Purpose"
                                required
                            />
                        </div>
                        <div className="deptInfo">
                            <input
                                type="text"
                                name="validity"
                                placeholder="Validity"
                                required
                            />
                        </div>
                            <div className={`btnSubmit ${showRequestSentModal}`}>
                                <button onClick={openRequestSentModal}>Submit</button>
                                {showRequestSentModal && <RequestSentModal closeModal={closeRequestSentModal} />}
                            </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DepartmentModal