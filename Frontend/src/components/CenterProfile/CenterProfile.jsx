import React, { useState ,useEffect} from 'react';
import "./centerProfile.scss";
import Logo from "../../assets/logo1.png";
import { AiTwotoneBank  } from "react-icons/ai";
import { CgClose } from 'react-icons/cg';
import { RiUserSharedFill } from "react-icons/ri";
import { Button, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
// import AmountModal from '../../modals/amountModal/AmountModal';


const CenterProfile = ({ closeModal }) => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    
    const handleOk = () => {
        setIsModalOpen(false);
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    
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
        };
    }, []);

    const handleSubmit = () => {
        closeModal();
        navigate('/dashboard');
    };

    return (
        <div className="start1">
            <img src={Logo} alt="" className="CABpic" />
            <div className="currentBalance">
                <h4 style={{ fontSize: "12px", color: "#573b87" }}>Shweta Mehta</h4>
                <h2 style={{ fontSize: "16px", marginTop: "6px", color: "#3f4040" }}>+ 91-1234567890</h2>
            </div>
            <div className="wallet">
                <button onClick={showModal} style={{ fontSize: "12px", color: "#573b87", textAlign: "center", cursor: "pointer" }}>Request Vouchers
                    <br />
                    <RiUserSharedFill style={{ marginTop: "6px", cursor: "pointer" }} />
                </button>
                <Modal title="Request Voucher" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <div className="deptWrapper">
                        <div className="deptContainer">
                            <div className="start">
                                <h2>Enter Details</h2>
                                <CgClose onClick={closeModal} style={{ cursor: "pointer" }} />
                            </div>

                            <div className="deptForm">
                                <div className="deptInfo">
                                    <select value={selectedDeptValue} onChange={handleDeptDropdownChange} className="deptDropdown">
                                        <option value="">Mode of Emplaoyement</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>

                                <div className="deptInfo">
                                    <input
                                        type="text"
                                        name="Phone number"
                                        placeholder="Phone number"
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
                                    <button onClick={handleSubmit}>Submit</button>
                                    {showRequestSentModal && <RequestSentModal closeModal={closeRequestSentModal} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
            <div className="addToBank">
                <button style={{ fontSize: "12px", color: "#573b87", cursor: "pointer" }}>Extend expiry
                    <br />
                    <AiTwotoneBank style={{ marginTop: "6px", cursor: "pointer" }} />
                </button>
            </div>
        </div>
    );
};

export default CenterProfile;
