import React from "react";
import "./styles/nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav-container">
      <ul className="nav-items">
        <li>
          <NavLink to="/PRODIGY_WD_01/landing_page/"> Home</NavLink>
        </li>
        <li>
          <NavLink to="/PRODIGY_WD_01/landing_page/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/PRODIGY_WD_01/landing_page/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/PRODIGY_WD_01/landing_page/contact">contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
