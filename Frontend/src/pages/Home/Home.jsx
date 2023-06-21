import React from 'react'
import "./home.scss";
import BannerImg from "../../assets/s2.png";
import { HiArrowSmRight } from "react-icons/hi";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter
} from "react-icons/fa";
import FooterImage from "../../assets/c1.jpg"
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Navbar /> {/* Including the Navbar component */}
            <div className="banner"> {/* Banner section */}
                <div className="content">
                    <div className="text-content">
                        <h4>Digi Pay</h4> {/* Subheading */}
                        <h1>Experience <br /> hassle-free Transaction</h1> {/* Heading */}
                        <p>Experience simple, secure, and stress-free Transaction. Say goodbye to long queues and complex procedures and hello to hassle-free payments with Digi Pay</p> {/* Description */}
                        <Link to="/register">
                            <button className="cta">Register</button> {/* CTA button */}
                        </Link>
                    </div>
                    <img src={BannerImg} alt="" className="bannerImg" /> {/* Banner image */}
                </div>
            </div>

            <div className="faq"> {/* FAQ section */}
                <div className="quesLeft">
                    <h1>FAQ's</h1> {/* FAQ heading */}
                    <h2>How do I sign up for an account with <br />Digi Pay?</h2> {/* FAQ question */}
                    <p>You can sign up for an account with Digi Pay online by visiting our website and <br /> and filling out the online application form</p> {/* FAQ answer */}
                </div>
                <div className="quesRight">
                    <h3>What types of account does Digi Pay offer? <HiArrowSmRight /></h3> {/* FAQ question with arrow icon */}
                    <h3>Is Digi Pay FDIC insured <HiArrowSmRight className="arrowIcon" /></h3> {/* FAQ question with arrow icon */}
                    <h3>How can I access my Digi Pay account online? <HiArrowSmRight className="arrowIcon" /></h3> {/* FAQ question with arrow icon */}
                    <h3>What security measures does Digi Pay have in  <br /> in place to protectmy financial information <HiArrowSmRight className="arrowIcon" /></h3> {/* FAQ question with arrow icon */}
                </div>
            </div>

            <div className="services">
                <h1>Supported by various finance <br /> services</h1> {/* Heading */}
            </div>

            <div className="footer"> {/* Footer section */}
                <div className="footerLeft"> {/* Footer left section */}
                    <div className="new1">
                        <h2>HELP</h2> {/* Footer left heading */}
                        <p>Help Center</p> {/* Footer left item */}
                        <p>Contact Us</p> {/* Footer left item */}
                        <p>How to Use</p> {/* Footer left item */}
                    </div>

                    <div className="new2">
                        <h2>About</h2> {/* Footer left heading */}
                        <p>About Digi Pay</p> {/* Footer left item */}
                        <p>Terms and Conditions</p> {/* Footer left item */}
                        <p>Privacy Policy</p> {/* Footer left item */}
                    </div>

                </div>

                <div className="footerRight"> {/* Footer right section */}
                    <img src={FooterImage} alt="" /> {/* Footer image */}
                </div>
            </div>
        </>
    )
}

export default Home;
