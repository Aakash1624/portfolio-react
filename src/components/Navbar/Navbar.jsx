import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" offset={30} href="#home">
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' ? <div className="underline"></div> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={30} href="#about">
            <p onClick={() => setMenu('about')}>About Me</p>
          </AnchorLink>
          {menu === 'about' ? <div className="underline"></div> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={30} href="#services">
            <p onClick={() => setMenu('services')}>Services</p>
          </AnchorLink>
          {menu === 'services' ? <div className="underline"></div> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={30} href="#work">
            <p onClick={() => setMenu('work')}>Portfolio</p>
          </AnchorLink>
          {menu === 'work' ? <div className="underline"></div> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={30} href="#contact">
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>
          {menu === 'contact' ? <div className="underline"></div> : <></>}
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
