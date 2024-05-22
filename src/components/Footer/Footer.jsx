import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/logo.png';
import { FaRegUser } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="logo" className="logo" />
          <p>
            I'm a frontend developer from India, a fresher seeking great
            opportunities to explore and enhance my skills.
          </p>
        </div>
        <div className="footer-top-right">
          {/* <div className="footer-email-input">
            <FaRegUser />
            <input type="email" placeholder="Enter your email" />
          </div> */}
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Aakash. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
