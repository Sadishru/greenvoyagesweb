import React,{useState} from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import MobileNav from "../../SubComponents/MobileNav/MobileNav";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav>
      <NavLink to="/">
        <img src="/logo__75.png" className="nav__img" alt="green voyages" />
      </NavLink>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="nav__menu">
        <img src={'/nav_menu.png'} alt={isMenuOpen ? "Close menu" : "Menu"} />
      </button>
      {isMenuOpen && <MobileNav onClose={closeMenu} />}
      <ul className="nav__links">
        <NavLink to="/" >HOME</NavLink>
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
