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
                <NavLink className="nav-item" to="/">
                  <li>
                    Home
                  </li>
                </NavLink>
                <NavLink className="nav-item" to="/">
                  <li>
                    about
                  </li>
                </NavLink>
                <NavLink className="nav-item" to="/">
                  <li>
                    service
                  </li>
                </NavLink>
                <NavLink className="nav-item" to="/">
                  <li>
                    contact
                  </li>
                </NavLink>

            </ul>
          )}
        </nav>
    </>
  );
}

export default MobileNav;
