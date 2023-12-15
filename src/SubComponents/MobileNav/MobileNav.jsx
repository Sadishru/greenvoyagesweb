import React from 'react';
import './mobileNav.css';
import { NavLink } from 'react-router-dom';

const MobileNav = ({onClose}) => {
  return (
    <ul className="mobile__nav">
      <NavLink to="/" onClick={onClose}>HOME</NavLink>
      <NavLink to="/explore" onClick={onClose}>EXPLORE</NavLink>
      <NavLink to="/packages" onClick={onClose}>PACKAGES</NavLink>
      <NavLink to="/aboutus" onClick={onClose}>ABOUT US</NavLink>
      <NavLink to="/faq" onClick={onClose}>FAQ</NavLink>
      <NavLink to="/contactus" onClick={onClose}>CONTACT US</NavLink>
    </ul>
  )
}

export default MobileNav