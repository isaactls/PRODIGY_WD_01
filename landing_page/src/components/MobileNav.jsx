import React, { useState } from "react";
import "./styles/mobilenav.css";
import { NavLink } from "react-router-dom";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
<nav className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu} >
          <span></span>
          <span></span>
          <span></span>
          {isOpen && (
              <ul className="nav-items-wrapper">
              <li>
                <NavLink className="nav-item" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-item" to="/About">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-item" to="/service">
                  service
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-item" to="/contact">
                  contact
                </NavLink>
              </li>
            </ul>
          )}
        </nav>
    </>
  );
}

export default MobileNav;
