import React from "react";
import { useState, useEffect } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo1.png";
import Cookies from "js-cookie";

const Login = () => {
  const initialValues = { phoneNumber: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0) {
      navigate("/Dashboard"); // Redirect to the Dashboard page if there are no form errors
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number is required!"; // Validate if phone number is provided
    }
    if (!values.password) {
      errors.password = "Password is required"; // Validate if password is provided
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters"; // Validate minimum password length
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters"; // Validate maximum password length
    }
    return errors;
  };

  const setPhoneNumberCookie = (phoneNumber) => {
    Cookies.set("phonenumber", phoneNumber, { expires: 7 }); // Set a cookie for the phone number
  };

  const getPhoneNumberFromCookie = () => {
    const phoneNumber = Cookies.get("phonenumber"); // Retrieve the phone number from the cookie
    return phoneNumber;
  };

  return (
    <div className="login">
      <div className="loginLeft">
        <img src={Logo} alt="" />
        <h1>Welcome Back</h1>
        <p>Enter Your Details to Login to your Digi Pay account</p>
      </div>

      <div className="loginRight">
        <form onSubmit={handleSubmit}>
          <h1 className="loginHeading">Login</h1>
          <input
            className="inputBox"
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            id="name"
            placeholder="Phone Number"
            required
            value={formValues.phoneNumber}
          />
          <input
            className="inputBox"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            required
            value={formValues.password}
          />

          <button type="submit" className="loginButton">
            Login
          </button>
          <Link to="/register">
            <h3>Don't have an account? Register</h3>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

