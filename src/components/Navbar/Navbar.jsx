import React, { useRef, useState } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { TfiMenu } from 'react-icons/tfi';
import { IoCloseSharp } from 'react-icons/io5';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-250px';
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <TfiMenu onClick={openMenu} className="menu-open-icon" />
      <ul ref={menuRef} className="nav-menu">
        <IoCloseSharp onClick={closeMenu} className="menu-close-icon" />
        <li>
          <AnchorLink className="anchor-link" offset={-90} href="#home">
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' ? <div className="underline"></div> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={20} href="#about">
            <p onClick={() => setMenu('about')}>About Me</p>
          </AnchorLink>
          {menu === 'about' ? <div className="underline"></div> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={20} href="#services">
            <p onClick={() => setMenu('services')}>Services</p>
          </AnchorLink>
          {menu === 'services' ? <div className="underline"></div> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={20} href="#work">
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
      <AnchorLink className="anchor-link" offset={30} href="#contact">
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
