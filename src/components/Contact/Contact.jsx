import React, { useRef } from 'react';
import './Contact.css';
import { TfiEmail, TfiLocationPin } from 'react-icons/tfi';
import { IoCallOutline } from 'react-icons/io5';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Validation
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      toast.error('Please fill in all the fields.', {
        style: { backgroundColor: '#FF0000', color: 'whitesmoke' },
      });
      return;
    }

    formData.append('access_key', '694fff38-f611-4d11-bc80-74f54ec16efd');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success('Your message was sent successfully!', {
          style: { backgroundColor: '#9ef01a', color: '#fffcf2' },
        });
        console.log('Success', res);
        formRef.current.reset(); // Reset the form fields
      } else {
        toast.error('Failed to send your message. Please try again later.', {
          style: { backgroundColor: '#FF0000', color: 'whitesmoke' },
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.', {
        style: { backgroundColor: '#FF0000', color: 'whitesmoke' },
      });
    }
  };

  return (
    <div id="contact" className="contact">
      <ToastContainer />

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
              <TfiEmail className="contact-icon" />
              <p>hariaakash.405@gmail.com</p>
            </div>
            <div className="contact-detail">
              <IoCallOutline className="contact-icon" />
              <p>+91 6383017428</p>
            </div>
            <div className="contact-detail">
              <TfiLocationPin className="contact-icon" />
              <p>TN, India</p>
            </div>
          </div>
        </div>
        <form ref={formRef} onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            id="message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
