import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import Logo from "../../assets/logo1.png";

const Register = () => {
  // State variables
  const [formValues, setFormValues] = useState({ name: "", phonenumber: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  // Checkbox change event handler
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // Input change event handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  // Form submit event handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0) {
      navigate("/OtpVerification"); // Redirect to OtpVerification page
    }
  };

  // Form validation function
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "name is required!";
    }
    if (!values.phonenumber) {
      errors.phonenumber = "phonenumber is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  // useEffect hook to log form errors and values when they change
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  return (
    <div className="register">
      <div className="registerLeft">
        <img src={Logo} alt="" />
        <h1>Experience hassle-free <br /> Transaction</h1>
        <p>Streamline transaction with DigiPay, a seamless <br /> digital wallet. Simplify payments and embrace the <br /> future of cashless transaction with our secure and <br /> user-friendly platform using e-Rupi</p>
      </div>

      <div className="registerRight">
        <form onSubmit={handleSubmit}>
          <div className="registerContainer">
            <h1 className="welcomeHeading">Register</h1>
            <input
              className="inputBox"
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formValues.name}
              onChange={handleChange}
            />
            <input
              className="inputBox"
              type="text"
              name="phonenumber"
              placeholder="Phone Number"
              required
              value={formValues.phonenumber}
              onChange={handleChange}
            />
            <input
              className="inputBox"
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formValues.password}
              onChange={handleChange}
            />
            <div className="labelCheck">
              <input
                className="checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label>
                I accept the Terms and Conditions
              </label>
            </div>

            <Link to="/otpverification">
              <button className="registerButton" style={{ marginLeft: '60px' }}>Register</button>
            </Link>
            <Link to="/login">
              <h3>Already have an account? Login</h3>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
