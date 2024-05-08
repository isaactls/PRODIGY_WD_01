import React from "react";
import "./styles/nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav-container">
      <ul className="nav-items">
        <li>
          <NavLink to="/"> Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
