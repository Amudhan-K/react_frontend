// NavBar.js

import React from "react";
import logo from "./image/logo.png"; // Replace with your logo path
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" width="50" height="50" />
      </div>
      <div className="navbar-text">
        SimtestLab
        <div className="navbar1-text">FLOW WITH YOUR IDEA</div>
      </div>
    </nav>
  );
};

export default NavBar;
