import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [clickHamburger, setClickHamburger] = useState(false);

  const handleClick = () => setClickHamburger(!clickHamburger);
  return (
    <div className="header">
      <div className="container">
        <div className="bi-heading">
          <h1 className="bi-rotation">₿I</h1>
          <p className="primary no-rotation">Coin</p>
        </div>
        <ul className={clickHamburger ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Featured</a>
          </li>
          <li>
            <a href="/">Earn</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Your Wallet</button>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {clickHamburger ? (
            <FaTimes size={20} style={{ color: "#adb5bd" }} />
          ) : (
            <FaBars size={20} style={{ color: "#adb5bd" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
