import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <img src="/logo__75.png" className="nav__img" alt="green voyages" />
      </NavLink>
      <ul className="nav__links">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/explore">EXPLORE</NavLink>
        <NavLink to="/packages">PACKAGES</NavLink>
        <NavLink to="/aboutus">ABOUT US</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/contactus">CONTACT US</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
