import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../pages/Login/login.scss";
import { Link } from "react-router-dom";
import { Modal } from "antd";

const OtpInput = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otpValues, setOtpValues] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
  });

  const handleChange = (value, event) => {
    setOtpValues({ ...otpValues, [value]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log(otpValues);
    event.preventDefault();
  };

  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 5) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="otpContainer">
        <input
          className="inputOTP"
          name="otp1"
          type="text"
          autoComplete="off"
          value={otpValues.otp1}
          onChange={(e) => handleChange("otp1", e)}
          tabIndex="1"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          className="inputOTP"
          name="otp2"
          type="text"
          autoComplete="off"
          value={otpValues.otp2}
          onChange={(e) => handleChange("otp2", e)}
          tabIndex="2"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          className="inputOTP"
          name="otp3"
          type="text"
          autoComplete="off"
          value={otpValues.otp3}
          onChange={(e) => handleChange("otp3", e)}
          tabIndex="3"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          className="inputOTP"
          name="otp4"
          type="text"
          autoComplete="off"
          value={otpValues.otp4}
          onChange={(e) => handleChange("otp4", e)}
          tabIndex="4"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
        <input
          className="inputOTP"
          name="otp5"
          type="text"
          autoComplete="off"
          value={otpValues.otp5}
          onChange={(e) => handleChange("otp5", e)}
          tabIndex="5"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
        />
      </div>

      <Button className="otpButton" type="submit" onClick={showModal}>
        Submit
      </Button>
      <Link to="/Dashboard">
      <Button className="otpButton" type="submit">
        Next
      </Button>
      </Link>
      <Modal
        title="Fill your Enteries"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >

      <h4>Set Pin</h4>
        <input
          className="inputOTP"
          style={{ width: "60%", height: "30px" }}
          type="phonenumber"
          name="Security Pin"
          // onChange={(e) => setName(e.target.value)}
          // id="name"
          placeholder="Set your Security Pin"
          required
        />

        <br />
        <h4>Enter Aadhar card Number</h4>
        <input
          className="inputOTP"
          style={{ width: "60%", height: "30px" }}
          type="text"
          name="Aadhar Card Number"
          // onChange={(e) => setName(e.target.value)}
          // id="name"
          placeholder=" Enter Aadhar number"
          required
        />

        <br />
        <h4>Enter Caste</h4>
        <input
          className="inputOTP"
          style={{ width: "60%", height: "30px" }}
          type="text"
          name="Caste"
          // onChange={(e) => setName(e.target.value)}
          // id="name"
          placeholder=" Enter you Caste"
        />
        <br />
        <h4>Enter BPL card number</h4>
        <input
          className="inputOTP"
          style={{ width: "60%", height: "30px" }}
          type="text"
          name="BPL card"
          // onChange={(e) => setName(e.target.value)}
          // id="name"
          placeholder="Enter you BPL card (*if any)"
          required
        />
        <br />
        <h4>Select Category</h4>
        <select className="selectModal" style={{width: "60%", height: "30px"}}>

          <option value="Not Emplaoyed">Not Emplaoyed</option>
          <option value="FreeLancer">FreeLancer</option>
          <option value="Part Time Job">Part Time Job</option>
          <option value="Full time job">Full time job</option>
        </select>
        <br />
        <br />
      </Modal>
    </form>
  );
};

export default OtpInput;
