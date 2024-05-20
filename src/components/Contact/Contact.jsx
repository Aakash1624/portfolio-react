import React from 'react';
import './Contact.css';
import { TfiEmail, TfiLocationPin } from 'react-icons/tfi';
import { IoCallOutline } from 'react-icons/io5';

const Contact = () => {
  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <div className="underline"></div>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects, So feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <TfiEmail />
              <p>hariaakash.405@gmail.com</p>
            </div>
            <div className="contact-detail">
              <IoCallOutline />
              <p>+91 6383017428</p>
            </div>
            <div className="contact-detail">
              <TfiLocationPin />
              <p>TN, India</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
