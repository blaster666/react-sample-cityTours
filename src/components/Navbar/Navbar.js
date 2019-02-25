import React from "react";
import "./Navbar.scss";
import logo from "../../logo.png";

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <img src={logo} alt="logo" />
        </li>
        <li className="navitem">
          <a href="/" className="navitem">
            Home
          </a>
        </li>
        <li className="navitem">
          <a href="/" className="navitem">
            About
          </a>
        </li>
        <li className="navitem">
          <a href="/" className="navitem">
            Tour
          </a>
        </li>
      </ul>
    </nav>
  );
}
